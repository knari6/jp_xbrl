export interface ICashFlowStatement {
  /** 営業活動によるキャッシュ・フロー */
  operatingCashFlow: number;
  /** 投資活動によるキャッシュ・フロー */
  investingCashFlow: number;
  /** 財務活動によるキャッシュ・フロー */
  financingCashFlowAmount: number;
}
