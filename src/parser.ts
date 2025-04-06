import * as fs from "fs";
import * as xml2js from "xml2js";

export class Parser {
  private directory: string;
  constructor(directory: string) {
    this.directory = directory;
  }
  /**
   * xbrlファイルをパースする
   * @param directory
   * @returns XMLDATA
   * @throws エラーが発生した場合はエラーメッセージを表示
   * @description
   * 1. 指定されたディレクトリ内の.xbrlファイルを検索します。
   * 2. 最初に見つかった.xbrlファイルを読み込みます。
   * 3. XMLをパースしてJavaScriptオブジェクトに変換します。
   * 4. パースしたデータを返します。
   * 5. エラーが発生した場合は、エラーメッセージを表示します。
   */
  public async xbrl(): Promise<any> {
    try {
      // ディレクトリ内の.xbrlファイルを検索（withFileTypesオプションを使用）
      const dirents = fs.readdirSync(this.directory, { withFileTypes: true });
      const files = dirents.filter((dirent) => dirent.name.endsWith(".xbrl"));

      if (files.length === 0) {
        throw new Error("could not find xbrl file");
      }

      // 最初の.xbrlファイルを読み込む
      const xbrlFile = await fs.promises.readFile(
        `${this.directory}/${files[0].name}`,
        "utf-8"
      );

      // XMLを先にパースする
      const parser = new xml2js.Parser({ explicitArray: true });
      return await parser.parseStringPromise(xbrlFile);
    } catch (error) {
      console.error("got some error while parsing xbrl file:", error);
      console.error("error infomation:", JSON.stringify(error, null, 2));
      throw error;
    }
  }
}
