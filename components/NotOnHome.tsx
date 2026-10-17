"use client";
import { usePathname } from "next/navigation";

// TOP（"/"）は新デザインが自前のヘッダー・フッターを持つので、layout 共通のものは出さない
export default function NotOnHome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  return pathname === "/" ? null : <>{children}</>;
}
