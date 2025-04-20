export interface IProfitLossStatement {
  /** 売上高 */
  revenue: number;
  /** 売上総利益 */
  grossProfit: number;
  /** 営業利益 */
  operatingIncome: number;
  /** 経常利益 */
  ordinaryIncome: number;
  /** 税引前当期純利益 */
  incomeBeforeIncomeTaxes: number;
  /** 当期純利益 */
  netIncome: number;
}
