import type { LangContent, PracticalPack } from "./_schema";
import { dePractical } from "./de-practical";
import { frPractical } from "./fr-practical";
import { zhCnPractical } from "./zh-cn-practical";
import { zhTwPractical } from "./zh-tw-practical";
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
/** 入国後の実用ページ（ETA横展開バッチ④・2026-10-12）を各言語の articles の末尾に合流させる */
function withPractical(t: LangContent, pack: PracticalPack): LangContent {
  return { ...t, articles: [...t.articles, ...pack.articles], practicalUi: pack.ui };
}

export const LANGS: Record<string, LangContent> = {
  de: withPractical(de, dePractical),
  fr: withPractical(fr, frPractical),
  "zh-cn": withPractical(zhCn, zhCnPractical),
  "zh-tw": withPractical(zhTw, zhTwPractical),
};
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };
