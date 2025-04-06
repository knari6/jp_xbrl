/**
 * https://www.fsa.go.jp/search/20160314/2b_1.pdf
 * コンテキストの設定例
 * P38-48
 */
export const context = {
  /**
   * コンテキスト ID FilingDateInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 提出日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 DEI、表紙、包括タグ（様式ツリーの「経理の状況」を除く。）、
   * 独立監査人の報告書等のコンテキストとして利用します。
   */
  FilingDateInstant: "FilingDateInstant",

  /**
   * 当期連結時点
   * コンテキスト ID CurrentYearInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる会計年度の期末日時点における連結の財務情報を報告するために利用します。
   */

  CurrentYearInstant: "CurrentYearInstant",
  /**
   * コンテキスト ID CurrentYearDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 期首日（YYYY-MM-DD 形式）
   * endDate 期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる会計年度の連結の財務情報を報告するために利用します。
   */
  CurrentYearDuration: "CurrentYearDuration",

  /**
   * コンテキスト ID CurrentYearInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 期末日（YYYY-MM-DD 形式）
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   *  jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる会計年度の期末日時点における個別の財務情報を報告するために利用します。
   */
  CurrentYearInstant_NonConsolidatedMember:
    "CurrentYearInstant_NonConsolidatedMember",

  /**
   * コンテキスト ID
   * CurrentYearDuration_NonConsolidatedMember,
   * Prior2YearInstant_NonConsolidatedMember,
   * Prior3YearInstant_NonConsolidatedMember,
   * Prior4YearInstant_NonConsolidatedMember,
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 期首日（YYYY-MM-DD 形式）
   * endDate 期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる会計年度の個別の財務情報を報告するために利用します。
   */
  CurrentYearDuration_NonConsolidatedMember:
    "CurrentYearDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1YearInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前年度期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる会計年度の前期の期末日時点（又は当期の期首日時点）の連結の財務情報を報告するために利用します。
   */
  Prior1YearInstant: "Prior1YearInstant",

  /**
   * コンテキスト ID Prior1YearDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前年度期首日（YYYY-MM-DD 形式）
   * endDate 前年度期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる会計年度の前期の期間における連結の財務情報を報告するために利用します。
   */
  Prior1YearDuration: "Prior1YearDuration",

  /**
   * コンテキスト ID Prior1YearInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前年度期末日（YYYY-MM-DD 形式）
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   *  jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる会計年度の前期の期末日時点（又は当期の期首日時点）の個別の財務情報を報告するために利用します。
   */
  Prior1YearInstant_NonConsolidatedMember:
    "Prior1YearInstant_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1YearDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前年度期首日（YYYY-MM-DD 形式）
   * endDate 前年度期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる会計年度の前期の期間における個別の財務情報を報告するために利用します。
   */
  Prior1YearDuration_NonConsolidatedMember:
    "Prior1YearDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID CurrentQuarterInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 当四半期会計期間期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる当四半期会計期間の期末日時点における連結の財務情報を報告するために利用します。
   */
  CurrentQuarterInstant: "CurrentQuarterInstant",

  /**
   * コンテキスト ID CurrentQuarterDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 当四半期会計期間期首日（YYYY-MM-DD 形式）
   * endDate 当四半期会計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる当四半期会計期間の期間における連結の財務情報を報告するために利用します。
   */
  CurrentQuarterDuration: "CurrentQuarterDuration",

  /**
   * コンテキスト ID CurrentYTDDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 当四半期累計期間期首日（YYYY-MM-DD 形式）
   * endDate 当四半期累計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる当四半期累計期間の期間における連結の財務情報を報告するために利用します。
   */
  CurrentYTDDuration: "CurrentYTDDuration",

  /**
   * コンテキスト ID CurrentQuarterInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 当四半期会計期間期末日（YYYY-MM-DD 形式）
   * scenario <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる当四半期会計期間の期末日時点における個別の財務情報を報告するために利用します。
   */
  CurrentQuarterInstant_NonConsolidatedMember:
    "CurrentQuarterInstant_NonConsolidatedMember",

  /**
   * コンテキスト ID CurrentQuarterDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 当四半期会計期間期首日（YYYY-MM-DD 形式）
   * endDate 当四半期会計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる当四半期会計期間の期間における個別の財務情報を報告するために利用します。
   */
  CurrentQuarterDuration_NonConsolidatedMember:
    "CurrentQuarterDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID CurrentYTDDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 当四半期累計期間期首日（YYYY-MM-DD 形式）
   * endDate 当四半期累計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる当四半期累計期間の期間における個別の財務情報を報告するために利用します。
   */
  CurrentYTDDuration_NonConsolidatedMember:
    "CurrentYTDDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1QuarterInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前年度同四半期会計期間期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる四半期会計期間の前期の期末日時点における連結の財務情報を報告するために利用します。
   */
  Prior1QuarterInstant: "Prior1QuarterInstant",

  /**
   * コンテキスト ID Prior1QuarterDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前年度同四半期会計期間期首日（YYYY-MM-DD 形式）
   * endDate 前年度同四半期会計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる四半期会計期間の前期の期間における連結の財務情報を報告するために利用します。
   */
  Prior1QuarterDuration: "Prior1QuarterDuration",

  /**
   * コンテキスト ID Prior1YTDDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前年度同四半期累計期間期首日（YYYY-MM-DD 形式）
   * endDate 前年度同四半期累計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる四半期累計期間の前期の期間における連結の財務情報を報告するために利用します。
   */
  Prior1YTDDuration: "Prior1YTDDuration",

  /**
   * コンテキスト ID Prior1QuarterInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前年度同四半期会計期間期末日（YYYY-MM-DD 形式）
   * scenario <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる四半期会計期間の前期の期末日時点における個別の財務情報を報告するために利用します。
   */
  Prior1QuarterInstant_NonConsolidatedMember:
    "Prior1QuarterInstant_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1QuarterDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前年度同四半期会計期間期首日（YYYY-MM-DD 形式）
   * endDate 前年度同四半期会計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる四半期会計期間の前期の期間における個別の財務情報を報告するために利用します。
   */
  Prior1QuarterDuration_NonConsolidatedMember:
    "Prior1QuarterDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1YTDDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前年度同四半期累計期間期首日（YYYY-MM-DD 形式）
   * endDate 前年度同四半期累計期間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる四半期累計期間の前期の期間における個別の財務情報を報告するために利用します。
   */
  Prior1YTDDuration_NonConsolidatedMember:
    "Prior1YTDDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID InterimInstant
   * entity scheme http://disclosure.edinet-fsa.go.jpidentifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 当中間期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる中間会計期間の期末日時点における連結の財務情報を報告するために利用します。
   */
  InterimInstant: "InterimInstant",

  /**
   * コンテキスト ID InterimDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 当中間期首日（YYYY-MM-DD 形式）
   * endDate 当中間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる中間会計期間の連結の財務情報を報告するために利用します。
   */
  InterimDuration: "InterimDuration",

  /**
   * コンテキスト ID InterimInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 当中間期末日（YYYY-MM-DD 形式）
   * scenario <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる中間会計期間の期末日時点における個別の財務情報を報告するために利用します。
   */
  InterimInstant_NonConsolidatedMember: "InterimInstant_NonConsolidatedMember",

  /**
   * コンテキスト ID InterimDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 当中間期首日（YYYY-MM-DD 形式）
   * endDate 当中間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる中間会計期間の個別の財務情報を報告するために利用します。
   */
  InterimDuration_NonConsolidatedMember:
    "InterimDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1InterimInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前中間期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる中間会計期間の前期の期末日時点における連結の財務情報を報告するために利用します。
   */
  Prior1InterimInstant: "Prior1InterimInstant",

  /**
   * コンテキスト ID Prior1InterimDuration
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前中間期首日（YYYY-MM-DD 形式）
   * endDate 前中間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario 設定なし
   * 説明 報告対象となる中間会計期間の前期の期間における連結の財務情報を報告するために利用します。
   */
  Prior1InterimDuration: "Prior1InterimDuration",

  /**
   * コンテキスト ID Prior1InterimInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前中間期末日（YYYY-MM-DD 形式）
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる中間会計期間の前期の期末日時点における個別の財務情報を報告するために利用します。
   */
  Prior1InterimInstant_NonConsolidatedMember:
    "Prior1InterimInstant_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior1InterimDuration_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 前中間期首日（YYYY-MM-DD 形式）
   * endDate 前中間期末日（YYYY-MM-DD 形式）
   * instant 設定なし
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる中間会計期間の前期の期間における個別の財務情報を報告するために利用します。
   */
  Prior1InterimDuration_NonConsolidatedMember:
    "Prior1InterimDuration_NonConsolidatedMember",

  /**
   * コンテキスト ID Prior2YearInstant
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前々年度期末日（YYYY-MM-DD 形式）
   * scenario 設定なし
   * 説明 報告対象となる前年度又は前中間期の期首日時点における連結の財務情報を報告するために利用します。
   */
  Prior2YearInstant: "Prior2YearInstant",

  /**
   * コンテキスト ID Prior2YearInstant_NonConsolidatedMember
   * entity scheme http://disclosure.edinet-fsa.go.jp
   * identifier {EDINET コード}-{追番}
   * segment 設定なし
   * period startDate 設定なし
   * endDate 設定なし
   * instant 前々年度期末日（YYYY-MM-DD 形式）
   * scenario
   * <xbrldi:explicitMember dimension=“jppfs_cor:ConsolidatedAndNonConsolidatedAxis”>
   * jppfs_cor:NonConsolidatedMember
   * </xbrldi:explicitMember>
   * 説明 報告対象となる前年度又は前中間期の期首日時点における個別の財務情報を報告するために利用します。
   */
  Prior2YearInstant_NonConsolidatedMember:
    "Prior2YearInstant_NonConsolidatedMember",
  Prior3YearInstant_NonConsolidatedMember:
    "Prior3YearInstant_NonConsolidatedMember",
  Prior4YearInstant_NonConsolidatedMember:
    "Prior4YearInstant_NonConsolidatedMember",
};
