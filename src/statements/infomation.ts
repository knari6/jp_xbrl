import { BaseStatement } from "./base";

export class Information extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  public get sale(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetSalesSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 連結経常収益 */
  public get ordinaryIncomeSummaryOfBusinessResults(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:OrdinaryIncomeSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration
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

  public get profit(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetIncomeLossSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 親会社株主に帰属する当期純利益 */
  public get profitLossAttributableToOwnersOfParentSummaryOfBusinessResults():
    | number
    | null {
    return (
      this.extractNumber(
        "jpcrp_cor:ProfitLossAttributableToOwnersOfParentSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration
      ) ?? null
    );
  }

  /** 連結包括利益 */
  public get comprehensiveIncomeSummaryOfBusinessResults(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:ComprehensiveIncomeSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration
      ) ?? null
    );
  }

  /** 連結純資産額 */
  public get netAssetsSummaryOfBusinessResults(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  /** 連結総資産額 */
  public get totalAssetsSummaryOfBusinessResults(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:TotalAssetsSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  /** 資本金 */
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

  /** 純資産 */
  public get netAssets(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetAssetsSummaryOfBusinessResults",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
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

  /** 営業活動によるキャッシュ・フロー */
  public get operatingActivity(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInOperatingActivitiesSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
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

  /** 財務活動によるキャッシュ・フロー */
  public get financialActivity(): number | null {
    return (
      this.extractNumber(
        "jpcrp_cor:NetCashProvidedByUsedInFinancingActivitiesSummaryOfBusinessResults",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
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
