#!/usr/bin/env node
/* 英語ETA 3サイト（nz-eta-site / au-evisitor-en-site / kr-keta-en-site）の下層ページ用ヘッダー・フッター・申請欄の文言を作る
   → lib/chrome-l10n.ts（自動生成・手で直さない）。okina 2026-10-21「オーストラリア、韓国、ニュージーランドもよろしく」
   実行：リポジトリ直下で  node scripts/gen-chrome.cjs
   ・英語＝TOP（lib/eta-home.ts の HOME_TOP / HOME_BOTTOM）のヘッダー・フッター・finalcta をそのまま使う
     （TOP 内アンカー #overview 等は下層では /#overview に書き換え。<!--LANGS--> <!--UPDATED--> は app/page.tsx と同じ値で埋める）
   ・各言語（data/langs）＝言語TOP がまだ旧デザインで、翻訳済みの新ヘッダーが無い。そのため英語の枠の文言を、
     言語ファイルにある翻訳済みの文言（サイト名・免責・申請ボタン・CTA 見出し/本文・FAQ/規約ページの題）で置き換える。
     翻訳の無いメニュー項目は出さない（新しい翻訳は目次の見出しだけ） */
const fs = require("fs");
const path = require("path");
const { createJiti } = require("jiti");
const root = process.cwd();
const jiti = createJiti(path.join(root, "x.js"), { alias: { "@": root } });
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")).name;
const SITE = { "nz-eta-site": { c: "B", kind: "nz" }, "au-evisitor-en-site": { c: "A", kind: "aukr" }, "kr-keta-en-site": { c: "B", kind: "aukr" } }[pkg];
if (!SITE) throw new Error("unknown site " + pkg);
const TOC = { en: "On this page", de: "Auf dieser Seite", ko: "이 페이지의 내용", nl: "Op deze pagina", fr: "Sur cette page", it: "In questa pagina",
  es: "En esta página", zh: "本页内容", "zh-cn": "本页内容", "zh-tw": "本頁內容" };

const { LANGS, LANG_CODES } = jiti("./data/langs/index.ts");
const { FACTS: F } = jiti("./data/facts.ts");
const src = fs.readFileSync("lib/eta-home.ts", "utf8");
const parts = Object.fromEntries([...src.matchAll(/export const (\w+): string = (".*?");\n/gs)].map((m) => [m[1], JSON.parse(m[2])]));
const page = fs.readFileSync("app/page.tsx", "utf8");
const FONTS = page.match(/<link href="(https:\/\/fonts\.googleapis\.com\/css2[^"]+)"/)[1];

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const txt = (s) => s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
const cut = (h, a, b) => { const i = h.indexOf(a); if (i < 0) throw new Error("not found " + a); const j = h.indexOf(b, i); return h.slice(i, j + b.length); };
// ⚠️ 置換は必ず関数で（文字列で渡すと "NZ$117" の "$1" が後方参照として解釈され、"NZ" ＋ 1つ目のグループに化ける）
const must = (s, re, rep) => { if (!re.test(s)) throw new Error("no match " + re); return s.replace(re, typeof rep === "function" ? rep : () => rep); };
const wrap = (x) => (m, a, b) => a + x + (b ?? "");

// ---- 英語（TOP と同じ）
const langItems = `<li><a href="/" hreflang="en">English</a></li>` +
  LANG_CODES.map((c) => `<li><a href="/${c}/" hreflang="${LANGS[c].htmlLang}">${LANGS[c].label}</a></li>`).join("");
const H = (parts.HOME_TOP + parts.HOME_BOTTOM).replace("<!--LANGS-->", langItems).replace("<!--UPDATED-->", F.updatedLabel);
const header = cut(H, '<div class="trustbar"', "</header>").replace(/<!--[^>]*-->\n?/g, "").replace(/href="#/g, 'href="/#');
const footer = cut(H, '<footer class="footer"', "</footer>");
const cta = cut(H, '<section class="finalcta"', "</section>").replace(/href="#/g, 'href="/#');
const btn = header.match(/<a class="btn" href="([^"]+)"[^>]*>(.*?)<span/s);
const navApply = [...header.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].find((m) => /apply/i.test(m[2]));
const CH = {
  en: { header, footer, cta, aside: { toc: TOC.en, ctaTitle: txt(cta.match(/<h2>(.*?)<\/h2>/s)[1]), ctaBody: txt(cta.match(/<p>(.*?)<\/p>/s)[1]),
    ctaButton: txt(btn[2]), ctaHref: btn[1], subLabel: txt(navApply[2]) + " →", subHref: "/how-to-apply/" } },
};
// 右カラムの「How to apply →」は TOP の欄（/#apply）ではなく手順のページへ
if (!jiti("./data/pages.ts").PAGE_SLUGS.includes("how-to-apply")) throw new Error("/how-to-apply/ が無い");

// ---- 各言語
for (const c of LANG_CODES) {
  const t = LANGS[c];
  let s;
  if (SITE.kind === "nz") {
    const sent = t.disclaimer.match(/[^.。]+[.。]/g) || [t.disclaimer];
    const faq = t.pages.find((p) => p.enSlug === "faq");
    s = { site: t.siteName, sub: null, trust: sent.slice(0, 2).join(" ").trim(), button: t.sticky.button,
      ctaH: t.sticky.title, ctaP: t.sticky.sub, ctaB: t.officialLinkLabel, note: t.disclaimer,
      // 旧フッター（英語の About / Privacy / Terms）と同じ。言語版の規約ページは無い
      fnav: [...(faq ? [[`/${c}/${faq.slug}/`, faq.nav]] : []), ["/about/", "About this guide"], ["/privacy/", "Privacy"], ["/terms/", "Terms"]] };
  } else {
    if (t.pages.length < 4) throw new Error(c + " pages");
    const tail = t.pages.slice(-4); // FAQ ＋ 運営者情報・プライバシー・利用規約（全言語でこの順）
    s = { site: t.header.site, sub: t.header.tagline, trust: `${t.hero.disclaimer} ${t.ui.updatedLabel ?? F.updatedLabel}`, button: t.header.official,
      ctaH: t.cta.h2, ctaP: t.cta.p, ctaB: t.cta.button, note: t.footer.disclaimer, fnav: tail.map((p) => [`/${c}/${p.slug}/`, p.title]) };
  }
  let hd = header;
  hd = must(hd, /(<div class="trustbar"><div class="container">\s*<span>).*?(<\/span>)/s, wrap(esc(s.trust)));
  hd = must(hd, /(<span>)[^<]*(<a href="https?:[^"]+" rel="nofollow noopener" target="_blank">)/, wrap(""));
  hd = must(hd, /<a class="brand" href="\/">/, `<a class="brand" href="/${c}/">`);
  hd = must(hd, /(<span class="name">)[^<]*(<\/span>)/, wrap(esc(s.site)));
  if (s.sub) hd = must(hd, /(<span class="sub">)[^<]*(<\/span>)/, wrap(esc(s.sub)));
  hd = must(hd, /\s*<nav class="nav"[^>]*>.*?<\/nav>/s, "");            // 翻訳済みのメニューが無い → 出さない
  hd = must(hd, /\s*<button class="iconbtn burger".*?<\/button>/s, "");  // メニューが無いのでハンバーガーも出さない
  hd = must(hd, /(<summary class="lang"[^>]*>)EN /, (m, a) => a + esc(c.toUpperCase()) + " ");
  hd = must(hd, /(<a class="btn" href="[^"]+"[^>]*>).*?(<span)/s, wrap(esc(s.button) + " "));
  let ft = footer;
  ft = must(ft, /<a class="brand" href="\/">/, `<a class="brand" href="/${c}/">`);
  ft = must(ft, /(<span class="name">)[^<]*(<\/span>)/, wrap(esc(s.site)));
  if (s.sub) ft = must(ft, /(<span class="sub">)[^<]*(<\/span>)/, wrap(esc(s.sub)));
  ft = must(ft, /(<nav aria-label="Footer">\s*).*?(\s*<\/nav>)/s, wrap(s.fnav.map(([h, l]) => `<a href="${h}">${esc(l)}</a>`).join("")));
  ft = must(ft, /(<p class="note">).*?(<\/p>)/s, wrap(esc(s.note)));
  let ct = cta;
  ct = must(ct, /\s*<span class="eyebrow">.*?<\/span>/s, "");
  ct = must(ct, /(<h2>).*?(<\/h2>)/s, wrap(esc(s.ctaH)));
  ct = must(ct, /(<p>).*?(<\/p>)/s, wrap(esc(s.ctaP)));
  ct = must(ct, /(<a class="btn btn--ghost" href="[^"]+"[^>]*>).*?(<span)/s, wrap(esc(s.ctaB) + " "));
  if (!TOC[c]) throw new Error("TOC label missing: " + c);
  CH[c] = { header: hd, footer: ft, cta: ct, aside: { toc: TOC[c], ctaTitle: s.ctaH, ctaBody: s.ctaP, ctaButton: s.button, ctaHref: btn[1],
    subLabel: s.site + " →", subHref: `/${c}/` } };
}

const out = `// 自動生成: scripts/gen-chrome.cjs（元＝~/projects/eta-se-redesign/rollout/gen-chrome-en3.cjs）。手で直さない
// 下層ページの新デザイン（okina 2026-10-21）用：TOP と同じヘッダー・フッター・申請欄の HTML と右カラムの文言（言語別）
export type AsideText = { toc: string; ctaTitle: string; ctaBody: string; ctaButton: string; ctaHref: string; subLabel: string; subHref: string };
export type Chrome = { header: string; footer: string; cta: string; aside: AsideText };
/** TOP と同じ配色（.etahome[data-c=…]） */
export const DATA_C = ${JSON.stringify(SITE.c)};
/** TOP と同じ Google Fonts（app/page.tsx と同じ URL） */
export const FONTS = ${JSON.stringify(FONTS)};
export const CHROME: Record<string, Chrome> = ${JSON.stringify(CH, null, 1)};
/** URL の1階層目（"de" 等）からその言語の枠を返す。言語でなければ英語 */
export function chromeFor(seg?: string): Chrome {
  return (seg && CHROME[seg]) || CHROME.en;
}
`;
fs.writeFileSync("lib/chrome-l10n.ts", out);
for (const [k, v] of Object.entries(CH)) console.log(k, "|", v.aside.ctaTitle, "|", v.aside.ctaButton, "|", v.aside.subLabel, v.aside.subHref);
