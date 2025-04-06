import { BaseStatement } from "./base";

export class CapitalExpenditure extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  public get captitalInvestment(): string {
    return this.extractValue(
      "jpcrp_cor:CapitalExpendituresOverviewOfCapitalExpendituresEtc",
      this.constants.context.CurrentYearDuration
    );
  }

  /**
   * 土地の減価償却累計額
   */
  public get buildingDepreciation(): number {
    return this.extractNumber(
      "jppfs_cor:AccumulatedDepreciationBuildings",
      this.constants.context.CurrentYearInstant_NonConsolidatedMember
    );
  }

  /**
   * 建物の減価償却累計額（前期）
   */
  public get buildingDepreciationPrior1Year(): number {
    return this.extractNumber(
      "jppfs_cor:AccumulatedDepreciationBuildings",
      this.constants.context.Prior1YearInstant_NonConsolidatedMember
    );
  }

  /**
   * 工具、器具及び備品の減価償却累計額
   */
  public get toolsDepreciation(): number {
    return this.extractNumber(
      "jppfs_cor:AccumulatedDepreciationToolsFurnitureAndFixtures",
      this.constants.context.CurrentYearInstant_NonConsolidatedMember
    );
  }

  /**
   * 工具、器具及び備品の減価償却累計額（前期）
   */
  public get toolsDepreciationPrior1Year(): number {
    return this.extractNumber(
      "jppfs_cor:AccumulatedDepreciationToolsFurnitureAndFixtures",
      this.constants.context.Prior1YearInstant_NonConsolidatedMember
    );
  }
}
