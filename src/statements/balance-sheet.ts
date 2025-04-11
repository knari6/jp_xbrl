import { BaseStatement } from "./base";

export class BalanceSheet extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  /** 現金預金 */
  public get cashAndDeposit(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CashAndDeposits",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 売掛金 */
  public get accountReceivable(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccountsReceivableTrade",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 前払費用 */
  public get prepaidExpenses(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:PrepaidExpenses",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** その他流動資産 */
  public get otherCurrentAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherCA",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 流動資産合計 */
  public get totalCurrentAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CurrentAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 建物(純額) */
  public get buildingsNet(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:BuildingsNet",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 工具、器具及び備品(純額) */
  public get toolsAndEquipment(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ToolsFurnitureAndFixturesNet",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 土地 */
  public get land(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:Land",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 建物仮勘定 */
  public get constructionInProgress(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ConstructionInProgress",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 有形固定資産合計 */
  public get totalTangibleFixedAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:PropertyPlantAndEquipment",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** ソフトウェア */
  public get software(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:Software",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 無形固定資産合計 */
  public get intangibleAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:IntangibleAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 投資有価証券 */
  public get investmentSecurities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:InvestmentSecurities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 関係会社株式 */
  public get subsidiariesAndAffiliates(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:StocksOfSubsidiariesAndAffiliates",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 出資金 */
  public get investmentsInCapital(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:InvestmentsInCapital",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 繰延税金資産 */
  public get deferredTaxAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:DeferredTaxAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** その他固定資産 */
  public get otherIOA(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherIOA",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 貸倒引当金 */
  public get allowanceForDoubtfulIOAByGroup(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AllowanceForDoubtfulAccountsIOAByGroup",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 投資その他の資産合計 */
  public get totalInvestmentAndOtherAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:InvestmentsAndOtherAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 固定資産 */
  public get nonCurrentAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NoncurrentAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 資産合計 */
  public get liabilitiesAndNetAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:TotalAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 買掛金 */
  public get accountPayable(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccountsPayableTrade",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 未払金 */
  public get accountPayableOther(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AccountsPayableOther",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 未払法人税 */
  public get incomeTaxPayable(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:IncomeTaxesPayable",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 契約負債 */
  public get contractLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ContractLiabilities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 預り金 */
  public get depositsReceived(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:DepositsReceived",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** その他流動負債 */
  public get otherCurrentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherCL",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 流動負債合計 */
  public get totalCurrentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CurrentLiabilities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** その他固定負債 */
  public get otherNonCurrentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherNCL",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 固定負債合計 */
  public get totalNonCurrentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NoncurrentLiabilities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 負債合計 */
  public get liabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:Liabilities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 資本金 */
  public get capitalStock(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CapitalStock",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 資本準備金 */
  public get capitalSurplus(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:LegalCapitalSurplus",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 資本剰余金合計 */
  public get totalCapitalSurplus(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CapitalSurplus",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 繰越利益剰余金 */
  public get retainedEarningsBroughtForward(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:RetainedEarningsBroughtForward",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 利益剰余金合計 */
  public get totalRetainedEarnings(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:RetainedEarnings",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 自己株式 */
  public get treasuryStock(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:TreasuryStock",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 株主資本合計 */
  public get shareholdersEquity(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ShareholdersEquity",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** その他有価証券評価差額金 */
  public get valuationDifference(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ValuationDifferenceOnAvailableForSaleSecurities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 評価・換算差額等合計 */
  public get valuationAndTranslationAdjustments(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ValuationAndTranslationAdjustments",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 純資産合計 */
  public get netAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NetAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
  /** 負債純資産合計 */
  public get totalLiabilitiesAndNetAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:TotalLiabilitiesAndNetAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }
}
