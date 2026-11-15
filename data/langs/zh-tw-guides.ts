import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって zh-tw 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝台湾パスポート保持者。2026-12-31 まで K-ETA の一時免除対象。
 *    「今は不要・2027年から要る（延長がなければ）」を崩さない。今すぐ申請を勧めない。
 * ⚠️ 免除国の公式一覧は無い（延長告知は国を列挙しない。公式の申請画面で旅券をスキャンするとポップアップで示される）。
 * ⚠️ major-airports は実用ページなので zh-tw-practical.ts 側に置いた。
 */

/** 表記のローカライズ。⚠️ 値は FACTS と同じものを指す（別の数字を書かない）。 */
const EXEMPT_UNTIL = "2026年12月31日"; // = F.exemptionUntil
const DECISION = "72 小時"; // = F.decisionTypical
const USD_APPROX = "約 7〜8 美元"; // = F.feeUsdApprox
const STAY_RANGE = "30 至 90 天"; // = F.stayRange
const QUARANTINE_FINE = "500 萬韓元"; // = F.quarantineMaxFine
const QUARANTINE_LAW = "《家畜傳染病預防法》"; // = F.quarantineLaw
const GOODS_ALLOWANCE = "800 美元"; // = F.customsGoodsAllowance
const ALCOHOL_VALUE = "400 美元"; // = F.customsAlcoholValue
/** 英語版 NEW_CHECKED = "15 November 2026" */
const NEW_CHECKED = "2026年11月15日";
const ADDED = "2026-11-15";

export const zhTwGuides: Article[] = [
  {
    slug: "what-is-keta",
    enSlug: "what-is-keta",
    added: ADDED,
    related: ["arriving-in-korea", "do-i-need-keta", "keta-exemption-2026"],
    title: "K-ETA 是什麼？韓國電子旅行許可一次看懂",
    description:
      "K-ETA 是給免簽旅客的韓國電子旅行許可：它是什麼、適用於誰，以及為什麼台灣護照目前不需要。",
    blocks: [
      {
        p: `K-ETA（Korea Electronic Travel Authorization，韓國電子旅行許可）是免簽旅客在搭機前往韓國前，通常要先取得的線上許可。費用為 ${F.fee}（${USD_APPROX}），效期 ${F.validYears} 年。`,
      },
      { h2: "申請前先確認免除" },
      {
        p: `這是許多指南寫錯的地方。韓國已對部分國家與地區暫停適用 K-ETA，期限至 ${EXEMPT_UNTIL}，台灣也在其中。屬於目前免除的國籍，就不需要 K-ETA。您仍可以選擇申請——官方公告指出的好處是不必提交入境卡——但費用照收。`,
      },
      {
        note: `各方報導的免除國家數量並不一致，而官方延長公告也沒有列出這些國家。依公告說明，免除對象在 ${F.officialHost} 申請、掃描護照資料頁時，會看到彈出提示。做任何事之前，請先用這個方式確認自己的護照。`,
      },
      { h2: "它不是簽證" },
      {
        p: "K-ETA 不代表准許入境，它確認的是您可以登機。抵達時仍由入境審查官決定是否准許入境，而且可以拒絕。",
      },
      { h2: "它不決定您能停留多久" },
      {
        p: `可停留天數來自韓國與您國家之間的免簽協定——一般在 ${STAY_RANGE}之間。搭同一班飛機、持同樣 K-ETA 的兩位旅客，獲准的停留天數可能不同。`,
      },
    ],
  },
  {
    slug: "do-i-need-keta",
    enSlug: "do-i-need-keta",
    added: ADDED,
    related: ["arrival-card-and-e-gates", "travelling-with-children", "keta-exemption-2026"],
    title: "我需要 K-ETA 嗎？如何確認自己是否免除",
    description:
      "許多國籍目前暫時免辦 K-ETA，台灣護照也是。如何確認自己的護照，以及不屬於免除對象時該怎麼做。",
    blocks: [
      {
        p: `花任何錢之前，先解決一個問題：您的護照目前是否屬於免除對象？免除期限為 ${EXEMPT_UNTIL}，依國籍決定，與居住地或搭乘哪家航空公司無關。台灣護照目前適用暫時免除。`,
      },
      { h2: "如何確認" },
      {
        ul: [
          `在官方網站（${F.officialHost}）或 K-ETA App 開始申請。依官方公告，免除對象掃描護照資料頁時，會看到彈出提示。`,
          "以您實際要使用的那本護照確認——而不是您持有的另一個國籍。",
          "屬於免除對象，就不需要申請或付費。若想免交入境卡，仍可自願申請，屆時須付費。",
          "不屬於免除對象，請在出發前完成申請。",
        ],
      },
      { h2: "為什麼本站不列出名單" },
      {
        p: "免除已經延長、調整過不只一次，各家媒體報導的國家數量也不一致。官方延長公告本身也沒有列出免除國家；是否免除，是在官方申請流程中掃描護照時確認的。抄進指南裡的名單，會在不知不覺間過時。",
      },
      { h2: "免除不代表什麼都不用準備" },
      {
        p: "即使不需要 K-ETA，您仍需要在整趟旅程中有效的護照、離境或回程機票，以及填寫入境卡用的韓國地址。部分旅客也會被要求填寫入境申報。",
      },
      {
        note: "如果您是持簽證（工作、留學、長期停留）入境，K-ETA 與您完全無關。K-ETA 只適用於免簽入境。",
      },
    ],
  },
  {
    slug: "keta-passport-details",
    enSlug: "passport-and-details",
    added: ADDED,
    related: ["arriving-in-korea", "arrival-card-and-e-gates", "keta-validity"],
    title: "K-ETA 綁定一本護照",
    description:
      "K-ETA 與申請時使用的護照綁在一起。換發新護照就會提前失效，資料不一致則會在報到時被擋下。",
    blocks: [
      {
        p: `K-ETA 效期 ${F.validYears} 年，但有一個常讓人措手不及的條件：它綁定的是申請時使用的那本護照。那本護照一旦換掉，即使 ${F.validYears} 年還沒到，許可也不能再用。`,
      },
      {
        note: `台灣護照在 ${EXEMPT_UNTIL} 前入境不需要 K-ETA。本頁適用於已經持有 K-ETA，或之後需要申請的情況。`,
      },
      { h2: "需要重新申請的情況" },
      {
        ul: [
          "護照更新或換發",
          "護照因遺失或損壞而補發",
          "改用另一個國籍的護照旅行",
        ],
      },
      { h2: "資料要完全照護照填寫" },
      {
        ul: [
          "姓名依照機讀區（MRZ）的寫法，而不是平常的寫法",
          "護照號碼逐字核對——0 與 O、1 與 I",
          "國籍填護照上記載的國籍，而不是居住地",
          "照片符合規格",
        ],
      },
      { h2: "官方管道只有一個" },
      {
        p: `申請只在 ${F.officialHost} 進行，費用為 ${F.fee}。收費更高的網站是加上自身利潤的第三方，在其他地方輸入護照號碼，是沒有必要承擔的風險。`,
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `申請之前，請先確認您的國籍目前是否免除。免除期限至 ${EXEMPT_UNTIL}。免除期間申請屬於自願：費用照收且不退還，官方公告指出的好處是不必提交入境卡。`,
      },
    ],
  },
  {
    slug: "keta-after-exemption",
    enSlug: "when-the-exemption-ends",
    added: ADDED,
    related: ["keta-news", "keta-exemption-2026", "keta-application-guide"],
    title: `${EXEMPT_UNTIL}暫時免除結束後會怎樣？`,
    description: `台灣等許多國籍暫時免辦 K-ETA 至 ${EXEMPT_UNTIL}。行程落在這個日期前後時，該怎麼判斷。`,
    blocks: [
      {
        p: `目前的免除是暫時的，公布的結束日期是 ${EXEMPT_UNTIL}。如果您的行程接近這個日期，請以「規定會恢復」為前提安排，而不是假設會再延長。在這個日期以前入境的台灣旅客，目前不需要 K-ETA。`,
      },
      { h2: "看的是哪一天" },
      {
        p: "看的是抵達韓國的日期，而不是訂票日或從台灣出發的日期。在免除期間結束後才落地的班機，即使起飛時還在期間內，也需要許可。",
      },
      { h2: "行程跨過交替日期時" },
      {
        ul: [
          `如果入境日期在 2027 年 1 月 1 日以後，而免除尚未宣布延長，可以先申請。效期 ${F.validYears} 年，即使後來用不到也不算白費。`,
          "不要等航空公司提醒。航空公司在出發當天才查核，那時已經來不及補救。",
          "出發前不久請再查看官方網站——延長或變更都會先在那裡公布。",
        ],
      },
      {
        note: "免除的適用範圍調整過不只一次，每次涵蓋的國家都有變動。在其他地方看到的任何名單——包括像本頁這樣的整理——都只能當作前往官方頁面的指引，不能取代官方頁面。",
      },
      {
        source: {
          label: "K-ETA official portal",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "korea-border-checks",
    enSlug: "border-questions",
    added: ADDED,
    related: ["arriving-in-korea", "arrival-card-and-e-gates", "bringing-medicines"],
    title: "抵達韓國時會經過哪些關卡",
    description:
      "入境審查、檢疫與海關是三道不同的關卡。先弄清楚每一關問的是什麼，可能就是十分鐘與一小時的差別。",
    blocks: [
      {
        p: "抵達韓國的旅客要通過三道關卡，分別由三個不同的機關負責。每一關詢問的事項不同，需要的文件也各自分開。",
      },
      { h2: "1. 入境審查" },
      {
        ul: [
          "停留多久、住在哪裡",
          "是否持有離境或回程機票",
          "訪問目的",
          "多數入境旅客要留存指紋與臉部照片",
        ],
      },
      {
        p: `可停留天數就是在這裡決定的。有效的 K-ETA——或適用的免除——只是讓您走到這個櫃檯，並不決定結果。台灣護照在 ${EXEMPT_UNTIL} 前適用 K-ETA 暫時免除，但入境審查照常進行。`,
      },
      { h2: "2. 檢疫" },
      {
        p: `韓國會檢查入境旅客攜帶的動植物產品。這不是走個形式：未申報者可能依${QUARANTINE_LAW}被處最高 ${QUARANTINE_FINE}的罰鍰。`,
      },
      { h2: "3. 海關" },
      {
        p: `每位旅客都要提交攜帶物品申報。超過免稅額度 ${GOODS_ALLOWANCE}的物品必須申報。`,
      },
      { h2: "落地前先準備好" },
      {
        ul: [
          "寫下來的韓國住宿地址",
          "下一段航班的資訊",
          "對行李中的食品與植物，準備據實回答",
        ],
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
      {
        note: "不確定某樣東西要不要申報時，就申報。申報後發現可以攜帶的物品，不會因為申報而受罰。",
      },
    ],
  },
  {
    slug: "korea-quarantine",
    enSlug: "quarantine",
    added: ADDED,
    related: ["arriving-in-korea", "bringing-medicines", "korea-customs-allowances"],
    title: "韓國檢疫：肉類與植物產品，以及未申報的罰鍰",
    description: `入境韓國時未申報動植物產品，可能依${QUARANTINE_LAW}被處最高 ${QUARANTINE_FINE}的罰鍰。哪些東西要申報，一次說清楚。`,
    blocks: [
      {
        p: "為了因應非洲豬瘟等動物疾病，韓國已大幅加強邊境檢疫。旅客攜帶的肉製品正是這些疾病傳播的途徑之一，相關規定會在入境時確實執行。",
      },
      { h2: "罰則" },
      {
        p: `未辦理檢疫申報的旅客，可能依${QUARANTINE_LAW}被處最高 ${QUARANTINE_FINE}的罰鍰。罰的是「未申報」這件事，而不只是最後被認定為禁止攜帶的物品。`,
      },
      { h2: "必須申報的東西" },
      {
        ul: [
          "各種肉類與肉製品——包括醃製、乾燥與罐裝的",
          "乳製品與蛋",
          "新鮮水果、蔬菜、種子與堅果",
          "植物、土壤，以及沾有土壤的物品",
          "活體動物，以及接觸動物時使用的物品",
        ],
      },
      { h2: "旅客以為沒問題、其實不行的東西" },
      {
        ul: [
          "在出發地機場買的香腸或肉乾",
          "家人親手做、幫忙打包的食物",
          "泡麵包裡的乾燥肉塊",
          "從飛機上帶下來的水果",
        ],
      },
      { h2: "讓您安全過關的原則" },
      {
        p: "申報不用花錢。可以攜帶的物品會還給您；不可以的就銷毀，事情到此為止。罰的是不申報，所以沒有任何情況是「不說比較好」。",
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
    ],
  },
  {
    slug: "korea-customs-allowances",
    enSlug: "customs-allowances",
    added: ADDED,
    related: ["arriving-in-korea", "money-and-tipping", "tax-refund-for-tourists", "smoking-vaping-and-alcohol"],
    title: "入境韓國的免稅額度",
    description: `一般物品的免稅額度為 ${GOODS_ALLOWANCE}，酒、菸與香水另有限額。未滿 ${F.customsAgeMin} 歲的旅客沒有酒類與菸品的免稅額度。`,
    blocks: [
      {
        p: "海關和檢疫是兩回事。檢疫看的是物品會不會帶來疾病風險；海關看的是要不要繳稅。兩者都在入境時申報，通過其中一關並不代表另一關也過了。",
      },
      { h2: "免稅額度" },
      {
        ul: [
          `一般物品：課稅價格合計 ${GOODS_ALLOWANCE}`,
          `酒類：合計最多 ${F.customsAlcoholLitres} 公升且在 ${ALCOHOL_VALUE}以內，與一般物品的額度分開計算`,
          `菸品：紙菸 ${F.customsCigarettes} 支`,
          `香水：${F.customsPerfumeMl} 毫升`,
        ],
      },
      { h2: "年齡限制" },
      {
        p: `未滿 ${F.customsAgeMin} 歲的旅客——依出生年計算，而不是看生日——沒有酒類與菸品的免稅額度。全家出遊時以為可以用青少年的額度，常在這裡出錯。`,
      },
      { h2: "超過額度時" },
      {
        p: "請申報。關稅與稅金會就超出的部分計算。超過額度卻不申報，是比稅金本身更嚴重、也更花錢的問題。",
      },
      { source: { label: "Korea Customs Service — Duty-free allowance for travellers", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8028&cntntsId=2716" } },
      {
        note: "在前往韓國途中購買的免稅品，同樣計入免稅額度。在機場管制區內購買，並不會因此免稅。",
      },
    ],
  },
  {
    slug: "korea-transit",
    enSlug: "transit-through-korea",
    added: ADDED,
    related: ["arriving-in-korea", "airport-security-liquids", "keta-exemption-2026"],
    title: "在韓國轉機需要 K-ETA 嗎？",
    description:
      "轉機時是否涉及 K-ETA，取決於您有沒有通過入境審查。留在國際轉機區與入境韓國，處理方式不同。",
    blocks: [
      {
        p: "在仁川轉機，是許多人查到這一頁的原因。答案取決於一個問題：您會不會離開國際轉機區？",
      },
      { h2: "留在管制區內" },
      {
        p: "留在國際轉機區、直接搭乘下一班飛機的旅客，並沒有入境韓國。這種情況下不涉及任何入境許可，因為根本沒有入境。",
      },
      { h2: "離開機場" },
      {
        p: `通過入境審查——無論是為了領取託運行李、到機場外過夜，或利用轉機空檔進市區——都算入境。這時 K-ETA 或適用的免除才有關係，和一般觀光入境完全相同。台灣護照在 ${EXEMPT_UNTIL} 前入境，適用暫時免除。`,
      },
      { h2: "長時間轉機最容易出狀況" },
      {
        ul: [
          "行李沒有直掛到最終目的地，就必須入境領取。",
          "轉機要過夜、住在機場外的飯店，就是入境。",
          "換航廈時需要重新通過入境審查，也是入境。",
        ],
      },
      {
        note: `請在訂票時就決定，而不是到了轉機櫃檯才想。如果入境日期在 2027 年 1 月 1 日以後、免除又沒有再延長，而您有可能離開機場，就先申請並取得許可——效期 ${F.validYears} 年，不會浪費。`,
      },
      {
        source: {
          label: "K-ETA official portal",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "keta-leaving-and-returning",
    enSlug: "leaving-and-returning",
    added: ADDED,
    related: ["arriving-in-korea", "tax-refund-for-tourists", "airport-security-liquids"],
    title: "離開韓國再回來：同一張 K-ETA 可以多次使用",
    description: `K-ETA 效期 ${F.validYears} 年、可多次入境，不必每趟重新申請。每次入境重新決定的是停留天數，而不是入境的資格。`,
    blocks: [
      {
        p: `K-ETA 效期 ${F.validYears} 年、可多次入境，所以短暫離開韓國再回來，不需要重新申請。每次入境都會個別審查，入境審查官會再次決定可停留的天數。`,
      },
      { h2: "不會重新計算的事" },
      {
        ul: [
          "免簽安排本身——不能靠反覆出入境，把免簽停留變成長期居留",
          "K-ETA 的效期——仍在原本的日期到期",
          "您過去使用它的紀錄",
        ],
      },
      { h2: "反覆入境會被詢問" },
      {
        p: "韓國和多數國家一樣，把免簽入境視為短期訪問。每次停留期限快到就出境幾天再回來，這種模式在系統上一目瞭然，即使持有有效的 K-ETA，入境審查官仍可以拒絕入境。",
      },
      { h2: "再次入境時要準備的東西" },
      {
        ul: [
          "離境或回程機票",
          "在韓國的住宿地址",
          "能說明您會回國的資料：工作、學業、家庭",
        ],
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `台灣護照目前適用 K-ETA 暫時免除（至 ${EXEMPT_UNTIL}），這段期間的往返行程完全不需要 K-ETA。付任何費用之前，請先確認自己是否需要。`,
      },
    ],
  },
  {
    slug: "keta-denied",
    enSlug: "if-your-keta-is-denied",
    added: ADDED,
    related: ["korea-short-term-visit-visa", "keta-common-mistakes"],
    title: "K-ETA 被拒絕時該怎麼辦",
    description:
      "被拒絕不代表一定去不了韓國，但代表線上申請這條路已經關上。接下來實際該怎麼做。",
    blocks: [
      {
        note: `台灣護照在 ${EXEMPT_UNTIL} 前入境不需要 K-ETA。本頁適用於自願申請，或免除結束後申請卻遭拒絕的情況。`,
      },
      {
        p: `多數申請會在 ${DECISION}內做出決定。如果結果是拒絕，實際上就代表您無法以免簽方式入境，必須改為申請簽證。`,
      },
      { h2: "重新申請通常沒有用" },
      {
        p: "用同樣的資料再申請一次，通常會得到同樣的結果。如果是資料填錯——護照號碼、出生日期、與護照不一致的姓名拼寫——值得更正後再申請。除此之外，該走的路是向韓國駐外館處申請簽證。",
      },
      { h2: "不要用「先飛去試試看」的方式" },
      {
        p: "航空公司在登機前會查詢許可狀態。帶著被拒絕的紀錄到機場，會在報到櫃檯就被拒絕登機，而不是到了韓國邊境才被擋。",
      },
      {
        note: "被拒絕是針對這一次申請的決定，並不是永久禁止入境。簽證申請會依其本身的文件另行審查。",
      },
      {
        source: {
          label: "K-ETA official portal",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "keta-common-mistakes",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: NEW_CHECKED,
    related: ["keta-application-guide", "keta-validity", "keta-denied", "keta-required-documents"],
    title: "K-ETA 常見錯誤，以及官方 FAQ 怎麼說",
    description:
      "送出後不能修改、換新護照要重新申請、行程變更要更新資料——官方 K-ETA 網站直接提醒過的錯誤。",
    blocks: [
      {
        p: "K-ETA 官方網站並沒有公布「最常見錯誤」的排名；K-ETA 中心也不會告知申請人被拒絕的確切原因，因為審查標準屬於機密。官方公布的是一份詳細的 FAQ 與一系列公告。以下每一點，都是這些官方頁面直接提醒過的。",
      },
      {
        note: `在這一切之前，請先確認您是否需要 K-ETA。台灣護照在 ${EXEMPT_UNTIL} 前適用暫時免除；以下內容適用於自願申請，或免除結束後需要申請的情況。`,
      },
      { h2: "1. 以為送出後還能修改" },
      {
        p: "申請送出前，所有資料都可以修改；一旦送出就不能更正。官方 FAQ 說明，護照（個人）資料在送出後無論審查結果如何都不能修改，應以正確資料重新申請。已繳的費用無論結果如何都不退還。",
      },
      { h2: "2. 資料有誤的核准仍當作有效" },
      {
        p: "如果核准的 K-ETA 上的資料與護照不符——護照號碼、國籍、出生日期等——您可能無法搭乘前往韓國的飛機或船舶，或被拒絕入境。官方建議在付款前確認所有資料都填寫正確。",
      },
      { h2: "3. 用平常的寫法填姓名" },
      {
        ul: [
          "姓名必須以英文填寫，不能輸入連字號（-）等特殊符號——護照上的英文名即使有連字號也一樣",
          "FAQ 要求申請人依照護照資料頁下方機讀區（MRZ）的第一行填寫",
          "如果護照上沒有區分姓與名，照 MRZ 上的寫法填入完整姓名即可",
        ],
      },
      { h2: "4. 用不同的護照旅行" },
      {
        p: "登機證上的護照、入境韓國時使用的護照，以及 K-ETA 核准上的護照，三者必須是同一本。如果因為改名、遺失或換發而取得新護照，即使舊護照已經核准，也必須重新申請。國籍、姓名、性別、出生日期、護照號碼、護照效期、傳染病狀況或犯罪紀錄有變更時，也需要重新申請。只有職業變更則不需要。",
      },
      { h2: "5. 沒有更新旅行資訊" },
      {
        p: "核准後如果入境目的、預定停留地址、聯絡方式、預定入境或出境日期，或同行者有所變更，官方指南說明必須在 K-ETA 網站的「Update Travel Information（更新旅行資訊）」頁面更新。未更新可能導致被拒絕入境或其他不利情形。",
      },
      { h2: "6. 拖到太晚才申請" },
      {
        ul: [
          "登機後或已在韓國境內才申請，可能導致 K-ETA 被拒或入境受到限制",
          "K-ETA 公告建議在預定入境日前 1～2 個月申請",
          `審查一般最長需要 ${DECISION}，申請量增加時可能更久`,
          "申請依收件順序審查——沒有加急服務",
          "暫存的申請表若 7 天內沒有取回，會自動刪除",
        ],
      },
      { h2: "7. 被拒絕後一再重新申請" },
      {
        p: "6 個月內申請 3 次以上的人，要等到第一次申請結果通知日起 6 個月後才能再申請。因個人資料（護照號碼、姓名、出生日期、性別、國籍、照片等）填錯而重新申請的情況不受此限。如果在限制期間需要前往韓國，官方公告指示向韓國大使館或領事館申請簽證。",
      },
      { h2: "8. 照片不符合規格" },
      {
        ul: [
          "彩色、JPG 格式、20MB 以下",
          "不可配戴帽子、圍巾或太陽眼鏡等配件",
          "正面全臉，約占畫面 75%，睜開眼睛直視鏡頭",
          "可以穿著宗教服飾，但從額頭到下巴的臉部必須清楚可見",
        ],
      },
      { h2: "9. 使用可能收不到結果的電子郵件" },
      {
        p: "K-ETA 公告指出 Gmail 使用者收信有延遲情形，請申請人改用其他電子郵件地址；並補充說明 outlook.com、hotmail.com 等美國的服務也可能有同樣的延遲。",
      },
      { h2: "10. 付款無法完成" },
      {
        p: "如果出現 3DS（持卡人身分驗證）錯誤，FAQ 指示聯絡您的發卡銀行。費用說明頁也提到，信用卡的海外付款功能若被關閉，付款可能失敗。",
      },
      { h2: "11. 以為居住地決定是否適用" },
      {
        p: "是否適用，取決於護照資料頁上記載的國籍。居住地、出發地、第三國簽證與疫苗接種狀況都無關。",
      },
      { h2: "兩件不屬於填寫錯誤的事" },
      {
        ul: [
          "虛假資料：填寫虛假資料的申請可能被拒絕，或在核准後隨時被撤銷，當事人也可能受到處罰或入境限制",
          "持 K-ETA 工作或留學：就業、就學及其他營利活動，需要向韓國大使館或領事館申請簽證",
        ],
      },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "K-ETA — Application guide", url: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do" } },
      { source: { label: "K-ETA — Fee information", url: "https://www.k-eta.go.kr/portal/guide/viewetafeeinformation.do" } },
      { source: { label: "K-ETA notice — Information about K-ETA (from 9 January 2023)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=99397" } },
      { source: { label: "K-ETA notice — Estimated time for K-ETA screening", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=11468" } },
      { source: { label: "K-ETA notice — Restriction on the number of applications", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=38748" } },
      { source: { label: "K-ETA notice — Delay in Gmail email reception", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=307497" } },
    ],
    faq: [
      { q: "K-ETA 送出後可以修改嗎？", a: "不行。資料只能在送出前修改。護照資料填錯時，官方 FAQ 指示以正確資料重新申請。" },
      { q: "換工作需要重新申請 K-ETA 嗎？", a: "不需要。官方 FAQ 說明，只有職業變更不需要重新申請；換新護照、改名或國籍變更則需要。" },
      { q: "我的 K-ETA 為什麼被拒絕？", a: "K-ETA 中心不會公開確切原因，因為審查標準屬於機密。若仍想入境韓國，FAQ 指示向韓國大使館或領事館申請簽證。" },
    ],
  },
  {
    slug: "keta-app",
    enSlug: "keta-app",
    added: ADDED,
    checked: NEW_CHECKED,
    related: ["keta-official-site", "keta-application-guide", "keta-status-check", "keta-common-mistakes"],
    title: "官方 K-ETA App：在哪裡下載、能做什麼",
    description:
      "K-ETA 只能在 k-eta.go.kr 或韓國法務部發布的官方 K-ETA App 申請。App 能做什麼，又有哪些事不會因此改變。",
    blocks: [
      {
        p: "K-ETA 官方網站說明，申請只能在 www.k-eta.go.kr 或名為 K-ETA 的行動 App 進行。App 是進入同一套系統的另一個入口，而不是另一項服務。",
      },
      {
        note: `台灣護照在 ${EXEMPT_UNTIL} 前入境不需要 K-ETA。依官方公告，免除對象在官方網站或 App 申請時掃描護照資料頁，會看到彈出提示；確認免除後，不需要繼續申請或付費。`,
      },
      { h2: "在哪裡下載" },
      {
        ul: [
          "Android：Google Play；iPhone：App Store。搜尋「K-ETA」",
          "Google Play 上的開發者顯示為「법무부」（法務部）；App Store 上的銷售者顯示為 Ministry of Justice",
          "商店說明寫明這是大韓民國政府的官方 App，並註明官方網站為 www.k-eta.go.kr",
          `App 免費下載。每人 ${F.fee} 的 K-ETA 費用，是在申請過程中支付`,
        ],
      },
      {
        note: "安裝任何 App 之前，請先確認發布者名稱。官方 App 的發布者是韓國法務部。",
      },
      { h2: "App 讓哪些事變簡單" },
      {
        p: "在網站上申請時，臉部照片與護照資料頁圖片都必須是小於 20MB 的 JPG 檔。官方 FAQ 說明，在 App 中尺寸與容量會自動調整。",
      },
      { h2: "App 還能做什麼" },
      {
        ul: [
          "在「K-ETA Application Results」查看審查結果",
          "在「Application Results」分頁的「Update Travel Information」變更旅行資訊",
          "查詢申請狀態——FAQ 說明網站或 App 都可以查",
        ],
      },
      { h2: "遇到問題時" },
      {
        ul: [
          "在電腦瀏覽器上付款出錯：官方公告建議改用 K-ETA App，或用行動裝置開啟行動版網站",
          "App 出現錯誤：官方公告指示刪除後重新安裝 K-ETA App",
          "出現 3DS（持卡人身分驗證）錯誤：FAQ 指示聯絡您的發卡銀行",
        ],
      },
      { h2: "App 不會改變的事" },
      {
        ul: [
          `申請費為每人 ${F.fee}（${USD_APPROX}），另可能加收一般約 3% 的線上付款手續費。官方頁面並未標示 App 有不同的價格`,
          `審查一般最長需要 ${DECISION}，任何申請都沒有加急服務`,
          `核准的 K-ETA 效期為 ${F.validYears} 年，不論用哪種方式申請`,
        ],
      },
      { source: { label: "K-ETA official website — application", url: F.officialUrl } },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "K-ETA — Fee information", url: "https://www.k-eta.go.kr/portal/guide/viewetafeeinformation.do" } },
      { source: { label: "K-ETA notice — How to fix payment errors", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=56631" } },
      { source: { label: "K-ETA notice — How to fix errors when applying for K-ETA", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=268391" } },
      { source: { label: "Google Play — K-ETA (Ministry of Justice)", url: "https://play.google.com/store/apps/details?id=kr.go.keta" } },
      { source: { label: "App Store — K-ETA (Ministry of Justice)", url: "https://apps.apple.com/us/app/k-eta/id1562976724" } },
    ],
    faq: [
      { q: "K-ETA App 要錢嗎？", a: `App 免費下載。每人 ${F.fee} 的 K-ETA 申請費在申請時收取。` },
      { q: "用 App 會比網站快嗎？", a: "官方頁面沒有這樣說。申請依收件順序審查，也沒有加急服務。" },
    ],
  },
  {
    slug: "keta-official-site",
    enSlug: "official-site",
    added: ADDED,
    checked: NEW_CHECKED,
    related: ["keta-app", "keta-cost", "keta-application-guide", "arrival-card-and-e-gates"],
    title: "K-ETA 官方網站：怎麼分辨真假",
    description: `只能在 www.k-eta.go.kr 或官方 K-ETA App 申請。韓國政府沒有指定任何代辦機構。官方費用為每人 ${F.fee}。`,
    blocks: [
      {
        p: "正式的申請管道有兩個：網站 www.k-eta.go.kr，以及名為 K-ETA 的行動 App。官方網站提醒申請人，要小心以代辦 K-ETA 申請或加急服務為名、收取高額費用的類似代辦業者與釣魚網站。",
      },
      { h2: "沒有指定任何代辦機構" },
      {
        p: "K-ETA 公告指出，大韓民國政府並未將 K-ETA 申請業務委託給任何代辦機構，並已發現有非官方網站要求較高的申請費。韓國出入境外國人政策本部也在 2025 年 8 月再次提醒：沒有指定任何代辦機構，請透過官方網站或 K-ETA App 申請。",
      },
      { h2: "官方網站的收費" },
      {
        ul: [
          `每人 ${F.fee}（${USD_APPROX}）`,
          "可能另加收線上付款手續費——一般約 3%",
          "費用一經支付，無論結果如何都不退還",
          "接受的卡別：VISA、MASTER、JCB、AMEX、Diners Club、DISCOVER、銀聯（UnionPay）與 Alipay+",
          "2023 年 7 月 3 日 09:00（韓國時間）以後送出的申請，收據會自動寄到申請人的電子郵件信箱",
        ],
      },
      { h2: "審查要多久" },
      {
        p: `官方網站說明，審查一般最長需要 ${DECISION}，申請量意外增加時可能更久。申請依收件順序審查，沒有加急服務。`,
      },
      { h2: "誰在營運、怎麼聯絡" },
      {
        ul: [
          "網站由大韓民國法務部的韓國電子旅行許可（K-ETA）中心營運",
          "原則上，K-ETA 中心不提供電話或面對面諮詢。問題請透過「Ask Us」提出，可使用韓文、英文、泰文或俄文",
          "申請表與主要公告提供 10 種語言版本，但申請欄位只接受英文輸入",
          "在網站上，非會員一次最多可為另外 9 人一併申請；會員最多可加 1,000 人",
        ],
      },
      { h2: "電子入境卡有自己的官方網站" },
      {
        p: "韓國出入境外國人政策本部提醒注意假冒的電子入境卡網站。唯一的官方電子入境卡網站是 www.e-arrivalcard.go.kr，任何要求輸入付款資料的網站都不是官方服務。台灣護照在免除期間要交入境卡，填寫時請特別留意網址。",
      },
      {
        note: `本站為獨立資訊網站，並非官方網站，不受理申請，也不收取任何款項。請只在 ${F.officialHost} 或 K-ETA App 申請。`,
      },
      { source: { label: "K-ETA official website — application", url: F.officialUrl } },
      { source: { label: "K-ETA notice — Beware of non-official websites and agencies", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=114771" } },
      { source: { label: "Korea Immigration Service — Beware of unofficial K-ETA websites (18 August 2025)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/598009/artclView.do" } },
      { source: { label: "K-ETA — Fee information", url: "https://www.k-eta.go.kr/portal/guide/viewetafeeinformation.do" } },
      { source: { label: "K-ETA notice — How to get a payment receipt", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=130892" } },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "Korea Immigration Service — Beware of fake e-Arrival card websites (9 March 2026)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/604164/artclView.do" } },
    ],
    faq: [
      { q: "有政府授權的 K-ETA 代辦機構嗎？", a: "沒有。韓國政府表示並未指定任何 K-ETA 申請代辦機構。" },
      { q: "可以打電話給 K-ETA 中心嗎？", a: "原則上 K-ETA 中心不提供電話或面對面諮詢。請使用官方網站上的「Ask Us」。" },
    ],
  },
  {
    slug: "keta-news",
    enSlug: "news",
    added: ADDED,
    checked: NEW_CHECKED,
    related: ["keta-after-exemption", "keta-exemption-2026", "do-i-need-keta"],
    title: `K-ETA 最新消息：暫時免除延長至 ${EXEMPT_UNTIL}，以及過去的變更`,
    description: `K-ETA 暫時免除至 ${EXEMPT_UNTIL}；截至 2026年11月15日，k-eta.go.kr 尚未公布 2027 年以後的安排。整理 2021 年以來的官方變更。`,
    blocks: [
      {
        p: "本頁列出韓國政府官方頁面上公布的 K-ETA 變更，並標註官方頁面所載的日期。每次我們核對這些頁面時就會更新；最近一次的核對日期顯示在上方。",
      },
      { h2: "2025年12月23日——暫時免除延長至 2026年12月31日" },
      {
        ul: [
          `法務部為了活絡觀光產業，將暫時免除再延長一年。延長期間為 2026年1月1日至 ${EXEMPT_UNTIL}（韓國時間）`,
          "當時已適用免除的國家與地區都在延長範圍內。公告並未列出這些國家與地區；免除對象在申請時掃描護照資料頁，會看到彈出提示",
          "免除對象若想享有 K-ETA 核准的好處，例如不必提交入境卡，仍可以申請，但須付費",
          "已持有 K-ETA 的人可使用到效期屆滿。已繳費用不退還",
        ],
      },
      { source: { label: "K-ETA notice — Extension of K-ETA temporary exemption (posted 23 December 2025)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299707" } },
      { h2: "2026年12月31日之後" },
      {
        p: "截至 2026年11月15日，K-ETA 公告欄沒有關於免除的更新公告，韓國出入境外國人政策本部英文新聞欄的最新消息也沒有提到 K-ETA。這些頁面都還沒有公布免除是否會再延長。如果您在 2027年1月1日以後入境，請在出發日前再查看一次 K-ETA 公告。",
      },
      { source: { label: "K-ETA — Notices", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=notice" } },
      { source: { label: "Korea Immigration Service — News (English)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/artclList.do" } },
      { h2: "過去的變更" },
      {
        ul: [
          "2021年9月1日——K-ETA 開始實施",
          "2022年9月1日——當時 112 個 K-ETA 適用國家的旅客，從海外搭乘飛往濟州的班機或船舶前，也需要取得 K-ETA",
          "2023年1月9日——外交與公務護照持有人免辦 K-ETA",
          `2023年7月3日——${F.ketaChildMaxAge} 歲以下及 ${F.ketaSeniorMinAge} 歲以上的免簽旅客免辦 K-ETA，效期也從 2 年延長為 ${F.validYears} 年。當天 09:00（韓國時間）以後送出的申請，收據會自動以電子郵件寄送`,
          "2024年3月18日——入境目的新增「Tour (Incentive Travel)」（獎勵旅遊），適用於由公司出資、10 人以上的旅遊與會議",
          "2025年8月31日——韓國出入境外國人政策本部在仁川國際機場開設外國商務旅客專用入境櫃檯，開放至 12 月",
          "2026年（公告列於 2026年3月11日）——K-ETA 中心表示 Gmail 使用者收信有延遲，請申請人改用其他信箱",
        ],
      },
      { source: { label: "K-ETA notice — Beware of non-official websites and agencies (implementation date)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=114771" } },
      { source: { label: "K-ETA notice — K-ETA required for Jeju-bound travel", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=53251" } },
      { source: { label: "K-ETA notice — Information about K-ETA (from 9 January 2023)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=99397" } },
      { source: { label: "K-ETA notice — Expansion of validity and age exemption (3 July 2023)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175270" } },
      { source: { label: "K-ETA notice — How to get a payment receipt", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=130892" } },
      { source: { label: "K-ETA notice — New purpose of entry: Tour (Incentive Travel)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=223021" } },
      { source: { label: "Korea Immigration Service — Reduced wait times for foreign business travellers (27 August 2025)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/598244/artclView.do" } },
      { source: { label: "K-ETA notice — Delay in Gmail email reception", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=307497" } },
      {
        note: "本頁未列出的事項：暫時免除最初開始的日期，以及先前幾次延長的日期。較早的公告已不在 k-eta.go.kr 上，我們也無法在官方頁面上確認這些日期。",
      },
    ],
  },
  {
    slug: "korea-short-term-visit-visa",
    enSlug: "short-term-visit-visa",
    added: ADDED,
    checked: NEW_CHECKED,
    related: ["keta-denied", "do-i-need-keta", "korea-entry-stay"],
    title: "韓國短期訪問簽證（C-3）：什麼時候需要簽證而不是 K-ETA",
    description:
      "K-ETA 被拒、受重複申請限制、打算工作或留學，或護照不屬於免簽對象時，就要申請簽證。C-3 各類別說明。",
    blocks: [
      {
        p: "K-ETA 只適用於可以免簽入境韓國的旅客。在幾種情況下，官方 K-ETA 頁面會指示您改為透過韓國大使館或領事館申請簽證。",
      },
      { h2: "什麼情況要改辦簽證" },
      {
        ul: [
          "K-ETA 被拒絕——FAQ 指示向最近的韓國大使館或領事館申請簽證",
          "正處於重複申請限制期間（6 個月內申請 3 次以上），又必須在這段期間前往韓國",
          "打算就業、就學或從事其他營利活動",
          "護照國籍不屬於免簽入境對象——K-ETA 是否適用，取決於護照資料頁上的國籍",
        ],
      },
      { h2: "已經持有簽證時" },
      {
        p: "持有有效韓國簽證的人不需要 K-ETA。官方指南說明，持有有效簽證者，不論是否另外持有 K-ETA，都依該簽證給予滯留資格與停留期間。",
      },
      { h2: "C-3 短期訪問的類別" },
      {
        p: "在韓國簽證入口網站（Korea Visa Portal）上，「Short Term Visit」（短期訪問）列為停留 90 天以內，並分為以下類別：",
      },
      {
        ul: [
          "Short-Term General（短期一般，C-3-1）",
          "Group Tourist（團體觀光，C-3-2）",
          "Business Visitor (General)（一般商務，C-3-4）",
          "Business Visitor (Agreement)（協定商務，C-3-5）",
          "Business Visitor (Sponsored)（受邀商務，C-3-6）",
          "Short term Visitor (Overseas Korean)（海外韓僑短期訪問，C-3-8）",
          "Ordinary Tourist（一般觀光，C-3-9）",
          "Direct Transit Visa (Air-side)（直接過境，C-3-10）",
        ],
      },
      {
        p: "Visa Navigator（簽證導覽）對短期一般（C-3-1）的說明是：探親、友誼賽、參加或觀摩活動與會議、文化藝術、一般研修、上課、宗教儀式、蒐集學術資料等目的。不得從事營利活動或就業。",
      },
      {
        p: "APEC 商務旅行卡持有人入境時會獲得短期商務（C-3-4）資格，最多可停留 90 天。",
      },
      { h2: "如何申請" },
      {
        p: "Visa Navigator 列出三種途徑：向韓國駐外館處申請、申請電子簽證，以及申請簽證發給認定書（Confirmation of Visa Issuance）。您可以走哪一種途徑、需要哪些文件、費用與處理時間，取決於您的國籍以及受理的大使館或領事館。申請前請向該館處確認，或使用 Visa Navigator 查詢。",
      },
      {
        note: "韓國出入境外國人綜合服務中心（Immigration Contact Center）的電話是 +82-1345。",
      },
      { source: { label: "Korea Visa Portal — Visa by categories", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10102&LANG_TYPE=EN" } },
      { source: { label: "Korea Visa Portal — Visa Navigator", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10101&LANG_TYPE=EN" } },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "K-ETA — Application guide", url: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do" } },
      { source: { label: "K-ETA notice — Restriction on the number of applications", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=38748" } },
    ],
    faq: [
      { q: "持有韓國簽證還需要 K-ETA 嗎？", a: "不需要。官方 FAQ 說明，持有有效韓國簽證的人不需要 K-ETA。" },
      { q: "C-3 簽證需要哪些文件？", a: "取決於您的國籍以及受理申請的韓國大使館或領事館。請向該館處確認，或查詢韓國簽證入口網站（Korea Visa Portal）。" },
    ],
  },
  {
    slug: "travel-authorisations-compared",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    related: ["keta-exemption-2026", "keta-cost"],
    title: "該辦哪一種旅行許可？NZeTA、eVisitor、K-ETA、ESTA 等比較",
    description:
      "名稱相似，規定卻差很多。哪個制度對應哪個目的地、各要多少錢，以及搞混時常見的錯誤。",
    blocks: [
      {
        p: "電子旅行許可從外表看起來好像可以互換，其實不行。每個國家都有自己的制度、自己的適用名單、自己的價格，甚至對這份文件是什麼都有不同的定義——有些是簽證，有些則明確表示不是簽證。",
      },
      {
        p: `本頁是一張對照圖，幫您分清楚哪個是哪個。前往韓國用的是 K-ETA，費用為 ${F.fee}。`,
      },
      {
        note: "有一條規則到哪裡都適用：在政府自己的網站申請，沒有任何代辦能讓結果更快出來。收費高出官方好幾倍的網站，只是替您填同一份表格。",
      },
      { h2: "韓國——K-ETA" },
      {
        p: `費用 ${F.fee}，效期 ${F.validYears} 年。許多國籍目前暫時免除至 ${EXEMPT_UNTIL}，台灣護照也是其中之一，所以申請前請先確認自己是否需要。可停留天數由您的國籍適用的免簽協定決定，而不是 K-ETA 本身——一般在 ${STAY_RANGE}之間。`,
      },
      { h2: "紐西蘭——NZeTA" },
      {
        p: "給免簽護照持有人的行前許可，不是簽證。費用分成兩部分：申請費，以及另外收取的國際旅客保育與觀光稅，這也是各處列出的總額不一致的原因。",
      },
      { h2: "澳洲——eVisitor 或 ETA" },
      {
        p: "澳洲依護照不同，使用兩種制度。eVisitor（subclass 651）是簽證，而且免費；ETA（subclass 601）則是需付費的另一種選擇，透過官方 App 申請。",
      },
      { h2: "英國——ETA" },
      {
        p: "適用於前往英國、澤西島、根西島與曼島、最長 6 個月的訪問。GOV.UK 標示的費用為 20 英鎊，透過官方服務申請。",
      },
      {
        source: {
          label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
          url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
        },
      },
      { h2: "美國——ESTA；加拿大——eTA" },
      {
        p: "兩國都為免簽旅客設有類似的制度。我們在這裡不列出它們的費用，因為撰寫本頁時無法向官方來源確認目前的金額，而過時的價格比沒有價格更糟。請直接查看官方網站——而且只看官方網站。",
      },
      {
        ul: [
          "美國：esta.cbp.dhs.gov",
          "加拿大：canada.ca（加拿大移民、難民及公民部）",
        ],
      },
      { h2: "真正讓人損失金錢的錯誤" },
      {
        ul: [
          "以為一份許可可以涵蓋多國行程。每個目的地都是分開的，包括會離開機場的中途停留。",
          "以為它就是簽證。有些是、有些不是，而這個差別決定了您到當地後可以做什麼。",
          "以為標價就是全部。有好幾個制度另外收取規費，或依申請方式收取不同金額。",
          "以為透過付費代辦會比較快。表格一樣，審查結果也一樣。",
        ],
      },
      { h2: "看自己的護照，而不是看摘要" },
      {
        p: "適用名單會變動，持有兩本護照的人也常常會得到兩個不同的答案。上面每一個制度都有官方的查詢方式，請用您實際要使用的那本護照查詢。",
      },
    ],
  },
];
