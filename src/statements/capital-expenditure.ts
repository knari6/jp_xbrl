import { ICapitalExpenditureStatement } from "../interfaces/capital-expenditure";
import { BaseStatement } from "./base";

export class CapitalExpenditure extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  /** 設備投資額 */
  public get captitalInvestment(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:CapitalExpendituresOverviewOfCapitalExpendituresEtc",
        this.constants.context.CurrentYearDuration
      ) ?? null
    );
  }

  /**
   * 建物の減価償却累計額
   */
  public get buildingDepreciation(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccumulatedDepreciationBuildings",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /**
   * 工具、器具及び備品の減価償却累計額
   */
  public get toolsDepreciation(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccumulatedDepreciationToolsFurnitureAndFixtures",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public capitalExpenditureStatement(): ICapitalExpenditureStatement {
    let depreciation: number = 0;
    if (this.toolsDepreciation) {
      depreciation += this.toolsDepreciation;
    }
    if (this.buildingDepreciation) {
      depreciation += this.buildingDepreciation;
    }
    return {
      capitalExpenditure: this.captitalInvestment ?? 0,
      depreciation,
    };
  }
}
