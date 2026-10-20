"use client";
import { usePathname } from "next/navigation";
import { chromeFor, DATA_C } from "@/lib/chrome-l10n";

/** 下層ページ・言語ページのフッター（okina 2026-10-21）。TOP と同じ HTML。言語ページではその言語の免責・規約ページへのリンクになる。
 *  ⚠️ 公式ではないことの明示は必須（.note）。旧フッターは git の履歴にある（2026-10-21 以前）。 */
export default function Footer() {
  const seg = (usePathname() || "/").split("/")[1];
  return <div className="etahome" data-c={DATA_C} data-pat="1" dangerouslySetInnerHTML={{ __html: chromeFor(seg).footer }} />;
}
