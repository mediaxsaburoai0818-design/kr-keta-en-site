type Faq = { q: string; a: string };

/** 記事末尾のよくある質問。表示と FAQPage 構造化データを同じ配列から出す（中身が食い違わないように）。 */
export default function DocFaq({ items, heading }: { items?: Faq[]; heading: string }) {
  if (!items?.length) return null;
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <section className="mt-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <h2 className="heading-band text-xl md:text-2xl reveal">{heading}</h2>
      <div className="mt-6 space-y-4">
        {items.map((f) => (
          <div key={f.q} className="card reveal">
            <h3 className="font-bold" style={{ color: "var(--color-navy)" }}>{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
