import { IBalanceSheetStatement } from "../interfaces/balance-sheet";
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
      ) ||
      this.extractNumber(
        "CashAndCashEquivalentsIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      this.extractNumber(
        "CashAndDueFromBanksAssetsBNK",
        this.constants.context.CurrentYearInstant
      ) ||
      this.extractNumber(
        "CashAndCashEquivalentsIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
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

  // 受取手形
  public get notesReceivable(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NotesReceivableTrade",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 電子記録債権
  public get electronicRecordReceivables(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ElectronicallyRecordedMonetaryClaimsOperatingCA",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 営業債権及びその他債権 */
  public get receivables(): number | null {
    return (
      this.extractNumber(
        "TradeAndOtherReceivablesCAIFRS",
        this.constants.context.CurrentYearInstant
      ) || null
    );
  }

  // 製品および商品
  public get products(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:MerchandiseAndFinishedGoods",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 仕掛品
  public get workInProgress(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:WorkInProcess",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 原材料
  public get rawMaterials(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:RawMaterialsAndSupplies",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 棚卸資産 */
  public get inventories(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:InventoriesCAIFRS",
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

  /** コールローン及び買入金 */
  public get callLoansAndBillsBoughtAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CallLoansAndBillsBoughtAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 買現先勘定 */
  public get receivablesUnderResaleAgreementsAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ReceivablesUnderResaleAgreementsAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  /** 債権貸借取引支払い補償金 */
  public get receivablesUnderSecuritiesBorrowingTransactionsAssetsBNK():
    | number
    | null {
    return (
      this.extractNumber(
        "jppfs_cor:ReceivablesUnderSecuritiesBorrowingTransactionsAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 買入金銭債権
  public get monetaryClaimsBoughtAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:MonetaryClaimsBoughtAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 特定取引資産
  public get tradingAssetsAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:TradingAssetsAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 金銭の信託
  public get moneyHeldInTrustAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:MoneyHeldInTrustAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 有価証券
  public get shortTermInvestmentSecurities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:SecuritiesAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:ShortTermInvestmentSecurities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      null
    );
  }

  // 貸出金
  public get loansAndBillsDiscountedAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:LoansAndBillsDiscountedAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 外国為替
  public get foreignExchangesAssetsBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ForeignExchangesAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // その他金融資産
  public get otherFinancialAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherFinancialAssetsCAIFRS",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  /** その他流動資産 */
  public get otherCurrentAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherCA",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:OtherAssetsAssetsBNK",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:OtherCurrentAssetsCAIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }
  /** 流動資産合計 */
  public get currentAssets(): number | null {
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

  /** 車両運搬具(純額) */
  public get vehicles(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:VehiclesNet",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // 構築物
  public get structures(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:StructuresNet",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ?? null
    );
  }

  // リース資産
  public get leaseAssetsNetPPE(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:LeaseAssetsNetPPE",
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
  public get tangibleFixedAssets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:PropertyPlantAndEquipment",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:PropertyPlantAndEquipmentIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }

  /** ソフトウェア */
  public get software(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:Software",
        this.constants.context.CurrentYearInstant
      ) ||
      this.extractNumber(
        "jppfs_cor:Software",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      null
    );
  }
  /**
   * のれん
   * 買収に関する項目なので連結にだけ起票される
   * CurrentYearInstant_NonConsolidatedMemberはないはず
   */
  public get goodwill(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:Goodwill",
        this.constants.context.CurrentYearInstant
      ) ||
      this.extractNumber(
        "jppfs_cor:GoodwillAndIntangibleAssetsIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }

  // その他無形固定資産
  public get otherIA(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherIA",
        this.constants.context.CurrentYearInstant
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

  // 退職給付にかかる資産
  public get netDefinedBenefitAsset(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NetDefinedBenefitAsset",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 支払承諾見返
  public get acceptancesAndGuaranteesLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:AcceptancesAndGuaranteesLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
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
      ) ||
      this.extractNumber(
        "jppfs_cor:AllowanceForLoanLossesAssetsBNK",
        this.constants.context.CurrentYearInstant
      ) ||
      null
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
      ) ||
      this.extractNumber(
        "jppfs_cor:NonCurrentAssetsIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }

  /** 資産合計 */
  public get assets(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:TotalAssets",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:LiabilitiesAndEquityIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
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
  public get currentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CurrentLiabilities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:TotalCurrentLiabilitiesIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }
  /** その他固定負債 */
  public get otherNonCurrentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherNCL",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:OtherNonCurrentLiabilitiesNCLIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }
  /** 固定負債合計 */
  public get nonCurrentLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NoncurrentLiabilities",
        this.constants.context.CurrentYearInstant_NonConsolidatedMember
      ) ||
      this.extractNumber(
        "jppfs_cor:NonCurrentLabilitiesIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }

  // 預金
  public get depositsLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:DepositsLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 譲渡性預金
  public get negotiableCertificatesOfDepositLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NegotiableCertificatesOfDepositLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // コールマネー及び売渡手形
  public get callMoneyAndBillsSoldLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CallMoneyAndBillsSoldLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 売現先勘定
  public get payablesUnderRepurchaseAgreementsLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:PayablesUnderRepurchaseAgreementsLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 債権貸借取引受入担保金
  public get payablesUnderSecuritiesLendingTransactionsLiabilitiesBNK():
    | number
    | null {
    return (
      this.extractNumber(
        "jppfs_cor:PayablesUnderSecuritiesLendingTransactionsLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // コマーシャルペーパー
  public get commercialPapersLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:CommercialPapersLiabilities",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 特定取引負債
  public get tradingLiabilitiesLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:TradingLiabilitiesLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 借用金
  public get borrowedMoneyLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:BorrowedMoneyLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 外国為替
  public get foreignExchangesLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ForeignExchangesLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 短期社債
  public get shortTermBondsPayable(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ShortTermBondsPayable",
        this.constants.context.CurrentYearInstant
      ) ||
      this.extractNumber(
        "jppfs_cor:BondsAndBorrowingsCLIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }

  // 社債
  public get bondsPayable(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:BondsPayable",
        this.constants.context.CurrentYearInstant
      ) ||
      this.extractNumber(
        "jppfs_cor:BondsAndBorrowingsNCLIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
    );
  }

  // 信託勘定借
  public get borrowedMoneyFromTrustAccountLiabilitiesBNK(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:BorrowedMoneyFromTrustAccountLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // その他負債
  public get otherLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:OtherLiabilitiesLiabilitiesBNK",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 賞与引当金
  public get provisionForBonuses(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ProvisionForBonuses",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 役員賞与引当金
  public get provisionForDirectorsBonuses(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ProvisionForDirectorsBonuses",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 退職給付にかかる負債
  public get netDefinedBenefitLiability(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:NetDefinedBenefitLiability",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 役員退職慰労引当金
  public get provisionForDirectorsRetirementBenefits(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:ProvisionForDirectorsRetirementBenefits",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 繰延税金負債
  public get deferredTaxLiabilities(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:DeferredTaxLiabilities",
        this.constants.context.CurrentYearInstant
      ) ?? null
    );
  }

  // 再評価にかかる繰延税金負債
  public get deferredTaxLiabilitiesRevaluation(): number | null {
    return (
      this.extractNumber(
        "jppfs_cor:DeferredTaxLiabilitiesForLandRevaluation",
        this.constants.context.CurrentYearInstant
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
      ) ||
      this.extractNumber(
        "jppfs_cor:RetainedEarnings",
        this.constants.context.CurrentYearInstant
      ) ||
      null
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
      ) ||
      this.extractNumber(
        "jppfs_cor:EquityAttributableToOwnersOfParentIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
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
      ) ||
      this.extractNumber(
        "jppfs_cor:OtherComponentsOfEquityIFRS",
        this.constants.context.CurrentYearInstant
      ) ||
      null
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

  public statement(): IBalanceSheetStatement {
    let accountReceivable: number = 0;
    let inventories: number = 0;
    if (this.accountReceivable) {
      accountReceivable += this.accountReceivable;
    }
    if (this.notesReceivable) {
      accountReceivable += this.notesReceivable;
    }
    if (this.electronicRecordReceivables) {
      accountReceivable += this.electronicRecordReceivables;
    }
    if (this.products) {
      inventories += this.products;
    }
    if (this.workInProgress) {
      inventories += this.workInProgress;
    }
    if (this.rawMaterials) {
      inventories += this.rawMaterials;
    }

    return {
      /** 現金及び預金 */
      cashAndDeposits: this.cashAndDeposit || 0,
      /** 売上債権 */
      accountsReceivable: this.receivables
        ? this.receivables
        : accountReceivable,
      /** 棚卸資産 */
      inventories: this.inventories ? this.inventories : inventories,
      /** 有価証券 */
      securities: this.shortTermInvestmentSecurities || 0,
      /** 流動資産 */
      currentAssets: this.currentAssets || 0,
      /** 有形固定資産 */
      propertyPlantAndEquipment: this.tangibleFixedAssets || 0,
      /** 無形固定資産 */
      intangibleAssets: this.intangibleAssets || 0,
      /** 投資有価証券 */
      investmentSecurities: this.investmentSecurities || 0,
      /** 投資その他の資産 */
      investmentsAndOtherAssets: this.totalInvestmentAndOtherAssets || 0,
      /** 資産合計 */
      assets: this.assets || 0,
      /** 流動負債 */
      currentLiabilities: this.currentLiabilities || 0,
      /** 固定負債 */
      nonCurrentLiabilities: this.nonCurrentLiabilities || 0,
      /** 負債合計 */
      liabilities: this.liabilities || 0,
      /** 純資産 */
      netAssets: this.netAssets || 0,
    };
  }
}
