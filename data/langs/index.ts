import type { LangContent } from "./_schema";
import { de } from "./de";
import { fr } from "./fr";
import { zhCn } from "./zh-cn";
import { zhTw } from "./zh-tw";

/**
 * 言語ディレクトリの登録簿。
 * ⚠️ 英語はルート（/）で配信しているのでここには入れない。
 * ⚠️ 台湾（繁体字）・ドイツ・フランスは K-ETA の一時免除対象。
 *    「今は不要・2027年から要る」が主役。「今すぐ申請を」に書き換えない。
 * 🚨 簡体字（zh-cn）だけ前提が逆。**中国本土の旅券は韓国のビザ免除対象ではない**ので
 *    K-ETAの適用対象外＝必要なのはビザ。他言語のコピー翻訳にしないこと。
 */
export const LANGS: Record<string, LangContent> = { de, fr, "zh-cn": zhCn, "zh-tw": zhTw };
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };
