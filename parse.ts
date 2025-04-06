import * as fs from "fs";
import * as xml2js from "xml2js";
export class ParseClient {
  /**
   * XBRLファイルを解析して、XMLデータを取得する関数
   * @param directory - XBRLファイルが保存されているディレクトリのパス
   * @returns 解析されたXMLデータ
   * @throws エラーが発生した場合は例外をスローします
   */
  public xmlData = async (directory: string): Promise<any> => {
    try {
      const dirents = fs.readdirSync(directory, { withFileTypes: true });
      const files = dirents.filter((dirent) => dirent.name.endsWith(".xbrl"));
      if (files.length === 0) {
        throw new Error(".xbrlファイルが見つかりませんでした");
      }
      const xbrlFile = await fs.promises.readFile(
        `${directory}/${files[0].name}`,
        "utf-8"
      );
      const parser = new xml2js.Parser({ explicitArray: true });
      return await parser.parseStringPromise(xbrlFile);
    } catch (error) {
      console.error("XBRLファイルの解析中にエラーが発生しました:", error);
      console.error("詳細なエラー情報:", JSON.stringify(error, null, 2));
      throw error;
    }
  };
}
