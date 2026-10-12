import { FACTS } from "@/data/facts";

/**
 * 言語ディレクトリ（/de/ /ko/ …）の中身の型。
 *
 * ⚠️ 数値は各言語ファイルに書かない。必ず FACTS を参照する。
 *    翻訳のときに数字を書き写すと、料金改定のときに言語ごとに食い違う。
 * ⚠️ 事実そのものを言語で変えない。表現だけを変える。
 */
export type Article = {
  slug: string;
  title: string;
  description: string;
  /** 見出しと本文の配列。h2 と 段落・箇条書きだけで構成する（凝った装飾は入れない）。
      source＝出典リンク（数値を書いたら必ず添える）／links＝同じ言語のページへのカード（ハブ用・スラッグ指定） */
  blocks: Array<
    | { h2: string }
    | { p: string }
    | { ul: string[] }
    | { note: string }
    | { source: { label: string; url: string } }
    | { links: string[] }
  >;
  /** 対応する英語ページのスラッグ。これがあるページだけ hreflang で言語版どうしを相互に結ぶ */
  enSlug?: string;
  /** 関連カードに優先して出すスラッグ（同じ言語内） */
  related?: string[];
  /** よくある質問（本文の後に表示＋FAQPage 構造化データ） */
  faq?: Array<{ q: string; a: string }>;
  /** このページを公式で確認した日（現地語表記）。無ければ ui.updatedLabel */
  checked?: string;
  /** 入国後の実用ページ（ハブ以外）。言語トップの一覧には出さない */
  practical?: boolean;
};

/** 入国後の実用ページ一式（言語ごとに data/langs/{code}-practical.ts）。index.ts で articles に合流させる */
export type PracticalPack = {
  /** 「よくある質問」「出典」の現地語ラベル */
  ui: { faq: string; source: string; related: string };
  articles: Article[];
};

export type LangContent = {
  /** ディレクトリ名＝ISO言語コード（hreflangにも使う） */
  code: string;
  /** <html lang> に入れる値 */
  htmlLang: string;
  /** 言語切替に出す表示名（その言語での自称） */
  label: string;
  /** 対象読者の国（ページ内の説明に使う） */
  audience: string;
  meta: { title: string; description: string };
  header: { site: string; tagline: string; official: string };
  hero: {
    eyebrow: string;
    h1Before: string;
    h1Highlight: string;
    h1After: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    disclaimer: string;
    imageAlt: string;
  };
  stats: Array<{ v: string; l: string; s: string }>;
  whatIs: { h2: string; p1: string; p2: string };
  features: Array<{ h: string; p: string }>;
  eligibility: {
    h2: string;
    lead: string;
    th: [string, string, string, string];
    rows: Array<[string, string, string, string]>;
    note: string;
  };
  steps: { h2: string; items: Array<{ h: string; p: string }>; cta: string };
  rules: { h2: string; allowedH: string; allowed: string[]; deniedH: string; denied: string[] };
  border: { h2: string; p: string };
  faq: { h2: string; items: Array<{ q: string; a: string }> };
  cta: { h2: string; p: string; button: string };
  footer: { disclaimer: string };
  /** 基礎ページ（プライバシーポリシー等）。slug はディレクトリ名になる */
  pages: Article[];
  /** 下層記事 */
  articles: Article[];
  /** 実用ページ用の現地語ラベル（index.ts で合流時に入る） */
  practicalUi?: PracticalPack["ui"];
  /** UIの共通語。⚠️ updatedLabel は日付の**表記だけ**を現地語にするための任意項目。
      値そのものは FACTS.updatedLabel と同じ日付を指すこと（別の日付を書かない）。 */
  ui: {
    updated: string;
    backToTop: string;
    languages: string;
    articles: string;
    readMore: string;
    updatedLabel?: string;
  };
};

/** 言語ファイルから数値を参照するための再エクスポート（数字の二重管理を防ぐ） */
export { FACTS };
