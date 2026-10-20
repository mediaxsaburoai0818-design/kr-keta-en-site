import type { Metadata } from "next";
import Link from "next/link";
import SubAside from "@/components/SubAside";
import { CHROME, DATA_C } from "@/lib/chrome-l10n";
import Reveal from "@/components/Reveal";
import StickyCta from "@/components/StickyCta";
import DocBlocks from "@/components/DocBlocks";
import DocFaq from "@/components/DocFaq";
import { FACTS as F, OG_IMAGES, SITE } from "@/data/facts";
import { LANGS, LANG_CODES } from "@/data/langs";
import { PAGES, pickRelated } from "@/data/pages";

/*
  英語の下層ページ（/what-is-keta/ など12本）。
  uketa（eta-se.com）の言語ディレクトリと同じ13ページ構成に合わせるためのもの。
  ⚠️ 本文は data/pages.ts に集約する。数値は FACTS 参照で、ページ側に書かない。
*/

function find(slug: string) {
  return PAGES.find((p) => p.slug === slug);
}

export function enDocMetadata(slug: string): Metadata {
  const doc = find(slug);
  if (!doc) return {};
  return {
    title: { absolute: `${doc.title} | K-ETA Guide` },
    description: doc.description,
    alternates: {
      canonical: `${SITE}/${slug}/`,
      // 対応する翻訳（enSlug が一致する言語ページ）があるときだけ hreflang を出す
      languages: {
        en: `${SITE}/${slug}/`,
        ...Object.fromEntries(
          LANG_CODES.flatMap((c) => {
            const m = LANGS[c].articles.find((a) => a.enSlug === slug);
            return m ? [[LANGS[c].htmlLang, `${SITE}/${c}/${m.slug}/`]] : [];
          }),
        ),
        "x-default": `${SITE}/${slug}/`,
      },
    },
    openGraph: { title: doc.title, description: doc.description, locale: "en", type: "article", images: OG_IMAGES },
  };
}

export default function EnglishDoc({ slug }: { slug: string }) {
  const doc = find(slug);
  if (!doc) return null;
  const others = pickRelated(PAGES.filter((p) => !["privacy", "terms", "about"].includes(p.slug)), slug, doc.related);

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "K-ETA Guide", item: `${SITE}/` },
      { "@type": "ListItem", position: 2, name: doc.nav, item: `${SITE}/${slug}/` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Reveal />

      {/* 2026-10-21 下層ページの新デザイン（皮）：見出しの帯＋本文（左）＋目次と申請欄（右）。文言・順序・リンクは旧版のまま */}
      <div className="etahome xskin" data-c={DATA_C} data-pat="1">
        <StickyCta />
        <div className="xgrid">
          <section className="xhero">
          <nav className="xcrumb" aria-label="Breadcrumb">
            <Link href="/">K-ETA Guide</Link>
            <span> › </span>
            <span>{doc.nav}</span>
          </nav>
          <h1>
            {doc.title}
          </h1>
          <p className="xlead">
            {doc.description}
          </p>
          <p className="xchecked">Checked {doc.checked ?? F.updatedLabel}</p>
          </section>

      <article className="xbody">
        <DocBlocks
          blocks={doc.blocks}
          cards={PAGES.map((p) => ({ slug: p.slug, title: p.nav, description: p.description }))}
          base="/"
          sourceLabel="Source"
        />

        <div className="mt-12 reveal">
          <a href={F.officialUrl} target="_blank" rel="noopener noreferrer" className="cta-button-red">
            Apply on the official K-ETA site
          </a>
        </div>

        <DocFaq items={doc.faq} heading="Common questions" />

        <div className="mt-14">
          <h2 className="heading-band text-xl md:text-2xl reveal">More about K-ETA</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {others.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="feature-card no-underline reveal">
                <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{p.nav}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
          <SubAside t={CHROME.en.aside} />
        </div>
        <div className="xfinal" dangerouslySetInnerHTML={{ __html: CHROME.en.cta }} />
      </div>
    </>
  );
}
