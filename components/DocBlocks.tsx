import Link from "next/link";

type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { note: string }
  | { source: { label: string; url: string } }
  | { links: string[] };
type Card = { slug: string; title: string; description: string };

/**
 * 記事本文の組版（英語・各言語で共通）。
 * links ブロックは同じ言語のページ一覧（cards）からスラッグで引いてカードにする。
 * ⚠️ 存在しないスラッグはビルドを止める（ハブから404へ張らないため）。
 */
export default function DocBlocks({ blocks, cards, base, sourceLabel }: { blocks: Block[]; cards: Card[]; base: string; sourceLabel: string }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("h2" in b) return <h2 key={i} className="heading-band text-xl md:text-2xl mt-10 first:mt-0 reveal">{b.h2}</h2>;
        if ("p" in b) return <p key={i} className="mt-4 leading-relaxed reveal">{b.p}</p>;
        if ("ul" in b)
          return (
            <ul key={i} className="mt-4 space-y-2 leading-relaxed reveal" style={{ paddingLeft: "1.1rem", listStyle: "disc" }}>
              {b.ul.map((x) => <li key={x}>{x}</li>)}
            </ul>
          );
        if ("source" in b)
          // 出典リンク。数値を書いたページには必ず一次情報へのリンクを添える
          return (
            <p key={i} className="mt-4 text-xs reveal" style={{ color: "#667" }}>
              {sourceLabel}:{" "}
              <a href={b.source.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                {b.source.label}
              </a>
            </p>
          );
        if ("links" in b)
          return (
            <div key={i} className="mt-6 grid md:grid-cols-2 gap-5">
              {b.links.map((slug) => {
                const c = cards.find((x) => x.slug === slug);
                if (!c) throw new Error(`links: unknown slug "${slug}" under ${base}`);
                return (
                  <Link key={slug} href={`${base}${slug}/`} className="feature-card no-underline reveal">
                    <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed">{c.description}</p>
                  </Link>
                );
              })}
            </div>
          );
        return (
          <div key={i} className="card mt-6 reveal" style={{ background: "var(--color-bg-soft)" }}>
            <p className="text-sm leading-relaxed">{b.note}</p>
          </div>
        );
      })}
    </>
  );
}
