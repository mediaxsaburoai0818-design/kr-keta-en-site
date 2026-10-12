/**
 * K-ETA（韓国電子旅行許可）の事実。ページ側に数値を直書きしない。
 *
 * ⚠️ 数値は必ず一次情報（k-eta.go.kr／在外公館の告示）で裏を取ってから変える。
 * ⚠️ K-ETAがNZeTA・eVisitorと決定的に違う点が2つある。書き分けを崩さないこと。
 *    ①**いま多くの国が一時免除中**（米・英・独・豪・加・台など。2026年12月31日まで）
 *      → 「今すぐ必要」と書くと嘘になる。免除の有無を最初に判定させる構成にしている。
 *    ②**滞在できる日数はK-ETAでは決まらない**。国籍ごとのビザ免除協定で決まる
 *      （おおむね30〜90日）。NZeTA=90日/eVisitor=3か月のように単一の数字を出せない。
 * ⚠️ 免除対象の国数は報道で22か国とも67か国とも書かれており一致しない。
 *    数を断定せず「現在免除の国・地域」と書き、公式の一覧に案内する。
 */
export const FACTS = {
  fee: "KRW 10,000",
  feeUsdApprox: "about US$7–8",
  validYears: 3,
  /** 審査の目安。公式表記は「一般的に72時間以内」 */
  decisionTypical: "72 hours",
  /** 一時免除の期限 */
  exemptionUntil: "31 December 2026",
  exemptionUntilIso: "2026-12-31",
  stayRange: "30 to 90 days",

  /* ── 入国・滞在の実務（2026-09-08 公式で裏取り。出典は各ページに明記する） ──
     ⚠️ 罰則と免税枠は間違えると読者に実害が出る。必ず一次情報を確認してから変えること。 */

  /** 検疫（動植物検疫本部）: 申告漏れは家畜伝染病予防法により最大500万ウォン */
  quarantineMaxFine: "KRW 5 million",
  quarantineLaw: "Contagious Animal Diseases Prevention Act",

  /** 税関（関税庁）の免税枠 */
  customsGoodsAllowance: "US$800",
  customsAlcoholLitres: 2,
  customsAlcoholValue: "US$400",
  customsCigarettes: 200,
  customsPerfumeMl: 100,
  /** 19歳未満（生年基準）は酒・たばこの免税対象外 */
  customsAgeMin: 19,

  /* ── 入国後の実用ページ（ETA横展開バッチ・2026-10-12 公式で裏取り）
     ファクト・出典URL＝~/projects/kr-entry-facts-2026-10-12.md（生ログ raw-A〜D） ── */
  /** 到着時の指紋・顔情報の提供（出入国管理法12条の2）。17歳未満は免除 */
  biometricsMinAge: 17,
  /** 到着自動審査（K-自動入国審査）: 42か国・地域の17歳以上の無査証入国者。仁川T1/T2・済州で当日登録 */
  egateMinAge: 17,
  egateCountries: 42,
  egateSince: "16 March 2026",
  /** K-ETAの年齢免除（2023-07-03〜・入国日基準） */
  ketaChildMaxAge: 17,
  ketaSeniorMinAge: 65,
  /** 電子入国申告書（e-Arrival card）: 到着3日前（KST・到着日を含む）から。提出から72時間で失効 */
  earrivalDaysBefore: 3,
  earrivalValidHours: 72,
  /** 機内持込液体物（仁川空港公社） */
  liquidMl: "100 ml",
  liquidBag: "1 litre",
  babyItemsMaxAge: 6,
  /** モバイルバッテリー（国土交通部 2026-04-20〜） */
  powerBankMax: 2,
  powerBankWh: "160 Wh",
  powerBankSince: "20 April 2026",
  /** 現金等の申告（関税庁）: 合計がこの額を「超える」と申告 */
  cashDeclareOver: "US$10,000",
  cashAdminFineMax: "KRW 50 million",
  cashCriminalOver: "US$30,000",
  /** 外国人観光客の税金還付（特例規定・2024-01-01改正値） */
  taxRefundMin: "KRW 15,000",
  immediateRefundPerPurchase: "KRW 1,000,000",
  immediateRefundTotal: "KRW 5,000,000",
  taxRefundExportMonths: 3,
  downtownRefundCap: "KRW 6,000,000",
  /** 喫煙・飲酒 */
  smokingFine: "KRW 100,000",
  bacLimit: "0.03%",
  /** 自家用医薬品（関税庁）: 6本または用法上3か月分 */
  medsBottles: 6,
  medsMonths: 3,
  updated: "2026-08-17",
  updatedLabel: "17 August 2026",
  /** 申請先。公式（.go.kr）以外に窓口は無いので、CTAは全部ここを指す */
  officialUrl: "https://www.k-eta.go.kr/portal/apply/index.do",
  officialHost: "k-eta.go.kr",
} as const;

/** canonical・OG・sitemap で使う本番URL（2026-08-17 okina取得）。 */
export const SITE = "https://k-eta-online.com";

/** og:image（全ページ共通・ヒーロー画像）。公開前チェックで全ページに必須 */
export const OG_IMAGES = [{ url: `${SITE}/images/hero-kr.jpg`, width: 1920, height: 901 }];
