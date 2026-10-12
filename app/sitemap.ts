import type { MetadataRoute } from "next";
import { SITE } from "@/data/facts";
import { LANGS, LANG_CODES } from "@/data/langs";
import { PAGES } from "@/data/pages";

/** ⚠️ output:"export" では必須。無いと「dynamic not configured」でビルドが落ちる。 */
export const dynamic = "force-static";

/**
 * sitemap。英語トップ＋各言語ディレクトリ（トップ・記事・基礎ページ）を列挙する。
 * ⚠️ 以前はテンプレ由来の public/sitemap.xml が **別サイト(eta-pl.com)のURL** を配信していた。
 *    データから生成する形にして再発を防いでいる。
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const d = new Date("2026-08-17");
  /** 入国後の実用ページ（2026-10-12 追加・確認）。lastmod を実際の確認日にする */
  const dPractical = new Date("2026-10-12");
  const out: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, lastModified: d, changeFrequency: "weekly", priority: 1 },
    ...PAGES.map((p) => ({
      url: `${SITE}/${p.slug}/`,
      lastModified: p.checked ? dPractical : d,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
  for (const lang of LANG_CODES) {
    const t = LANGS[lang];
    out.push({ url: `${SITE}/${lang}/`, lastModified: d, changeFrequency: "weekly", priority: 0.9 });
    for (const a of [...t.articles, ...t.pages]) {
      out.push({ url: `${SITE}/${lang}/${a.slug}/`, lastModified: "enSlug" in a && a.checked ? dPractical : d, changeFrequency: "monthly", priority: 0.6 });
    }
  }
  return out;
}
