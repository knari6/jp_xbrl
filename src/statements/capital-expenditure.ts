import { BaseStatement } from "./base";

export class CapitalExpenditure extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  public get captitalInvestment(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:CapitalExpendituresOverviewOfCapitalExpendituresEtc",
        this.constants.context.CurrentYearDuration
      ) ?? null
    );
  }

  /**
   * 土地の減価償却累計額
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
   * 建物の減価償却累計額（前期）
   */
  public get buildingDepreciationPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccumulatedDepreciationBuildings",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
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

  /**
   * 工具、器具及び備品の減価償却累計額（前期）
   */
  public get toolsDepreciationPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccumulatedDepreciationToolsFurnitureAndFixtures",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
}
