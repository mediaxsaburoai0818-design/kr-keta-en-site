// 自動生成: scripts/gen-chrome.cjs（元＝~/projects/eta-se-redesign/rollout/gen-chrome-en3.cjs）。手で直さない
// 下層ページの新デザイン（okina 2026-10-21）用：TOP と同じヘッダー・フッター・申請欄の HTML と右カラムの文言（言語別）
export type AsideText = { toc: string; ctaTitle: string; ctaBody: string; ctaButton: string; ctaHref: string; subLabel: string; subHref: string };
export type Chrome = { header: string; footer: string; cta: string; aside: AsideText };
/** TOP と同じ配色（.etahome[data-c=…]） */
export const DATA_C = "B";
/** TOP と同じ Google Fonts（app/page.tsx と同じ URL） */
export const FONTS = "https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;700;900&family=Manrope:wght@400;500;600;700;800&family=Nanum+Brush+Script&display=swap";
export const CHROME: Record<string, Chrome> = {
 "en": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>Independent guide. Not affiliated with the Korean Government or k-eta.go.kr.</span>\n  <span>Official site: <a href=\"https://www.k-eta.go.kr/portal/apply/index.do\" rel=\"nofollow noopener\" target=\"_blank\">k-eta.go.kr ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"48\" height=\"48\">\n    <span>\n      <span class=\"name\">K-ETA Guide</span>\n      <span class=\"sub\">Korea Electronic Travel Authorization</span>\n    </span>\n  </a>\n  <nav class=\"nav\" aria-label=\"Main menu\">\n    <a href=\"/#overview\">Overview</a>\n    <a href=\"/#need-it\">Do I need one?</a>\n    <a href=\"/#requirements\">What you need</a>\n    <a href=\"/#apply\">How to apply</a>\n    <a href=\"/#border\">Length of stay</a>\n    <a href=\"/faq/\">FAQ</a>\n    <a href=\"/arriving-in-korea/\">After you land</a>\n  </nav>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">EN <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/fr/\" hreflang=\"fr\">Français</a></li><li><a href=\"/zh-cn/\" hreflang=\"zh-Hans\">简体中文</a></li><li><a href=\"/zh-tw/\" hreflang=\"zh-Hant\">繁體中文</a></li></ul></details>\n    <button class=\"iconbtn burger\" type=\"button\" aria-label=\"Menu\" aria-expanded=\"false\" aria-controls=\"nav\">\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M3 6h18M3 12h18M3 18h18\"/></svg>\n    </button>\n    <a class=\"btn\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">Official site <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">K-ETA Guide</span><span class=\"sub\">Korea Electronic Travel Authorization</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/arriving-in-korea/\">After you land</a><a href=\"/faq/\">FAQ</a><a href=\"/about/\">About</a><a href=\"/privacy/\">Privacy</a><a href=\"/terms/\">Terms</a>\n  </nav>\n  <p class=\"note\">This is an independent guide. It is not affiliated with the Korean Government, the Korea Immigration Service or k-eta.go.kr, and we do not submit applications. Only k-eta.go.kr and the official K-ETA app are genuine application channels. Figures checked 17 August 2026.</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <span class=\"eyebrow\">Before you fly</span>\n    <h2>Check the official list first</h2>\n    <p>Only k-eta.go.kr and the official K-ETA app are genuine. We are an independent guide and cannot apply on your behalf.</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">Open k-eta.go.kr <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "On this page",
   "ctaTitle": "Check the official list first",
   "ctaBody": "Only k-eta.go.kr and the official K-ETA app are genuine. We are an independent guide and cannot apply on your behalf.",
   "ctaButton": "Official site",
   "ctaHref": "https://www.k-eta.go.kr/portal/apply/index.do",
   "subLabel": "How to apply →",
   "subHref": "/how-to-apply/"
  }
 },
 "de": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>Unabhängiger Ratgeber · keine Verbindung zur südkoreanischen Regierung · Stand 17. August 2026</span>\n  <span><a href=\"https://www.k-eta.go.kr/portal/apply/index.do\" rel=\"nofollow noopener\" target=\"_blank\">k-eta.go.kr ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/de/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"48\" height=\"48\">\n    <span>\n      <span class=\"name\">K-ETA Ratgeber</span>\n      <span class=\"sub\">Südkorea · Elektronische Reisegenehmigung (K-ETA)</span>\n    </span>\n  </a>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">DE <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/fr/\" hreflang=\"fr\">Français</a></li><li><a href=\"/zh-cn/\" hreflang=\"zh-Hans\">简体中文</a></li><li><a href=\"/zh-tw/\" hreflang=\"zh-Hant\">繁體中文</a></li></ul></details>\n    <a class=\"btn\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">Offizielle Seite <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/de/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">K-ETA Ratgeber</span><span class=\"sub\">Südkorea · Elektronische Reisegenehmigung (K-ETA)</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/de/keta-faq/\">K-ETA: häufig gestellte Fragen</a><a href=\"/de/impressum/\">Impressum und Angaben zur Website</a><a href=\"/de/datenschutz/\">Datenschutzerklärung</a><a href=\"/de/nutzungsbedingungen/\">Nutzungsbedingungen</a>\n  </nav>\n  <p class=\"note\">Unabhängiger Ratgeber. Keine Verbindung zur südkoreanischen Regierung, zur Einwanderungsbehörde oder zu k-eta.go.kr. Wir nehmen keine Anträge entgegen — beantragen Sie ausschließlich über die offiziellen Kanäle.</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <h2>Prüfen Sie Ihren Status auf der offiziellen Seite</h2>\n    <p>Nur k-eta.go.kr und die offizielle App sind echte Kanäle. Dieser Ratgeber ist unabhängig und nimmt keine Anträge entgegen.</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">k-eta.go.kr öffnen <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "Auf dieser Seite",
   "ctaTitle": "Prüfen Sie Ihren Status auf der offiziellen Seite",
   "ctaBody": "Nur k-eta.go.kr und die offizielle App sind echte Kanäle. Dieser Ratgeber ist unabhängig und nimmt keine Anträge entgegen.",
   "ctaButton": "Offizielle Seite",
   "ctaHref": "https://www.k-eta.go.kr/portal/apply/index.do",
   "subLabel": "K-ETA Ratgeber →",
   "subHref": "/de/"
  }
 },
 "fr": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>Guide indépendant · sans lien avec le gouvernement coréen · mise à jour 17 août 2026</span>\n  <span><a href=\"https://www.k-eta.go.kr/portal/apply/index.do\" rel=\"nofollow noopener\" target=\"_blank\">k-eta.go.kr ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/fr/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"48\" height=\"48\">\n    <span>\n      <span class=\"name\">Guide K-ETA</span>\n      <span class=\"sub\">Corée du Sud · autorisation électronique de voyage (K-ETA)</span>\n    </span>\n  </a>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">FR <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/fr/\" hreflang=\"fr\">Français</a></li><li><a href=\"/zh-cn/\" hreflang=\"zh-Hans\">简体中文</a></li><li><a href=\"/zh-tw/\" hreflang=\"zh-Hant\">繁體中文</a></li></ul></details>\n    <a class=\"btn\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">Site officiel <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/fr/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">Guide K-ETA</span><span class=\"sub\">Corée du Sud · autorisation électronique de voyage (K-ETA)</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/fr/keta-faq/\">K-ETA : questions fréquentes</a><a href=\"/fr/a-propos/\">À propos du site et de son éditeur</a><a href=\"/fr/confidentialite/\">Politique de confidentialité</a><a href=\"/fr/conditions/\">Conditions d'utilisation</a>\n  </nav>\n  <p class=\"note\">Guide indépendant. Sans lien avec le gouvernement sud-coréen, les services d'immigration ou k-eta.go.kr. Nous ne traitons aucune demande : passez exclusivement par les canaux officiels.</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <h2>Vérifiez votre situation sur le site officiel</h2>\n    <p>Seuls k-eta.go.kr et l'application officielle sont de vrais canaux. Ce guide est indépendant et ne traite aucune demande.</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">Ouvrir k-eta.go.kr <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "Sur cette page",
   "ctaTitle": "Vérifiez votre situation sur le site officiel",
   "ctaBody": "Seuls k-eta.go.kr et l'application officielle sont de vrais canaux. Ce guide est indépendant et ne traite aucune demande.",
   "ctaButton": "Site officiel",
   "ctaHref": "https://www.k-eta.go.kr/portal/apply/index.do",
   "subLabel": "Guide K-ETA →",
   "subHref": "/fr/"
  }
 },
 "zh-cn": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>独立信息网站 · 与韩国政府无关 · 资料核对日 2026年8月17日</span>\n  <span><a href=\"https://www.k-eta.go.kr/portal/apply/index.do\" rel=\"nofollow noopener\" target=\"_blank\">k-eta.go.kr ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/zh-cn/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"48\" height=\"48\">\n    <span>\n      <span class=\"name\">K-ETA 指南</span>\n      <span class=\"sub\">韩国 · 电子旅行许可（K-ETA）</span>\n    </span>\n  </a>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">ZH-CN <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/fr/\" hreflang=\"fr\">Français</a></li><li><a href=\"/zh-cn/\" hreflang=\"zh-Hans\">简体中文</a></li><li><a href=\"/zh-tw/\" hreflang=\"zh-Hant\">繁體中文</a></li></ul></details>\n    <a class=\"btn\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">官方网站 <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/zh-cn/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">K-ETA 指南</span><span class=\"sub\">韩国 · 电子旅行许可（K-ETA）</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/zh-cn/keta-faq/\">K-ETA 常见问题（简体中文）</a><a href=\"/zh-cn/site-info/\">网站与运营者信息</a><a href=\"/zh-cn/privacy/\">隐私政策</a><a href=\"/zh-cn/terms/\">使用条款</a>\n  </nav>\n  <p class=\"note\">本站为独立信息网站，与韩国政府、韩国出入境管理机关及 k-eta.go.kr 无关，不代办申请。请务必通过官方管道办理。</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <h2>先确认自己适用哪一种制度</h2>\n    <p>K-ETA 的官方管道只有 k-eta.go.kr 与官方应用程序。本站为独立信息网站，不代办申请、不收取任何费用。</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">打开 k-eta.go.kr <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "本页内容",
   "ctaTitle": "先确认自己适用哪一种制度",
   "ctaBody": "K-ETA 的官方管道只有 k-eta.go.kr 与官方应用程序。本站为独立信息网站，不代办申请、不收取任何费用。",
   "ctaButton": "官方网站",
   "ctaHref": "https://www.k-eta.go.kr/portal/apply/index.do",
   "subLabel": "K-ETA 指南 →",
   "subHref": "/zh-cn/"
  }
 },
 "zh-tw": {
  "header": "<div class=\"trustbar\"><div class=\"container\">\n  <span>獨立資訊網站 · 與韓國政府無關 · 資料核對日 2026年8月17日</span>\n  <span><a href=\"https://www.k-eta.go.kr/portal/apply/index.do\" rel=\"nofollow noopener\" target=\"_blank\">k-eta.go.kr ↗</a></span>\n</div></div>\n\n<header class=\"header\"><div class=\"container\">\n  <a class=\"brand\" href=\"/zh-tw/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"48\" height=\"48\">\n    <span>\n      <span class=\"name\">K-ETA 指南</span>\n      <span class=\"sub\">韓國 · 電子旅行許可（K-ETA）</span>\n    </span>\n  </a>\n  <div class=\"spacer\"></div>\n  <div class=\"tools\">\n    <details class=\"langmenu\"><summary class=\"lang\" aria-label=\"Change language\">ZH-TW <span aria-hidden=\"true\">⌄</span></summary><ul><li><a href=\"/\" hreflang=\"en\">English</a></li><li><a href=\"/de/\" hreflang=\"de\">Deutsch</a></li><li><a href=\"/fr/\" hreflang=\"fr\">Français</a></li><li><a href=\"/zh-cn/\" hreflang=\"zh-Hans\">简体中文</a></li><li><a href=\"/zh-tw/\" hreflang=\"zh-Hant\">繁體中文</a></li></ul></details>\n    <a class=\"btn\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">官方網站 <span class=\"arrow\" aria-hidden=\"true\">→</span></a>\n  </div>\n</div></header>",
  "footer": "<footer class=\"footer\"><div class=\"container\">\n  <a class=\"brand\" href=\"/zh-tw/\">\n    <img src=\"/home/logo.png\" alt=\"\" width=\"30\" height=\"30\">\n    <span><span class=\"name\">K-ETA 指南</span><span class=\"sub\">韓國 · 電子旅行許可（K-ETA）</span></span>\n  </a>\n  <nav aria-label=\"Footer\">\n    <a href=\"/zh-tw/keta-faq/\">K-ETA 常見問題</a><a href=\"/zh-tw/site-info/\">網站與營運者資訊</a><a href=\"/zh-tw/privacy/\">隱私權政策</a><a href=\"/zh-tw/terms/\">使用條款</a>\n  </nav>\n  <p class=\"note\">本站為獨立資訊網站，與韓國政府、韓國出入境管理機關及 k-eta.go.kr 無關，不代辦申請。請務必透過官方管道辦理。</p>\n</div></footer>",
  "cta": "<section class=\"finalcta\">\n  <div class=\"bg\"><img src=\"/home/cta-bg.webp\" alt=\"\" width=\"2000\" height=\"849\" loading=\"lazy\" aria-hidden=\"true\"></div>\n  <div class=\"container\">\n    <h2>先到官方網站確認自己的狀態</h2>\n    <p>只有 k-eta.go.kr 與官方應用程式是正式管道。本站為獨立資訊網站，不代為申請。</p>\n    <div class=\"row\"><a class=\"btn btn--ghost\" href=\"https://www.k-eta.go.kr/portal/apply/index.do\" target=\"_blank\" rel=\"nofollow noopener\">開啟 k-eta.go.kr <span class=\"arrow\" aria-hidden=\"true\">→</span></a></div>\n  </div>\n</section>",
  "aside": {
   "toc": "本頁內容",
   "ctaTitle": "先到官方網站確認自己的狀態",
   "ctaBody": "只有 k-eta.go.kr 與官方應用程式是正式管道。本站為獨立資訊網站，不代為申請。",
   "ctaButton": "官方網站",
   "ctaHref": "https://www.k-eta.go.kr/portal/apply/index.do",
   "subLabel": "K-ETA 指南 →",
   "subHref": "/zh-tw/"
  }
 }
};
/** URL の1階層目（"de" 等）からその言語の枠を返す。言語でなければ英語 */
export function chromeFor(seg?: string): Chrome {
  return (seg && CHROME[seg]) || CHROME.en;
}
