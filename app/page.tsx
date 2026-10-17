import type { Metadata } from "next";
import HomeChrome from "@/components/HomeChrome";
import { HOME_TOP, HOME_BOTTOM } from "@/lib/eta-home";
import "./eta-home.css";
import Link from "next/link";
import { FACTS as F, OG_IMAGES, SITE } from "@/data/facts";
import { PAGES } from "@/data/pages";
import { LANGS, LANG_CODES } from "@/data/langs";

/*
  ⚠️ 2026-10-17 デザインリニューアル（okina 選択：すべて B ＝ 写真 北村の韓屋とNソウルタワー／右上 筆文字「안녕하세요」／配色 Celadon & Brass）。
     正は ~/projects/keta-redesign/build。HOME_TOP / HOME_BOTTOM / eta-home.css / public/home は
     ~/projects/keta-redesign/gen-home.py が生成する（手で直さない）。ESTA（esta-hr.com）・カナダと同じ方式。
     上＝新デザイン（スライダー4枚）、中＝旧TOPの本文のうちデザインに無いもの（.xsec）、下＝CTA＋フッター。
     TOP では layout の Header/Footer は出さない（components/NotOnHome.tsx）。

  （以下は旧デザインのときのメモ）
  構成・UIは nz-eta-site / au-evisitor-en-site と揃えている（okina指摘済みの事項は最初から反映）:
    ・「」の角飾りは .feature-card だけ ・見出しの罫線は見出しの下
    ・日付は "17 August 2026" 形式 ・reveal / 追従CTA / hero-zoom

  ⚠️ K-ETA固有の事情が2つあり、ここを外すと嘘になる。
     ①**いま多くの国が一時免除中**（2026年12月31日まで。米・英・独・豪・加・台など）
       → トップの主役は「あなたは今 K-ETA が必要か」の判定。
     ②**滞在日数はK-ETAでは決まらない**。国籍ごとのビザ免除協定（おおむね30〜90日）で決まる。
     免除国の「数」は報道で22とも67とも書かれ一致しないので、数を断定せず公式一覧に案内する。
*/

export const metadata: Metadata = {
  title: {
    absolute: `K-ETA: who still needs it, and who is exempt until ${F.exemptionUntil} | K-ETA Guide 2026`,
  },
  description:
    `Many nationalities are exempt from K-ETA until ${F.exemptionUntil}. If you do need one, it costs ${F.fee}, lasts ${F.validYears} years and is decided in about ${F.decisionTypical}.`,
  alternates: {
    canonical: `${SITE}/`,
    // ⚠️ 言語版を足したら自動で増える（手書きしない）
    // hreflang 値は言語トップと揃えて htmlLang（zh-Hans 等）を使う
    languages: { en: `${SITE}/`, ...Object.fromEntries(LANG_CODES.map((c) => [LANGS[c].htmlLang, `${SITE}/${c}/`])), "x-default": `${SITE}/` },
  },
  openGraph: {
    title: `K-ETA: who still needs it, and who is exempt until ${F.exemptionUntil}`,
    description: `The exemption ends ${F.exemptionUntil}. What K-ETA costs, how long it lasts, and how the permitted stay is decided.`,
    locale: "en",
    type: "website",
    images: OG_IMAGES,
  },
};

const FEATURES = [
  {
    h: "Many nationalities are exempt right now",
    p: `Korea suspended the K-ETA requirement for the countries and regions currently listed as exempt — including the United States, United Kingdom, Germany, Australia, Canada and Taiwan — until ${F.exemptionUntil}. Those travellers can board without one.`,
  },
  {
    h: "It authorises boarding, not your length of stay",
    p: `A K-ETA lets the airline board you. How long you may stay is set by your nationality's visa-waiver arrangement — usually ${F.stayRange} — and the final decision on entry is made by the immigration officer.`,
  },
  {
    h: "Applying is still optional for exempt travellers",
    p: "If you are exempt you may still choose to apply. The benefit is practical: K-ETA holders skip the paper arrival card at the airport. The fee applies as normal.",
  },
];

const STEPS = [
  {
    h: "Check whether you are exempt",
    p: `The exemption runs to ${F.exemptionUntil}. Confirm your nationality against the official list on ${F.officialHost} before you do anything else — the list has changed several times.`,
  },
  {
    h: "Apply on the official site or app",
    p: `Only ${F.officialHost} and the official K-ETA app are genuine. Commercial sites charge a mark-up for filling in the same form; the government fee itself is ${F.fee}.`,
  },
  {
    h: "Upload a photo and pay the fee",
    p: "You enter your passport details, a face photo and your travel plan, then pay by card. The details must match your passport exactly.",
  },
  {
    h: "Wait for the result — then check it before you fly",
    p: `Review usually takes up to ${F.decisionTypical}. Do not leave it to the day of departure, and remember an approval is not a guarantee of entry.`,
  },
];

const FAQ = [
  {
    q: "Do I need a K-ETA right now?",
    a: `Probably not, if you hold a passport from one of the currently exempt countries or regions — the suspension covers nationalities such as the United States, United Kingdom, Germany, Australia, Canada and Taiwan, and runs until ${F.exemptionUntil}. Travellers from visa-waiver countries that are not on the exemption list still need one. The official list on ${F.officialHost} is the only authority, and it has been revised more than once.`,
  },
  {
    q: `What happens after ${F.exemptionUntil}?`,
    a: "Unless Korea extends the suspension again — it has already been extended more than once — the K-ETA requirement returns for the exempt nationalities from 1 January 2027. If you are travelling in early 2027, apply in advance rather than assuming the exemption continues.",
  },
  {
    q: "How much does a K-ETA cost?",
    a: `The government fee is ${F.fee} (${F.feeUsdApprox}), paid by card during the application. Sites that quote substantially more are adding their own service charge, which is not required.`,
  },
  {
    q: "How long is a K-ETA valid?",
    a: `${F.validYears} years from approval, or until your passport expires — whichever comes first. Within that period you may enter multiple times.`,
  },
  {
    q: "How long can I stay in Korea with a K-ETA?",
    a: `The K-ETA does not set your length of stay. It follows the visa-waiver arrangement for your nationality, which is usually ${F.stayRange} per entry. Check the period that applies to your passport before booking a long trip.`,
  },
  {
    q: "Is a K-ETA a visa?",
    a: "No. It is a pre-travel authorisation for people who are already eligible to enter Korea without a visa. If you are not from a visa-waiver country, you need an actual visa instead.",
  },
  {
    q: "Why apply if I am exempt?",
    a: "The practical benefit is that K-ETA holders do not have to complete the arrival card on the plane. If that is not worth the fee to you, there is no obligation to apply while the exemption lasts.",
  },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  // 言語メニュー（data/langs に言語を足せば自動で増える）と確認日は facts / langs から差し込む
  const langItems =
    `<li><a href="/" hreflang="en">English</a></li>` +
    LANG_CODES.map((c) => `<li><a href="/${c}/" hreflang="${LANGS[c].htmlLang}">${LANGS[c].label}</a></li>`).join("");
  const top = HOME_TOP.replace("<!--LANGS-->", langItems);
  const bottom = HOME_BOTTOM.replace("<!--UPDATED-->", F.updatedLabel);
  const readMore = PAGES.filter((p) => !p.practical && !["privacy", "terms", "about"].includes(p.slug));

  return (
    <div className="etahome" data-c="B" data-pat="1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@500;700;900&family=Manrope:wght@400;500;600;700;800&family=Nanum+Brush+Script&display=swap" rel="stylesheet" precedence="default" />
      <div className="main-wrap" dangerouslySetInnerHTML={{ __html: top }} />

      {/* ── 必要かどうかの判定（K-ETA固有の主役）＋3つの要点 ── */}
      <section id="who-needs-it" className="section xsec xsec-alt">
        <div className="container">
          <span className="eyebrow">Who needs it now?</span>
          <h2>Do you need a K-ETA?</h2>
          <p className="xlead">
            Start here. The answer depends on your nationality and on a suspension that has already been extended
            more than once.
          </p>
          <div className="xtable-wrap">
            <table className="xtable">
              <thead>
                <tr>
                  <th>Your situation</th>
                  <th>K-ETA needed?</th>
                  <th>What to do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Situation">
                    Your nationality is on the temporary exemption list (US, UK, Germany, Australia, Canada, Taiwan and
                    others)
                  </td>
                  <td data-label="Needed?" className="xfree">No — until {F.exemptionUntil}</td>
                  <td data-label="What to do">Travel without one. Apply only if you want to skip the arrival card.</td>
                </tr>
                <tr>
                  <td data-label="Situation">You are from a visa-waiver country that is not on the exemption list</td>
                  <td data-label="Needed?" className="xyes">Yes</td>
                  <td data-label="What to do">Apply on {F.officialHost} before you fly — {F.fee}.</td>
                </tr>
                <tr>
                  <td data-label="Situation">You are travelling on or after 1 January 2027</td>
                  <td data-label="Needed?"><strong>Assume yes</strong></td>
                  <td data-label="What to do">
                    The suspension expires {F.exemptionUntil}. Re-check the official list close to departure.
                  </td>
                </tr>
                <tr>
                  <td data-label="Situation">You are not from a visa-waiver country</td>
                  <td data-label="Needed?"><strong>Not applicable</strong></td>
                  <td data-label="What to do">You need a visa, not a K-ETA.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="xnote">
            Published reports disagree on how many countries the suspension covers, so we do not quote a number here —
            the list on {F.officialHost} is the only authority. Checked {F.updatedLabel}.
          </p>
          <div className="xcards x3">
            {FEATURES.map((f) => (
              <div key={f.h} className="xcard">
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 申請手順（詳細）── */}
      <section className="section xsec">
        <div className="container">
          <span className="eyebrow">Step by step</span>
          <h2>How to apply</h2>
          <div className="xcards x2">
            {STEPS.map((s, i) => (
              <div key={s.h} className="xcard">
                <span className="eyebrow">Step {i + 1}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <p className="xnote">
            An approved K-ETA also does not guarantee entry. Carry the same passport you applied with; the
            authorisation is recorded against it.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section xsec xsec-alt">
        <div className="container xnarrow">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <div className="xfaq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="xplus" aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq/" className="textlink xmore">
            All questions <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── 下層ページへの導線 ── */}
      <section id="read-more" className="section xsec">
        <div className="container">
          <span className="eyebrow">Guide</span>
          <h2>Read more about K-ETA</h2>
          <div className="xcards x3">
            {readMore.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="xcard xlink">
                <div className="xrow">
                  <div>
                    <h3>{p.nav}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span className="xgo" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="main-wrap" dangerouslySetInnerHTML={{ __html: bottom }} />
      <HomeChrome />
    </div>
  );
}
