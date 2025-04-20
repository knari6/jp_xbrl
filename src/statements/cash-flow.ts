import { ICashFlowStatement } from "../interfaces/cash-flow";
import { BaseStatement } from "./base";

export class cashFlow extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  /** 営業活動によるキャッシュ・フロー */
  public get operatingCashFlow(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NetCashProvidedByUsedInOperatingActivities",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:NetCashProvidedByUsedInOperatingActivitiesIFRS",
        this.constants.context.CurrentYearDuration
      ) ||
      null
    );
  }

  /** 投資活動によるキャッシュ・フロー */
  public get investingCashFlow(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NetCashProvidedByUsedInInvestmentActivities",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:NetCashProvidedByUsedInInvestingActivitiesIFRS",
        this.constants.context.CurrentYearDuration
      ) ||
      null
    );
  }

  /** 財務活動によるキャッシュ・フロー */
  public get financingCashFlowAmount(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NetCashProvidedByUsedInFinancingActivities",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:NetCashProvidedByUsedInFinancingActivitiesIFRS",
        this.constants.context.CurrentYearDuration
      ) ||
      null
    );
  }

  /** 税引前当期純利益 */
  public get incomeBeforeIncomeTaxes(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeBeforeIncomeTaxes",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 減価償却費 */
  public get depreciation(): number | null {
    return this.extractNumber(
      "jppfs_cor:DepreciationSGA",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 投資有価証券評価損益（△は益） */
  public get investmentSecuritiesGains(): number | null {
    return this.extractNumber(
      "jppfs_cor:LossGainOnValuationOfInvestmentSecuritiesOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 投資有価証券売却損益（△は益） */
  public get investmentSecuritiesSales(): number | null {
    return this.extractNumber(
      "jppfs_cor:LossGainOnSalesOfInvestmentSecuritiesOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 貸倒引当金の増減額（△は減少） */
  public get allowanceForDoubtfulAccounts(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncreaseDecreaseInAllowanceForDoubtfulAccountsOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 受取利息及び受取配当金 */
  public get interestAndDividendsReceived(): number | null {
    return this.extractNumber(
      "jppfs_cor:InterestAndDividendsIncomeReceivedOpeCFInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 売上債権の増減額（△は増加） */
  public get accountsReceivable(): number | null {
    return this.extractNumber(
      "jppfs_cor:DecreaseIncreaseInNotesAndAccountsReceivableTradeOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 仕入債務の増減額（△は減少） */
  public get accountsPayable(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncreaseDecreaseInNotesAndAccountsPayableTradeOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 未払金の増減額（△は減少） */
  public get accountsPayableOther(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncreaseDecreaseInAccountsPayableOtherOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 未払又は未収消費税等の増減額 */
  public get accountsPayableConsumptionTax(): number | null {
    return this.extractNumber(
      "jppfs_cor:DecreaseIncreaseInConsumptionTaxesReceivablePayableOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** その他営業活動によるキャッシュ・フロー */
  public get other(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherNetOpeCF",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) || null
    );
  }
  /** 小計 */
  public get subtotal(): number | null {
    return this.extractNumber(
      "jppfs_cor:SubtotalOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 利息及び配当金の受取額 */
  public get interestAndDividendsReceivedAmount(): number | null {
    return this.extractNumber(
      "jppfs_cor:InterestAndDividendsIncomeOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 法人税等の支払額 */
  public get incomeTaxPaid(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeTaxesPaidOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 法人税等の還付額 */
  public get incomeTaxRefund(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeTaxesRefundOpeCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 有形固定資産の取得による支出 */
  public get tangibleAssetsAcquisition(): number | null {
    return this.extractNumber(
      "jppfs_cor:PurchaseOfPropertyPlantAndEquipmentInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 無形固定資産の取得による支出 */
  public get intangibleAssetsAcquisition(): number | null {
    return this.extractNumber(
      "jppfs_cor:PurchaseOfIntangibleAssetsInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 投資有価証券の取得による支出 */
  public get investmentSecuritiesAcquisition(): number | null {
    return this.extractNumber(
      "jppfs_cor:PurchaseOfInvestmentSecuritiesInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 投資有価証券の売却による収入 */
  public get investmentSecuritiesSalesIncome(): number | null {
    return this.extractNumber(
      "jppfs_cor:ProceedsFromSalesOfInvestmentSecuritiesInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 関係会社株式の取得による支出 */
  public get equityInvestmentAcquisition(): number | null {
    return this.extractNumber(
      "jppfs_cor:PurchaseOfStocksOfSubsidiariesAndAffiliatesInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 敷金及び保証金の差入による支出 */
  public get depositsAndGuarantees(): number | null {
    return this.extractNumber(
      "jppfs_cor:PaymentsForLeaseAndGuaranteeDepositsInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 敷金及び保証金の回収による収入 */
  public get depositsAndGuaranteesRecovery(): number | null {
    return this.extractNumber(
      "jppfs_cor:ProceedsFromCollectionOfLeaseAndGuaranteeDepositsInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** その他投資活動によるキャッシュ・フロー */
  public get otherInvestment(): number | null {
    return this.extractNumber(
      "jppfs_cor:OtherNetInvCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 自己株式の取得による支出 */
  public get treasuryStockAcquisition(): number | null {
    return this.extractNumber(
      "jppfs_cor:PurchaseOfTreasuryStockFinCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 自己株式の処分による収入 */
  public get treasuryStockSales(): number | null {
    return this.extractNumber(
      "jppfs_cor:ProceedsFromDisposalOfTreasuryStockFinCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 配当金の支払額 */
  public get dividendsPaid(): number | null {
    return this.extractNumber(
      "jppfs_cor:CashDividendsPaidFinCF",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 現金及び現金同等物の増減額（△は減少） */
  public get cashAndCashEquivalents(): number | null {
    return this.extractNumber(
      "jppfs_cor:NetIncreaseDecreaseInCashAndCashEquivalents",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 現金及び現金同等物の期首残高 */
  public get cashAndCashEquivalentsBeginning(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CashAndCashEquivalents",
        this.constants.context.Prior1YearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:CashAndCashEquivalentsIFRS",
        this.constants.context.Prior1YearInstant
      ) ||
      null
    );
  }

  /** 現金及び現金同等物の期末残高 */
  public get cashAndCashEquivalentsEnding(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CashAndCashEquivalents",
        this.constants.context.CurrentYearDuration_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:CashAndCashEquivalentsIFRS",
        this.constants.context.CurrentYearDuration
      ) ||
      null
    );
  }

  public cashFlowStatement(): ICashFlowStatement {
    return {
      operatingCashFlow: this.operatingCashFlow || 0,
      investingCashFlow: this.investingCashFlow || 0,
      financingCashFlowAmount: this.financingCashFlowAmount || 0,
    };
  }
}
