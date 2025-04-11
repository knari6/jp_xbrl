import { BaseStatement } from "./base";

export class Information extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  public get sale(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetSalesSummaryOfBusinessResults",
        this.constants.context.NetSalesSummaryOfBusinessResults
      ) ?? null
    );
  }

  public get salePrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetSalesSummaryOfBusinessResults",
        this.constants.context.Prior1YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get salePrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetSalesSummaryOfBusinessResults",
        this.constants.context.Prior2YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get salePrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetSalesSummaryOfBusinessResults",
        this.constants.context.Prior3YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get salePrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetSalesSummaryOfBusinessResults",
        this.constants.context.Prior4YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get ordinaryIncome(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get ordinaryIncomePrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior1YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get ordinaryIncomePrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior2YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get ordinaryIncomePrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior3YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get ordinaryIncomePrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:OrdinaryIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior4YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get profit(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get profitPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior1YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get profitPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior2YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get profitPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior3YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get profitPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
        this.constants.context.Prior4YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get capitalStock(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:CapitalStockSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 発行済み株式数 */
  public get stockAmount(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get stockAmountPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get stockAmountPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
        this.constants.context.Prior2YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get stockAmountPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
        this.constants.context.Prior3YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get stockAmountPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalNumberOfIssuedSharesSummaryOfBusinessResults",
        this.constants.context.Prior4YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 純資産 */
  public get netAssets(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get netAssetsPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get netAssetsPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.Prior2YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get netAssetsPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.Prior3YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get netAssetsPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.Prior4YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 総資産 */
  public get totalAssets(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get totalAssetsPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get totalAssetsPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
        this.constants.context.Prior2YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get totalAssetsPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
        this.constants.context.Prior3YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  public get totalAssetsPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
        this.constants.context.Prior4YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 営業活動によるキャッシュ・フロー */
  public get operatingActivity(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get operatingActivityPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior1YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get operatingActivityPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior2YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get operatingActivityPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior3YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get operatingActivityPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior4YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get investmentActivity(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInInvestingActivitiesSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 投資活動によるキャッシュ・フロー */
  public get investmentActivityPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInInvestingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior1YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get investmentActivityPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInInvestingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior2YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get investmentActivityPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInInvestingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior3YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }
  public get investmentActivityPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInInvestingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior4YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 財務活動によるキャッシュ・フロー */
  public get financialActivity(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInFinancingActivitiesSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get financialActivityPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInFinancingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior1YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get financialActivityPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInFinancingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior2YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get financialActivityPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInFinancingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior3YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  public get financialActivityPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInFinancingActivitiesSummaryOfBusinessResults",
        this.constants.context.Prior4YearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 従業員数 */
  public get numberOfEmployees(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NumberOfEmployees",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get numberOfEmployeesPrior1Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NumberOfEmployees",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get numberOfEmployeesPrior2Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NumberOfEmployees",
        this.constants.context.Prior2YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get numberOfEmployeesPrior3Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NumberOfEmployees",
        this.constants.context.Prior3YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  public get numberOfEmployeesPrior4Year(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NumberOfEmployees",
        this.constants.context.Prior4YearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 従業員の平均年齢 */
  public get averageAge(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:AverageAgeYearsInformationAboutReportingCompanyInformationAboutEmployees",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 従業員の平均勤続年数 */
  public get averageYearsOfService(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:AverageLengthOfServiceYearsInformationAboutReportingCompanyInformationAboutEmployees",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 従業員の平均給与 */
  public get averageSalary(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:AverageAnnualSalaryInformationAboutReportingCompanyInformationAboutEmployees",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
}
