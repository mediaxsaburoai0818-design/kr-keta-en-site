import { FACTS as F } from "@/data/facts";
import type { Page } from "@/data/pages";

/**
 * 入国後の実用ページ（ETA横展開バッチ・2026-10-12）。
 * UK ETAサイトの17テーマのうち、韓国の公式情報で成立したものだけ。
 * ファクトと採否表＝~/projects/kr-entry-facts-2026-10-12.md（生ログ raw-A〜D・出典URL・確認日つき）
 *
 * ⚠️ UK版の訳ではない。KR固有の点を外さない:
 *    入国カードは「K-ETAを持っていない人」全員（一時免除国・17歳以下/65歳以上も）が出す ／
 *    到着自動ゲートは42か国・地域の17歳以上（米国は対象外）・仁川/済州で当日登録 ／
 *    運転は国際運転免許（ジュネーブ/ウィーン/二国間）で入国から1年・自国免許だけでは不可 ／
 *    現金は上限ではなく US$10,000 を「超える」と申告 ／ 年齢は「19歳になる年の1月1日」から ／
 *    電子たばこも2026-04-24からたばこ扱い ／ 向精神薬・ADHD薬・コデイン等は事前承認（MFDS） ／
 *    観光客は国民健康保険の対象外 ／ 2026年から労働節(5/1)と制憲節(7/17)が公休日 ／
 *    モバイルバッテリーは2026-04-20から1人2個・機内使用禁止
 * ⚠️ 確認できなかったこと（中国本土の運転免許の扱い・112/119のドイツ語/フランス語通訳・1330の時間・
 *    還付額・MFDSの審査日数・プソイドエフェドリン・CT導入による液体物緩和・ホテルのサービス料）は書かない。
 * ⚠️ 数値は F 経由。
 */

export const HUB_SLUG = "arriving-in-korea";

/** 2026-10-12 に公式で確認したページ群（表示の確認日） */
const CHECKED = "12 October 2026";

const RAW: Page[] = [
  {
    slug: HUB_SLUG,
    nav: "After you land",
    title: "Arriving in Korea: a practical guide for K-ETA holders and exempt travellers",
    description: "K-ETA gets you on the plane. What comes after — arrival card, e-gates, cash, tax refunds, transport, healthcare, emergencies — checked with official sources.",
    related: ["border-questions", "quarantine", "customs-allowances"],
    blocks: [
      {
        p: `A K-ETA — or the temporary exemption that covers many nationalities until ${F.exemptionUntil} — settles one question: whether you can board a flight to Korea without a visa. It says nothing about what happens at the airport, what you can carry, how to pay, how to get around or what to do if something goes wrong. These pages do. Each one is checked against the Korean authority responsible and links to it.`,
      },
      { h2: "At the border" },
      { links: ["arrival-card-and-e-gates", "border-questions", "quarantine", "customs-allowances", "bringing-medicines", "travelling-with-children", "passport-and-details"] },
      { h2: "Money" },
      { links: ["money-and-tipping", "tax-refund-for-tourists"] },
      { h2: "Getting around and staying connected" },
      { links: ["transport-cards", "driving-in-korea", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
      { h2: "Health and safety" },
      { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
      { h2: "Flying home" },
      { links: ["airport-security-liquids", "leaving-and-returning", "how-long-can-you-stay"] },
      {
        note: "What we did not write a separate page about: passport validity. Korean law requires a valid passport, and we found no official minimum period of remaining validity for visa-free visitors — airlines and transit countries may have their own rules. See the page on your passport and K-ETA details.",
      },
    ],
  },
  {
    slug: "arrival-card-and-e-gates",
    nav: "Arrival card and e-gates",
    title: "Korea's arrival card and e-gates: who files what, and who can skip the queue",
    description: `Without a K-ETA you file an arrival card (online from ${F.earrivalDaysBefore} days before). Since ${F.egateSince}, visitors aged ${F.egateMinAge}+ from ${F.egateCountries} countries can register for e-gates.`,
    related: [HUB_SLUG, "border-questions", "travelling-with-children", "if-you-are-exempt"],
    blocks: [
      {
        p: "Two things decide how your arrival in Korea goes, and neither of them is the K-ETA itself: whether you have to hand in an arrival card, and whether you can use the automated gates instead of the staffed desks.",
      },
      { h2: "Who must submit an arrival card" },
      {
        p: "In principle every foreigner entering Korea submits an arrival card. The main exception for visitors is a valid K-ETA: if you hold one and enter visa-free, you do not file a card. Everyone else does — and that includes the people who do not need a K-ETA.",
      },
      {
        ul: [
          `Nationals of countries under the temporary K-ETA exemption (until ${F.exemptionUntil}) — card required`,
          `Children aged ${F.ketaChildMaxAge} or under and adults aged ${F.ketaSeniorMinAge} or over, who are exempt from K-ETA — card required`,
          "Visa holders — card required (also if they happen to hold a K-ETA but enter on the visa)",
          "Holders of a valid K-ETA entering visa-free — no card",
        ],
      },
      {
        note: "This is the one practical benefit of applying for a K-ETA while you are exempt: the Korean authorities say exempt travellers may still apply, pay the fee, and skip the arrival card. Whether that is worth the fee is your call — the card itself is free and takes a few minutes.",
      },
      { h2: "The e-Arrival card" },
      {
        ul: [
          `File it at e-arrivalcard.go.kr from ${F.earrivalDaysBefore} days before arrival, counted in Korean time and including the arrival day (arriving on the 31st: file on the 29th, 30th or 31st)`,
          "It is free. The official site runs on PC and mobile web; there is no app",
          "It has the same effect as the paper card, and the paper card is still available if you prefer",
          `It expires ${F.earrivalValidHours} hours after submission, and once you pass immigration — file a new one for each entry`,
          "You can still file it after landing, as long as you have not reached the immigration desk",
          "It is a different system from K-ETA. Sites that bundle the two and charge for it are not official",
        ],
      },
      { source: { label: "Ministry of Justice — e-Arrival card guide", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do" } },
      { source: { label: "Ministry of Justice — who must file the e-Arrival card", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
      { h2: "Fingerprints and a photo" },
      {
        p: `Foreigners aged ${F.biometricsMinAge} and over have both index fingers scanned and a facial photo taken when they enter Korea. Children under ${F.biometricsMinAge} are exempt.`,
      },
      { source: { label: "Korea Immigration Service — foreigner fingerprint verification system", url: "https://www.immigration.go.kr/immigration/2429/subview.do" } },
      { h2: "Arrival e-gates for visitors" },
      {
        p: `Since ${F.egateSince}, visa-free visitors aged ${F.egateMinAge}+ who are nationals of ${F.egateCountries} countries and regions can register on arrival and then use the automated arrival gates. The list includes the EU and Schengen states, the UK, Canada, Japan, Taiwan, Hong Kong, Macao, Singapore, the UAE, Mexico, Australia and New Zealand. The United States is not on it.`,
      },
      {
        ul: [
          "Registration desks are in the arrivals immigration halls at Incheon (Terminals 1 and 2) and Jeju airports",
          "The steps: scan your passport, register your fingerprints, register your face — then use the gate",
          "Once registered, you can use the gates again on later visits, including at other airports",
        ],
      },
      { h2: "Departure e-gates" },
      {
        p: `On the way out it is simpler: short-term visitors aged ${F.egateMinAge}+ can use the departure e-gates without registering in advance.`,
      },
      { source: { label: "Ministry of Justice press release, 16 March 2026 — arrival e-gates opened to 42 countries (Korean, PDF)", url: "https://www.immigration.go.kr/bbs/moj/182/491982/download.do" } },
      { source: { label: "Korea Immigration Service — Smart Entry Service (SES)", url: "https://www.immigration.go.kr/immigration/1527/subview.do" } },
      {
        note: "Using an e-gate does not change anything about your stay. Your permitted stay still comes from your country's visa-waiver arrangement, and a K-ETA is not what gives you access to the gates.",
      },
    ],
    faq: [
      {
        q: "Do I need an arrival card if my country is exempt from K-ETA?",
        a: "Yes. Travellers under the temporary exemption, and children and seniors who are exempt by age, must submit an arrival card — online (e-Arrival card) or on paper. Only visa-free visitors holding a valid K-ETA skip it.",
      },
      {
        q: "Can Americans use Korea's arrival e-gates?",
        a: `Not under the arrival-hall registration open since ${F.egateSince}: the United States is not among the ${F.egateCountries} countries and regions. Departure e-gates are open to visitors aged ${F.egateMinAge}+ without registration.`,
      },
      {
        q: "Is the e-Arrival card the same as K-ETA?",
        a: "No. The e-Arrival card is a free arrival declaration for one entry; K-ETA is a paid travel authorisation valid for up to three years. The official site says so explicitly.",
      },
    ],
  },
  {
    slug: "airport-security-liquids",
    nav: "Liquids and power banks",
    title: `Flying out of Korea: the ${F.liquidMl} liquids rule and the two-power-bank limit`,
    description: `Carry-on liquids: ${F.liquidMl} containers in one sealed ${F.liquidBag} bag. Since ${F.powerBankSince}, at most ${F.powerBankMax} power banks per person, and no charging on board.`,
    related: [HUB_SLUG, "tax-refund-for-tourists", "bringing-medicines"],
    blocks: [
      {
        p: "Korea's airport security rules for liquids are the familiar international ones. What changed in 2026 is power banks: Korea now has one of the strictest rules, and it was adopted as an international standard.",
      },
      { h2: "Liquids in hand luggage (international flights)" },
      {
        ul: [
          `Each container ${F.liquidMl} or less — judged by the size of the container, not how much is left in it`,
          `All containers in one clear, sealed plastic bag of up to ${F.liquidBag} per person`,
          "Food counts if it is liquid or gel-like — gochujang and kimchi included",
          "Domestic flights inside Korea have no liquid limit",
        ],
      },
      { h2: "Exceptions" },
      {
        ul: [
          `Baby items for a child aged ${F.babyItemsMaxAge} or under — milk, water, juice, baby food, wet wipes — in the amount needed for the flight`,
          `Liquid medicine over ${F.liquidMl} (insulin, for example) with a doctor's note or prescription in Korean or English, in the amount needed on board; the rest goes in checked baggage`,
          "Duty-free liquids, whatever the volume, only inside the sealed duty-free bag, unopened until you board the flight to your final destination",
        ],
      },
      {
        note: "If you change planes at another airport, its own rules apply and liquids can be confiscated there even if Incheon let them through. Check with your airline before you buy duty-free for an onward connection.",
      },
      { source: { label: "Incheon International Airport — restricted items (Korean)", url: "https://www.airport.kr/ap_ko/906/subview.do" } },
      { source: { label: "Incheon International Airport — restricted items FAQ (Korean)", url: "https://www.airport.kr/ap_ko/907/subview.do" } },
      { h2: `Power banks since ${F.powerBankSince}` },
      {
        ul: [
          `At most ${F.powerBankMax} power banks per person, each ${F.powerBankWh} or less`,
          "Power banks between 100 and 160 Wh need the airline's approval; over 160 Wh are not allowed at all",
          "Carry-on only — power banks are not allowed in checked baggage",
          "No charging the power bank on board, and no using it to charge your phone or anything else",
        ],
      },
      {
        p: "Korea introduced the rule after a power bank fire on an Air Busan aircraft in January 2025. The International Civil Aviation Organization adopted it into its dangerous goods instructions on 27 March 2026. Some countries already apply stricter rules, so check your airline's limits for the return leg too.",
      },
      { source: { label: "Ministry of Land, Infrastructure and Transport — power bank rules, 8 April 2026 (Korean)", url: "https://www.molit.go.kr/USR/NEWS/m_71/dtl.jsp?lcmspage=1&id=95091874" } },
      {
        note: "You may read that Korean airports have relaxed the liquid limit because of new scanners. We could not find that on the Ministry of Land or Incheon Airport websites, which still state the 100 ml rule — so plan for it.",
      },
    ],
    faq: [
      {
        q: "Can I take kimchi in my hand luggage?",
        a: `Only in containers of ${F.liquidMl} or less inside the ${F.liquidBag} bag — Incheon Airport treats it as a liquid food. Larger amounts go in checked baggage.`,
      },
      {
        q: "How many power banks can I take on a flight from Korea?",
        a: `Since ${F.powerBankSince}: up to ${F.powerBankMax} per person, each ${F.powerBankWh} or less, in your hand luggage only, and you may not charge or use them during the flight.`,
      },
    ],
  },
  {
    slug: "money-and-tipping",
    nav: "Money and tipping",
    title: "Money in Korea: won, cards, tipping, and cash over US$10,000",
    description: `Cards are widely accepted, markets may want cash, and tipping is not expected. Cash and cheques over ${F.cashDeclareOver} in total must be declared on arrival.`,
    related: [HUB_SLUG, "tax-refund-for-tourists", "customs-allowances"],
    blocks: [
      { p: "Korea's currency is the won (KRW, ₩). Banknotes come in 1,000, 5,000, 10,000 and 50,000 won; coins in 10, 50, 100 and 500 won." },
      { h2: "Cards and cash" },
      {
        ul: [
          "Visa, Mastercard, American Express, JCB and UnionPay are accepted in most shops, hotels and department stores, according to the Korea Tourism Organization",
          "Traditional markets and street stalls may take cash only — carry some",
          "Reloadable prepaid transport cards such as T-money can also pay at affiliated shops that show the card's logo",
          "Exchange money at a bank or an authorised exchange office; banks generally open 09:00–16:00 on weekdays",
        ],
      },
      { source: { label: "Korea Tourism Organization — currency and exchange", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140040" } },
      { h2: "Tipping" },
      {
        p: "The Korea Tourism Organization puts it plainly: tipping is not required or expected in Korea. Extra water and refills of side dishes in restaurants are free.",
      },
      { source: { label: "Korea Tourism Organization — about Korean food", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140727" } },
      { h2: `Bringing more than ${F.cashDeclareOver}` },
      {
        p: `If the foreign currency, won banknotes and cheques you carry — including won cashier's cheques — add up to more than ${F.cashDeclareOver}, you must declare them to customs on arrival. Tick item 3 on the traveller declaration and write the amount; customs gives you a certificate of declaration. It cannot be issued once you have left the immigration area, so do it on arrival.`,
      },
      {
        ul: [
          "This is a declaration, not a limit — you may bring more if you declare it",
          `Failing to declare can bring an administrative fine of up to ${F.cashAdminFineMax}`,
          `Where the undeclared amount is more than ${F.cashCriminalOver}, it becomes a criminal offence (up to one year in prison or a fine)`,
          "Leaving Korea, a visitor can take out up to the amount declared on arrival without a new declaration",
        ],
      },
      { source: { label: "Korea Customs Service — declaration of foreign currency", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10800&cntntsId=5500" } },
      { source: { label: "Foreign Exchange Transactions Act (Korean)", url: "https://www.law.go.kr/법령/외국환거래법" } },
    ],
    faq: [
      { q: "Should I tip in Korean restaurants?", a: "No. The Korea Tourism Organization says tipping is not required or expected in Korea." },
      {
        q: "How much cash can I bring into Korea?",
        a: `There is no upper limit, but if the total of foreign currency, won notes and cheques is more than ${F.cashDeclareOver}, you must declare it to customs on arrival.`,
      },
    ],
  },
  {
    slug: "tax-refund-for-tourists",
    nav: "Tax refund",
    title: `Tax refunds for tourists in Korea: from ${F.taxRefundMin}, and on-the-spot refunds`,
    description: `Visitors get VAT back on purchases of ${F.taxRefundMin}+ at tax-free shops. On-the-spot refunds: under ${F.immediateRefundPerPurchase} per purchase, ${F.immediateRefundTotal} per trip.`,
    related: [HUB_SLUG, "money-and-tipping", "airport-security-liquids"],
    blocks: [
      {
        p: "Prices in Korea include VAT. Foreign visitors can have it refunded on goods they take home, as long as they buy from a participating tax-free shop and the goods leave Korea in time.",
      },
      { h2: "Who qualifies" },
      {
        ul: [
          "Non-residents — the Korea Tourism Organization describes this as foreigners staying in Korea for less than six months",
          "Not residents of Korea, companies, or diplomats and military personnel stationed in Korea",
        ],
      },
      { h2: "The rules" },
      {
        ul: [
          `Minimum ${F.taxRefundMin} per purchase (tax included), at a shop that offers tax-free shopping`,
          `The goods must leave Korea within ${F.taxRefundExportMonths} months of purchase`,
          "Tobacco is excluded, as are habit-forming medicines and goods banned from import or export",
        ],
      },
      { h2: "On-the-spot (immediate) refund" },
      {
        p: `Many shops deduct the tax at the till. This works only if each purchase is under ${F.immediateRefundPerPurchase} and your on-the-spot refund purchases total ${F.immediateRefundTotal} or less during the trip. Above that, you claim the refund later instead.`,
      },
      { h2: "Claiming at the airport or in town" },
      {
        ul: [
          "On departure, have your passport, the sales receipts and the goods (unopened and unused) — customs may ask to see them",
          "Airports with customs kiosks: enter your passport and receipt details at the kiosk; go to the customs desk only if you are selected for inspection",
          `Refund counters in town take receipts of up to ${F.downtownRefundCap} each; counters in airports and port terminals have no upper limit`,
        ],
      },
      { source: { label: "Korea Customs Service — tax refund", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10803&cntntsId=5504" } },
      { source: { label: "Korea Tourism Organization — duty free and tax refunds", url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140736" } },
      { source: { label: "Special rules on VAT for foreign tourists — Presidential Decree (Korean)", url: "https://www.law.go.kr/법령/외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정" } },
      {
        note: "Check the size of the refund at the shop, not in a guide: it depends on the purchase and on the refund operator, and we have not found an official table we could reproduce.",
      },
    ],
    faq: [
      { q: "What is the minimum spend for a tax refund in Korea?", a: `${F.taxRefundMin} per purchase, tax included, at a participating tax-free shop.` },
      {
        q: "Can I get the tax back immediately in the shop?",
        a: `Yes, at shops offering it, if the purchase is under ${F.immediateRefundPerPurchase} and your on-the-spot refunds total no more than ${F.immediateRefundTotal} for the trip.`,
      },
    ],
  },
  {
    slug: "bringing-medicines",
    nav: "Bringing medicines",
    title: "Bringing medicines into Korea: what needs approval before you travel",
    description: `Ordinary medicines: up to ${F.medsBottles} bottles or ${F.medsMonths} months' supply. ADHD drugs, codeine, sleeping pills and other controlled medicines need approval first.`,
    related: [HUB_SLUG, "healthcare-for-visitors", "airport-security-liquids", "customs-allowances"],
    blocks: [
      {
        p: "Most travellers bring a few packets of ordinary medicine and have nothing to worry about. A minority bring something that Korean law treats as a controlled substance — often a medicine that is routine at home — and that needs permission before the trip, not an explanation at the airport.",
      },
      { h2: "Ordinary medicines for your own use" },
      {
        ul: [
          `Up to ${F.medsBottles} bottles, or up to ${F.medsMonths} months' supply at the prescribed dosage`,
          `They count towards your ${F.customsGoodsAllowance} duty-free allowance — not on top of it`,
          "Some medicines that customs considers open to misuse (for example certain erectile-dysfunction products) are limited to a Korean doctor's prescription",
        ],
      },
      { source: { label: "Incheon Main Customs — medicines on arrival (Korean)", url: "https://www.customs.go.kr/incheon/cm/cntnts/cntntsView.do?mi=10784&cntntsId=5480" } },
      { h2: "Medicines with a narcotic or psychotropic ingredient" },
      {
        p: "If a medicine contains a narcotic or psychotropic ingredient, Korean law treats it as such even if it is sold over the counter where you live or was prescribed by a doctor. Bringing it in without prior approval from the Ministry of Food and Drug Safety (MFDS) can be prosecuted.",
      },
      {
        p: "Ingredients named by Korea Customs include:",
      },
      {
        ul: [
          "Codeine, morphine, oxycodone, tapentadol, methadone",
          "Methylphenidate and amphetamines — common ADHD medicines",
          "Zolpidem, alprazolam, diazepam, lorazepam, clonazepam — sleeping pills and tranquillisers",
          "Dextromethorphan — found in some cough and cold products",
        ],
      },
      { h2: "How to get approval" },
      {
        ul: [
          "Apply to the MFDS online through its nedrug.mfds.go.kr portal (application for bringing in narcotics for self-treatment) before you travel",
          "You need a copy of your travel documents, a document listing the medicine, quantity, length of stay and purpose, and a diagnosis from a doctor (a Korean or foreign medical institution) — or an export permit from your departure country's government",
          "The rule applies to Koreans and foreigners alike",
        ],
      },
      { source: { label: "Korea Customs Service — medicines containing narcotic ingredients (Korean)", url: "https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=13807&cntntsId=7640" } },
      { source: { label: "Ministry of Food and Drug Safety — bringing in narcotics for self-treatment", url: "https://www.mfds.go.kr/brd/m_74/view.do?seq=43906" } },
      { h2: "Cannabis and CBD" },
      {
        p: "All cannabis products — including CBD oil and vape cartridges — are criminally punishable if brought into Korea. That applies even where they are legal at home.",
      },
      {
        note: "We do not know how long the MFDS takes to decide, and it does not publish a processing time. Apply as early as you can, and if you are unsure whether an ingredient is controlled, ask the MFDS before you fly.",
      },
    ],
    faq: [
      {
        q: "Can I bring my ADHD medication to Korea?",
        a: "Methylphenidate and amphetamines are controlled in Korea. You need approval from the Ministry of Food and Drug Safety before you travel, applied for online with a doctor's diagnosis.",
      },
      {
        q: "Is CBD oil allowed in Korea?",
        a: "No. Korea Customs states that all cannabis products, including CBD oil and vape cartridges, are subject to criminal punishment if brought in.",
      },
    ],
  },
  {
    slug: "smoking-vaping-and-alcohol",
    nav: "Smoking, vaping, alcohol",
    title: `Smoking, vaping and alcohol in Korea: age ${F.customsAgeMin} by birth year, and a ${F.smokingFine} fine`,
    description: `Alcohol and tobacco are sold from the year you turn ${F.customsAgeMin}. Smoking or vaping in a non-smoking area costs ${F.smokingFine}. Drink-driving starts at ${F.bacLimit}.`,
    related: [HUB_SLUG, "customs-allowances", "driving-in-korea"],
    blocks: [
      { h2: "The legal age" },
      {
        p: `Selling alcohol or tobacco to anyone under ${F.customsAgeMin} is banned. Korea counts this by birth year: from 1 January of the year you turn ${F.customsAgeMin}, you count as an adult for this purpose. Sellers must check age and identity, so carry your passport.`,
      },
      { source: { label: "Juvenile Protection Act (Korean)", url: "https://www.law.go.kr/법령/청소년 보호법" } },
      { h2: "Where you cannot smoke" },
      {
        p: "Large parts of public life are non-smoking by law. The National Health Promotion Act makes whole facilities non-smoking, including:",
      },
      {
        ul: [
          "Waiting rooms and platforms at airports, stations and bus terminals, underground walkways and larger vehicles",
          "Hotels and other tourist accommodation",
          "Restaurants, cafés and bakeries above a set floor area",
          "Hospitals, schools and public bathhouses",
          "Further places designated by local governments by ordinance — often parks, bus stops and streets",
        ],
      },
      {
        p: `Smoking in a non-smoking area brings a fine of ${F.smokingFine} (in zones set by local ordinance, up to that amount).`,
      },
      { h2: "E-cigarettes count" },
      {
        p: "Since 24 April 2026, Korean law defines tobacco to include products made from nicotine, natural or synthetic. The Ministry of Health and Welfare confirms that synthetic-nicotine e-cigarettes fall under the same non-smoking rules as cigarettes.",
      },
      { source: { label: "Ministry of Health and Welfare — synthetic nicotine e-cigarettes, 23 June 2026 (Korean)", url: "https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1490975&mid=a10503010100&nPage=1&tag=" } },
      { source: { label: "National Health Promotion Act (Korean)", url: "https://www.law.go.kr/법령/국민건강증진법" } },
      { h2: "Drinking in public" },
      {
        p: "There is no nationwide ban on drinking in public. Local governments can declare no-drinking zones by ordinance, with fines of up to KRW 100,000, so look out for signs in parks and similar places.",
      },
      { h2: "Drink-driving" },
      {
        p: `The limit is a blood alcohol concentration of ${F.bacLimit} — lower than in many countries — and it applies to bicycles as well as cars.`,
      },
      { source: { label: "Road Traffic Act (Korean)", url: "https://www.law.go.kr/법령/도로교통법" } },
      {
        note: `Bringing cigarettes or alcohol into Korea is covered by the customs allowance (${F.customsCigarettes} cigarettes; alcohol up to ${F.customsAlcoholLitres} litres and ${F.customsAlcoholValue}), and travellers under ${F.customsAgeMin} get no allowance for either.`,
      },
    ],
    faq: [
      { q: "What is the drinking age in Korea?", a: `${F.customsAgeMin}, counted by birth year: from 1 January of the year you turn ${F.customsAgeMin} you may buy alcohol and tobacco.` },
      { q: "Can I vape where smoking is banned?", a: "No. E-cigarettes, including synthetic-nicotine liquids, are treated as tobacco and may not be used in non-smoking areas." },
    ],
  },
  {
    slug: "travelling-with-children",
    nav: "Travelling with children",
    title: `Travelling to Korea with children: no K-ETA up to age ${F.ketaChildMaxAge}, but an arrival card`,
    description: `Children aged ${F.ketaChildMaxAge} or under on the day they enter need no K-ETA, but they do need an arrival card. What else differs for families at the border and on the plane.`,
    related: [HUB_SLUG, "arrival-card-and-e-gates", "airport-security-liquids", "do-i-need-keta"],
    blocks: [
      { h2: "K-ETA: exempt by age" },
      {
        p: `Since 3 July 2023, travellers aged ${F.ketaChildMaxAge} or under — and ${F.ketaSeniorMinAge} or over — on the day they enter Korea are exempt from the K-ETA requirement. What counts is the age on the entry date: a teenager who turns 18 before arrival needs their own K-ETA (unless their nationality is under the temporary exemption until ${F.exemptionUntil}).`,
      },
      { source: { label: "K-ETA — notice on the age exemption (Korean)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175266&esntlPnotiMtYn=Y" } },
      { h2: "The arrival card still applies" },
      {
        p: "Because they do not hold a K-ETA, exempt children must submit an arrival card — online through the e-Arrival card, or on paper. Children under 14 cannot be the lead filer, so a parent files for the family; group filing for more than 9 people only works on a PC.",
      },
      {
        p: "The official K-ETA notice says age-exempt travellers may still apply (and pay the fee) if they want K-ETA benefits such as skipping the arrival card.",
      },
      { source: { label: "Ministry of Justice — who must file the e-Arrival card", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
      { h2: "At immigration" },
      {
        ul: [
          `Children under ${F.biometricsMinAge} do not give fingerprints or a facial photo on entry`,
          `The arrival e-gates are for visitors aged ${F.egateMinAge}+ — families typically split, adults at the gate and children at a staffed desk`,
        ],
      },
      { h2: "On the plane home" },
      {
        p: `Baby items for a child aged ${F.babyItemsMaxAge} or under — milk, water, juice, baby food, wet wipes — may go in the cabin above the ${F.liquidMl} limit, in the amount needed for the flight.`,
      },
      {
        note: "We could not find an official Korean requirement for a parental consent letter when a child travels alone or with one parent. Airlines and your home country may still ask for one, so check with them.",
      },
    ],
    faq: [
      { q: "Does my child need a K-ETA for Korea?", a: `Not if they are ${F.ketaChildMaxAge} or under on the day they enter Korea. From age 18 on the entry date they need their own, unless their nationality is temporarily exempt.` },
      { q: "Does my child need an arrival card?", a: "Yes. Children without a K-ETA submit an arrival card; a parent can file it for them on the e-Arrival card site." },
    ],
  },
  {
    slug: "transport-cards",
    nav: "Transport cards",
    title: "Getting around Korea: T-money, cashless buses and Seoul's Climate Card",
    description: "One prepaid card works on almost all public transport. Many buses take no cash, and since 1 October 2026 Seoul's Climate Card passes cover Seoul only.",
    related: [HUB_SLUG, "money-and-tipping", "phones-and-sim-cards"],
    blocks: [
      {
        p: "Korea is one of the few countries where a single prepaid card gets you onto buses, subways and taxis almost everywhere. For a visitor, buying one on the first day is the most useful thing you can do.",
      },
      { h2: "T-money and EZL cards" },
      {
        ul: [
          "According to the Korea Tourism Organization, T-money and EZL cards work on virtually all public transport in Korea: subways, city buses, express and intercity buses, taxis and trains",
          "Sold at convenience stores nationwide and at Seoul subway information centres (Lines 1–8); the card itself costs 3,000–5,000 won",
          "Top up at subway ticket machines or convenience stores",
          "Paying by card gets you the bus–subway transfer discount; cash fares do not",
        ],
      },
      { source: { label: "Korea Tourism Organization — transportation cards", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140663" } },
      { h2: "Many buses do not take cash" },
      {
        p: "Korean cities have been switching buses to cashless operation. Seoul lists 183 cashless routes (January 2026), while other Seoul buses still take cash. The Korea Tourism Organization says all city buses in Incheon, Daegu and Gwangju are cashless. Free transfer rules also differ from city to city — Seoul allows up to four free transfers, Busan two.",
      },
      { source: { label: "Seoul Metropolitan Government — cashless bus routes, January 2026 (Korean)", url: "https://news.seoul.go.kr/traffic/archives/508898" } },
      { source: { label: "Korea Tourism Organization — city buses", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140659" } },
      { h2: "Seoul's Climate Card short-term passes" },
      {
        ul: [
          "Unlimited-ride passes for 1, 2, 3, 5 or 7 days, priced from 5,000 to 20,000 won, on a physical card that costs 3,000 won",
          "The pass starts when you load it — you cannot load it in advance for a later date",
          "Since 1 October 2026 it covers the subway within Seoul, Seoul-licensed city and village buses (night and circular buses included), and getting off at Incheon Airport Terminals 1 and 2",
          "Areas outside Seoul that used to be included — Gimpo, Goyang, Gwacheon, Guri, Seongnam, Hanam, Namyangju and others — no longer are",
          "Since 17 March 2026, the new ticket machines at Seoul subway Lines 1–8 accept foreign Visa and Mastercard cards for buying and loading the pass, with an average service fee of 3.7%",
        ],
      },
      { source: { label: "Seoul Metropolitan Government — Climate Card short-term pass coverage from 1 October 2026 (Korean)", url: "https://news.seoul.go.kr/traffic/archives/519012" } },
      { source: { label: "Seoul Metropolitan Government — foreign cards at ticket machines from 17 March 2026 (Korean)", url: "https://news.seoul.go.kr/traffic/archives/516544" } },
      {
        note: "English-language pages, including some official ones, still describe the Climate Card's old coverage and say foreign cards cannot be used. Seoul's own October 2026 notices above are the current ones.",
      },
    ],
    faq: [
      { q: "Does T-money work outside Seoul?", a: "Yes. The Korea Tourism Organization says T-money and EZL cards work on virtually all public transport nationwide, including taxis and trains." },
      { q: "Can I pay the bus fare in cash in Korea?", a: "Not always. Many city buses are cashless — 183 routes in Seoul, and all city buses in Incheon, Daegu and Gwangju according to the Korea Tourism Organization. Get a transport card first." },
    ],
  },
  {
    slug: "phones-and-sim-cards",
    nav: "Phones and SIM cards",
    title: "Getting a SIM card or eSIM in Korea: bring your passport",
    description: "Korean mobile carriers must verify your identity, and for visitors that means a passport. Where to get a prepaid SIM or eSIM, and the 2026 changes.",
    related: [HUB_SLUG, "transport-cards", "emergency-and-safety"],
    blocks: [
      { h2: "Where to get one" },
      {
        ul: [
          "Roaming centres run by Korean carriers at the major international airports — Incheon, Gimpo, Gimhae and Jeju — sell prepaid SIM (USIM) cards and handle pick-ups of cards ordered online",
          "At Incheon Terminal 1, all three carriers have roaming centres open 24 hours on the arrivals floor",
          "Major convenience store chains also sell physical USIM cards, though stock varies by branch",
          "eSIMs are bought online and set up by scanning a QR code — check that your phone supports eSIM first",
        ],
      },
      { source: { label: "Korea Tourism Organization — electricity and communications", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
      { source: { label: "Incheon International Airport — telecommunications facilities", url: "https://www.airport.kr/ap_en/1536/subview.do" } },
      { h2: "Identity checks are required by law" },
      {
        p: "Korean law requires mobile carriers to verify the identity of anyone signing up for service, including through dealers and shops, and allows them to refuse if you decline. For foreigners, a passport is one of the accepted documents. Carry it when you buy a SIM.",
      },
      { source: { label: "Enforcement Decree of the Telecommunications Business Act, Article 37-7 (Korean)", url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290813&chrClsCd=010202&urlMode=lsInfoP&efYd=20261001&ancYnChk=0" } },
      { h2: "What changed in 2026" },
      {
        ul: [
          "Korea is tightening phone sign-ups to fight fraud. Facial verification began in stages on 6 July 2026, for sign-ups made with a Korean resident ID card or driving licence",
          "The Ministry of Science and ICT says it reduced the number of lines a foreigner can open on a passport from two to one",
          "It plans to extend photo checks to foreign ID cards in the second half of 2026 and to passports in 2027",
        ],
      },
      { source: { label: "Ministry of Science and ICT — measures against phone misuse, 30 June 2026 (Korean)", url: "https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3187497" } },
      {
        note: "We do not list prices or recommend sellers. Whether a particular data-only eSIM asks for your passport depends on the product; the legal identity check applies to contracts with Korean mobile carriers.",
      },
    ],
    faq: [
      { q: "Do I need my passport to buy a SIM card in Korea?", a: "Yes. Korean law requires mobile carriers to verify the subscriber's identity, and for foreigners the passport is an accepted document." },
      { q: "Can I buy a SIM card at Incheon Airport?", a: "Yes. The carriers' roaming centres at Incheon sell prepaid SIM cards; in Terminal 1, all three carriers have 24-hour centres on the arrivals floor." },
    ],
  },
  {
    slug: "power-plugs",
    nav: "Plugs and voltage",
    title: "Plugs and voltage in Korea: 220 V, 60 Hz, two round pins",
    description: "Korean sockets take plugs with two round pins and supply 220 volts at 60 hertz. What to check on your charger before you plug in.",
    related: [HUB_SLUG, "phones-and-sim-cards"],
    blocks: [
      {
        p: "The standard voltage in Korea is 220 volts at 60 hertz, and household sockets have two round holes. A Gangneung city tourism page names these socket types C and F, the same as in Germany, France, Austria, Spain and Greece.",
      },
      { h2: "What this means for your devices" },
      {
        ul: [
          "Plugs from continental Europe generally fit without an adapter",
          "Plugs with flat pins — as used in the UK, the US, mainland China, Taiwan and many other places — need an adapter",
          "Check the label on your charger: if it says INPUT 100–240V, it works on 220 V. If it only says 110 V or 120 V, it is not made for Korean voltage",
          "Hotels may lend or sell adapters; they are also sold at airports, larger shops and convenience stores",
        ],
      },
      { source: { label: "Korea Tourism Organization — electricity and communications", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
      { source: { label: "Electric Utility Act Enforcement Rule, Annex 3 — standard voltage and frequency (Korean, PDF)", url: "https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=168742119&bylClsCd=110201" } },
    ],
    faq: [
      { q: "What plug type does Korea use?", a: "Plugs with two round pins (types C and F) — the same as in most of continental Europe. The voltage is 220 V at 60 Hz." },
      { q: "Will my US charger work in Korea?", a: "It needs a plug adapter. Most phone and laptop chargers are rated 100–240 V and work on 220 V; check the INPUT line on the label before plugging in." },
    ],
  },
  {
    slug: "public-holidays",
    nav: "Public holidays",
    title: "Public holidays in Korea for the rest of 2026 and in 2027",
    description: "Korea's official holiday dates for late 2026 and all of 2027, including Seollal, Chuseok and the substitute holidays — and two holidays added in 2026.",
    related: [HUB_SLUG, "transport-cards", "how-long-can-you-stay"],
    blocks: [
      {
        p: "Korean public holidays are set by law, and lunar holidays move every year. The government publishes the official calendar for each year in the Official Gazette. Two changes in 2026 matter: Labour Day (1 May) became a public holiday, and so did all national days, which brings back Constitution Day (17 July).",
      },
      { h2: "Rest of 2026" },
      { ul: ["Friday 25 December — Christmas Day"] },
      { h2: "2027 (official calendar)" },
      {
        ul: [
          "1 January (Fri) — New Year's Day",
          "6–8 February (Sat–Mon) — Seollal (Lunar New Year), with a substitute holiday on 9 February (Tue)",
          "1 March (Mon) — Independence Movement Day",
          "1 May (Sat) — Labour Day, substitute holiday 3 May (Mon)",
          "5 May (Wed) — Children's Day",
          "13 May (Thu) — Buddha's Birthday",
          "6 June (Sun) — Memorial Day (no substitute day)",
          "17 July (Sat) — Constitution Day, substitute holiday 19 July (Mon)",
          "15 August (Sun) — Liberation Day, substitute holiday 16 August (Mon)",
          "14–16 September (Tue–Thu) — Chuseok",
          "3 October (Sun) — National Foundation Day, substitute holiday 4 October (Mon)",
          "9 October (Sat) — Hangeul Day, substitute holiday 11 October (Mon)",
          "25 December (Sat) — Christmas Day, substitute holiday 27 December (Mon)",
        ],
      },
      { source: { label: "Korea AeroSpace Administration — 2027 official calendar, Official Gazette notice 2026-0078 (Korean)", url: "https://astro.kasi.re.kr/kor/life/post/almanac?search_year=2027&bbs_uniq_id=almanac" } },
      { source: { label: "Regulations on public holidays (Korean)", url: "https://www.law.go.kr/법령/관공서의공휴일에관한규정" } },
      { h2: "What to expect around Seollal and Chuseok" },
      {
        p: "The two big lunar holidays are three-day breaks when many people travel to their home towns. Plan transport and accommodation early if your trip overlaps them. The law sets public holidays for government offices and leaves working days in private businesses to employment law, so whether a particular shop or restaurant opens is up to that business — check before you go.",
      },
      {
        note: "The government can declare extra one-off holidays by Cabinet decision, sometimes at short notice. We will update this page if one is announced for 2027.",
      },
    ],
    faq: [
      { q: "When is Chuseok in 2027?", a: "14–16 September 2027 (Tuesday to Thursday), according to the official calendar published in the Official Gazette." },
      { q: "When is Seollal (Lunar New Year) in 2027?", a: "6–8 February 2027, with a substitute holiday on Tuesday 9 February because one of the days falls on a Sunday." },
    ],
  },
  {
    slug: "driving-in-korea",
    nav: "Driving in Korea",
    title: "Driving in Korea as a visitor: an International Driving Permit, for one year",
    description: `A foreign licence alone is not enough. Visitors drive on an International Driving Permit for one year from entry. Drive on the right; alcohol limit ${F.bacLimit}.`,
    related: [HUB_SLUG, "smoking-vaping-and-alcohol", "emergency-and-safety"],
    blocks: [
      {
        p: "The rule that catches people out: in Korea, your national driving licence by itself does not let you drive. The Road Traffic Authority says so in as many words.",
      },
      { h2: "What you need" },
      {
        ul: [
          "An International Driving Permit (IDP) issued under the 1949 Geneva or the 1968 Vienna Convention on Road Traffic, or",
          "An IDP or licence recognised under a bilateral agreement between Korea and the issuing country",
          "It is valid for one year from the date you enter Korea, and only for the vehicle classes shown on it",
          "You may rent a car with it, but not drive a commercial vehicle such as a taxi or a lorry for hire",
        ],
      },
      { source: { label: "Road Traffic Act, Article 96 (Korean)", url: "https://www.law.go.kr/법령/도로교통법" } },
      { source: { label: "Road Traffic Authority — foreign licences (Korean)", url: "https://www.safedriving.or.kr/diGuide/selectDiGuide05.do" } },
      { h2: "Renting a car" },
      {
        p: "According to the Korea Tourism Organization, rental companies ask for an IDP, a passport and a credit card in the driver's name, and drivers must be over 21. Some also ask to see your home licence, so carry it. These are company conditions rather than law, so check with the company you book.",
      },
      { source: { label: "Korea Tourism Organization — driving in Korea", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140664" } },
      { h2: "Rules of the road" },
      {
        ul: [
          "Drive on the right",
          "Everyone in the car must wear a seat belt, in every seat; infants need a child seat",
          `Drink-driving starts at a blood alcohol level of ${F.bacLimit}, and the rule covers bicycles too. You must take a breath test if police ask`,
          "Motorcycle riders and passengers must wear helmets",
          "Distances are in kilometres and speeds in km/h",
        ],
      },
      {
        note: "Your home country's guidance may say more about your own licence. Germany's Federal Foreign Office says a German IDP together with the German licence is valid for up to a year; France's foreign ministry says the French licence alone is not accepted for renting a car. Taiwan's Bureau of Consular Affairs says Taiwan-issued IDPs are recognised in Korea for private cars. We found no official statement on licences from mainland China, so ask the rental company or the Road Traffic Authority before you rely on one.",
      },
    ],
    faq: [
      { q: "Can I drive in Korea with my national licence?", a: "No. The Road Traffic Authority says a licence issued abroad is not enough on its own. Visitors need an International Driving Permit under the Geneva or Vienna Convention, or one recognised under a bilateral agreement." },
      { q: "How long is an International Driving Permit valid in Korea?", a: "One year from the date you enter Korea (Road Traffic Act, Article 96)." },
    ],
  },
  {
    slug: "healthcare-for-visitors",
    nav: "Healthcare",
    title: "Healthcare in Korea for visitors: you pay, so bring insurance",
    description: "Tourists are not covered by Korea's national health insurance. Where to get treatment with an interpreter, which number to call, and why insurance matters.",
    related: [HUB_SLUG, "emergency-and-safety", "bringing-medicines"],
    blocks: [
      { h2: "No public cover for tourists" },
      {
        p: "Korea's National Health Insurance covers foreigners only once they have registered as residents (alien registration) and lived in Korea for a set period, or work for a Korean employer. A visitor entering on a visa waiver or a K-ETA is outside it and pays for treatment.",
      },
      {
        p: "We found no agreement that gives German, French, Chinese or Taiwanese tourists free or reduced treatment in Korea. The Germany–Korea social security agreement, for example, covers pensions and employment insurance, not health care. Germany's and France's foreign ministries both tell travellers to take out travel health insurance that also covers repatriation.",
      },
      { source: { label: "National Health Insurance Act, Article 109 (Korean)", url: "https://www.law.go.kr/법령/국민건강보험법" } },
      { source: { label: "France Diplomatie — South Korea, health (French)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/coree-du-sud/conseils-aux-voyageurs-sante" } },
      { h2: "Hospitals with interpreters" },
      {
        p: "Many large Korean hospitals have an International Health Care Center with staff who speak English and other languages and help with appointments and treatment. The Korea Tourism Organization lists them, including Seoul Asan, Severance, Samsung Medical Center, Seoul National University Hospital and Seoul St. Mary's. They work weekday office hours — at night and at weekends, go to an emergency department.",
      },
      { source: { label: "Korea Tourism Organization — emergency situations and international clinics", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
      { h2: "Which number to call" },
      {
        ul: [
          "119 — ambulance (and fire)",
          "1339 — the Korea Disease Control and Prevention Agency's 24-hour line for disease questions and suspected infectious disease. It is not an ambulance number. Foreigners are helped through a three-way call with 1330 or 1345",
          "1330 — Korea Travel Helpline, for interpretation and tourist information (+82-2-1330 from abroad)",
        ],
      },
      { source: { label: "Korea Disease Control and Prevention Agency — 1339 call centre (Korean)", url: "https://kdca.go.kr/kdca/2777/subview.do" } },
      {
        note: "Medicines you bring are a separate question: some common prescription drugs need approval before you travel. See the page on bringing medicines.",
      },
    ],
    faq: [
      { q: "Is healthcare free for tourists in Korea?", a: "No. Short-term visitors are not covered by Korea's National Health Insurance and pay for treatment themselves, so travel health insurance is strongly advised." },
      { q: "Is 1339 an emergency number?", a: "Not for ambulances. 1339 is the disease-control agency's line for disease questions and suspected infections. For an ambulance, call 119." },
    ],
  },
  {
    slug: "emergency-and-safety",
    nav: "Emergency numbers",
    title: "Emergency numbers in Korea: 112, 119, and help in your language",
    description: "112 for police, 119 for fire and ambulance. Which lines offer interpretation, the Emergency Ready App, and the English text alerts on your phone.",
    related: [HUB_SLUG, "healthcare-for-visitors", "phones-and-sim-cards"],
    blocks: [
      { h2: "The numbers" },
      {
        ul: [
          "112 — police",
          "119 — fire and ambulance",
          "1339 — infectious disease questions (Korea Disease Control and Prevention Agency)",
          "1330 — Korea Travel Helpline: tourist information, interpretation and complaints, by phone or chat (+82-2-1330 from abroad)",
          "1345 — Immigration Contact Center, Ministry of Justice (+82-2-1345 from abroad)",
        ],
      },
      { source: { label: "Korea Tourism Organization — emergency situations", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
      { h2: "Getting help in your language" },
      {
        ul: [
          "112: since March 2024, the police hotline has offered round-the-clock English and Chinese interpretation through a three-way call",
          "1330: the Korea Tourism Organization lists English, Japanese, Chinese, Russian, Vietnamese, Thai, Malay and Indonesian — not German or French",
          "1345: 20 languages including German and French, on weekdays 09:00–22:00 (after 18:00 only Korean, English and Chinese). Calls are charged",
          "119 also accepts reports by text message, with photos or video, which helps if speaking is difficult",
        ],
      },
      { source: { label: "Korean Culture and Information Service — 24-hour interpretation for 112 (2024)", url: "https://www.korean-culture.org/eng/webzine/202405/sub10.html" } },
      { source: { label: "Korea Immigration Service — 1345 Immigration Contact Center (Korean)", url: "https://www.immigration.go.kr/immigration/1530/subview.do" } },
      { h2: "Emergency Ready App and phone alerts" },
      {
        p: "The Korean government's Emergency Ready App shows disaster alerts, the nearest shelters, emergency departments and police stations, and first-aid guides. The Korea Tourism Organization lists it in 22 languages, including English, Chinese, German and French. Separately, the loudest emergency text alerts sent to every phone in an area show the type of disaster and the size of an earthquake in English as well as Korean since February 2024.",
      },
      { source: { label: "Korea Tourism Organization — helpful apps and resources", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=198570" } },
      { source: { label: "Ministry of the Interior and Safety — English on emergency alerts, 28 February 2024 (Korean)", url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=107429" } },
      { h2: "Civil defence drills" },
      {
        p: "Korea holds occasional civil defence drills: sirens sound, traffic stops and people are directed to shelters, often in subway stations or underground car parks. Germany's Federal Foreign Office says foreigners are not required to take part but are advised to.",
      },
      {
        note: "Lost something? The police run a lost-and-found service at lost112.go.kr, in Korean, English, Japanese and Chinese.",
      },
    ],
    faq: [
      { q: "What is the emergency number in Korea?", a: "112 for police, 119 for fire and ambulance." },
      { q: "Does 112 speak English?", a: "Yes. Since March 2024 the police hotline has had 24-hour English and Chinese interpretation through a three-way call." },
    ],
  },
];

export const PRACTICAL: Page[] = RAW.map((p) => ({ ...p, checked: CHECKED, practical: p.slug !== HUB_SLUG }));
