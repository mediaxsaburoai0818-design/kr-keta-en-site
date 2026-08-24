import { FACTS as F } from "@/data/facts";

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
  | { note: string };

export type Page = {
  slug: string;
  title: string;
  nav: string;
  description: string;
  blocks: Block[];
};

export const PAGES: Page[] = [
  {
    slug: "what-is-keta",
    nav: "What is K-ETA",
    title: "What is K-ETA? Korea's travel authorisation explained",
    description:
      "K-ETA is an electronic travel authorisation for visa-free travellers to South Korea. What it is, who it applies to, and why many nationalities do not need it right now.",
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

export const PAGE_SLUGS = PAGES.map((p) => p.slug);
