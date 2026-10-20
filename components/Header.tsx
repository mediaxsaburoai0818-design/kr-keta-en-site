"use client";
import { usePathname } from "next/navigation";
import HomeChrome from "@/components/HomeChrome";
import { chromeFor, DATA_C, FONTS } from "@/lib/chrome-l10n";

/** 下層ページ・言語ページのヘッダー（okina 2026-10-21「下層も新デザインに」）。TOP と同じ HTML（lib/chrome-l10n.ts＝scripts/gen-chrome.cjs が生成）。
 *  言語は URL の1階層目で選ぶ（/de/… ならドイツ語の枠）。旧ヘッダーは git の履歴にある（2026-10-21 以前）。
 *  ⚠️ ここは client 部品。data/langs を import すると全言語の本文がブラウザに送られるので、生成済みの文言だけを使う。 */
export default function Header() {
  const seg = (usePathname() || "/").split("/")[1];
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href={FONTS} rel="stylesheet" precedence="default" />
      <div className="etahome" data-c={DATA_C} data-pat="1" dangerouslySetInnerHTML={{ __html: chromeFor(seg).header }} />
      <HomeChrome />
    </>
  );
}
