export interface IBalanceSheetStatement {
  /** 現金及び預金 */
  cashAndDeposits: number;
  /** 売上債権 */
  accountsReceivable: number;
  /** 棚卸資産 */
  inventories: number;
  /** 有価証券 */
  securities: number;
  /** 流動資産 */
  currentAssets: number;
  /** 有形固定資産 */
  propertyPlantAndEquipment: number;
  /** 無形固定資産 */
  intangibleAssets: number;
  /** 投資有価証券 */
  investmentSecurities: number;
  /** 投資その他の資産 */
  investmentsAndOtherAssets: number;
  /** 資産合計 */
  assets: number;
  /** 流動負債 */
  currentLiabilities: number;
  /** 固定負債 */
  nonCurrentLiabilities: number;
  /** 負債合計 */
  liabilities: number;
  /** 純資産 */
  netAssets: number;
}
