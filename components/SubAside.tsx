"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { AsideText } from "@/lib/chrome-l10n";

/** 新デザインの下層ページ（.xskin）の右カラム：目次＋申請ボタン（eta-se.com の SubAside と同じ考え方）。
 *  目次は本文（.xbody）の h2 から作る。サーバーでは空で出し、表示後に埋める（HTML の本文・見出しは変えない）。
 *  スマホでは本文の後ろに並ぶ（CSS）。 */
export default function SubAside({ t }: { t: AsideText }) {
  const [items, setItems] = useState<{ id: string; label: string }[]>([]);
  const pathname = usePathname();
  useEffect(() => {
    const hs = Array.from(document.querySelectorAll<HTMLElement>(".xskin .xbody h2"));
    setItems(
      hs
        .filter((h) => h.textContent && h.textContent.trim())
        .map((h, i) => {
          if (!h.id) h.id = `sec-${i + 1}`;
          return { id: h.id, label: h.textContent!.trim() };
        })
    );
  }, [pathname]);
  return (
    <aside className="xside">
      {items.length > 1 && (
        <nav className="xbox xtoc" aria-label={t.toc}>
          <span className="xeyebrow">{t.toc}</span>
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`}>{it.label}</a>
          ))}
        </nav>
      )}
      <div className="xbox xcta">
        <b>{t.ctaTitle}</b>
        <p>{t.ctaBody}</p>
        <a className="btn btn--ghost" href={t.ctaHref} target="_blank" rel="nofollow noopener">
          {t.ctaButton} <span className="arrow" aria-hidden="true">→</span>
        </a>
        <Link href={t.subHref} className="xsublink">{t.subLabel}</Link>
      </div>
    </aside>
  );
}
