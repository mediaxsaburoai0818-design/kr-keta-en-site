import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * 繁体字（/zh-tw/）の入国後実用ページ（ETA横展開バッチ④K-ETA・2026-10-12）。
 * 読者＝台湾パスポート保持者。英語版 data/pages-practical.ts と事実は同一。
 * ファクト＝~/projects/kr-entry-facts-2026-10-12.md（zh-tw の書き分け行）
 *
 * ⚠️ 台湾は K-ETA の一時免除対象（2026-12-31まで）→ いまは入国申告書（入境卡）を出す側。
 * ⚠️ 到着自動ゲートの対象（2025-11 の最初の4か国・地域＝独・台・港・澳のひとつ）。
 * ⚠️ 運転＝BOCA「台湾発行の国際運転免許は相互承認・自用小客車を運転可」が主役（入国から1年）。
 * ⚠️ 医療＝台湾の観光客を対象にした協定は見つからない → 保険が前提。
 * ⚠️ 1330 は韓国国内でそのまま発信（BOCA の「手機請先撥02」は古いので書かない）。海外から +82-2-1330。
 * ⚠️ 数値は F 経由。現地表記は下の定数（値は F と同じものを指す）。スラッグは英語と同じ。
 */

/** 表記のローカライズ。⚠️ 値は FACTS と同じものを指す（別の数字を書かない）。 */
const CHECKED = "2026年10月12日";
const EXEMPT_UNTIL = "2026年12月31日"; // = F.exemptionUntil
const EGATE_SINCE = "2026年3月16日"; // = F.egateSince
const POWER_BANK_SINCE = "2026年4月20日"; // = F.powerBankSince
const LIQUID_ML = "100 毫升"; // = F.liquidMl
const LIQUID_BAG = "1 公升"; // = F.liquidBag
const CASH_DECLARE_OVER = "1 萬美元"; // = F.cashDeclareOver
const CASH_ADMIN_FINE_MAX = "5,000 萬韓元"; // = F.cashAdminFineMax
const CASH_CRIMINAL_OVER = "3 萬美元"; // = F.cashCriminalOver
const TAX_REFUND_MIN = "15,000 韓元"; // = F.taxRefundMin
const IMMEDIATE_PER_PURCHASE = "100 萬韓元"; // = F.immediateRefundPerPurchase
const IMMEDIATE_TOTAL = "500 萬韓元"; // = F.immediateRefundTotal
const DOWNTOWN_CAP = "600 萬韓元"; // = F.downtownRefundCap
const SMOKING_FINE = "10 萬韓元"; // = F.smokingFine
const GOODS_ALLOWANCE = "800 美元"; // = F.customsGoodsAllowance
const ALCOHOL_VALUE = "400 美元"; // = F.customsAlcoholValue

const HUB = "arriving-in-korea";

export const zhTwPractical: PracticalPack = {
  ui: { faq: "常見問題", source: "資料來源", related: "相關頁面" },
  articles: [
    {
      slug: HUB,
      enSlug: HUB,
      title: "抵達韓國之後：台灣旅客的入境與旅遊實用指南",
      description: "K-ETA 只管你能不能登機。入境卡、自動通關、現金、退稅、交通、醫療與緊急狀況，依韓國官方資料整理。",
      checked: CHECKED,
      practical: false,
      related: ["arrival-card-and-e-gates", "keta-exemption-2026", "korea-entry-stay"],
      blocks: [
        {
          p: `台灣目前在 K-ETA 暫時免除名單內，期限到 ${EXEMPT_UNTIL}。不論是免除還是持有 K-ETA，回答的都只是一件事：你能不能不辦簽證搭機前往韓國。至於在機場會遇到什麼、可以帶什麼、怎麼付款、怎麼移動、出事時該怎麼辦，K-ETA 並不會告訴你。以下各頁就是在補這一塊，每一頁都對照了負責的韓國政府單位，並附上連結。`,
        },
        { h2: "入境關口" },
        { links: ["arrival-card-and-e-gates", "bringing-medicines", "travelling-with-children", "keta-exemption-2026"] },
        { h2: "錢的事" },
        { links: ["money-and-tipping", "tax-refund-for-tourists"] },
        { h2: "交通與聯絡" },
        { links: ["transport-cards", "driving-in-korea", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
        { h2: "健康與安全" },
        { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
        { h2: "搭機回國" },
        { links: ["airport-security-liquids", "korea-entry-stay"] },
        {
          note: "我們沒有另外寫的主題：護照效期。韓國法律要求持有效護照入境，但我們沒有找到官方針對免簽旅客規定的最低剩餘效期。航空公司與轉機國家可能另有規定，訂票前請向航空公司確認。",
        },
      ],
      faq: [
        {
          q: "台灣護照現在去韓國，入境時要準備什麼？",
          a: `在 ${EXEMPT_UNTIL} 前，台灣護照不需要 K-ETA，但因為沒有 K-ETA，入境時要繳交入境卡（可線上填寫電子入境卡或填紙本）。年滿 ${F.egateMinAge} 歲也可以在機場登記使用自動通關閘門，詳見入境卡與自動通關那一頁。`,
        },
        {
          q: "這些頁面的資料從哪裡來？",
          a: "每一頁都對照了負責該主題的韓國政府單位（例如法務部、關稅廳、食品醫藥品安全處、韓國觀光公社），並在頁中列出資料來源連結。",
        },
      ],
    },
    {
      slug: "arrival-card-and-e-gates",
      enSlug: "arrival-card-and-e-gates",
      title: "韓國入境卡與自動通關：台灣旅客要填什麼、能不能免排隊",
      description: `沒有 K-ETA 就要交入境卡（抵達前 ${F.earrivalDaysBefore} 天起可線上填）。台灣在自動通關名單內，${F.egateMinAge} 歲以上可在機場登記。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "travelling-with-children", "keta-exemption-2026"],
      blocks: [
        {
          p: "入境韓國時順不順利，決定的關鍵其實不是 K-ETA 本身，而是兩件事：你需不需要交入境卡，以及能不能走自動通關閘門而不必排人工櫃檯。",
        },
        { h2: "誰要交入境卡" },
        {
          p: "原則上，所有入境韓國的外國人都要繳交入境卡。對旅客來說，主要的例外是持有有效的 K-ETA：持 K-ETA 以免簽方式入境的人不用交。其他人都要交——包括不需要 K-ETA 的人。",
        },
        {
          ul: [
            `適用 K-ETA 暫時免除的國家與地區（到 ${EXEMPT_UNTIL}），台灣也在其中——要交入境卡`,
            `入境當天 ${F.ketaChildMaxAge} 歲以下或 ${F.ketaSeniorMinAge} 歲以上、依年齡免辦 K-ETA 的人——要交入境卡`,
            "持簽證入境的人——要交（即使剛好持有 K-ETA，但以簽證入境也一樣）",
            "持有效 K-ETA 以免簽方式入境的人——不用交",
          ],
        },
        {
          note: "這是免除期間仍去申請 K-ETA 唯一實際的好處：韓國官方表示，免除對象也可以自願申請、繳費，入境時就不必交入境卡。值不值得由你自己判斷——入境卡本身免費，幾分鐘就能填完。",
        },
        { h2: "電子入境卡（e-Arrival card）" },
        {
          ul: [
            `在 e-arrivalcard.go.kr 填寫，抵達前 ${F.earrivalDaysBefore} 天起即可提交，以韓國時間計算並包含抵達當天（31 日抵達：29、30、31 日都可以填）`,
            "免費。官方網站支援電腦與手機網頁，沒有 App",
            "效力與紙本入境卡相同，想填紙本也仍然可以",
            `提交後 ${F.earrivalValidHours} 小時失效，通過入境審查後也會失效——每次入境都要重新填寫`,
            "落地之後、走到入境審查櫃檯之前，都還可以提交",
            "它和 K-ETA 是不同的系統。把兩者綁在一起收費的網站並非官方網站",
          ],
        },
        { source: { label: "法務部 — 電子入境卡使用說明", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do" } },
        { source: { label: "法務部 — 電子入境卡填寫對象", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "指紋與臉部照片" },
        {
          p: `年滿 ${F.biometricsMinAge} 歲的外國人入境韓國時，要掃描兩手食指的指紋並拍攝臉部照片。未滿 ${F.biometricsMinAge} 歲的兒童免除。`,
        },
        { source: { label: "韓國出入境外國人政策本部 — 外國人指紋確認制度", url: "https://www.immigration.go.kr/immigration/2429/subview.do" } },
        { h2: "台灣旅客可以用入境自動通關" },
        {
          p: `台灣是最早開放的對象之一：韓國法務部在 2025 年 11 月於仁川機場入境審查區設立登記中心時，最先開放的就是德國、台灣、香港、澳門 4 個國家與地區。自 ${EGATE_SINCE} 起，對象擴大到 ${F.egateCountries} 個國家與地區，以免簽方式入境、年滿 ${F.egateMinAge} 歲的旅客可以在抵達時當場登記，之後就能使用入境自動通關閘門。名單還包括歐盟與申根國家、英國、加拿大、日本、香港、澳門、新加坡、阿聯、墨西哥、澳洲與紐西蘭；美國不在名單內。`,
        },
        {
          ul: [
            "登記櫃台設在仁川機場（第一、第二航廈）與濟州機場的入境審查區",
            "步驟：掃描護照、登錄指紋、登錄臉部——然後就可以走自動通關閘門",
            "登記一次後，之後再訪韓國也可以使用，包括其他機場",
          ],
        },
        { h2: "出境自動通關" },
        {
          p: `出境更簡單：年滿 ${F.egateMinAge} 歲的短期旅客不必事先登記，就可以使用出境自動通關閘門。`,
        },
        { source: { label: "法務部新聞稿（2026年3月16日）— 入境自動通關開放至 42 個國家（韓文，PDF）", url: "https://www.immigration.go.kr/bbs/moj/182/491982/download.do" } },
        { source: { label: "韓國出入境外國人政策本部 — 自動出入境審查（SES）", url: "https://www.immigration.go.kr/immigration/1527/subview.do" } },
        {
          note: "使用自動通關不會改變你的停留條件。可停留天數仍然來自台灣與韓國之間的免簽安排，而且能不能走自動通關，也不是由 K-ETA 決定的。",
        },
      ],
      faq: [
        {
          q: "台灣在 K-ETA 免除名單內，還要填入境卡嗎？",
          a: "要。適用暫時免除的旅客，以及依年齡免辦 K-ETA 的兒童與長者，都必須繳交入境卡——可線上填寫電子入境卡或填紙本。只有持有效 K-ETA 以免簽方式入境的人可以免交。",
        },
        {
          q: "台灣護照可以用韓國的入境自動通關嗎？",
          a: `可以。台灣在 ${F.egateCountries} 個國家與地區的名單內，年滿 ${F.egateMinAge} 歲、以免簽方式入境，就能在仁川（第一、第二航廈）或濟州機場的入境審查區當場登記後使用。出境自動通關則不必事先登記。`,
        },
        {
          q: "電子入境卡和 K-ETA 是同一個東西嗎？",
          a: "不是。電子入境卡是免費的入境申報，只適用一次入境；K-ETA 是需要付費的旅行許可，效期最長三年。官方網站也明確說明兩者不同。",
        },
      ],
    },
    {
      slug: "airport-security-liquids",
      enSlug: "airport-security-liquids",
      title: `從韓國搭機回國：${LIQUID_ML}液體規定與行動電源 ${F.powerBankMax} 個上限`,
      description: `手提行李的液體：每瓶 ${LIQUID_ML}以下，裝進 1 個 ${LIQUID_BAG}密封袋。${POWER_BANK_SINCE}起行動電源每人最多 ${F.powerBankMax} 個，機上禁止充電。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "tax-refund-for-tourists", "bringing-medicines"],
      blocks: [
        {
          p: "韓國機場的液體安檢規定和國際上常見的一樣。2026 年改變的是行動電源：韓國現在的規定屬於最嚴格的一類，而且已被採納為國際標準。",
        },
        { h2: "手提行李中的液體（國際線）" },
        {
          ul: [
            `每個容器 ${LIQUID_ML}以下——看的是容器容量，不是裡面剩多少`,
            `所有容器裝進每人 1 個、容量 ${LIQUID_BAG}以下的透明可密封塑膠袋`,
            "液狀或膠狀的食品也算——辣椒醬、泡菜都包括在內",
            "韓國國內線沒有液體限制",
          ],
        },
        { h2: "例外" },
        {
          ul: [
            `${F.babyItemsMaxAge} 歲以下兒童的用品——牛奶、水、果汁、嬰兒食品、濕紙巾——可攜帶航程所需的量`,
            `超過 ${LIQUID_ML}的液體藥品（例如胰島素），附韓文或英文的醫師證明或處方箋，可攜帶機上所需的量；其餘放託運行李`,
            "免稅店買的液體不論容量，必須裝在密封的免稅品專用袋內，在登上飛往最終目的地的航班前不可拆封",
          ],
        },
        {
          note: "如果在其他機場轉機，就要依照當地機場的規定，即使在仁川沒問題，液體也可能在轉機地被沒收。要轉機的人買免稅品前，請先向航空公司確認。",
        },
        { source: { label: "仁川國際機場 — 限制攜帶物品（韓文）", url: "https://www.airport.kr/ap_ko/906/subview.do" } },
        { source: { label: "仁川國際機場 — 限制攜帶物品常見問題（韓文）", url: "https://www.airport.kr/ap_ko/907/subview.do" } },
        { h2: `${POWER_BANK_SINCE}起的行動電源規定` },
        {
          ul: [
            `每人最多 ${F.powerBankMax} 個，每個 ${F.powerBankWh} 以下`,
            "100 Wh 以上、160 Wh 以下的行動電源需經航空公司同意；超過 160 Wh 則完全不能攜帶",
            "只能放手提行李——行動電源不能託運",
            "機上不能替行動電源充電，也不能用它替手機或其他裝置充電",
          ],
        },
        {
          p: "韓國是在 2025 年 1 月釜山航空班機發生行動電源起火事故後，推出這項規定。國際民航組織（ICAO）於 2026 年 3 月 27 日將其納入危險物品技術規範。有些國家已經實施更嚴格的規定，回程那一段也請確認航空公司的限制。",
        },
        { source: { label: "國土交通部 — 行動電源規定（2026年4月8日，韓文）", url: "https://www.molit.go.kr/USR/NEWS/m_71/dtl.jsp?lcmspage=1&id=95091874" } },
        {
          note: `你可能看過「韓國機場因為引進新型掃描機而放寬液體限制」的說法。我們在國土交通部與仁川機場的網站上都找不到這項資訊，兩者仍寫著 ${LIQUID_ML}的規定——請照這個規定準備。`,
        },
      ],
      faq: [
        {
          q: "泡菜可以放手提行李嗎？",
          a: `只能裝在 ${LIQUID_ML}以下的容器、放進 ${LIQUID_BAG}的袋子裡——仁川機場把它當作液狀食品。量多的話請放託運行李。`,
        },
        {
          q: "從韓國搭機可以帶幾個行動電源？",
          a: `${POWER_BANK_SINCE}起：每人最多 ${F.powerBankMax} 個，每個 ${F.powerBankWh} 以下，只能放手提行李，而且飛行中不能充電或使用。`,
        },
      ],
    },
    {
      slug: "money-and-tipping",
      enSlug: "money-and-tipping",
      title: `韓國的錢：韓元、刷卡、小費，以及超過 ${CASH_DECLARE_OVER}的現金`,
      description: `多數地方可刷卡，傳統市場可能只收現金，也不需要給小費。現金與支票合計超過 ${CASH_DECLARE_OVER}，入境時必須申報。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "tax-refund-for-tourists", "transport-cards"],
      blocks: [
        { p: "韓國的貨幣是韓元（KRW，₩）。紙鈔有 1,000、5,000、10,000、50,000 韓元；硬幣有 10、50、100、500 韓元。" },
        { h2: "刷卡與現金" },
        {
          ul: [
            "依韓國觀光公社的說明，大多數商店、飯店與百貨公司都接受 Visa、Mastercard、American Express、JCB 與銀聯卡",
            "傳統市場與路邊攤可能只收現金——身上請帶一些",
            "T-money 等可儲值的交通卡，也可以在貼有該卡標誌的合作商店付款",
            "換錢請到銀行或合法的外幣兌換處；銀行一般在平日 09:00–16:00 營業",
          ],
        },
        { source: { label: "韓國觀光公社 — 貨幣與兌換", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140040" } },
        { h2: "小費" },
        {
          p: "韓國觀光公社說得很直接：在韓國不需要給小費，對方也不會期待。餐廳裡加水、續小菜都是免費的。",
        },
        { source: { label: "韓國觀光公社 — 關於韓國料理", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140727" } },
        { h2: `攜帶超過 ${CASH_DECLARE_OVER}` },
        {
          p: `如果你攜帶的外幣、韓元紙鈔與支票（包括韓元的銀行本票）合計超過 ${CASH_DECLARE_OVER}，入境時必須向海關申報。在旅客申報單上勾選第 3 項並填寫金額，海關會發給你申報確認書。離開入境審查區之後就無法再開立，所以請在入境時辦好。`,
        },
        {
          ul: [
            "這是申報，不是上限——只要申報，帶更多也可以",
            `未申報可能被處最高 ${CASH_ADMIN_FINE_MAX}的罰鍰`,
            `未申報的金額超過 ${CASH_CRIMINAL_OVER}時，就成為刑事犯罪（最高一年徒刑或罰金）`,
            "離開韓國時，旅客可以不再申報，帶出最多到入境時申報的金額",
          ],
        },
        { source: { label: "韓國關稅廳 — 外幣申報", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10800&cntntsId=5500" } },
        { source: { label: "外國匯兌交易法（韓文）", url: "https://www.law.go.kr/법령/외국환거래법" } },
      ],
      faq: [
        { q: "在韓國餐廳要給小費嗎？", a: "不用。韓國觀光公社表示，在韓國不需要給小費，對方也不會期待。" },
        {
          q: "可以帶多少現金進韓國？",
          a: `沒有上限，但外幣、韓元紙鈔與支票合計超過 ${CASH_DECLARE_OVER}時，入境時必須向海關申報。`,
        },
      ],
    },
    {
      slug: "tax-refund-for-tourists",
      enSlug: "tax-refund-for-tourists",
      title: `韓國觀光客退稅：${TAX_REFUND_MIN}起退，還有現場即時退稅`,
      description: `在退稅商店單筆消費 ${TAX_REFUND_MIN}以上可退增值稅。即時退稅：單筆未滿 ${IMMEDIATE_PER_PURCHASE}、每趟合計 ${IMMEDIATE_TOTAL}以下。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "money-and-tipping", "airport-security-liquids"],
      blocks: [
        {
          p: "韓國的標價已含增值稅（VAT）。外國旅客把商品帶出國時可以申請退稅，條件是在參加退稅的商店購買，並且在期限內把商品帶出韓國。",
        },
        { h2: "誰可以退稅" },
        {
          ul: [
            "非居民——韓國觀光公社的說明是在韓國停留未滿六個月的外國人",
            "韓國居民、法人，以及駐韓的外交官與軍人不適用",
          ],
        },
        { h2: "規定" },
        {
          ul: [
            `在提供退稅的商店，單筆消費（含稅）至少 ${TAX_REFUND_MIN}`,
            `商品必須在購買後 ${F.taxRefundExportMonths} 個月內帶出韓國`,
            "菸品不適用，具成癮性的藥品與禁止進出口的物品也不適用",
          ],
        },
        { h2: "現場即時退稅" },
        {
          p: `許多商店會在結帳時直接扣除稅額。前提是單筆消費未滿 ${IMMEDIATE_PER_PURCHASE}，而且這趟旅程中即時退稅的消費合計在 ${IMMEDIATE_TOTAL}以下。超過的話，就改為事後申請退稅。`,
        },
        { h2: "在機場或市區辦理退稅" },
        {
          ul: [
            "出境時請備好護照、購物收據與商品（未拆封、未使用）——海關可能要求查看",
            "設有海關自助機的機場：在機器上輸入護照與收據資料；只有被選中查驗時才需要到海關櫃台",
            `市區退稅櫃台每張收據的上限為 ${DOWNTOWN_CAP}；機場與港口航站的退稅櫃台沒有上限`,
          ],
        },
        { source: { label: "韓國關稅廳 — 退稅", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10803&cntntsId=5504" } },
        { source: { label: "韓國觀光公社 — 免稅與退稅", url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140736" } },
        { source: { label: "外國觀光客增值稅及個別消費稅特例規定（總統令，韓文）", url: "https://www.law.go.kr/법령/외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정" } },
        {
          note: "能退多少請在商店確認，不要依賴攻略：金額取決於消費內容與退稅業者，我們沒有找到可以引用的官方對照表。",
        },
      ],
      faq: [
        { q: "在韓國最低消費多少可以退稅？", a: `在參加退稅的商店，單筆消費（含稅）${TAX_REFUND_MIN}以上。` },
        {
          q: "可以在店裡直接退稅嗎？",
          a: `可以，在有提供即時退稅的商店，單筆消費未滿 ${IMMEDIATE_PER_PURCHASE}、且這趟旅程的即時退稅合計不超過 ${IMMEDIATE_TOTAL}即可。`,
        },
      ],
    },
    {
      slug: "bringing-medicines",
      enSlug: "bringing-medicines",
      title: "帶藥去韓國：哪些藥出發前就要先取得核准",
      description: `一般藥品最多 ${F.medsBottles} 瓶或 ${F.medsMonths} 個月份量。ADHD 藥物、可待因、安眠藥等管制藥品，必須事先取得核准。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "healthcare-for-visitors", "airport-security-liquids"],
      blocks: [
        {
          p: "大多數旅客只帶幾包一般藥品，不必擔心。少數人帶的藥在韓國法律上屬於管制物質——往往是在自己國家很普通的藥——這種藥需要的是出發前的許可，而不是在機場解釋。",
        },
        { h2: "自用的一般藥品" },
        {
          ul: [
            `最多 ${F.medsBottles} 瓶，或依處方用量最多 ${F.medsMonths} 個月份`,
            `計入 ${GOODS_ALLOWANCE}的免稅額度內——不是另外加算`,
            "部分海關認為可能被濫用的藥品（例如某些勃起功能障礙藥品），限憑韓國醫師處方",
          ],
        },
        { source: { label: "仁川本部海關 — 入境時攜帶藥品（韓文）", url: "https://www.customs.go.kr/incheon/cm/cntnts/cntntsView.do?mi=10784&cntntsId=5480" } },
        { h2: "含麻醉或精神藥物成分的藥品" },
        {
          p: "藥品若含有麻醉或精神藥物成分，即使在你居住的地方是成藥、或是醫師開的處方，韓國法律仍視為麻藥類。未事先取得食品醫藥品安全處（MFDS）核准就攜帶入境，可能遭到起訴。",
        },
        {
          p: "韓國關稅廳點名的成分包括：",
        },
        {
          ul: [
            "可待因（codeine）、嗎啡（morphine）、羥可酮（oxycodone）、他噴他竇（tapentadol）、美沙冬（methadone）",
            "派醋甲酯（methylphenidate）與安非他命類（amphetamines）——常見的 ADHD 藥物",
            "佐沛眠（zolpidem）、阿普唑侖（alprazolam）、地西泮（diazepam）、勞拉西泮（lorazepam）、氯硝西泮（clonazepam）——安眠藥與鎮靜劑",
            "右美沙芬（dextromethorphan）——部分止咳與感冒藥含有",
          ],
        },
        { h2: "如何取得核准" },
        {
          ul: [
            "出發前透過食品醫藥品安全處的 nedrug.mfds.go.kr 網站線上申請（自我治療用麻藥類攜入申請）",
            "需要旅行文件影本、載明藥品名稱、數量、停留期間與用途的文件，以及醫師（韓國或外國醫療機構）的診斷書——或出發國政府核發的出口許可",
            "韓國人與外國人一律適用",
          ],
        },
        { source: { label: "韓國關稅廳 — 含麻醉成分的藥品（韓文）", url: "https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=13807&cntntsId=7640" } },
        { source: { label: "食品醫藥品安全處 — 自我治療用麻藥類攜入", url: "https://www.mfds.go.kr/brd/m_74/view.do?seq=43906" } },
        { h2: "大麻與 CBD" },
        {
          p: "所有大麻製品——包括 CBD 油與電子菸煙彈——攜帶入境韓國都會受到刑事處罰。即使在你的國家合法也一樣。",
        },
        {
          note: "我們不知道食品醫藥品安全處需要多久做出決定，官方也沒有公布處理天數。請盡早申請；如果不確定某個成分是否受管制，出發前先詢問食品醫藥品安全處。",
        },
      ],
      faq: [
        {
          q: "可以帶 ADHD 藥物去韓國嗎？",
          a: "派醋甲酯與安非他命類在韓國屬於管制藥品。出發前必須線上申請、附上醫師診斷書，取得食品醫藥品安全處的核准。",
        },
        {
          q: "韓國可以帶 CBD 油嗎？",
          a: "不行。韓國關稅廳表示，所有大麻製品（包括 CBD 油與電子菸煙彈）攜帶入境都會受到刑事處罰。",
        },
      ],
    },
    {
      slug: "smoking-vaping-and-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: `韓國的菸、電子菸與酒：${F.customsAgeMin} 歲依出生年計算，違規罰 ${SMOKING_FINE}`,
      description: `滿 ${F.customsAgeMin} 歲那年起可買菸酒。在禁菸區抽菸或電子菸罰 ${SMOKING_FINE}。酒駕標準是血液酒精濃度 ${F.bacLimit}。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "driving-in-korea", "emergency-and-safety"],
      blocks: [
        { h2: "法定年齡" },
        {
          p: `禁止販售酒類或菸品給未滿 ${F.customsAgeMin} 歲的人。韓國是依出生年計算：從滿 ${F.customsAgeMin} 歲那一年的 1 月 1 日起，在這方面就被視為成年人。店家必須確認年齡與身分，所以請隨身帶護照。`,
        },
        { source: { label: "青少年保護法（韓文）", url: "https://www.law.go.kr/법령/청소년 보호법" } },
        { h2: "哪裡不能抽菸" },
        {
          p: "公共生活中很大一部分依法禁菸。國民健康增進法把整個設施列為禁菸區，包括：",
        },
        {
          ul: [
            "機場、車站、客運站的候車室與月台，地下通道，以及較大型的交通工具",
            "飯店與其他觀光住宿",
            "超過一定面積的餐廳、咖啡廳與麵包店",
            "醫院、學校與公共澡堂",
            "地方政府以條例另外指定的地點——常見的有公園、公車站與街道",
          ],
        },
        {
          p: `在禁菸區抽菸會被處 ${SMOKING_FINE}的罰鍰（地方條例指定的區域，最高為此金額）。`,
        },
        { h2: "電子菸也算" },
        {
          p: "自 2026 年 4 月 24 日起，韓國法律對菸品的定義納入以天然或合成尼古丁製成的產品。保健福祉部確認，合成尼古丁電子菸與紙菸一樣適用禁菸規定。",
        },
        { source: { label: "保健福祉部 — 合成尼古丁電子菸（2026年6月23日，韓文）", url: "https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1490975&mid=a10503010100&nPage=1&tag=" } },
        { source: { label: "國民健康增進法（韓文）", url: "https://www.law.go.kr/법령/국민건강증진법" } },
        { h2: "在公共場所喝酒" },
        {
          p: "韓國沒有全國性的公共場所禁酒規定。地方政府可以用條例劃定禁酒區，最高罰 10 萬韓元，在公園等地方請留意告示。",
        },
        { h2: "酒駕" },
        {
          p: `標準是血液酒精濃度 ${F.bacLimit}——比許多國家都低——而且騎腳踏車也適用。`,
        },
        { source: { label: "道路交通法（韓文）", url: "https://www.law.go.kr/법령/도로교통법" } },
        {
          note: `攜帶菸酒入境韓國適用海關免稅額度（紙菸 ${F.customsCigarettes} 支；酒類最多 ${F.customsAlcoholLitres} 公升且 ${ALCOHOL_VALUE}以內），未滿 ${F.customsAgeMin} 歲的旅客兩者都沒有免稅額度。`,
        },
      ],
      faq: [
        { q: "韓國幾歲可以喝酒？", a: `${F.customsAgeMin} 歲，依出生年計算：從滿 ${F.customsAgeMin} 歲那一年的 1 月 1 日起，就可以購買酒類與菸品。` },
        { q: "禁菸區可以抽電子菸嗎？", a: "不行。電子菸（包括合成尼古丁菸油）被視為菸品，不能在禁菸區使用。" },
      ],
    },
    {
      slug: "travelling-with-children",
      enSlug: "travelling-with-children",
      title: `帶小孩去韓國：${F.ketaChildMaxAge} 歲以下免 K-ETA，但要交入境卡`,
      description: `入境當天 ${F.ketaChildMaxAge} 歲以下的兒童不需要 K-ETA，但要交入境卡。親子旅客在入境與搭機時還有哪些不同。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "arrival-card-and-e-gates", "airport-security-liquids", "keta-exemption-2026"],
      blocks: [
        { h2: "K-ETA：依年齡免除" },
        {
          p: `自 2023 年 7 月 3 日起，入境韓國當天 ${F.ketaChildMaxAge} 歲以下——以及 ${F.ketaSeniorMinAge} 歲以上——的旅客免辦 K-ETA。看的是入境當天的年齡：抵達前已滿 18 歲的青少年需要自己的 K-ETA。不過台灣目前在暫時免除名單內，所以在 ${EXEMPT_UNTIL} 前入境，不論幾歲都不需要 K-ETA。`,
        },
        { source: { label: "K-ETA — 依年齡免除的公告（韓文）", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175266&esntlPnotiMtYn=Y" } },
        { h2: "入境卡照樣要交" },
        {
          p: "因為沒有持 K-ETA，免除的兒童必須繳交入境卡——線上填電子入境卡或填紙本都可以。未滿 14 歲的兒童不能擔任代表申報人，所以由家長替全家填寫；超過 9 人的團體申報只能用電腦辦理。",
        },
        {
          p: "K-ETA 官方公告表示，依年齡免除的旅客如果想享有免交入境卡等 K-ETA 的好處，仍可以申請（並付費）。",
        },
        { source: { label: "法務部 — 電子入境卡填寫對象", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "入境審查時" },
        {
          ul: [
            `未滿 ${F.biometricsMinAge} 歲的兒童入境時不必留指紋與臉部照片`,
            `入境自動通關限 ${F.egateMinAge} 歲以上——通常是大人走閘門、小孩到人工櫃檯，家人會分開走`,
          ],
        },
        { h2: "搭機回國時" },
        {
          p: `${F.babyItemsMaxAge} 歲以下兒童的用品——牛奶、水、果汁、嬰兒食品、濕紙巾——可以超過 ${LIQUID_ML}的限制帶上機，以航程所需的量為限。`,
        },
        {
          note: "我們沒有找到韓國官方要求「兒童單獨或只由父母一方陪同旅行時須附同意書」的規定。航空公司或台灣方面仍可能要求，請向他們確認。",
        },
      ],
      faq: [
        { q: "小孩去韓國需要 K-ETA 嗎？", a: `入境當天 ${F.ketaChildMaxAge} 歲以下就不需要。入境當天滿 18 歲起需要自己的 K-ETA，但台灣護照在 ${EXEMPT_UNTIL} 前適用暫時免除。` },
        { q: "小孩需要交入境卡嗎？", a: "需要。沒有 K-ETA 的兒童都要交入境卡；家長可以在電子入境卡網站上替他們填寫。" },
      ],
    },
    {
      slug: "transport-cards",
      enSlug: "transport-cards",
      title: "韓國交通：T-money、不收現金的公車與首爾氣候同行卡",
      description: "一張儲值卡幾乎能搭所有大眾運輸。許多公車不收現金；2026年10月1日起，首爾氣候同行卡短期券只限首爾使用。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "money-and-tipping", "phones-and-sim-cards"],
      blocks: [
        {
          p: "韓國是少數一張儲值卡就幾乎能搭遍各地公車、地鐵與計程車的國家。對旅客來說，第一天先買一張是最實用的事。",
        },
        { h2: "T-money 與 EZL 卡" },
        {
          ul: [
            "依韓國觀光公社的說明，T-money 與 EZL 卡幾乎可以用在全韓國所有大眾運輸上：地鐵、市區公車、高速與市外巴士、計程車與火車",
            "全國便利商店與首爾地鐵（1–8 號線）服務中心都有販售；卡片本身 3,000–5,000 韓元",
            "可在地鐵售票機或便利商店儲值",
            "用卡片付款才有公車與地鐵的轉乘優惠；付現金沒有",
          ],
        },
        { source: { label: "韓國觀光公社 — 交通卡", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140663" } },
        { h2: "許多公車不收現金" },
        {
          p: "韓國各城市的公車正逐步改為不收現金。首爾列出 183 條不收現金的路線（2026 年 1 月），其他首爾公車仍收現金。韓國觀光公社表示，仁川、大邱與光州的市區公車全部不收現金。免費轉乘的規定也因城市而異——首爾最多可免費轉乘四次，釜山兩次。",
        },
        { source: { label: "首爾市政府 — 不收現金的公車路線（2026年1月，韓文）", url: "https://news.seoul.go.kr/traffic/archives/508898" } },
        { source: { label: "韓國觀光公社 — 市區公車", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140659" } },
        { h2: "首爾氣候同行卡短期券" },
        {
          ul: [
            "有 1、2、3、5、7 天的無限次搭乘券，價格 5,000 至 20,000 韓元，使用實體卡（卡片 3,000 韓元）",
            "從儲值當下開始計算——不能提前儲值留到之後的日期用",
            "2026 年 10 月 1 日起，適用範圍為首爾市內的地鐵、首爾市核發執照的市區公車與社區小巴（含夜間公車與循環公車），以及在仁川機場第一、第二航廈下車",
            "以前包含在內的首爾以外地區——金浦、高陽、果川、九里、城南、河南、南楊州等——現在已不適用",
            "2026 年 3 月 17 日起，首爾地鐵 1–8 號線的新型售票機可以用外國的 Visa 與 Mastercard 購買與儲值，平均手續費 3.7%",
          ],
        },
        { source: { label: "首爾市政府 — 2026年10月1日起氣候同行卡短期券的適用範圍（韓文）", url: "https://news.seoul.go.kr/traffic/archives/519012" } },
        { source: { label: "首爾市政府 — 2026年3月17日起售票機可用外國卡（韓文）", url: "https://news.seoul.go.kr/traffic/archives/516544" } },
        {
          note: "部分網頁（包括一些官方網頁）仍寫著氣候同行卡的舊適用範圍，並說不能用外國卡。上面列出的首爾市 2026 年公告才是目前的規定。",
        },
      ],
      faq: [
        { q: "T-money 在首爾以外能用嗎？", a: "可以。韓國觀光公社表示，T-money 與 EZL 卡幾乎可以用在全國所有大眾運輸上，包括計程車與火車。" },
        { q: "在韓國搭公車可以付現金嗎？", a: "不一定。許多市區公車不收現金——首爾有 183 條路線，依韓國觀光公社的說明，仁川、大邱與光州的市區公車全部不收現金。請先買一張交通卡。" },
      ],
    },
    {
      slug: "phones-and-sim-cards",
      enSlug: "phones-and-sim-cards",
      title: "在韓國買 SIM 卡或 eSIM：記得帶護照",
      description: "韓國電信業者依法必須確認身分，旅客要用護照。在哪裡買預付 SIM 卡或 eSIM，以及 2026 年的變化。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "transport-cards", "emergency-and-safety"],
      blocks: [
        { h2: "在哪裡買" },
        {
          ul: [
            "仁川、金浦、金海、濟州等主要國際機場都有韓國電信業者的漫遊中心，販售預付 SIM（USIM）卡，也可領取網路訂購的卡片",
            "仁川機場第一航廈的入境樓層，三家電信業者都設有 24 小時營業的漫遊中心",
            "主要便利商店連鎖也有賣實體 USIM 卡，但各門市庫存不一",
            "eSIM 在網路上購買，掃描 QR 碼即可設定——請先確認你的手機支援 eSIM",
          ],
        },
        { source: { label: "韓國觀光公社 — 電力與通訊", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "仁川國際機場 — 通訊設施", url: "https://www.airport.kr/ap_en/1536/subview.do" } },
        { h2: "法律規定必須確認身分" },
        {
          p: "韓國法律規定，電信業者（包括透過代理商與門市）必須確認申辦門號者的身分，對方拒絕時可以不受理。外國人可使用的證件之一就是護照。買 SIM 卡時請帶著護照。",
        },
        { source: { label: "電氣通信事業法施行令第37條之7（韓文）", url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290813&chrClsCd=010202&urlMode=lsInfoP&efYd=20261001&ancYnChk=0" } },
        { h2: "2026 年的變化" },
        {
          ul: [
            "韓國為了打擊詐騙，正在收緊手機門號的申辦。臉部認證自 2026 年 7 月 6 日起分階段實施，對象是以韓國居民身分證或駕照申辦的情況",
            "科學技術資訊通信部表示，外國人用護照可開通的門號數已從兩個減為一個",
            "該部計畫在 2026 年下半年把照片比對擴大到外國人登錄證，2027 年擴大到護照",
          ],
        },
        { source: { label: "科學技術資訊通信部 — 防止門號濫用措施（2026年6月30日，韓文）", url: "https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3187497" } },
        {
          note: "我們不列價格，也不推薦賣家。某個只有數據的 eSIM 會不會要求護照，取決於產品；法律規定的身分確認，適用於與韓國電信業者簽約的情況。",
        },
      ],
      faq: [
        { q: "在韓國買 SIM 卡需要護照嗎？", a: "需要。韓國法律規定電信業者必須確認申辦者的身分，外國人可以用護照。" },
        { q: "仁川機場可以買 SIM 卡嗎？", a: "可以。各電信業者在仁川機場的漫遊中心都有賣預付 SIM 卡；第一航廈入境樓層的三家業者都是 24 小時營業。" },
      ],
    },
    {
      slug: "power-plugs",
      enSlug: "power-plugs",
      title: "韓國的插座與電壓：220V、60Hz、兩根圓腳",
      description: "韓國插座用兩根圓腳插頭，電壓 220 伏特、60 赫茲。台灣的扁腳插頭需要轉接頭，插電前先看充電器標示。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "phones-and-sim-cards"],
      blocks: [
        {
          p: "韓國的標準電壓是 220 伏特、60 赫茲，家用插座是兩個圓孔。江陵市的觀光網頁把這種插座稱為 C 型與 F 型，和德國、法國、奧地利、西班牙、希臘相同。",
        },
        { h2: "對你的電器代表什麼" },
        {
          ul: [
            "歐洲大陸的插頭一般不需轉接頭就能用",
            "扁腳插頭——台灣、英國、美國、中國大陸等許多地方使用的——需要轉接頭",
            "看一下充電器上的標示：寫著 INPUT 100–240V 就能在 220V 下使用。如果只寫 110V 或 120V，就不是為韓國電壓設計的",
            "飯店可能出借或販售轉接頭；機場、較大型的商店與便利商店也買得到",
          ],
        },
        { source: { label: "韓國觀光公社 — 電力與通訊", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "電氣事業法施行規則附表3 — 標準電壓與頻率（韓文，PDF）", url: "https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=168742119&bylClsCd=110201" } },
      ],
      faq: [
        { q: "韓國用什麼插頭？", a: "兩根圓腳的插頭（C 型與 F 型）——和歐洲大陸大部分地區相同。電壓是 220V、60Hz。" },
        { q: "台灣的充電器在韓國能用嗎？", a: "需要轉接頭。大多數手機與筆電充電器的規格是 100–240V，可以在 220V 下使用；插電前請先看標示上的 INPUT。" },
      ],
    },
    {
      slug: "public-holidays",
      enSlug: "public-holidays",
      title: "韓國國定假日：2026 年剩下的日子與 2027 年",
      description: "2026 年底與 2027 年全年的韓國官方假日，包括春節（설날）、中秋節（秋夕）與補假，以及 2026 年新增的兩個假日。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "transport-cards", "korea-entry-stay"],
      blocks: [
        {
          p: "韓國的公休日由法律規定，農曆節日每年日期都不同。政府每年會在官報公布當年的官方曆。2026 年有兩項重要的改變：勞動節（5 月 1 日）成為公休日，所有國慶日也都成為公休日，因此制憲節（7 月 17 日）恢復放假。",
        },
        { h2: "2026 年剩下的假日" },
        { ul: ["12 月 25 日（週五）— 聖誕節"] },
        { h2: "2027 年（官方曆）" },
        {
          ul: [
            "1 月 1 日（週五）— 元旦",
            "2 月 6–8 日（週六–週一）— 春節（설날），2 月 9 日（週二）補假",
            "3 月 1 日（週一）— 三一節",
            "5 月 1 日（週六）— 勞動節，5 月 3 日（週一）補假",
            "5 月 5 日（週三）— 兒童節",
            "5 月 13 日（週四）— 佛誕日",
            "6 月 6 日（週日）— 顯忠日（無補假）",
            "7 月 17 日（週六）— 制憲節，7 月 19 日（週一）補假",
            "8 月 15 日（週日）— 光復節，8 月 16 日（週一）補假",
            "9 月 14–16 日（週二–週四）— 中秋節（秋夕）",
            "10 月 3 日（週日）— 開天節，10 月 4 日（週一）補假",
            "10 月 9 日（週六）— 韓文日，10 月 11 日（週一）補假",
            "12 月 25 日（週六）— 聖誕節，12 月 27 日（週一）補假",
          ],
        },
        { source: { label: "宇宙航空廳 — 2027 年官方曆（官報公告 2026-0078，韓文）", url: "https://astro.kasi.re.kr/kor/life/post/almanac?search_year=2027&bbs_uniq_id=almanac" } },
        { source: { label: "關於政府機關公休日的規定（韓文）", url: "https://www.law.go.kr/법령/관공서의공휴일에관한규정" } },
        { h2: "春節與中秋節期間要注意什麼" },
        {
          p: "這兩個農曆大節都是連休三天，很多人會返鄉。如果行程剛好碰上，請提早安排交通與住宿。法律規定的是政府機關的公休日，民間企業的上班日則依勞動法規，因此個別商店或餐廳開不開，由店家自行決定——出門前請先確認。",
        },
        {
          note: "政府可以經國務會議決定臨時公休日，有時很晚才公布。若 2027 年有新的臨時公休日，我們會更新本頁。",
        },
      ],
      faq: [
        { q: "2027 年的中秋節是哪幾天？", a: "依官報公布的官方曆，是 2027 年 9 月 14–16 日（週二至週四）。" },
        { q: "2027 年的春節（설날）是哪幾天？", a: "2027 年 2 月 6–8 日；因為其中一天是週日，2 月 9 日（週二）補假。" },
      ],
    },
    {
      slug: "driving-in-korea",
      enSlug: "driving-in-korea",
      title: "台灣旅客在韓國開車：用台灣核發的國際駕照，入境起 1 年",
      description: `台灣與韓國互相承認國際駕照，可在韓國駕駛自用小客車，效期為入境起 1 年。只帶台灣駕照不能開。靠右行駛。`,
      checked: CHECKED,
      practical: true,
      related: [HUB, "smoking-vaping-and-alcohol", "emergency-and-safety"],
      blocks: [
        {
          p: "對台灣旅客來說，重點是：外交部領事事務局表示，台韓已互相承認國際駕照，可以使用我國核發的有效國際駕照，在韓國駕駛自用小客車。反過來說，只帶台灣駕照本身是不能開的——韓國道路交通公團明確表示，僅持外國核發的駕照無法在韓國駕駛。",
        },
        { source: { label: "外交部領事事務局 — 韓國（生活資訊）", url: "https://www.boca.gov.tw/sp-foof-countrycp-03-1-6256a-05-1.html" } },
        { h2: "韓國法律的規定" },
        {
          ul: [
            "依 1949 年日內瓦或 1968 年維也納道路交通公約核發的國際駕照，或",
            "依韓國與核發國之間的雙邊協定所承認的國際駕照或駕照——台灣核發的國際駕照屬於這一類",
            "效期為入境韓國之日起 1 年，而且只能駕駛國際駕照上記載的車種",
            "可以用來租車，但不能駕駛計程車、營業用貨車等營業車輛",
          ],
        },
        { source: { label: "道路交通法第96條（韓文）", url: "https://www.law.go.kr/법령/도로교통법" } },
        { source: { label: "道路交通公團 — 外國駕照（韓文）", url: "https://www.safedriving.or.kr/diGuide/selectDiGuide05.do" } },
        { h2: "租車" },
        {
          p: "依韓國觀光公社的說明，租車公司會要求國際駕照、護照，以及駕駛人本人名下的信用卡，駕駛人須年滿 21 歲。有些公司也會要求出示本國駕照，所以請一起帶著。這些是租車公司的條件而不是法律規定，請向預約的公司確認。",
        },
        { source: { label: "韓國觀光公社 — 在韓國開車", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140664" } },
        { h2: "交通規則" },
        {
          ul: [
            "靠右行駛",
            "車上所有座位的人都必須繫安全帶；嬰幼兒需使用兒童安全座椅",
            `酒駕標準是血液酒精濃度 ${F.bacLimit}，騎腳踏車也適用。警察要求時必須接受酒測`,
            "騎乘機車的駕駛人與乘客都必須戴安全帽",
            "距離以公里、速度以公里/小時表示",
          ],
        },
        {
          note: "領事事務局提到的是「自用小客車」。如果你打算駕駛其他車種，請先向租車公司或韓國道路交通公團確認。",
        },
      ],
      faq: [
        { q: "台灣的國際駕照在韓國能用嗎？", a: "可以。外交部領事事務局表示台韓國際駕照已互相承認，可使用我國核發的有效國際駕照在韓國駕駛自用小客車，效期為入境起 1 年（道路交通法第96條）。" },
        { q: "只帶台灣駕照可以在韓國開車嗎？", a: "不行。韓國道路交通公團表示，僅持外國核發的駕照無法在韓國駕駛。請攜帶台灣核發的國際駕照（建議連同台灣駕照一起帶）。" },
      ],
    },
    {
      slug: "healthcare-for-visitors",
      enSlug: "healthcare-for-visitors",
      title: "在韓國看病：觀光客要自費，請先投保",
      description: "觀光客不在韓國國民健康保險的範圍內。哪裡可以找到有口譯的醫院、該打哪支電話，以及為什麼保險很重要。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "emergency-and-safety", "bringing-medicines"],
      blocks: [
        { h2: "觀光客沒有公共保險" },
        {
          p: "韓國的國民健康保險只在外國人完成外國人登錄、在韓國居住一定期間後，或受雇於韓國雇主時才會涵蓋。以免簽或 K-ETA 入境的旅客不在其內，看病要自己付費。",
        },
        {
          p: "我們沒有找到讓台灣觀光客在韓國享有免費或減免醫療的協定。出發前請投保涵蓋海外醫療的旅遊保險，並確認是否包含醫療轉送回國。",
        },
        { source: { label: "國民健康保險法第109條（韓文）", url: "https://www.law.go.kr/법령/국민건강보험법" } },
        { h2: "有口譯的醫院" },
        {
          p: "韓國許多大型醫院設有國際診療中心，有會說英語及其他語言的人員，協助預約與就醫。韓國觀光公社列出了這些醫院，包括首爾峨山醫院、Severance 醫院、三星首爾醫院、首爾大學醫院與首爾聖母醫院。國際診療中心只在平日上班時間服務——夜間與週末請到急診室。",
        },
        { source: { label: "韓國觀光公社 — 緊急狀況與國際診療中心", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "該打哪支電話" },
        {
          ul: [
            "119 — 救護車（與火警）",
            "1339 — 韓國疾病管理廳的 24 小時專線，提供疾病諮詢與疑似傳染病的處理。這不是叫救護車的號碼。外國人會透過與 1330 或 1345 的三方通話協助",
            "1330 — 韓國觀光公社旅遊諮詢熱線，提供中文等口譯與旅遊資訊（在韓國直撥 1330，從海外撥 +82-2-1330）",
          ],
        },
        { source: { label: "韓國疾病管理廳 — 1339 客服中心（韓文）", url: "https://kdca.go.kr/kdca/2777/subview.do" } },
        {
          note: "自己攜帶的藥品是另一個問題：一些常見的處方藥在出發前就需要取得核准。請參考「帶藥去韓國」那一頁。",
        },
      ],
      faq: [
        { q: "觀光客在韓國看病免費嗎？", a: "不免費。短期旅客不在韓國國民健康保險的範圍內，看病要自費，因此強烈建議投保旅遊醫療保險。" },
        { q: "1339 是緊急電話嗎？", a: "不是叫救護車用的。1339 是疾病管理廳的疾病諮詢與疑似傳染病專線。要叫救護車請打 119。" },
      ],
    },
    {
      slug: "emergency-and-safety",
      enSlug: "emergency-and-safety",
      title: "韓國緊急電話：112、119，以及中文協助",
      description: "報警打 112，火警與救護車打 119。112、1330、1345 都有中文協助，另有 Emergency Ready App 與手機緊急簡訊。",
      checked: CHECKED,
      practical: true,
      related: [HUB, "healthcare-for-visitors", "phones-and-sim-cards"],
      blocks: [
        { h2: "電話號碼" },
        {
          ul: [
            "112 — 警察",
            "119 — 火警與救護車",
            "1339 — 傳染病諮詢（韓國疾病管理廳）",
            "1330 — 韓國觀光公社旅遊諮詢熱線：旅遊資訊、口譯與申訴，可打電話或線上聊天（在韓國直撥 1330，從海外撥 +82-2-1330）",
            "1345 — 法務部外國人綜合服務中心（從海外撥 +82-2-1345）",
          ],
        },
        { source: { label: "韓國觀光公社 — 緊急狀況", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "用中文求助" },
        {
          ul: [
            "112：自 2024 年 3 月起，警察報案電話透過三方通話，提供 24 小時英文與中文口譯",
            "1330：韓國觀光公社列出的語言包括中文、英文、日文、俄文、越南文、泰文、馬來文與印尼文",
            "1345：提供包括中文在內的 20 種語言，平日 09:00–22:00（18:00 以後只有韓文、英文與中文）。需付通話費",
            "119 也接受簡訊報案，可附照片或影片，不方便說話時很有用",
          ],
        },
        { source: { label: "韓國文化宣傳院 — 112 的 24 小時口譯服務（2024）", url: "https://www.korean-culture.org/eng/webzine/202405/sub10.html" } },
        { source: { label: "韓國出入境外國人政策本部 — 1345 外國人綜合服務中心（韓文）", url: "https://www.immigration.go.kr/immigration/1530/subview.do" } },
        { h2: "Emergency Ready App 與手機警報" },
        {
          p: "韓國政府的 Emergency Ready App（緊急應用程式）會顯示災害警報、最近的避難所、急診室與警察局，以及急救指南。韓國觀光公社列出它支援 22 種語言，包括中文與英文。另外，自 2024 年 2 月起，會發送到該地區所有手機、伴隨警報聲的緊急災害簡訊，會在韓文之外以英文標示災害類型與地震規模。",
        },
        { source: { label: "韓國觀光公社 — 實用 App 與資源", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=198570" } },
        { source: { label: "行政安全部 — 緊急災害簡訊加註英文（2024年2月28日，韓文）", url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=107429" } },
        { h2: "民防演習" },
        {
          p: "韓國不定期舉行民防演習：警報響起、交通暫停，民眾會被引導到避難所，通常是地鐵站或地下停車場。德國外交部的旅遊資訊指出，外國人沒有參加的義務，但建議配合。",
        },
        {
          note: "東西掉了？警察的遺失物服務 lost112.go.kr 提供韓文、英文、日文與中文介面。",
        },
      ],
      faq: [
        { q: "韓國的緊急電話是幾號？", a: "報警打 112，火警與救護車打 119。" },
        { q: "打 112 可以說中文嗎？", a: "可以。自 2024 年 3 月起，警察報案電話透過三方通話提供 24 小時英文與中文口譯。" },
      ],
    },
  ],
};
