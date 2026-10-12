import { FACTS as F } from "@/data/facts";
import { PRACTICAL } from "@/data/pages-practical";

/**
 * 英語（ルート）の下層ページ。uketa（eta-se.com）の言語ディレクトリと同じ13本構成に合わせる。
 *   トップ（app/page.tsx）＋ここに定義する12本 = 13ページ
 *
 * ⚠️ 数値は必ず F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ K-ETA固有の要点を各ページで外さないこと（facts.ts の注意書きと対で守る）:
 *      ①多くの国が一時免除中（{F.exemptionUntil} まで）→「今すぐ必要」と書かない
 *      ②滞在日数はK-ETAでは決まらない（国籍ごとのビザ免除協定・おおむね30〜90日）
 *      ③免除対象の国数は報道で食い違うので、数を断定せず公式一覧に案内する
 *      ④申請先は公式（k-eta.go.kr）だけ。代行サイトは手数料を上乗せしている
 */
export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { note: string }
  /** 出典リンク。数値・罰則を書いたページには必ず添える */
  | { source: { label: string; url: string } }
  /** 同じ言語のページへのカード一覧（ハブページ用）。スラッグで指定し、タイトル・説明は相手ページから引く */
  | { links: string[] };

export type Faq = { q: string; a: string };

export type Page = {
  slug: string;
  title: string;
  nav: string;
  description: string;
  blocks: Block[];
  /** 本文下の関連カードに優先して出すスラッグ。足りない分は一覧の前後で埋める（全ページに被リンクが回るように） */
  related?: string[];
  /** よくある質問。本文の後に表示し、FAQPage 構造化データも出す */
  faq?: Faq[];
  /** このページを公式で確認した日（表示用）。無ければ FACTS.updatedLabel */
  checked?: string;
  /** 入国後の実用ページ（ハブ以外）。トップの一覧には出さず、ハブと関連カードから辿らせる */
  practical?: boolean;
};

/**
 * 関連カードの選び方（英語・各言語で共通）。
 * ⚠️ 以前は全ページが「一覧の先頭6本」を出していたため、後ろのページはトップからしか張られていなかった。
 *    明示した related → 一覧で自分の次から順に、で6本にする。
 */
export function pickRelated<T extends { slug: string }>(all: T[], self: string, related: string[] = [], n = 6): T[] {
  const i = all.findIndex((p) => p.slug === self);
  const ring = i < 0 ? all : [...all.slice(i + 1), ...all.slice(0, i)];
  const first = related.map((s) => all.find((p) => p.slug === s)).filter((p): p is T => !!p && p.slug !== self);
  return [...first, ...ring.filter((p) => p.slug !== self && !first.includes(p))].slice(0, n);
}

const CORE: Page[] = [
  {
    slug: "what-is-keta",
    related: ["arriving-in-korea"],
    nav: "What is K-ETA",
    title: "What is K-ETA? Korea's travel authorisation explained",
    description:
      "K-ETA is an electronic travel authorisation for visa-free travellers to South Korea: what it is, who it applies to, and why many do not need it right now.",
    blocks: [
      {
        p: `K-ETA (Korea Electronic Travel Authorization) is an online permission that visa-free travellers normally obtain before boarding a flight to South Korea. It costs ${F.fee} (${F.feeUsdApprox}) and stays valid for ${F.validYears} years.`,
      },
      { h2: "Check the exemption before you apply" },
      {
        p: `This is the point most guides get wrong. South Korea has temporarily suspended the K-ETA requirement for a number of countries and regions until ${F.exemptionUntil}. If your passport is on that list, you do not need K-ETA and paying for one gains you nothing.`,
      },
      {
        note:
          "The number of exempt countries has been reported inconsistently. Rather than trust a number, check your own passport against the official list on k-eta.go.kr before doing anything else.",
      },
      { h2: "It is not a visa" },
      {
        p: "K-ETA does not grant entry. It confirms you are cleared to board. An immigration officer still decides admission on arrival, and can refuse it.",
      },
      { h2: "It does not set how long you can stay" },
      {
        p: `Your permitted stay comes from the visa-waiver agreement between Korea and your country — typically ${F.stayRange}. Two travellers arriving on the same flight with the same K-ETA can receive different lengths of stay.`,
      },
    ],
  },
  {
    slug: "do-i-need-keta",
    related: ["arrival-card-and-e-gates", "travelling-with-children"],
    nav: "Do I need K-ETA?",
    title: "Do I need K-ETA? How to check whether you are exempt",
    description:
      "Many nationalities are temporarily exempt from K-ETA. How to check your own passport, and what applies if you are not exempt.",
    blocks: [
      {
        p: `Before spending anything, settle one question: is your passport currently exempt? The exemption runs until ${F.exemptionUntil}, and it is decided by nationality, not by where you live or which airline you fly.`,
      },
      { h2: "How to check" },
      {
        ul: [
          `Open the official site (${F.officialHost}) and find the current list of exempt countries and regions.`,
          "Match the passport you will actually travel on — not a second nationality you hold.",
          "If you are on the list, you do not apply and you do not pay.",
          "If you are not on the list, apply before you fly.",
        ],
      },
      { h2: "Why we do not print the list here" },
      {
        p: "The exemption has been extended and revised more than once, and the number of countries has been reported differently by different outlets. A list copied into a guide goes out of date quietly. The official page does not.",
      },
      { h2: "Exempt does not mean nothing to prepare" },
      {
        p: "Even when K-ETA is not required, you still need a passport valid for your trip, onward or return travel, and an address in Korea for the arrival card. Some travellers are also asked to complete an arrival declaration.",
      },
      {
        note:
          "If you are travelling on a visa (work, study, long stay), K-ETA does not apply to you at all. It exists only for visa-free entry.",
      },
    ],
  },
  {
    slug: "how-to-apply",
    nav: "How to apply",
    title: "How to apply for K-ETA: the official process, step by step",
    description:
      "Applying for K-ETA on the official site: what you need in front of you, where people get stuck, and what happens after you submit.",
    blocks: [
      {
        p: `Applications are made on the official portal at ${F.officialHost}. There is one form, one fee, and no faster paid track.`,
      },
      { h2: "Before you start" },
      {
        ul: [
          "Your passport, open at the photo page.",
          "A photograph of the passport photo page (taken flat, no glare).",
          "A recent passport-style photo of your face.",
          "Your address in Korea for the first night.",
          "A payment card.",
          "An email address you can open during the trip.",
        ],
      },
      { h2: "The steps" },
      {
        ul: [
          "Confirm you are not exempt.",
          "Complete the form in one sitting — a part-finished form is not saved indefinitely.",
          `Pay ${F.fee}.`,
          "Wait for the result by email.",
        ],
      },
      { h2: "Where people get stuck" },
      {
        p: "Two things account for most failed submissions: an image of the passport page that is cropped or reflective, and a name entered differently from the passport. Enter names exactly as printed, including middle names.",
      },
      {
        note: `Apply well before departure. The official guidance is a decision within ${F.decisionTypical}, but that is a typical case, not a guarantee.`,
      },
    ],
  },
  {
    slug: "cost",
    nav: "Cost",
    title: `K-ETA cost: ${F.fee} paid once, and what the extra fees are`,
    description:
      "What K-ETA actually costs on the official site, why third-party sites charge more, and when the cost is zero.",
    blocks: [
      {
        p: `The official fee is ${F.fee} (roughly ${F.feeUsdApprox}). A small payment processing charge may be added at the payment step. That is the whole cost.`,
      },
      { h2: "It can be zero" },
      {
        p: `If your nationality is currently exempt — the suspension runs to ${F.exemptionUntil} — you do not apply and you pay nothing. Check that first; it is the only way the cost changes materially.`,
      },
      { h2: "Why other sites quote more" },
      {
        p: "Sites charging several times the official fee are agencies. They fill in the same official form on your behalf and add a service charge. They cannot approve applications, and they cannot make a decision arrive sooner.",
      },
      {
        ul: [
          `Only ${F.officialHost} issues K-ETA.`,
          "No paid express service exists.",
          "A rejected application is not refunded, whoever you paid.",
        ],
      },
      { h2: "If you have already paid far more than the official fee" },
      {
        ul: [
          "Check that you actually received a K-ETA, not just a receipt from the agency.",
          `Verify the status against your passport on ${F.officialHost}.`,
          "If no application was ever lodged, raise a dispute with your card issuer.",
        ],
      },
      { h2: "One payment covers the validity period" },
      {
        p: `A granted K-ETA lasts ${F.validYears} years and can be used for multiple trips within that period, so the fee is not per journey. It ends early if your passport expires.`,
      },
    ],
  },
  {
    slug: "required-documents",
    nav: "What you need",
    title: "K-ETA requirements: documents, photos and the details people get wrong",
    description:
      "What you must have ready to complete a K-ETA application, and the photo and name rules that cause most rejections.",
    blocks: [
      {
        p: "K-ETA is completed online, so nothing is posted or stamped. What matters is that what you upload and type matches your passport exactly.",
      },
      { h2: "What you upload" },
      {
        ul: [
          "An image of the passport photo page — flat, in focus, all four corners visible, no flash reflection.",
          "A recent photo of your face, plain background, no hat or sunglasses.",
        ],
      },
      { h2: "What you type" },
      {
        ul: [
          "Names exactly as printed in the machine-readable zone, including middle names.",
          "Passport number, issue and expiry dates.",
          "Your address in Korea for the first night, with a contact number.",
          "Your occupation and the purpose of the trip.",
        ],
      },
      { h2: "The two most common causes of trouble" },
      {
        p: "Glare on the passport image, and a name that does not match the passport. Both are avoidable in a minute, and both cause delays that no amount of paying can shorten.",
      },
      {
        note:
          "Use a passport that will still be valid for your whole trip. A K-ETA is tied to the passport it was issued against and does not transfer to a new one.",
      },
    ],
  },
  {
    slug: "processing-time",
    nav: "Processing time",
    title: `How long does K-ETA take? Typically ${F.decisionTypical}`,
    description:
      "Official guidance on K-ETA processing, what makes it slower, and why no paid service can speed it up.",
    blocks: [
      {
        p: `Official guidance is a result within ${F.decisionTypical} in a typical case. Many applicants hear back sooner. Some do not, and there is no way to tell in advance which you will be.`,
      },
      { h2: "What slows it down" },
      {
        ul: [
          "An unclear or cropped passport image.",
          "A name entered differently from the passport.",
          "Answers that need a manual check.",
          "Applying during a peak travel period.",
        ],
      },
      { h2: "There is no express option" },
      {
        p: "No paid service can move an application forward. Sites offering priority handling are selling a service charge, not faster processing.",
      },
      { h2: "Apply early, but not too early" },
      {
        p: `Applying several days ahead leaves room for a correction if something is queried. Note that the ${F.validYears}-year validity starts from the grant, so applying extremely far ahead simply consumes part of it.`,
      },
      {
        note: "Do not book non-refundable travel on the assumption that a pending application will be granted in time.",
      },
    ],
  },
  {
    slug: "validity",
    nav: "Validity",
    title: `How long is K-ETA valid? ${F.validYears} years, tied to your passport`,
    description:
      "How long a granted K-ETA lasts, what ends it early, and when you have to apply again.",
    blocks: [
      {
        p: `A granted K-ETA is valid for ${F.validYears} years from the date it is issued, and can be used for more than one trip within that period.`,
      },
      { h2: "It ends when your passport does" },
      {
        p: "The authorisation is attached to the passport it was granted against. If that passport expires, is renewed, lost or replaced, the K-ETA stops being usable — even if years remain on it. You apply again with the new passport.",
      },
      { h2: "Validity is not permission to stay" },
      {
        p: `The ${F.validYears}-year period is how long the authorisation can be used to board. How long you may remain in Korea on each visit is a separate matter, set by the visa-waiver agreement for your nationality (${F.stayRange}).`,
      },
      { h2: "If the exemption applies to you" },
      {
        p: `While your nationality is exempt (currently until ${F.exemptionUntil}), you travel without K-ETA. If the exemption ends and you already hold a valid K-ETA, it can still be used until it expires.`,
      },
    ],
  },
  {
    slug: "length-of-stay",
    nav: "Length of stay",
    title: `How long can you stay in Korea? Usually ${F.stayRange}, set by nationality`,
    description:
      "Why K-ETA does not determine your permitted stay in Korea, and where the actual limit comes from.",
    blocks: [
      {
        p: `This is where K-ETA differs from New Zealand's NZeTA or Australia's eVisitor, which each carry a single stay limit. K-ETA does not set one. Your permitted stay comes from the visa-waiver agreement between Korea and your country, and generally falls between ${F.stayRange}.`,
      },
      { h2: "Two travellers, same flight, different limits" },
      {
        p: "Because the limit is by nationality, passengers arriving together with identical K-ETA approvals can be admitted for different periods. Check the figure for your own passport rather than a friend's.",
      },
      { h2: "The officer decides on arrival" },
      {
        p: "The stay is recorded at immigration. Holding a K-ETA does not guarantee the maximum period, and it does not guarantee entry.",
      },
      { h2: "Extending is a separate process" },
      {
        p: "Visa-free stays are generally not extended for convenience. If you need longer, the route is a visa applied for before travel, not an extension after arrival.",
      },
      {
        note: "Overstaying carries penalties and affects future entry. Confirm the date recorded on arrival, not the one you assumed.",
      },
    ],
  },
  {
    slug: "status-check",
    nav: "Check your status",
    title: "How to check your K-ETA status and what to do if no email arrives",
    description:
      "Where to check the result of a K-ETA application, and the safe way to handle a missing confirmation email.",
    blocks: [
      {
        p: `The result is emailed, and the status can also be checked on the official site at ${F.officialHost} using your application details and passport number.`,
      },
      { h2: "If nothing has arrived" },
      {
        ul: [
          "Check the spam and promotions folders.",
          "Confirm the email address you entered was correct.",
          "Check the status on the official site rather than reapplying.",
          "Only submit a second application if the official status shows nothing at all.",
        ],
      },
      { h2: "Where you enter your passport number matters" },
      {
        p: `Enter it only on ${F.officialHost}. Look-up pages on agency sites are not the official system, and a passport number is exactly the kind of detail worth being careful with.`,
      },
      { h2: "Keep the confirmation" },
      {
        p: "Save the approval email or a screenshot before you fly. Airline staff may ask to see it at check-in, and airport connectivity is not something to rely on.",
      },
    ],
  },
  {
    slug: "faq",
    related: ["arriving-in-korea", "arrival-card-and-e-gates"],
    nav: "FAQ",
    title: "K-ETA frequently asked questions",
    description:
      "Short answers on exemptions, cost, validity, stay length and what to do when an application is refused.",
    blocks: [
      { h2: "Do I need K-ETA right now?" },
      {
        p: `Possibly not. A number of countries and regions are temporarily exempt until ${F.exemptionUntil}. Check your passport against the official list before applying.`,
      },
      { h2: "How much is it?" },
      { p: `${F.fee}, about ${F.feeUsdApprox}, paid once. Higher prices elsewhere are agency charges.` },
      { h2: "How long does it last?" },
      { p: `${F.validYears} years, or until the passport it is linked to expires — whichever comes first.` },
      { h2: "How long can I stay?" },
      { p: `Usually ${F.stayRange}, depending on your nationality. K-ETA itself does not set this.` },
      { h2: "Is it a visa?" },
      { p: "No. It is permission to board, not permission to enter. Immigration decides admission on arrival." },
      { h2: "My application was refused. What now?" },
      {
        p: "A refusal is not appealed through an agency. Depending on the reason, the route is usually to apply for a visa at a Korean diplomatic mission. The fee is not refunded.",
      },
      { h2: "Can I get it faster by paying more?" },
      { p: "No. No express service exists, official or otherwise." },
    ],
  },
  {
    slug: "how-long-can-you-stay",
    related: ["arriving-in-korea", "public-holidays"],
    nav: "How long you can stay",
    title: "How long can you stay in Korea? The K-ETA does not decide this",
    description:
      "A K-ETA does not set your permitted stay. The number comes from the visa-waiver arrangement with your country, and it ranges from 30 to 90 days.",
    blocks: [
      {
        p: `This is the question most guides answer wrongly, because they copy the format used for other travel authorisations. A K-ETA is permission to board and to be assessed on arrival. It does not contain a length of stay. Your permitted stay comes from the visa-waiver arrangement between Korea and the country that issued your passport, and it is typically somewhere in the range of ${F.stayRange}.`,
      },
      { h2: "Why no single number exists" },
      {
        ul: [
          "Each visa-waiver arrangement is negotiated separately, so the figure differs by nationality",
          "The K-ETA record itself carries no stay period",
          "The immigration officer at the airport sets the actual permitted stay on entry",
        ],
      },
      { h2: "How to find your number" },
      {
        p: "Check the visa-waiver arrangement for your nationality on the official portal before you book. If a site tells you a single figure that applies to everyone, it is not describing how this works.",
      },
      { h2: "The two things that are separate" },
      {
        ul: [
          `K-ETA validity — ${F.validYears} years, or until your passport expires`,
          `Permitted stay — set per entry, from your country's arrangement (${F.stayRange})`,
        ],
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `⚠️ Many nationalities are temporarily exempt from K-ETA until ${F.exemptionUntil}. Being exempt from the K-ETA does not change your permitted stay — that still comes from the visa-waiver arrangement.`,
      },
    ],
  },
  {
    slug: "leaving-and-returning",
    related: ["arriving-in-korea", "tax-refund-for-tourists", "airport-security-liquids"],
    nav: "Leaving and returning",
    title: "Leaving Korea and coming back on the same K-ETA",
    description:
      `A K-ETA covers multiple entries for ${F.validYears} years, so you do not reapply for each trip. What resets on re-entry is your permitted stay, not your right to enter.`,
    blocks: [
      {
        p: `A K-ETA is valid for ${F.validYears} years and covers multiple entries, so short trips out of Korea and back do not require a new application. Each entry is assessed on its own, and the officer sets the permitted stay again.`,
      },
      { h2: "What does not reset" },
      {
        ul: [
          "The visa-waiver arrangement itself — you cannot use repeated entries to turn a 30-day arrangement into permanent residence",
          "Your K-ETA validity — it still expires on its original date",
          "The record of how you have been using it",
        ],
      },
      { h2: "Repeat visits attract questions" },
      {
        p: "Korea, like most countries, treats visa-waiver entry as being for visits. A pattern of leaving for a few days and returning each time your stay runs out is visible in the system, and an officer can refuse entry even with a valid K-ETA.",
      },
      { h2: "What to have ready on re-entry" },
      {
        ul: [
          "An onward or return ticket",
          "Your accommodation address in Korea",
          "Something showing you are going home: work, study, family",
        ],
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `If you are currently exempt from the K-ETA (until ${F.exemptionUntil}), you do not need one for these trips at all. Check your eligibility before paying anything.`,
      },
    ],
  },
  {
    slug: "passport-and-details",
    related: ["arriving-in-korea", "arrival-card-and-e-gates"],
    nav: "Passport and details",
    title: "Your K-ETA is tied to one passport",
    description:
      "The K-ETA is linked to the passport you applied with. A renewed passport ends it early, and mismatched details stop you at check-in.",
    blocks: [
      {
        p: `A K-ETA is valid for ${F.validYears} years, but there is a condition that catches people out: it is attached to the passport you applied with. If that passport is replaced, the authorisation stops being usable even though the ${F.validYears} years have not elapsed.`,
      },
      { h2: "When you need to apply again" },
      {
        ul: [
          "You renewed or replaced your passport",
          "Your passport was reissued after loss or damage",
          "You changed the nationality you travel on",
        ],
      },
      { h2: "Enter your details exactly as printed" },
      {
        ul: [
          "Names as in the machine-readable zone, not as you normally write them",
          "Passport number character by character — 0 and O, 1 and I",
          "Nationality as shown on the passport, not where you live",
          "A photo that meets the requirements — rejections are most often about the photo",
        ],
      },
      { h2: "Only one official channel" },
      {
        p: `Applications are made only at ${F.officialHost}. The fee is ${F.fee}. Sites charging more are third parties adding their own margin, and entering your passport number anywhere else is a risk you do not need to take.`,
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `⚠️ Before applying at all, check whether your nationality is currently exempt. Exemption runs to ${F.exemptionUntil}, and applying while exempt gives you no benefit and no refund.`,
      },
    ],
  },
  {
    slug: "border-questions",
    related: ["arriving-in-korea", "arrival-card-and-e-gates", "bringing-medicines"],
    nav: "At the border",
    title: "What happens when you arrive in Korea",
    description:
      "Immigration, quarantine and customs are three separate checks. Knowing which one asks what is the difference between ten minutes and an hour.",
    blocks: [
      {
        p: "Arriving passengers pass three checks run by three different agencies. They ask about different things, and the paperwork for each is separate.",
      },
      { h2: "1. Immigration" },
      {
        ul: [
          "How long you are staying and where",
          "Whether you have an onward or return ticket",
          "The purpose of the visit",
          "Fingerprints and a facial photo for most arriving travellers",
        ],
      },
      {
        p: "This is where your permitted stay is set. A valid K-ETA — or a valid exemption — gets you to this desk; it does not decide the outcome.",
      },
      { h2: "2. Quarantine" },
      {
        p: `Korea checks arriving travellers for animal and plant material. This is not a formality: failing to declare can bring a fine of up to ${F.quarantineMaxFine} under the ${F.quarantineLaw}.`,
      },
      { h2: "3. Customs" },
      {
        p: `Everyone submits a declaration of personal effects. You must declare goods above the duty-free allowance of ${F.customsGoodsAllowance}.`,
      },
      { h2: "Have this ready before you land" },
      {
        ul: [
          "Your accommodation address in Korea, written out",
          "Your onward flight details",
          "An honest answer about food and plant items in your bag",
        ],
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
      {
        note: "If you are unsure whether something needs declaring, declare it. There is no penalty for declaring an item that turns out to be allowed.",
      },
    ],
  },
  {
    slug: "quarantine",
    related: ["arriving-in-korea", "bringing-medicines", "customs-allowances"],
    nav: "Quarantine",
    title: "Korean quarantine: meat and plant products, and the fine for not declaring",
    description:
      `Failing to declare animal or plant products on arrival in Korea can bring a fine of up to ${F.quarantineMaxFine} under the ${F.quarantineLaw}.`,
    blocks: [
      {
        p: `Korea has tightened its border quarantine substantially in response to African Swine Fever and other animal diseases. Travellers carrying meat products are the route these diseases travel, and the rules are enforced on arrival.`,
      },
      { h2: "The penalty" },
      {
        p: `Travellers who fail to make a quarantine declaration may be fined up to ${F.quarantineMaxFine} under the ${F.quarantineLaw}. The fine applies to the failure to declare, not only to items that turn out to be prohibited.`,
      },
      { h2: "What you must declare" },
      {
        ul: [
          "Meat and meat products of any kind — including cured, dried and canned",
          "Dairy products and eggs",
          "Fresh fruit, vegetables, seeds and nuts",
          "Plants, soil, and items with soil on them",
          "Live animals, and anything used around animals",
        ],
      },
      { h2: "Things travellers assume are fine, and are not" },
      {
        ul: [
          "Sausage or jerky bought at the airport you departed from",
          "Home-made food packed by family",
          "Dried meat in instant noodle packets",
          "Fruit taken from the plane",
        ],
      },
      { h2: "The rule that keeps you safe" },
      {
        p: "Declaring costs nothing. If the item is permitted you keep it; if it is not, it is disposed of and that is the end of it. The fine is for not declaring, so there is no situation in which staying quiet is the better option.",
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
    ],
  },
  {
    slug: "customs-allowances",
    related: ["arriving-in-korea", "money-and-tipping", "tax-refund-for-tourists", "smoking-vaping-and-alcohol"],
    nav: "Customs allowances",
    title: "Korean duty-free allowances for arriving travellers",
    description:
      `The general allowance is ${F.customsGoodsAllowance}, with separate limits for alcohol, tobacco and perfume. Travellers under ${F.customsAgeMin} do not get the alcohol and tobacco exemptions.`,
    blocks: [
      {
        p: "Customs is separate from quarantine. Quarantine asks whether an item is a disease risk; customs asks whether duty is owed. Both are declared on arrival, and clearing one does not clear the other.",
      },
      { h2: "The allowances" },
      {
        ul: [
          `General goods: ${F.customsGoodsAllowance} in total taxable value`,
          `Alcohol: up to ${F.customsAlcoholLitres} litres in total and ${F.customsAlcoholValue}, counted separately from the general allowance`,
          `Tobacco: ${F.customsCigarettes} cigarettes`,
          `Perfume: ${F.customsPerfumeMl} ml`,
        ],
      },
      { h2: "Age limit" },
      {
        p: `Travellers under ${F.customsAgeMin} years of age — counted by year of birth, not by birthday — do not receive the alcohol and tobacco exemptions. This trips up families who assume a teenager's allowance can be used.`,
      },
      { h2: "If you are over the limit" },
      {
        p: "Declare it. Duty and tax are worked out on the excess. Not declaring goods above the allowance is a separate problem from the duty itself, and a more expensive one.",
      },
      { source: { label: "Korea Customs Service — Duty-free allowance for travellers", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8028&cntntsId=2716" } },
      {
        note: "Duty-free bought on the way into Korea still counts towards the allowance. Buying airside does not exempt it.",
      },
    ],
  },
  {
    slug: "if-you-are-exempt",
    related: ["arriving-in-korea", "arrival-card-and-e-gates"],
    nav: "If you are exempt",
    title: `What to do if your country is exempt from the K-ETA until ${F.exemptionUntil}`,
    description:
      "Many nationalities do not currently need a K-ETA at all. Applying anyway costs money and gives you nothing. Here is how to check, and what still applies.",
    blocks: [
      {
        p: `A large number of countries are temporarily exempt from the K-ETA requirement until ${F.exemptionUntil}. If your passport is on that list, you do not need to apply, and applying gives you no advantage at the border.`,
      },
      { h2: "Check first, pay second" },
      {
        p: `The exemption list is published on the official portal and it changes. ⚠️ Reports have described the exemption as covering anywhere from 22 to 67 countries and territories, and those figures do not agree — so do not rely on a number you read in an article. Check the list itself for your passport.`,
      },
      { h2: "If you are exempt and apply anyway" },
      {
        ul: [
          `You pay ${F.fee} for something you did not need`,
          "There is no refund",
          "You get no priority and no faster processing at the border",
        ],
      },
      { h2: "What still applies while you are exempt" },
      {
        ul: [
          "The permitted stay from your country's visa-waiver arrangement",
          "The quarantine declaration and its penalties",
          "The customs allowance",
          "Immigration's assessment on arrival",
        ],
      },
      {
        p: "In other words, exemption removes one step before you fly. It does not change anything about what happens when you land.",
      },
      { h2: "After the exemption ends" },
      {
        p: `The exemption currently runs to ${F.exemptionUntil}. If it is not extended, travellers from those countries will need a K-ETA again. Check the official portal close to your travel date rather than relying on what was true when you last visited.`,
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `⚠️ The most common way to lose money on a K-ETA is not the fee — it is paying a third-party site to submit an application you did not need in the first place.`,
      },
    ],
  },
  {
    slug: "transit-through-korea",
    related: ["arriving-in-korea", "airport-security-liquids"],
    nav: "Transit",
    title: "Changing planes in Korea: do you need a K-ETA?",
    description:
      "Whether a K-ETA applies to a transit depends on whether you pass immigration. Staying airside and entering the country are treated differently.",
    blocks: [
      {
        p: `A connection in Incheon is one of the most common reasons people end up on this page, and the answer turns on a single question: do you leave the international transit area?`,
      },
      { h2: "If you stay airside" },
      {
        p: `Passengers who remain in the international transit area and board an onward flight do not enter Korea. In that case no entry permission applies, because there is no entry.`,
      },
      { h2: "If you leave the airport" },
      {
        p: `Going through immigration — to collect checked baggage, to stay overnight outside the airport, or to see the city between flights — is an entry. That is when the K-ETA or an applicable exemption matters, exactly as it would for a holiday.`,
      },
      { h2: "Long layovers are where people get caught" },
      {
        ul: [
          `Baggage that is not checked through to the final destination forces you to enter.`,
          `An overnight connection with a hotel outside the airport is an entry.`,
          `Terminal changes that require re-entry through immigration are an entry.`,
        ],
      },
      { note: `Decide this before you book, not at the transfer desk. If there is any chance you will leave the airport, apply and have the permission in hand — it is valid for ${F.validYears} years, so it is not wasted.` },
      {
        source: {
          label: "K-ETA official portal",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "when-the-exemption-ends",
    nav: "After the exemption",
    title: `What happens after the temporary exemption ends on ${F.exemptionUntil}?`,
    description:
      `Many nationalities are temporarily exempt from the K-ETA until ${F.exemptionUntil}. What that means for trips planned around that date.`,
    blocks: [
      {
        p: `The exemption currently in place is temporary, and the announced end date is ${F.exemptionUntil}. If your trip falls near that date, plan on the basis that the requirement returns rather than that it will be extended again.`,
      },
      { h2: "Which date matters" },
      {
        p: `What counts is the date you arrive in Korea, not the date you booked or the date you departed home. A flight that lands after the exemption period needs the permission even if it took off before.`,
      },
      { h2: "If you are travelling around the changeover" },
      {
        ul: [
          `Apply anyway if your arrival is close to the date. It is valid for ${F.validYears} years, so an unnecessary application is not a loss.`,
          `Do not rely on the airline to tell you. Carriers check on the day of departure, which is too late to fix.`,
          `Check the official portal shortly before you travel — extensions and changes are announced there first.`,
        ],
      },
      { note: `Exemption lists have been revised more than once, and the countries covered have changed each time. Treat any list you read elsewhere, including summaries like this one, as a pointer to the official page rather than a substitute for it.` },
      {
        source: {
          label: "K-ETA official portal",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "if-your-keta-is-denied",
    nav: "If denied",
    title: "What to do if your K-ETA is denied",
    description:
      "A denial does not automatically mean you cannot travel, but it does mean the online route is closed. What the next step actually is.",
    blocks: [
      {
        p: `Most applications are decided within ${F.decisionTypical}. If the result is a denial, the practical position is that you cannot enter under the visa-waiver route and must apply for a visa instead.`,
      },
      { h2: "Reapplying rarely helps" },
      {
        p: `Submitting the same details again will normally produce the same outcome. If something was entered incorrectly — a passport number, a date of birth, a name spelled differently from the passport — that is worth correcting. Otherwise, the route is a visa application at a Korean diplomatic mission.`,
      },
      { h2: "Do not travel to test it" },
      {
        p: `Airlines check the status before boarding. Arriving at the airport with a denial on file means being refused at check-in, not at the border.`,
      },
      { note: `A denial is a decision about this application, not a permanent bar. A visa application is assessed separately and on its own documents.` },
      {
        source: {
          label: "K-ETA official portal",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "travel-authorisations-compared",
    nav: "Which one do I need?",
    title: "Which travel authorisation do you need? NZeTA, eVisitor, K-ETA, ESTA and the others compared",
    description:
      "Similar names, very different rules. Which scheme applies to which destination, what each costs, and the mistakes that come from mixing them up.",
    blocks: [
      {
        p: `Electronic travel authorisations look interchangeable from the outside. They are not. Each country runs its own scheme, with its own eligibility list, its own price, and its own idea of what the document even is — some are visas, some explicitly are not.`,
      },
      {
        p: `This page is a map of which is which. For South Korea, the scheme is the K-ETA, and it costs ${F.fee}.`,
      },
      { note: `One rule holds everywhere: you apply on the government's own site, and no agency can make a decision arrive faster. Sites charging several times the official fee are filling in the same form for you.` },
          {
            h2: "South Korea — K-ETA",
          },
          {
            p: `Costs ${F.fee} and lasts ${F.validYears} years. ⚠️ Many nationalities are temporarily exempt until ${F.exemptionUntil}, so check whether it applies to you before applying. How long you may stay is set by the visa-waiver agreement for your nationality, not by the K-ETA itself — typically ${F.stayRange}.`,
          },
          { h2: "New Zealand — NZeTA" },
          {
            p: `A pre-travel authorisation for visa-waiver passports, not a visa. The cost is in two parts: an application fee and a separate conservation and tourism levy, which is why quoted totals differ between sources.`,
          },
          { h2: "Australia — eVisitor or ETA" },
          {
            p: `Australia uses two schemes depending on the passport. eVisitor (subclass 651) is a visa and is free. The ETA (subclass 601) is the paid alternative and is applied for in the official app.`,
          },
          { h2: "United Kingdom — ETA" },
          {
            p: `Covers visits of up to 6 months to the UK, Jersey, Guernsey and the Isle of Man. GOV.UK states the cost as £20. Applied for through the official service.`,
          },
          {
            source: {
              label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
              url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
            },
          },
          { h2: "United States — ESTA, and Canada — eTA" },
          {
            p: `Both run comparable schemes for visa-waiver travellers. We are not quoting their fees here, because we could not confirm the current figures against the official sources while writing this page, and an out-of-date price is worse than none. Check the official sites directly — and only the official sites.`,
          },
          {
            ul: [
              "United States: esta.cbp.dhs.gov",
              "Canada: canada.ca (Immigration, Refugees and Citizenship Canada)",
            ],
          },
          { h2: "The mistakes that actually cost people money" },
          {
            ul: [
              "Assuming one authorisation covers a multi-country trip. Each destination is separate, including a stopover where you leave the airport.",
              "Assuming it is a visa. Some are, some are not, and the difference decides what you may do once you are there.",
              "Assuming the price is the price. Several schemes add a separate levy or charge a different amount depending on how you apply.",
              "Applying through a paid intermediary in the belief it is faster. It is the same form and the same decision.",
            ],
          },
          { h2: "Check your own passport, not a summary" },
          {
            p: `Eligibility lists change, and holding two passports often means two different answers. Every scheme above publishes an official checker. Use it for the passport you will actually travel on.`,
          },
    ],
  },
  {
    slug: "about",
    nav: "About this site",
    title: "About this K-ETA guide",
    description: "Who publishes this guide, how it is checked, and what it is not.",
    blocks: [
      {
        p: "This site explains K-ETA in plain English for travellers deciding what they need before flying to South Korea.",
      },
      { h2: "What this site is not" },
      {
        p: `It is not affiliated with the Korean government and it does not process applications. Every application is made on the official site at ${F.officialHost}, where the fee is ${F.fee}.`,
      },
      { h2: "How the information is kept current" },
      {
        p: `Figures are held in one place and referenced by every page, so a change is made once rather than page by page. This page set was last checked on ${F.updatedLabel}.`,
      },
      {
        note:
          "Where a detail is disputed between sources — the number of exempt countries is the clearest example — we say so and point to the official page instead of picking a number.",
      },
    ],
  },
  {
    slug: "privacy",
    nav: "Privacy",
    title: "Privacy policy",
    description: "What this site collects, what it does not, and how to get in touch.",
    blocks: [
      { p: "This site is an information guide. It does not process K-ETA applications and does not ask for passport details." },
      { h2: "What is collected" },
      {
        ul: [
          "Anonymous usage statistics, used to see which pages are read.",
          "Nothing that identifies you personally.",
          "No passport numbers, application data or payment details.",
        ],
      },
      { h2: "Third parties" },
      {
        p: "Outbound links point to the official Korean government site. Once you follow a link, that site's own policies apply.",
      },
      { h2: "Contact" },
      { p: "For corrections or questions about this policy, use the contact route on the about page." },
    ],
  },
  {
    slug: "terms",
    nav: "Terms",
    title: "Terms of use",
    description: "The basis on which this guide is provided.",
    blocks: [
      { p: "This site provides general information about K-ETA. It is not legal or immigration advice." },
      { h2: "Accuracy" },
      {
        p: `Content is checked against official sources and was last reviewed on ${F.updatedLabel}. Rules can change without notice — in particular the temporary exemption, which currently runs to ${F.exemptionUntil}. Always confirm on ${F.officialHost} before travelling.`,
      },
      { h2: "No affiliation" },
      { p: "This site is independent of the Korean government and of any application agency." },
      { h2: "Liability" },
      {
        p: "Decisions on travel authorisation and entry are made by the Korean authorities. We cannot accept responsibility for outcomes based on information found here.",
      },
    ],
  },
];

/** 実用ページは about/privacy/terms の手前に差し込む（一覧の並び＝関連カードの巡回順） */
const LEGAL = ["about", "privacy", "terms"];
export const PAGES: Page[] = [
  ...CORE.filter((p) => !LEGAL.includes(p.slug)),
  ...PRACTICAL,
  ...CORE.filter((p) => LEGAL.includes(p.slug)),
];

export const PAGE_SLUGS = PAGES.map((p) => p.slug);
