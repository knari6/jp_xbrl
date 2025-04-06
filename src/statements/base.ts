import { QuarterType } from "../interfaces/quarter-type";
import { Parser } from "../parser";
import * as constants from "../constants";

export class BaseStatement {
  private readonly context = "CurrentYearInstant_NonConsolidatedMember";
  private readonly xmlData: any;
  private readonly parser: Parser;
  public readonly constants: any;

  constructor(xmlData: any, dirName: string) {
    this.xmlData = xmlData;
    this.parser = new Parser(dirName);
    this.constants = constants;
  }

  /**
   * XmlDataから指定した数値を抽出する
   * @param xmlData
   * @param key タグ名
   * @param context contextRefの方
   * @returns
   */
  public extractNumber(key: string, context: string): number {
    try {
      const value = this.xmlData["xbrli:xbrl"][key]?.find(
        (item: any) => item["$"].contextRef === this.context
      );
      return value ? parseInt(value["_"], 10) : 0;
    } catch (error) {
      return 0;
    }
  }

  /**
   * XmlDataから指定した文字列を抽出する
   * @param xmlData
   * @param key タグ名
   * @param context contextRefの方
   * @returns
   */
  public extractValue(key: string, context: string): string {
    try {
      const value = this.xmlData["xbrli:xbrl"][key]?.find(
        (item: any) => item["$"].contextRef === context
      );
      return value ? value["_"] : "";
    } catch (error) {
      return "";
    }
  }

  /**
   * 四半期のタイプを取得する
   * @param quarter
   * @returns
   */
  public getQuarterType(quarter: string): QuarterType {
    switch (quarter) {
      case "Q1":
        return "Q1";
      case "Q2":
        return "Q2";
      case "Q3":
        return "Q3";
      case "Q4":
        return "Q4";
      default:
        return "FY";
    }
  }
}
