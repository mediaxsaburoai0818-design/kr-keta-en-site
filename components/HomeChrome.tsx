"use client";
import { useEffect } from "react";

// TOP（新デザイン）の動き。HTML は dangerouslySetInnerHTML で入っているので、表示後に結び付ける。
//   ・ハンバーガーメニュー
//   ・キービジュアルのスライダー（4枚・5秒ごと・ドット・スワイプ）。表示中の番号を .hero[data-slide] に入れる（CSS が 1枚目だけ見出しを出す）
export default function HomeChrome() {
  useEffect(() => {
    const off: Array<() => void> = [];
    const b = document.querySelector<HTMLButtonElement>(".etahome .burger");
    const n = document.querySelector<HTMLElement>(".etahome .nav");
    if (b && n) {
      n.id = "nav";
      const onClick = () => {
        const open = b.getAttribute("aria-expanded") === "true";
        b.setAttribute("aria-expanded", String(!open));
        if (open) { n.removeAttribute("style"); return; }
        Object.assign(n.style, { display: "flex", position: "absolute", top: "100%", left: "0", right: "0",
          flexDirection: "column", background: "#fff", padding: "14px 20px", borderBottom: "1px solid var(--color-border)", gap: "12px", zIndex: "20" });
      };
      b.addEventListener("click", onClick);
      off.push(() => b.removeEventListener("click", onClick));
    }

    const root = document.querySelector<HTMLElement>(".etahome [data-slider]");
    const hero = root?.parentElement;
    if (root && hero) {
      const slides = Array.from(root.querySelectorAll<HTMLElement>(".slide"));
      const dots = Array.from(document.querySelectorAll<HTMLButtonElement>(".etahome .dots button"));
      let i = 0;
      let timer: number | undefined;
      const go = (k: number) => {
        i = (k + slides.length) % slides.length;
        slides.forEach((e, j) => e.classList.toggle("is-active", j === i));
        dots.forEach((e, j) => { e.classList.toggle("is-active", j === i); e.setAttribute("aria-selected", String(j === i)); });
        hero.dataset.slide = String(i + 1);
      };
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const play = () => { window.clearInterval(timer); if (!reduce) timer = window.setInterval(() => go(i + 1), 5000); };
      dots.forEach((d, k) => { const h = () => { go(k); play(); }; d.addEventListener("click", h); off.push(() => d.removeEventListener("click", h)); });
      let x0: number | null = null;
      const ts = (e: TouchEvent) => { x0 = e.touches[0].clientX; };
      const te = (e: TouchEvent) => {
        if (x0 === null) return;
        const dx = e.changedTouches[0].clientX - x0;
        if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); play(); }
        x0 = null;
      };
      root.addEventListener("touchstart", ts, { passive: true });
      root.addEventListener("touchend", te);
      off.push(() => { root.removeEventListener("touchstart", ts); root.removeEventListener("touchend", te); window.clearInterval(timer); });
      go(0); play();
    }
    return () => off.forEach((f) => f());
  }, []);
  return null;
}
