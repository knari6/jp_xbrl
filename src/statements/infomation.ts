import { BaseStatement } from "./base";

export class Information extends BaseStatement {
  constructor(xmlData: any, dirname: string) {
    super(xmlData, dirname);
  }

  public get sale(): number {
    return this.extractNumber(
      "jpcrp_cor:NetSalesSummaryOfBusinessResults",
      this.constants.context.NetSalesSummaryOfBusinessResults
    );
  }

  public get salePrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetSalesSummaryOfBusinessResults",
      this.constants.context.Prior1YearDuration_NonConsolidatedMember
    );
  }

  public get salePrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetSalesSummaryOfBusinessResults",
      this.constants.context.Prior2YearDuration_NonConsolidatedMember
    );
  }
  public get salePrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetSalesSummaryOfBusinessResults",
      this.constants.context.Prior3YearDuration_NonConsolidatedMember
    );
  }
  public get salePrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetSalesSummaryOfBusinessResults",
      this.constants.context.Prior4YearDuration_NonConsolidatedMember
    );
  }

  public get ordinaryIncome(): number {
    return this.extractNumber(
      "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  public get ordinaryIncomePrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior1YearDuration_NonConsolidatedMember
    );
  }
  public get ordinaryIncomePrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior2YearDuration_NonConsolidatedMember
    );
  }
  public get ordinaryIncomePrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior3YearDuration_NonConsolidatedMember
    );
  }
  public get ordinaryIncomePrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior4YearDuration_NonConsolidatedMember
    );
  }

  public get profit(): number {
    return this.extractNumber(
      "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  public get profitPrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior1YearDuration_NonConsolidatedMember
    );
  }
  public get profitPrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior2YearDuration_NonConsolidatedMember
    );
  }
  public get profitPrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior3YearDuration_NonConsolidatedMember
    );
  }
  public get profitPrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
      this.constants.context.Prior4YearDuration_NonConsolidatedMember
    );
  }

  public get capitalStock(): number {
    return this.extractNumber(
      "jpcrp_cor:CapitalStockSummaryOfBusinessResults",
      this.constants.context.CurrentYearInstant_NonConsolidatedMember
    );
  }

  /** 発行済み株式数 */
  public get stockAmount(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
      this.constants.context.CurrentYearInstant_NonConsolidatedMember
    );
  }

  public get stockAmountPrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
      this.constants.context.Prior1YearInstant_NonConsolidatedMember
    );
  }
  public get stockAmountPrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
      this.constants.context.Prior2YearInstant_NonConsolidatedMember
    );
  }
  public get stockAmountPrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
      this.constants.context.Prior3YearInstant_NonConsolidatedMember
    );
  }
  public get stockAmountPrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
      this.constants.context.Prior4YearInstant_NonConsolidatedMember
    );
  }

  /** 純資産 */
  public get netAssets(): number {
    return this.extractNumber(
      "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
      this.constants.context.CurrentYearInstant_NonConsolidatedMember
    );
  }

  public get netAssetsPrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
      this.constants.context.Prior1YearInstant_NonConsolidatedMember
    );
  }

  public get netAssetsPrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
      this.constants.context.Prior2YearInstant_NonConsolidatedMember
    );
  }

  public get netAssetsPrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
      this.constants.context.Prior3YearInstant_NonConsolidatedMember
    );
  }

  public get netAssetsPrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
      this.constants.context.Prior4YearInstant_NonConsolidatedMember
    );
  }

  /** 総資産 */
  public get totalAssets(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
      this.constants.context.CurrentYearInstant_NonConsolidatedMember
    );
  }

  public get totalAssetsPrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
      this.constants.context.Prior1YearInstant_NonConsolidatedMember
    );
  }

  public get totalAssetsPrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
      this.constants.context.Prior2YearInstant_NonConsolidatedMember
    );
  }

  public get totalAssetsPrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
      this.constants.context.Prior3YearInstant_NonConsolidatedMember
    );
  }

  public get totalAssetsPrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
      this.constants.context.Prior4YearInstant_NonConsolidatedMember
    );
  }

  /** 営業活動によるキャッシュ・フロー */
  public get operatingActivity(): number {
    return this.extractNumber(
      "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  public get operatingActivityPrior1Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
      this.constants.context.Prior1YearDuration_NonConsolidatedMember
    );
  }

  public get operatingActivityPrior2Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
      this.constants.context.Prior2YearDuration_NonConsolidatedMember
    );
  }

  public get operatingActivityPrior3Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
      this.constants.context.Prior3YearDuration_NonConsolidatedMember
    );
  }

  public get operatingActivityPrior4Year(): number {
    return this.extractNumber(
      "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
      this.constants.context.Prior4YearDuration_NonConsolidatedMember
    );
  }

  public get investmentActivity(): number {
    return this.extractNumber(
      "jpcrp_cor:NetCashProvidedByUsedInInvestingActivitiesSummaryOfBusinessResults",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
}
