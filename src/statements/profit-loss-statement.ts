import { IProfitLossStatement } from "../interfaces/profit-loss";
import { BaseStatement } from "./base";

export class ProfitLossStatement extends BaseStatement {
  constructor(xmlData: any) {
    super(xmlData);
  }

  /** 売上 */
  public get sales(): number | null {
    return this.extractNumber(
      "jppfs_cor:NetSales",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 売上総利益 */
  public get grossProfit(): number | null {
    return this.extractNumber(
      "jppfs_cor:GrossProfit",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 営業利益 */
  public get operatingIncome(): number | null {
    return this.extractNumber(
      "jppfs_cor:OperatingIncome",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 経常利益 */
  public get ordinaryIncome(): number | null {
    return this.extractNumber(
      "jppfs_cor:OrdinaryIncome",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 税引き前当期純利益 */
  public get incomeBeforeIncomeTaxes(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeBeforeIncomeTaxes",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 当期純利益 */
  public get profitLoss(): number | null {
    return this.extractNumber(
      "jppfs_cor:ProfitLoss",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 売上原価 */
  public get costOfSales(): number | null {
    return this.extractNumber(
      "jppfs_cor:CostOfSales",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 販売費及び一般管理費 */
  public get sellingGeneralAndAdministrativeExpenses(): number | null {
    return this.extractNumber(
      "jppfs_cor:SellingGeneralAndAdministrativeExpenses",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 受取利息 */
  public get interestIncomeNOI(): number | null {
    return this.extractNumber(
      "jppfs_cor:InterestIncomeNOI",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 受取配当金 */
  public get dividendsIncomeNOI(): number | null {
    return this.extractNumber(
      "jppfs_cor:DividendsIncomeNOI",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 受取損害賠償金 */
  public get receiptDamagesNOI(): number | null {
    return this.extractNumber(
      "jppfs_cor:ReceiptDamagesNOI",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 還付加算金 */
  public get interestOnRefundNOI(): number | null {
    return this.extractNumber(
      "jppfs_cor:InterestOnRefundNOI",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** その他営業外収益 */
  public get otherNOI(): number | null {
    return this.extractNumber(
      "jppfs_cor:OtherNOI",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 営業外収益合計 */
  public get nonOperatingIncome(): number | null {
    return this.extractNumber(
      "jppfs_cor:NonOperatingIncome",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 投資事業組合運用損*/
  public get lossOnInvestmentsInPartnershipNOE(): number | null {
    return this.extractNumber(
      "jppfs_cor:LossOnInvestmentsInPartnershipNOE",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** その他営業外費用 */
  public get otherNOE(): number | null {
    return this.extractNumber(
      "jppfs_cor:OtherNOE",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 営業外費用合計 */
  public get nonOperatingExpenses(): number | null {
    return this.extractNumber(
      "jppfs_cor:NonOperatingExpenses",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 経常収益(銀行) */
  public get ordinaryIncomeBank(): number | null {
    return this.extractNumber(
      "jppfs_cor:OrdinaryIncomeBank",
      this.constants.context.CurrentYearDuration
    );
  }

  /** 経常費用(銀行) */
  public get ordinaryExpensesBNK(): number | null {
    return this.extractNumber(
      "jppfs_cor:OrdinaryExpensesBNK",
      this.constants.context.CurrentYearDuration
    );
  }

  /** 投資有価証券売却益 */
  public get gainOnSalesOfInvestmentSecuritiesEI(): number | null {
    return this.extractNumber(
      "jppfs_cor:GainOnSalesOfInvestmentSecuritiesEI",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 特別利益合計 */
  public get extraordinaryIncome(): number | null {
    return this.extractNumber(
      "jppfs_cor:ExtraordinaryIncome",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 投資有価証券評価損 */
  public get lossOnValuationOfInvestmentSecuritiesEL(): number | null {
    return this.extractNumber(
      "jppfs_cor:LossOnValuationOfInvestmentSecuritiesEL",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 特別損失合計 */
  public get extraordinaryLoss(): number | null {
    return this.extractNumber(
      "jppfs_cor:ExtraordinaryLoss",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  /** 法人税等、住民税及び事業税 */
  public get incomeTaxesCurrent(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeTaxesCurrent",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 法人税等調整額 */
  public get incomeTaxAdjustment(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeTaxesDeferred",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }
  /** 法人税等合計 */
  public get incomeTaxes(): number | null {
    return this.extractNumber(
      "jppfs_cor:IncomeTaxes",
      this.constants.context.CurrentYearDuration_NonConsolidatedMember
    );
  }

  public statement(): IProfitLossStatement {
    return {
      revenue: this.sales ?? 0,
      grossProfit: this.grossProfit ?? 0,
      operatingIncome: this.operatingIncome ?? 0,
      ordinaryIncome: this.ordinaryIncome ?? 0,
      incomeBeforeIncomeTaxes: this.incomeBeforeIncomeTaxes ?? 0,
      netIncome: this.profitLoss ?? 0,
    };
  }
}
