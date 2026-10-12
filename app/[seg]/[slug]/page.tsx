import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DocBlocks from "@/components/DocBlocks";
import DocFaq from "@/components/DocFaq";
import { FACTS as F, OG_IMAGES, SITE } from "@/data/facts";
import { LANGS, LANG_CODES } from "@/data/langs";
import { pickRelated } from "@/data/pages";

/*
  言語ディレクトリ配下の記事・基礎ページ（/de/datenschutz/ /de/evisitor-oder-eta/ など）。
  ⚠️ 記事と基礎ページを同じ [slug] で扱う（構造が同じで、違いは導線だけ）。
  ⚠️ 存在しないスラッグは作らない（dynamicParams=false で404にする）。
*/

export const dynamicParams = false;

export function generateStaticParams() {
  const out: Array<{ seg: string; slug: string }> = [];
  for (const lang of LANG_CODES) {
    const t = LANGS[lang];
    for (const a of [...t.articles, ...t.pages]) out.push({ seg: lang, slug: a.slug });
  }
  return out;
}

function find(lang: string, slug: string) {
  const t = LANGS[lang];
  const doc = [...t.articles, ...t.pages].find((a) => a.slug === slug);
  return { t, doc, isArticle: t.articles.some((a) => a.slug === slug) };
}

export async function generateMetadata({ params }: { params: Promise<{ seg: string; slug: string }> }): Promise<Metadata> {
  const { seg: lang, slug } = await params;
  const { doc } = find(lang, slug);
  if (!doc) return {};
  return {
    title: { absolute: `${doc.title} | ${LANGS[lang].header.site}` },
    description: doc.description,
    alternates: {
      canonical: `${SITE}/${lang}/${slug}/`,
      // ⚠️ 言語ごとにスラッグが違うので、英語ページとの対応（enSlug）がある記事だけ相互に結ぶ。
      //    同じ enSlug を持つ他言語版も並べる（de⇄ko なども相互に示す）
      ...("enSlug" in doc && doc.enSlug
        ? {
            languages: {
              en: `${SITE}/${doc.enSlug}/`,
              ...Object.fromEntries(
                LANG_CODES.flatMap((c) => {
                  const m = LANGS[c].articles.find((a) => a.enSlug === doc.enSlug);
                  return m ? [[LANGS[c].htmlLang, `${SITE}/${c}/${m.slug}/`]] : [];
                }),
              ),
              "x-default": `${SITE}/${doc.enSlug}/`,
            },
          }
        : {}),
    },
    openGraph: { title: doc.title, description: doc.description, locale: LANGS[lang].htmlLang, type: "article", images: OG_IMAGES },
  };
}

export default async function LangDoc({ params }: { params: Promise<{ seg: string; slug: string }> }) {
  const { seg: lang, slug } = await params;
  const { t, doc, isArticle } = find(lang, slug);
  if (!doc) return null;

  const crumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t.header.site, item: `${SITE}/${lang}/` },
      { "@type": "ListItem", position: 2, name: doc.title, item: `${SITE}/${lang}/${slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbLd) }} />
      <Reveal />

      <section style={{ background: "var(--color-navy)" }}>
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
          <nav className="text-xs" style={{ color: "rgba(255,255,255,.75)" }}>
            <Link href={`/${lang}/`} style={{ color: "rgba(255,255,255,.85)" }}>{t.header.site}</Link>
            <span> › </span>
            <span>{doc.title}</span>
          </nav>
          <h1 className="mt-4 text-2xl md:text-4xl font-bold leading-tight" style={{ color: "#fff" }}>{doc.title}</h1>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,.85)" }}>{doc.description}</p>
          <p className="mt-4 text-xs" style={{ color: "rgba(255,255,255,.7)" }}>{t.ui.updated} {doc.checked ?? t.ui.updatedLabel ?? F.updatedLabel}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-14 md:py-16">
        <DocBlocks
          blocks={doc.blocks}
          cards={[...t.articles, ...t.pages]}
          base={`/${lang}/`}
          sourceLabel={t.practicalUi?.source ?? "Source"}
        />

        <div className="mt-12 reveal">
          <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="cta-button-red">{t.cta.button}</a>
        </div>

        <DocFaq items={doc.faq} heading={t.practicalUi?.faq ?? "FAQ"} />

        {isArticle && (
          <div className="mt-14">
            <h2 className="heading-band text-xl md:text-2xl reveal">{t.ui.articles}</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              {pickRelated(t.articles, slug, doc.related).map((a) => (
                <Link key={a.slug} href={`/${lang}/${a.slug}/`} className="feature-card no-underline reveal">
                  <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{a.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <p className="mt-12 text-xs leading-relaxed" style={{ color: "var(--color-text-light)" }}>{t.footer.disclaimer}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          <Link href={`/${lang}/`}>{t.header.site}</Link>
          {t.pages.filter((p) => p.slug !== slug).map((p) => (
            <Link key={p.slug} href={`/${lang}/${p.slug}/`}>{p.title}</Link>
          ))}
        </div>
      </article>
    </>
  );
}
