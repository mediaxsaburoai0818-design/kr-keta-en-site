import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって de 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝ドイツ旅券（2026-12-31までK-ETA一時免除）。「今すぐ申請を」に書き換えない。
 *    免除中の申請は任意・手数料あり・公式告知の利点＝入国カード不要。免除国の公式一覧は無い（旅券スキャン時のポップアップ）。
 */

/** Lokalisierte Schreibweisen. ⚠️ Werte entsprechen FACTS (keine anderen Daten eintragen). */
const EXEMPT_UNTIL = "31. Dezember 2026"; // = F.exemptionUntil
const DECISION = "72 Stunden"; // = F.decisionTypical
const USD_APPROX = "rund 7–8 US-Dollar"; // = F.feeUsdApprox
const STAY_RANGE = "30 bis 90 Tage"; // = F.stayRange
const QUARANTINE_MAX_FINE = "5 Millionen Won (KRW)"; // = F.quarantineMaxFine
const QUARANTINE_LAW = `Gesetz zur Verhütung ansteckender Tierkrankheiten (${F.quarantineLaw})`;

/** 2026-11-15 auf den offiziellen Seiten geprüft (= NEW_CHECKED der englischen Seiten) */
const CHECKED = "15. November 2026";
const ADDED = "2026-11-15";

const SRC_PORTAL = { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" };
const SRC_FAQ = { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" };
const SRC_FEE = { label: "K-ETA — Fee information", url: "https://www.k-eta.go.kr/portal/guide/viewetafeeinformation.do" };
const SRC_GUIDE = { label: "K-ETA — Application guide", url: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do" };
const SRC_RESTRICTION = { label: "K-ETA notice — Restriction on the number of applications", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=38748" };
const SRC_GMAIL = { label: "K-ETA notice — Delay in Gmail email reception", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=307497" };
const SRC_QIA = { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" };

export const deGuides: Article[] = [
  /* ── what-is-keta ── */
  {
    slug: "was-ist-die-keta",
    enSlug: "what-is-keta",
    added: ADDED,
    title: "Was ist die K-ETA? Koreas Reisegenehmigung einfach erklärt",
    description:
      "Die K-ETA ist Südkoreas elektronische Reisegenehmigung für visumfreie Reisende: was sie ist, für wen sie gilt und warum Deutsche sie derzeit nicht brauchen.",
    related: ["ankunft-in-korea", "brauche-ich-eine-keta", "korea-aufenthaltsdauer"],
    blocks: [
      {
        p: `Die K-ETA (Korea Electronic Travel Authorization) ist eine Online-Genehmigung, die visumfreie Reisende normalerweise vor dem Flug nach Südkorea einholen. Sie kostet ${F.fee} (${USD_APPROX}) und gilt ${F.validYears} Jahre.`,
      },
      { h2: "Vor dem Antrag die Befreiung prüfen" },
      {
        p: `An diesem Punkt irren sich die meisten Ratgeber. Südkorea hat die K-ETA-Pflicht für eine Reihe von Ländern und Regionen bis zum ${EXEMPT_UNTIL} vorübergehend ausgesetzt – Deutschland gehört derzeit dazu. Ist Ihre Staatsangehörigkeit befreit, brauchen Sie keine K-ETA. Sie können trotzdem freiwillig beantragen – als Vorteil nennt die offizielle Mitteilung, dass Sie keine Einreisekarte abgeben müssen –, die Gebühr wird dann aber fällig.`,
      },
      {
        note: `Die Zahl der befreiten Länder wird uneinheitlich angegeben, und die offizielle Mitteilung zur Verlängerung führt sie nicht auf. Stattdessen erhalten befreite Reisende einen Pop-up-Hinweis, wenn sie im Antrag auf ${F.officialHost} ihre Passdatenseite scannen. Prüfen Sie Ihren eigenen Reisepass auf diesem Weg, bevor Sie irgendetwas anderes tun.`,
      },
      { h2: "Sie ist kein Visum" },
      {
        p: "Die K-ETA berechtigt nicht zur Einreise. Sie bestätigt, dass Sie an Bord gehen dürfen. Über die Einreise entscheidet bei der Ankunft weiterhin die Grenzbehörde, und sie kann sie verweigern.",
      },
      { h2: "Sie legt nicht fest, wie lange Sie bleiben dürfen" },
      {
        p: `Ihre zulässige Aufenthaltsdauer ergibt sich aus dem Visumbefreiungsabkommen zwischen Korea und Ihrem Land – üblicherweise ${STAY_RANGE}. Zwei Reisende im selben Flug mit derselben K-ETA können unterschiedlich lange Aufenthalte erhalten.`,
      },
    ],
  },

  /* ── do-i-need-keta ── */
  {
    slug: "brauche-ich-eine-keta",
    enSlug: "do-i-need-keta",
    added: ADDED,
    title: "Brauche ich eine K-ETA? So prüfen Sie, ob Sie befreit sind",
    description:
      "Viele Länder sind vorübergehend von der K-ETA befreit, derzeit auch Deutschland. So prüfen Sie Ihren Reisepass – und was gilt, wenn Sie nicht befreit sind.",
    related: ["einreisekarte-und-e-gates", "reisen-mit-kindern", "keta-befreiung-2026"],
    blocks: [
      {
        p: `Bevor Sie Geld ausgeben, klären Sie eine Frage: Ist Ihr Reisepass derzeit befreit? Die Befreiung gilt bis zum ${EXEMPT_UNTIL}, und sie richtet sich nach der Staatsangehörigkeit – nicht danach, wo Sie wohnen oder mit welcher Fluggesellschaft Sie fliegen. Für deutsche Reisepässe gilt sie derzeit.`,
      },
      { h2: "So prüfen Sie es" },
      {
        ul: [
          `Beginnen Sie den Antrag auf der offiziellen Seite (${F.officialHost}) oder in der K-ETA-App. Laut offizieller Mitteilung erhalten befreite Reisende beim Scannen der Passdatenseite einen Pop-up-Hinweis.`,
          "Maßgeblich ist der Reisepass, mit dem Sie tatsächlich reisen – nicht eine zweite Staatsangehörigkeit, die Sie haben.",
          "Sind Sie befreit, müssen Sie weder beantragen noch zahlen. Sie können trotzdem beantragen, um die Einreisekarte zu sparen; dann wird die Gebühr fällig.",
          "Sind Sie nicht befreit, schließen Sie den Antrag vor dem Abflug ab.",
        ],
      },
      { h2: "Warum wir hier keine Liste abdrucken" },
      {
        p: "Die Befreiung wurde mehr als einmal verlängert und geändert, und die Zahl der Länder wird von verschiedenen Medien unterschiedlich angegeben. Auch die offizielle Mitteilung zur Verlängerung führt die befreiten Länder nicht auf; geprüft wird, wenn Sie Ihren Reisepass im offiziellen Antrag scannen. Eine in einen Ratgeber kopierte Liste veraltet unbemerkt.",
      },
      { h2: "Befreit heißt nicht, dass nichts vorzubereiten ist" },
      {
        p: "Auch ohne K-ETA brauchen Sie einen für die Reise gültigen Reisepass, ein Weiter- oder Rückflugticket und eine Adresse in Korea für die Einreisekarte. Manche Reisende werden außerdem um eine Einreiseerklärung gebeten.",
      },
      {
        note: "Reisen Sie mit einem Visum (Arbeit, Studium, Langzeitaufenthalt), betrifft Sie die K-ETA überhaupt nicht. Sie gibt es nur für die visumfreie Einreise.",
      },
    ],
  },

  /* ── passport-and-details ── */
  {
    slug: "reisepass-und-angaben",
    enSlug: "passport-and-details",
    added: ADDED,
    title: "Ihre K-ETA ist an einen Reisepass gebunden",
    description:
      "Die K-ETA ist mit dem Reisepass verknüpft, mit dem Sie beantragt haben. Ein neuer Pass beendet sie vorzeitig, abweichende Angaben stoppen Sie beim Check-in.",
    related: ["ankunft-in-korea", "einreisekarte-und-e-gates", "keta-haeufige-fehler"],
    blocks: [
      {
        p: `Eine K-ETA gilt ${F.validYears} Jahre, aber mit einer Bedingung, die viele übersehen: Sie ist an den Reisepass gebunden, mit dem Sie beantragt haben. Wird dieser Pass ersetzt, ist die Genehmigung nicht mehr nutzbar, auch wenn die ${F.validYears} Jahre noch nicht um sind.`,
      },
      { h2: "Wann Sie neu beantragen müssen" },
      {
        ul: [
          "Sie haben Ihren Reisepass verlängert oder ersetzt",
          "Ihr Reisepass wurde nach Verlust oder Beschädigung neu ausgestellt",
          "Sie reisen mit einer anderen Staatsangehörigkeit",
        ],
      },
      { h2: "Angaben genau so eintragen, wie sie gedruckt sind" },
      {
        ul: [
          "Namen wie in der maschinenlesbaren Zone, nicht so, wie Sie sie gewöhnlich schreiben",
          "Die Passnummer Zeichen für Zeichen – 0 und O, 1 und I",
          "Die Staatsangehörigkeit, wie sie im Reisepass steht, nicht Ihr Wohnsitzland",
          "Ein Foto, das den Vorgaben entspricht",
        ],
      },
      { h2: "Nur ein offizieller Kanal" },
      {
        p: `Beantragt wird nur auf ${F.officialHost}. Die Gebühr beträgt ${F.fee}. Seiten, die mehr verlangen, sind Dritte mit eigenem Aufschlag – und Ihre Passnummer anderswo einzugeben, ist ein Risiko, das Sie nicht eingehen müssen.`,
      },
      { source: SRC_PORTAL },
      {
        note: `Prüfen Sie vor jedem Antrag, ob Ihre Staatsangehörigkeit derzeit befreit ist – für deutsche Reisepässe gilt die Befreiung bis zum ${EXEMPT_UNTIL}. Ein Antrag während der Befreiung ist freiwillig: Die Gebühr wird fällig und nicht erstattet, und der Vorteil laut offizieller Mitteilung ist, dass Sie keine Einreisekarte abgeben müssen.`,
      },
    ],
  },

  /* ── if-you-are-exempt ── */
  {
    slug: "keta-befreit-was-tun",
    enSlug: "if-you-are-exempt",
    added: ADDED,
    title: `Von der K-ETA befreit bis ${EXEMPT_UNTIL}: was das für Sie bedeutet`,
    description:
      "Viele Staatsangehörigkeiten, darunter Deutschland, brauchen derzeit keine K-ETA. Ein Antrag ist freiwillig und kostet die Gebühr. Was dennoch gilt.",
    related: ["ankunft-in-korea", "einreisekarte-und-e-gates", "keta-befreiung-2026"],
    blocks: [
      {
        p: `Zahlreiche Länder sind bis zum ${EXEMPT_UNTIL} vorübergehend von der K-ETA-Pflicht befreit, derzeit auch Deutschland. Ist Ihre Staatsangehörigkeit befreit, müssen Sie nicht beantragen. Sie dürfen es trotzdem: Laut offizieller Mitteilung können befreite Reisende, die die Vorteile einer K-ETA-Genehmigung nutzen möchten – etwa dass sie keine Einreisekarte abgeben müssen –, beantragen; die Gebühr wird dann fällig.`,
      },
      { h2: "Erst prüfen, dann zahlen" },
      {
        p: "Die offizielle Mitteilung zur Verlängerung führt die befreiten Länder und Regionen nicht auf. Stattdessen erhalten befreite Reisende einen Pop-up-Hinweis, wenn sie im Antrag ihre Passdatenseite scannen. Medien haben unterschiedliche Zahlen befreiter Länder genannt. Die Zahl 67, die in manchen Berichten auftaucht, ist laut offizieller FAQ die Zahl der visumfreien Länder und Regionen, für die die K-ETA gilt – nicht die Zahl der befreiten Länder. Verlassen Sie sich nicht auf eine Zahl aus einem Artikel, sondern prüfen Sie Ihren eigenen Reisepass im offiziellen Antrag.",
      },
      { h2: "Wenn Sie befreit sind und trotzdem beantragen" },
      {
        ul: [
          `Sie zahlen ${F.fee} für etwas, das Sie nicht brauchen`,
          "Eine Erstattung gibt es nicht",
          "Der Vorteil laut offizieller Mitteilung: Sie müssen keine Einreisekarte abgeben",
        ],
      },
      { h2: "Was während der Befreiung weiterhin gilt" },
      {
        ul: [
          "Die zulässige Aufenthaltsdauer aus dem Visumbefreiungsabkommen Ihres Landes",
          "Die Quarantäneerklärung und ihre Strafen",
          "Der Zollfreibetrag",
          "Die Prüfung durch die Grenzbehörde bei der Ankunft",
        ],
      },
      {
        p: "Die Befreiung erspart Ihnen also einen Schritt vor dem Abflug. An dem, was nach der Landung passiert, ändert sie nichts.",
      },
      { h2: "Wenn die Befreiung endet" },
      {
        p: `Die Befreiung läuft derzeit bis zum ${EXEMPT_UNTIL}. Wird sie nicht verlängert, brauchen Reisende aus diesen Ländern wieder eine K-ETA. Prüfen Sie das offizielle Portal kurz vor Ihrem Reisetermin, statt sich auf den Stand Ihrer letzten Reise zu verlassen.`,
      },
      { source: SRC_PORTAL },
      { source: { label: "K-ETA notice — Extension of K-ETA temporary exemption (posted 23 December 2025)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299707" } },
      { source: SRC_FAQ },
      {
        note: "Am meisten Geld verliert man bei der K-ETA nicht durch die Gebühr, sondern dadurch, dass man eine Vermittlerseite für einen Antrag bezahlt, den man gar nicht gebraucht hätte.",
      },
    ],
  },

  /* ── when-the-exemption-ends ── */
  {
    slug: "ende-der-befreiung",
    enSlug: "when-the-exemption-ends",
    added: ADDED,
    title: `Was passiert, wenn die Befreiung am ${EXEMPT_UNTIL} endet?`,
    description: `Viele Staatsangehörigkeiten, auch Deutschland, sind bis zum ${EXEMPT_UNTIL} von der K-ETA befreit. Was das für Reisen um diesen Stichtag bedeutet.`,
    related: ["keta-neuigkeiten", "keta-befreit-was-tun", "keta-befreiung-2026"],
    blocks: [
      {
        p: `Die derzeitige Befreiung ist vorübergehend, und das angekündigte Enddatum ist der ${EXEMPT_UNTIL}. Liegt Ihre Reise nahe an diesem Datum, planen Sie damit, dass die Pflicht zurückkehrt – nicht damit, dass erneut verlängert wird.`,
      },
      { h2: "Welches Datum zählt" },
      {
        p: "Maßgeblich ist der Tag, an dem Sie in Korea ankommen – nicht der Tag der Buchung und nicht der Tag des Abflugs zu Hause. Ein Flug, der nach dem Ende der Befreiung landet, braucht die Genehmigung, auch wenn er vorher gestartet ist.",
      },
      { h2: "Wenn Sie um den Stichtag herum reisen" },
      {
        ul: [
          `Liegt Ihre Ankunft nahe am Stichtag, beantragen Sie trotzdem. Die K-ETA gilt ${F.validYears} Jahre, ein unnötiger Antrag ist also kein Verlust. Bei einer Ankunft deutlich vor dem Stichtag brauchen Sie mit deutschem Reisepass keine.`,
          "Verlassen Sie sich nicht darauf, dass die Fluggesellschaft Sie informiert. Sie prüft am Abflugtag – zu spät, um noch etwas zu ändern.",
          "Prüfen Sie kurz vor der Reise das offizielle Portal – Verlängerungen und Änderungen werden zuerst dort angekündigt.",
        ],
      },
      {
        note: "Die Befreiung wurde schon mehrfach geändert. Eine offizielle Länderliste gibt es nicht: Ob Ihr Reisepass befreit ist, zeigt ein Pop-up-Hinweis beim Scannen der Passdatenseite im offiziellen Antrag. Behandeln Sie Listen, die Sie anderswo lesen – auch Zusammenfassungen wie diese –, als Hinweis auf die offizielle Seite, nicht als Ersatz dafür.",
      },
      { source: { label: "K-ETA official portal", url: F.officialUrl } },
    ],
  },

  /* ── common-mistakes ── */
  {
    slug: "keta-haeufige-fehler",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED,
    title: "Typische Fehler beim K-ETA-Antrag – und was die offizielle FAQ dazu sagt",
    description:
      "Nach dem Absenden keine Korrektur, neuer Reisepass heißt neue K-ETA, Reiseänderungen nachtragen: Fehler, vor denen die offiziellen K-ETA-Seiten warnen.",
    related: ["keta-antrag-anleitung", "keta-gueltigkeit", "keta-abgelehnt", "keta-unterlagen"],
    blocks: [
      {
        p: "Die offizielle K-ETA-Website veröffentlicht keine Rangliste der häufigsten Fehler, und das K-ETA Center nennt Antragstellern den genauen Grund einer Ablehnung nicht, weil die Kriterien vertraulich sind. Veröffentlicht werden aber eine ausführliche FAQ und eine Reihe von Mitteilungen. Vor jedem der folgenden Punkte warnen diese offiziellen Seiten ausdrücklich.",
      },
      {
        note: `Mit deutschem Reisepass brauchen Sie bis zum ${EXEMPT_UNTIL} keine K-ETA. Diese Seite ist für den Fall gedacht, dass Sie freiwillig beantragen (etwa um die Einreisekarte zu sparen) oder für eine Reise ab dem 1. Januar 2027 planen, falls die Befreiung nicht verlängert wird.`,
      },
      { h2: "1. Darauf vertrauen, Angaben nach dem Absenden noch korrigieren zu können" },
      {
        p: "Vor dem Absenden können Sie alle Angaben korrigieren. Danach nicht mehr. Laut offizieller FAQ lassen sich Passdaten (persönliche Angaben) nach dem Absenden unabhängig vom Ergebnis nicht mehr ändern; Sie beantragen dann neu mit den richtigen Angaben. Die bereits gezahlte Gebühr wird unabhängig vom Ergebnis nicht erstattet.",
      },
      { h2: "2. Eine Genehmigung mit falschen Angaben für gültig halten" },
      {
        p: "Stimmen die Angaben einer erteilten K-ETA nicht mit Ihrem Reisepass überein – Passnummer, Staatsangehörigkeit, Geburtsdatum usw. –, können Sie unter Umständen nicht an Bord des Flugzeugs oder Schiffs nach Korea gehen, oder die Einreise wird verweigert. Die offizielle Empfehlung: vor dem Bezahlen alles auf Richtigkeit prüfen.",
      },
      { h2: "3. Den Namen so eintragen, wie Sie ihn gewöhnlich schreiben" },
      {
        ul: [
          "Namen müssen in lateinischen Buchstaben (Englisch) eingegeben werden; Sonderzeichen wie Bindestriche (-) lassen sich nicht eingeben",
          "Laut FAQ verwenden Sie die erste Zeile der maschinenlesbaren Zone (MRZ) unten auf der Passdatenseite",
          "Trennt Ihr Reisepass Nachname und Vorname nicht, ist es zulässig, den vollständigen Namen genau so einzugeben, wie er in der MRZ steht",
          "Steht in Ihrem Reisepass nur ein Geburtsjahr (zum Beispiel 1999-XX-XX), geben Sie 1999-00-00 ein",
        ],
      },
      { h2: "4. Mit einem anderen Reisepass reisen" },
      {
        p: "Der Reisepass auf der Bordkarte, der Reisepass, mit dem Sie nach Korea einreisen, und der Reisepass in der K-ETA-Genehmigung müssen derselbe sein. Bekommen Sie einen neuen Reisepass – wegen Namensänderung, Verlust oder Verlängerung –, müssen Sie neu beantragen, auch wenn für den alten Pass eine Genehmigung vorlag. Ein neuer Antrag ist auch nötig, wenn sich Staatsangehörigkeit, Name, Geschlecht, Geburtsdatum, Passnummer, Ablaufdatum des Passes, der Status bei Infektionskrankheiten oder das Vorstrafenregister ändern. Ein Berufswechsel allein erfordert keinen neuen Antrag.",
      },
      { h2: "5. Reiseangaben nicht aktualisieren" },
      {
        p: "Ändern sich nach der Genehmigung Einreisezweck, Aufenthaltsadresse, Kontaktdaten, voraussichtliches Ankunfts- oder Abreisedatum oder Mitreisende, müssen Sie sie laut offizieller Anleitung auf der Seite [Update Travel Information] der K-ETA-Website aktualisieren. Andernfalls drohen eine Einreiseverweigerung oder andere Nachteile.",
      },
      { h2: "6. Zu spät beantragen" },
      {
        ul: [
          "Ein Antrag erst nach dem Boarding oder schon in Korea kann zur Ablehnung der K-ETA oder zu Einreisebeschränkungen führen",
          "Eine K-ETA-Mitteilung empfiehlt, 1 bis 2 Monate vor dem geplanten Einreisedatum zu beantragen",
          `Die Prüfung dauert in der Regel bis zu ${DECISION} und kann länger dauern, wenn viele Anträge eingehen`,
          "Anträge werden in der Reihenfolge des Eingangs bearbeitet – eine Expressbearbeitung gibt es nicht",
          "Ein zwischengespeichertes Antragsformular wird automatisch gelöscht, wenn Sie es nicht innerhalb von 7 Tagen wieder aufrufen",
        ],
      },
      { h2: "7. Nach einer Ablehnung immer wieder beantragen" },
      {
        p: "Wer innerhalb von 6 Monaten 3 oder mehr Anträge stellt, kann erst 6 Monate nach dem Tag, an dem das Ergebnis des ersten Antrags mitgeteilt wurde, erneut beantragen. Das gilt nicht für einen erneuten Antrag, weil persönliche Angaben – Passnummer, Name, Geburtsdatum, Geschlecht, Staatsangehörigkeit, Foto usw. – falsch eingegeben wurden. Müssen Sie während der Sperrfrist reisen, verweist die offizielle Mitteilung auf einen Visumantrag bei einer koreanischen Botschaft oder einem Konsulat.",
      },
      { h2: "8. Ein Foto, das den Vorgaben nicht entspricht" },
      {
        ul: [
          "In Farbe, im JPG-Format, höchstens 20 MB",
          "Keine Accessoires wie Hut, Schal oder Sonnenbrille",
          "Ganzes Gesicht, frontal, etwa 75 % des Bildes, Augen offen und direkt in die Kamera gerichtet",
          "Religiöse Kleidung ist erlaubt, das Gesicht muss aber von der Stirn bis zum Kinn deutlich zu sehen sein",
        ],
      },
      { h2: "9. Eine E-Mail-Adresse, an die das Ergebnis womöglich nicht zugestellt wird" },
      {
        p: "Eine K-ETA-Mitteilung berichtet von Verzögerungen beim E-Mail-Empfang für Gmail-Nutzer und bittet, eine andere E-Mail-Adresse zu verwenden. Sie fügt hinzu, dass US-Dienste wie outlook.com und hotmail.com dieselben Verzögerungen haben können.",
      },
      { h2: "10. Eine Zahlung, die nicht durchgeht" },
      {
        p: "Erscheint ein 3DS-Fehler (Authentifizierung des Karteninhabers), wenden Sie sich laut FAQ an Ihr Kartenunternehmen. Auf der Gebührenseite heißt es, dass die Zahlung scheitern kann, wenn Zahlungen im Ausland für Ihre Karte gesperrt sind.",
      },
      { h2: "11. Annehmen, der Wohnort entscheide über die Berechtigung" },
      {
        p: "Maßgeblich ist die Staatsangehörigkeit auf der Passdatenseite. Wohnort, Abreiseort, ein Visum für ein Drittland und der Impfstatus spielen keine Rolle.",
      },
      { h2: "Zwei Dinge, die keine Formfehler sind" },
      {
        ul: [
          "Falsche Angaben: Ein Antrag mit falschen Angaben kann abgelehnt oder auch nach der Genehmigung jederzeit widerrufen werden, und es drohen Sanktionen oder Einreisebeschränkungen",
          "Die K-ETA für Arbeit oder Studium nutzen: Beschäftigung, Studium und andere Erwerbstätigkeit erfordern ein Visum einer koreanischen Botschaft oder eines Konsulats",
        ],
      },
      { source: SRC_FAQ },
      { source: SRC_GUIDE },
      { source: SRC_FEE },
      { source: { label: "K-ETA notice — Information about K-ETA (from 9 January 2023)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=99397" } },
      { source: { label: "K-ETA notice — Estimated time for K-ETA screening", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=11468" } },
      { source: SRC_RESTRICTION },
      { source: SRC_GMAIL },
    ],
    faq: [
      { q: "Kann ich meine K-ETA nach dem Absenden korrigieren?", a: "Nein. Angaben lassen sich nur vor dem Absenden korrigieren. Bei falschen Passdaten beantragen Sie laut offizieller FAQ neu mit den richtigen Angaben." },
      { q: "Brauche ich eine neue K-ETA, wenn ich den Job wechsle?", a: "Nein. Laut offizieller FAQ erfordert ein Berufswechsel keinen neuen Antrag. Ein neuer Reisepass, ein neuer Name oder eine andere Staatsangehörigkeit dagegen schon." },
      { q: "Warum wurde meine K-ETA abgelehnt?", a: "Das K-ETA Center nennt den genauen Grund nicht, weil die Kriterien vertraulich sind. Wenn Sie nach Korea einreisen möchten, verweist die FAQ auf einen Visumantrag bei einer koreanischen Botschaft oder einem Konsulat." },
    ],
  },

  /* ── keta-app ── */
  {
    slug: "offizielle-keta-app",
    enSlug: "keta-app",
    added: ADDED,
    checked: CHECKED,
    title: "Die offizielle K-ETA-App: wo Sie sie bekommen und was sie kann",
    description:
      "Beantragt wird nur auf k-eta.go.kr oder in der offiziellen K-ETA-App des koreanischen Justizministeriums. Was die App kann – und was sie nicht ändert.",
    related: ["offizielle-keta-website", "keta-antrag-anleitung", "keta-status", "keta-haeufige-fehler"],
    blocks: [
      {
        p: "Laut der offiziellen K-ETA-Website ist ein Antrag nur auf www.k-eta.go.kr oder in der mobilen App namens K-ETA möglich. Die App ist ein zweiter Zugang zum selben System, kein eigener Dienst.",
      },
      {
        note: `Mit deutschem Reisepass brauchen Sie bis zum ${EXEMPT_UNTIL} keine K-ETA. Beginnen Sie trotzdem einen Antrag, zeigt laut offizieller Mitteilung ein Pop-up-Hinweis beim Scannen der Passdatenseite, dass Sie befreit sind. Freiwillig beantragen dürfen Sie trotzdem; die Gebühr wird dann fällig.`,
      },
      { h2: "Wo Sie die App bekommen" },
      {
        ul: [
          "Android: Google Play. iPhone: App Store. Suchen Sie nach „K-ETA“",
          "Bei Google Play ist als Entwickler 법무부 (das Justizministerium) angegeben, im App Store als Anbieter Ministry of Justice",
          "Die Store-Beschreibung bezeichnet sie als offizielle App der Regierung der Republik Korea und nennt www.k-eta.go.kr als offizielle Website",
          `Der Download ist kostenlos. Die K-ETA-Gebühr von ${F.fee} pro Person zahlen Sie im Antrag`,
        ],
      },
      {
        note: "Prüfen Sie vor der Installation den Namen des Anbieters. Die offizielle App stammt vom koreanischen Justizministerium.",
      },
      { h2: "Was die App einfacher macht" },
      {
        p: "Auf der Website müssen das Gesichtsfoto und das Bild der Passdatenseite jeweils als JPG unter 20 MB hochgeladen werden. Laut offizieller FAQ werden Größe und Dateigröße in der App automatisch angepasst.",
      },
      { h2: "Was Sie in der App außerdem erledigen können" },
      {
        ul: [
          "Das Ergebnis unter [K-ETA Application Results] abrufen",
          "Reiseangaben unter [Update Travel Information] im Reiter [Application Results] ändern",
          "Den Bearbeitungsstand prüfen – laut FAQ auf der Website oder in der App",
        ],
      },
      { h2: "Wenn etwas nicht klappt" },
      {
        ul: [
          "Zahlungsfehler im Desktop-Browser: Eine offizielle Mitteilung empfiehlt, es mit der K-ETA-App oder der mobilen Website auf einem Mobilgerät zu versuchen",
          "Fehler in der App: Laut einer offiziellen Mitteilung löschen Sie die K-ETA-App und installieren sie neu",
          "Ein 3DS-Fehler (Authentifizierung des Karteninhabers): Laut FAQ wenden Sie sich an Ihr Kartenunternehmen",
        ],
      },
      { h2: "Was die App nicht ändert" },
      {
        ul: [
          `Die Antragsgebühr beträgt ${F.fee} pro Person (${USD_APPROX}); hinzukommen kann eine Gebühr für die Online-Zahlung von in der Regel etwa 3 %. Einen anderen Preis für die App nennen die offiziellen Seiten nicht`,
          `Die Prüfung dauert in der Regel bis zu ${DECISION}, und eine Expressbearbeitung gibt es für keinen Antrag`,
          `Eine erteilte K-ETA gilt ${F.validYears} Jahre – gleich, wie Sie beantragt haben`,
        ],
      },
      { source: { label: "K-ETA official website — application", url: F.officialUrl } },
      { source: SRC_FAQ },
      { source: SRC_FEE },
      { source: { label: "K-ETA notice — How to fix payment errors", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=56631" } },
      { source: { label: "K-ETA notice — How to fix errors when applying for K-ETA", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=268391" } },
      { source: { label: "Google Play — K-ETA (Ministry of Justice)", url: "https://play.google.com/store/apps/details?id=kr.go.keta" } },
      { source: { label: "App Store — K-ETA (Ministry of Justice)", url: "https://apps.apple.com/us/app/k-eta/id1562976724" } },
    ],
    faq: [
      { q: "Ist die K-ETA-App kostenlos?", a: `Der Download ist kostenlos. Die K-ETA-Antragsgebühr von ${F.fee} pro Person wird beim Antrag fällig.` },
      { q: "Geht es mit der App schneller als auf der Website?", a: "Davon steht auf den offiziellen Seiten nichts. Anträge werden in der Reihenfolge des Eingangs bearbeitet, und eine Expressbearbeitung gibt es nicht." },
    ],
  },

  /* ── official-site ── */
  {
    slug: "offizielle-keta-website",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED,
    title: "Die offizielle K-ETA-Website – und woran Sie sie erkennen",
    description: `Beantragen Sie nur auf www.k-eta.go.kr oder in der offiziellen K-ETA-App. Korea hat keine Antragsvermittler beauftragt. Die Gebühr: ${F.fee} pro Person.`,
    related: ["offizielle-keta-app", "keta-kosten", "keta-antrag-anleitung", "einreisekarte-und-e-gates"],
    blocks: [
      {
        p: "Es gibt zwei offizielle Wege zum Antrag: die Website www.k-eta.go.kr und die mobile App namens K-ETA. Die offizielle Seite warnt vor ähnlich aussehenden Vermittlern und Phishing-Seiten, die unter dem Vorwand eines K-ETA-Antrags oder einer Expressbearbeitung hohe Gebühren verlangen.",
      },
      { h2: "Es gibt keine beauftragten Vermittler" },
      {
        p: "Laut einer K-ETA-Mitteilung hat die Regierung der Republik Korea den K-ETA-Antragsdienst an keine Vermittler übertragen, und es wurden nicht-offizielle Websites festgestellt, die eine höhere Antragsgebühr verlangen. Der Korea Immigration Service hat die Warnung im August 2025 wiederholt: Es wurden keine Vermittler beauftragt, und Anträge sollen über die offizielle Website oder die K-ETA-App gestellt werden.",
      },
      { h2: "Was die offizielle Seite berechnet" },
      {
        ul: [
          `${F.fee} pro Person (${USD_APPROX})`,
          "Hinzukommen kann eine Gebühr für die Online-Zahlung – in der Regel etwa 3 %",
          "Einmal gezahlt, wird die Gebühr unabhängig vom Ergebnis nicht erstattet",
          "Akzeptierte Karten: VISA, MASTER, JCB, AMEX, Diners Club, DISCOVER, UnionPay und Alipay+",
          "Für Anträge, die nach dem 3. Juli 2023, 9:00 Uhr (koreanische Zeit) gestellt wurden, wird automatisch eine Quittung an die E-Mail-Adresse des Antragstellers geschickt",
        ],
      },
      { h2: "Wie lange es dauert" },
      {
        p: `Laut offizieller Seite dauert die Prüfung in der Regel bis zu ${DECISION} und kann länger dauern, wenn unerwartet viele Anträge eingehen. Anträge werden in der Reihenfolge des Eingangs bearbeitet; eine Expressbearbeitung gibt es nicht.`,
      },
      { h2: "Wer die Seite betreibt und wie Sie Kontakt aufnehmen" },
      {
        ul: [
          "Betrieben wird die Seite vom Korea Electronic Travel Authorization (K-ETA) Center des Justizministeriums der Republik Korea",
          "Telefonische oder persönliche Beratung bietet das K-ETA Center grundsätzlich nicht an. Fragen stellen Sie über [Ask Us], auf Koreanisch, Englisch, Thai oder Russisch",
          "Antragsformular und wichtige Mitteilungen gibt es in 10 Sprachen, die Antragsfelder akzeptieren aber nur Englisch",
          "Auf der Website können Nicht-Mitglieder bis zu 9 weitere Personen in einen Antrag aufnehmen, Mitglieder bis zu 1.000",
        ],
      },
      { h2: "Die e-Arrival card hat eine eigene offizielle Seite" },
      {
        p: "Der Korea Immigration Service warnt vor gefälschten Websites für die e-Arrival card. Die einzige offizielle Website dafür ist www.e-arrivalcard.go.kr; jede Seite, die dafür Zahlungsdaten verlangt, ist kein offizieller Dienst. Für Reisende mit deutschem Reisepass ist das derzeit die wichtigere Adresse: Solange Sie von der K-ETA befreit sind und keine beantragt haben, geben Sie eine Einreisekarte ab – online über diese Seite oder auf Papier.",
      },
      {
        note: `Dieser Ratgeber ist unabhängig und keine offizielle Seite. Wir nehmen weder Anträge noch Zahlungen entgegen. Beantragen Sie nur auf ${F.officialHost} oder in der K-ETA-App.`,
      },
      { source: { label: "K-ETA official website — application", url: F.officialUrl } },
      { source: { label: "K-ETA notice — Beware of non-official websites and agencies", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=114771" } },
      { source: { label: "Korea Immigration Service — Beware of unofficial K-ETA websites (18 August 2025)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/598009/artclView.do" } },
      { source: SRC_FEE },
      { source: { label: "K-ETA notice — How to get a payment receipt", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=130892" } },
      { source: SRC_FAQ },
      { source: { label: "Korea Immigration Service — Beware of fake e-Arrival card websites (9 March 2026)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/604164/artclView.do" } },
    ],
    faq: [
      { q: "Gibt es einen offiziell zugelassenen K-ETA-Vermittler?", a: "Nein. Die koreanische Regierung erklärt, dass sie für K-ETA-Anträge keine Vermittler beauftragt hat." },
      { q: "Kann ich beim K-ETA Center anrufen?", a: "Telefonische oder persönliche Beratung bietet das K-ETA Center grundsätzlich nicht an. Nutzen Sie [Ask Us] auf der offiziellen Website." },
    ],
  },

  /* ── news ── */
  {
    slug: "keta-neuigkeiten",
    enSlug: "news",
    added: ADDED,
    checked: CHECKED,
    title: `K-ETA aktuell: die Befreiung bis ${EXEMPT_UNTIL} und frühere Änderungen`,
    description: `Die K-ETA-Befreiung gilt bis ${EXEMPT_UNTIL}; am 15. November 2026 war auf k-eta.go.kr nichts zu 2027 angekündigt. Offizielle Änderungen seit 2021.`,
    related: ["keta-befreiung-2026", "keta-faq", "einreisekarte-und-e-gates"],
    blocks: [
      {
        p: "Diese Seite listet Änderungen an der K-ETA auf, die auf offiziellen Seiten der koreanischen Regierung veröffentlicht wurden, jeweils mit dem Datum, das die offizielle Seite nennt. Wir aktualisieren sie, wenn wir diese Seiten prüfen; das Datum der letzten Prüfung steht oben.",
      },
      { h2: "23. Dezember 2025 – Befreiung bis 31. Dezember 2026 verlängert" },
      {
        ul: [
          `Das Justizministerium hat die vorübergehende Befreiung zur Förderung des Tourismus um ein weiteres Jahr verlängert. Der verlängerte Zeitraum läuft vom 1. Januar 2026 bis zum ${EXEMPT_UNTIL} (koreanische Zeit)`,
          "Die Länder und Regionen, die zu diesem Zeitpunkt befreit waren, fallen unter die Verlängerung. Die Mitteilung führt sie nicht auf; befreite Reisende erhalten beim Scannen der Passdatenseite im Antrag einen Pop-up-Hinweis",
          "Befreite Reisende, die die Vorteile einer K-ETA-Genehmigung nutzen möchten, etwa den Wegfall der Einreisekarte, dürfen trotzdem beantragen; die Gebühr wird dann fällig",
          "Wer bereits eine K-ETA hat, kann sie bis zu ihrem Ablauf nutzen. Die gezahlte Gebühr wird nicht erstattet",
        ],
      },
      {
        note: `Für Reisende mit deutschem Reisepass heißt das: Bis zum ${EXEMPT_UNTIL} brauchen Sie keine K-ETA.`,
      },
      { source: { label: "K-ETA notice — Extension of K-ETA temporary exemption (posted 23 December 2025)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299707" } },
      { h2: `Nach dem ${EXEMPT_UNTIL}` },
      {
        p: "Am 15. November 2026 gab es auf der K-ETA-Mitteilungsseite keine neuere Mitteilung zur Befreiung, und die neuesten Beiträge der englischsprachigen Nachrichtenseite des Korea Immigration Service sagten nichts zur K-ETA. Ob die Befreiung erneut verlängert wird, ist auf diesen Seiten nicht angekündigt. Wenn Sie am oder nach dem 1. Januar 2027 reisen, prüfen Sie die K-ETA-Mitteilungen kurz vor Ihrem Abreisetermin.",
      },
      { source: { label: "K-ETA — Notices", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=notice" } },
      { source: { label: "Korea Immigration Service — News (English)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/artclList.do" } },
      { h2: "Frühere Änderungen" },
      {
        ul: [
          "1. September 2021 – die K-ETA wird eingeführt",
          "1. September 2022 – Reisende aus den damals 112 K-ETA-berechtigten Ländern brauchen vor dem Einsteigen in ein Flugzeug oder Schiff, das aus dem Ausland nach Jeju fährt, eine K-ETA",
          "9. Januar 2023 – Inhaber von Diplomaten- und Dienstpässen werden von der K-ETA befreit",
          `3. Juli 2023 – visumfrei Reisende im Alter von ${F.ketaChildMaxAge} Jahren oder jünger sowie ${F.ketaSeniorMinAge} Jahren oder älter werden befreit, und die Gültigkeit wird von 2 auf ${F.validYears} Jahre verlängert. Für Anträge, die ab 9:00 Uhr (koreanische Zeit) an diesem Tag gestellt werden, kommt die Quittung automatisch per E-Mail`,
          "18. März 2024 – „Tour (Incentive Travel)“ wird als Einreisezweck ergänzt, für Reisen und Treffen von 10 oder mehr Personen, die ein Unternehmen bezahlt",
          "31. August 2025 – der Korea Immigration Service eröffnet am Flughafen Incheon einen eigenen Einreiseschalter für ausländische Geschäftsreisende, befristet bis Dezember",
          "2026 (Mitteilung vom 11. März 2026) – das K-ETA Center meldet Verzögerungen beim E-Mail-Empfang für Gmail-Nutzer und bittet, eine andere Adresse zu verwenden",
        ],
      },
      { source: { label: "K-ETA notice — Beware of non-official websites and agencies (implementation date)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=114771" } },
      { source: { label: "K-ETA notice — K-ETA required for Jeju-bound travel", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=53251" } },
      { source: { label: "K-ETA notice — Information about K-ETA (from 9 January 2023)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=99397" } },
      { source: { label: "K-ETA notice — Expansion of validity and age exemption (3 July 2023)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175270" } },
      { source: { label: "K-ETA notice — How to get a payment receipt", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=130892" } },
      { source: { label: "K-ETA notice — New purpose of entry: Tour (Incentive Travel)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=223021" } },
      { source: { label: "Korea Immigration Service — Reduced wait times for foreign business travellers (27 August 2025)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/598244/artclView.do" } },
      { source: SRC_GMAIL },
      {
        note: "Nicht aufgeführt sind das Datum, an dem die vorübergehende Befreiung begann, und die Daten früherer Verlängerungen. Die älteren Mitteilungen stehen nicht mehr auf k-eta.go.kr, und wir konnten diese Daten auf keiner offiziellen Seite bestätigen.",
      },
    ],
  },

  /* ── short-term-visit-visa ── */
  {
    slug: "kurzzeitvisum-c3",
    enSlug: "short-term-visit-visa",
    added: ADDED,
    checked: CHECKED,
    title: "Koreas Kurzzeitvisum (C-3): wann Sie statt einer K-ETA ein Visum brauchen",
    description:
      "Abgelehnte K-ETA, Antragssperre, Arbeit oder Studium: Dann führt der Weg über ein Visum. Die Kategorien des Kurzzeitvisums C-3 im Überblick.",
    related: ["keta-abgelehnt", "korea-aufenthaltsdauer", "keta-haeufige-fehler"],
    blocks: [
      {
        p: "Die K-ETA gibt es nur für Reisende, die ohne Visum nach Korea einreisen dürfen. In mehreren Situationen verweisen die offiziellen K-ETA-Seiten stattdessen auf ein Visum, das Sie über eine koreanische Botschaft oder ein Konsulat beantragen.",
      },
      { h2: "Wann Sie stattdessen ein Visum brauchen" },
      {
        ul: [
          "Ihre K-ETA wurde abgelehnt – laut FAQ beantragen Sie dann ein Visum bei der nächstgelegenen koreanischen Botschaft oder dem nächstgelegenen Konsulat",
          "Sie unterliegen der Antragssperre (3 oder mehr Anträge in 6 Monaten) und müssen in dieser Zeit reisen",
          "Sie planen eine Beschäftigung, ein Studium oder eine andere Erwerbstätigkeit",
          "Ihre Staatsangehörigkeit ist nicht von der Visumpflicht befreit – die K-ETA-Berechtigung richtet sich nach der Staatsangehörigkeit auf der Passdatenseite. Für deutsche Reisepässe trifft das nicht zu",
        ],
      },
      { h2: "Wenn Sie bereits ein Visum haben" },
      {
        p: "Wer ein gültiges koreanisches Visum hat, braucht keine K-ETA. Laut offizieller Anleitung richten sich Aufenthaltsstatus und Aufenthaltsdauer bei einem gültigen Visum nach diesem Visum, unabhängig davon, ob Sie zusätzlich eine K-ETA haben.",
      },
      { h2: "Die Kategorien des Kurzzeitvisums C-3" },
      {
        p: "Im Korea Visa Portal ist „Short Term Visit“ für Aufenthalte von 90 Tagen oder weniger aufgeführt und in diese Kategorien unterteilt:",
      },
      {
        ul: [
          "Short-Term General (C-3-1)",
          "Group Tourist (C-3-2)",
          "Business Visitor (General) (C-3-4)",
          "Business Visitor (Agreement) (C-3-5)",
          "Business Visitor (Sponsored) (C-3-6)",
          "Short term Visitor (Overseas Korean) (C-3-8)",
          "Ordinary Tourist (C-3-9)",
          "Direct Transit Visa (Air-side) (C-3-10)",
        ],
      },
      {
        p: "Der Visa Navigator beschreibt Short-Term General (C-3-1) als Kategorie für Besuche bei Verwandten, Freundschaftsspiele, die Teilnahme an oder den Besuch von Veranstaltungen und Sitzungen, Kultur und Kunst, allgemeine Schulungen, Kurse, religiöse Zeremonien, das Sammeln von wissenschaftlichem Material und ähnliche Zwecke. Erwerbstätigkeit und Beschäftigung sind nicht erlaubt.",
      },
      {
        p: "Inhaber einer APEC Business Travel Card erhalten bei der Einreise den Status Short-Term Business (C-3-4) und dürfen bis zu 90 Tage bleiben.",
      },
      { h2: "So beantragen Sie es" },
      {
        p: "Der Visa Navigator nennt drei Wege: den Antrag über eine koreanische Auslandsvertretung, den Antrag auf ein elektronisches Visum und den Antrag auf eine Visumerteilungsbestätigung (Confirmation of Visa Issuance). Welcher Weg Ihnen offensteht, welche Unterlagen nötig sind, wie hoch die Gebühr ist und wie lange die Bearbeitung dauert, hängt von Ihrer Staatsangehörigkeit und von der zuständigen Botschaft oder dem Konsulat ab. Erkundigen Sie sich dort oder im Visa Navigator, bevor Sie beantragen.",
      },
      {
        note: "Das Immigration Contact Center erreichen Sie unter +82-1345.",
      },
      { source: { label: "Korea Visa Portal — Visa by categories", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10102&LANG_TYPE=EN" } },
      { source: { label: "Korea Visa Portal — Visa Navigator", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10101&LANG_TYPE=EN" } },
      { source: SRC_FAQ },
      { source: SRC_GUIDE },
      { source: SRC_RESTRICTION },
    ],
    faq: [
      { q: "Brauche ich eine K-ETA, wenn ich ein koreanisches Visum habe?", a: "Nein. Laut offizieller FAQ brauchen Inhaber eines gültigen koreanischen Visums keine K-ETA." },
      { q: "Welche Unterlagen braucht ein C-3-Visum?", a: "Das hängt von Ihrer Staatsangehörigkeit und von der zuständigen koreanischen Botschaft oder dem Konsulat ab. Erkundigen Sie sich dort oder im Korea Visa Portal." },
    ],
  },

  /* ── if-your-keta-is-denied ── */
  {
    slug: "keta-abgelehnt",
    enSlug: "if-your-keta-is-denied",
    added: ADDED,
    title: "K-ETA abgelehnt – was jetzt?",
    description:
      "Eine Ablehnung heißt nicht automatisch, dass Sie nicht reisen können, aber der Online-Weg ist versperrt. Was der nächste Schritt tatsächlich ist.",
    related: ["kurzzeitvisum-c3", "keta-haeufige-fehler"],
    blocks: [
      {
        p: `Über die meisten Anträge wird innerhalb von ${DECISION} entschieden. Lautet das Ergebnis Ablehnung, können Sie praktisch nicht visumfrei einreisen und müssen stattdessen ein Visum beantragen.`,
      },
      {
        note: `Mit deutschem Reisepass sind Sie bis zum ${EXEMPT_UNTIL} von der K-ETA befreit. Diese Seite betrifft Sie, wenn Sie freiwillig beantragt haben oder für eine Reise ab 2027 beantragen.`,
      },
      { h2: "Ein erneuter Antrag hilft selten" },
      {
        p: "Wer dieselben Angaben noch einmal einreicht, bekommt in der Regel dasselbe Ergebnis. Wurde etwas falsch eingegeben – eine Passnummer, ein Geburtsdatum, ein Name, der anders geschrieben ist als im Reisepass –, lohnt sich die Korrektur. Ansonsten führt der Weg über einen Visumantrag bei einer koreanischen Auslandsvertretung.",
      },
      { h2: "Nicht zum Ausprobieren losfliegen" },
      {
        p: "Die Fluggesellschaften prüfen den Status vor dem Einsteigen. Wer mit einer Ablehnung im System am Flughafen erscheint, wird schon beim Check-in abgewiesen, nicht erst an der Grenze.",
      },
      {
        note: "Eine Ablehnung ist eine Entscheidung über diesen einen Antrag, keine dauerhafte Sperre. Ein Visumantrag wird gesondert und anhand seiner eigenen Unterlagen geprüft.",
      },
      { source: { label: "K-ETA official portal", url: F.officialUrl } },
    ],
  },

  /* ── transit-through-korea ── */
  {
    slug: "umsteigen-in-korea",
    enSlug: "transit-through-korea",
    added: ADDED,
    title: "Umsteigen in Korea: Brauchen Sie eine K-ETA?",
    description:
      "Ob beim Umsteigen eine K-ETA nötig ist, hängt davon ab, ob Sie die Einreisekontrolle passieren. Im Transitbereich bleiben und Einreisen sind zweierlei.",
    related: ["ankunft-in-korea", "fluessigkeiten-und-powerbanks", "flughaefen-korea"],
    blocks: [
      {
        p: "Ein Umstieg in Incheon ist einer der häufigsten Anlässe für diese Frage, und die Antwort hängt an einem einzigen Punkt: Verlassen Sie den internationalen Transitbereich?",
      },
      { h2: "Wenn Sie im Transitbereich bleiben" },
      {
        p: "Wer im internationalen Transitbereich bleibt und in einen Anschlussflug steigt, reist nicht nach Korea ein. Dann ist auch keine Einreiseerlaubnis nötig, denn es gibt keine Einreise.",
      },
      { h2: "Wenn Sie den Flughafen verlassen" },
      {
        p: "Wer durch die Einreisekontrolle geht – um aufgegebenes Gepäck abzuholen, außerhalb des Flughafens zu übernachten oder zwischen zwei Flügen die Stadt anzusehen –, reist ein. Dann kommt es auf die K-ETA oder eine geltende Befreiung an, genau wie bei einem Urlaub.",
      },
      { h2: "Bei langen Umsteigezeiten wird es knifflig" },
      {
        ul: [
          "Gepäck, das nicht bis zum Endziel durchgecheckt ist, zwingt Sie zur Einreise",
          "Ein Umstieg mit Übernachtung in einem Hotel außerhalb des Flughafens ist eine Einreise",
          "Ein Terminalwechsel, für den Sie erneut durch die Einreisekontrolle müssen, ist eine Einreise",
        ],
      },
      {
        note: `Klären Sie das vor der Buchung, nicht erst am Transferschalter. Mit deutschem Reisepass brauchen Sie bei einer Einreise bis zum ${EXEMPT_UNTIL} keine K-ETA. Für spätere Reisen gilt: Besteht die Möglichkeit, dass Sie den Flughafen verlassen, beantragen Sie rechtzeitig und haben die Genehmigung in der Hand – sie gilt ${F.validYears} Jahre und ist also nicht verschwendet.`,
      },
      { source: { label: "K-ETA official portal", url: F.officialUrl } },
    ],
  },

  /* ── border-questions ── */
  {
    slug: "grenzkontrolle-bei-ankunft",
    enSlug: "border-questions",
    added: ADDED,
    title: "Was bei der Ankunft in Korea passiert",
    description:
      "Einreisekontrolle, Quarantäne und Zoll sind drei getrennte Kontrollen. Wer weiß, welche was fragt, ist in zehn Minuten durch statt in einer Stunde.",
    related: ["ankunft-in-korea", "einreisekarte-und-e-gates", "medikamente-mitnehmen"],
    blocks: [
      {
        p: "Ankommende Passagiere durchlaufen drei Kontrollen, für die drei verschiedene Behörden zuständig sind. Sie fragen nach unterschiedlichen Dingen, und die Formulare sind jeweils getrennt.",
      },
      { h2: "1. Einreisekontrolle" },
      {
        ul: [
          "Wie lange und wo Sie bleiben",
          "Ob Sie ein Weiter- oder Rückflugticket haben",
          "Der Zweck des Besuchs",
          "Fingerabdrücke und ein Gesichtsfoto bei den meisten ankommenden Reisenden",
        ],
      },
      {
        p: "Hier wird Ihre zulässige Aufenthaltsdauer festgelegt. Eine gültige K-ETA – oder eine geltende Befreiung, wie derzeit für deutsche Reisepässe – bringt Sie bis an diesen Schalter; über das Ergebnis entscheidet sie nicht.",
      },
      { h2: "2. Quarantäne" },
      {
        p: `Korea kontrolliert ankommende Reisende auf tierische und pflanzliche Erzeugnisse. Das ist keine Formalität: Wer nicht anmeldet, riskiert nach dem ${QUARANTINE_LAW} ein Bußgeld von bis zu ${QUARANTINE_MAX_FINE}.`,
      },
      { h2: "3. Zoll" },
      {
        p: `Alle Reisenden geben eine Erklärung über ihre persönlichen Gegenstände ab. Waren über dem Freibetrag von ${F.customsGoodsAllowance} müssen Sie anmelden.`,
      },
      { h2: "Das sollten Sie vor der Landung bereithalten" },
      {
        ul: [
          "Ihre Unterkunftsadresse in Korea, ausgeschrieben",
          "Die Daten Ihres Weiterflugs",
          "Eine ehrliche Antwort auf die Frage nach Lebensmitteln und Pflanzen im Gepäck",
        ],
      },
      { source: SRC_QIA },
      {
        note: "Wenn Sie unsicher sind, ob etwas angemeldet werden muss, melden Sie es an. Wer etwas anmeldet, das sich als erlaubt herausstellt, muss keine Strafe fürchten.",
      },
    ],
  },

  /* ── quarantine ── */
  {
    slug: "quarantaene-lebensmittel",
    enSlug: "quarantine",
    added: ADDED,
    title: "Quarantäne in Korea: Fleisch, Pflanzen und das Bußgeld fürs Nichtanmelden",
    description: `Wer tierische oder pflanzliche Erzeugnisse bei der Ankunft in Korea nicht anmeldet, riskiert ein Bußgeld von bis zu ${QUARANTINE_MAX_FINE}.`,
    related: ["ankunft-in-korea", "medikamente-mitnehmen", "zollfreimengen-korea"],
    blocks: [
      {
        p: "Korea hat die Quarantäne an der Grenze wegen der Afrikanischen Schweinepest und anderer Tierseuchen deutlich verschärft. Fleischprodukte im Reisegepäck sind ein Weg, auf dem sich solche Krankheiten verbreiten, und die Regeln werden bei der Ankunft durchgesetzt.",
      },
      { h2: "Die Strafe" },
      {
        p: `Wer keine Quarantäneerklärung abgibt, kann nach dem ${QUARANTINE_LAW} mit einem Bußgeld von bis zu ${QUARANTINE_MAX_FINE} belegt werden. Das Bußgeld gilt für das Versäumnis der Anmeldung, nicht nur für Waren, die sich als verboten herausstellen.`,
      },
      { h2: "Was Sie anmelden müssen" },
      {
        ul: [
          "Fleisch und Fleischprodukte jeder Art – auch gepökelt, getrocknet oder in Dosen",
          "Milchprodukte und Eier",
          "Frisches Obst, Gemüse, Samen und Nüsse",
          "Pflanzen, Erde und Gegenstände, an denen Erde haftet",
          "Lebende Tiere und alles, was bei Tieren verwendet wurde",
        ],
      },
      { h2: "Was Reisende für unbedenklich halten – und was es nicht ist" },
      {
        ul: [
          "Wurst oder Trockenfleisch vom Abflughafen",
          "Selbstgemachtes Essen, das die Familie eingepackt hat",
          "Trockenfleisch in Instantnudel-Packungen",
          "Obst aus dem Flugzeug",
        ],
      },
      { h2: "Die Regel, mit der Sie auf der sicheren Seite sind" },
      {
        p: "Anmelden kostet nichts. Ist die Ware erlaubt, behalten Sie sie; ist sie es nicht, wird sie entsorgt, und damit ist die Sache erledigt. Das Bußgeld gilt für das Nichtanmelden – Schweigen ist also in keinem Fall die bessere Wahl.",
      },
      { source: SRC_QIA },
    ],
  },

  /* ── customs-allowances ── */
  {
    slug: "zollfreimengen-korea",
    enSlug: "customs-allowances",
    added: ADDED,
    title: "Zollfreimengen bei der Einreise nach Korea",
    description: `Der allgemeine Freibetrag liegt bei ${F.customsGoodsAllowance}, dazu eigene Grenzen für Alkohol, Tabak und Parfüm. Unter ${F.customsAgeMin} gibt es keine Freimengen für Alkohol und Tabak.`,
    related: ["ankunft-in-korea", "geld-und-trinkgeld", "steuerrueckerstattung-korea", "rauchen-vapes-alkohol"],
    blocks: [
      {
        p: "Zoll und Quarantäne sind getrennte Dinge. Die Quarantäne fragt, ob eine Ware ein Seuchenrisiko ist; der Zoll fragt, ob Abgaben fällig sind. Beides wird bei der Ankunft angemeldet, und wer die eine Kontrolle passiert hat, hat die andere noch nicht erledigt.",
      },
      { h2: "Die Freimengen" },
      {
        ul: [
          `Allgemeine Waren: insgesamt ${F.customsGoodsAllowance} steuerpflichtiger Warenwert`,
          `Alkohol: bis zu ${F.customsAlcoholLitres} Liter insgesamt und ${F.customsAlcoholValue}, getrennt vom allgemeinen Freibetrag gerechnet`,
          `Tabak: ${F.customsCigarettes} Zigaretten`,
          `Parfüm: ${F.customsPerfumeMl} ml`,
        ],
      },
      { h2: "Altersgrenze" },
      {
        p: `Reisende unter ${F.customsAgeMin} Jahren – gerechnet nach Geburtsjahr, nicht nach Geburtstag – erhalten keine Freimengen für Alkohol und Tabak. Daran scheitern Familien, die davon ausgehen, die Freimenge eines Teenagers mitnutzen zu können.`,
      },
      { h2: "Wenn Sie über der Grenze liegen" },
      {
        p: "Melden Sie es an. Zoll und Steuern werden auf den Mehrbetrag berechnet. Waren über dem Freibetrag nicht anzumelden ist ein eigenes Problem, unabhängig von der Abgabe selbst – und ein teureres.",
      },
      { source: { label: "Korea Customs Service — Duty-free allowance for travellers", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8028&cntntsId=2716" } },
      {
        note: "Duty-free-Einkäufe auf dem Weg nach Korea zählen ebenfalls zum Freibetrag. Der Kauf im Sicherheitsbereich befreit nicht davon.",
      },
    ],
  },

  /* ── leaving-and-returning ── */
  {
    slug: "ausreise-und-wiedereinreise",
    enSlug: "leaving-and-returning",
    added: ADDED,
    title: "Korea verlassen und zurückkehren – mit derselben K-ETA",
    description: `Eine K-ETA gilt ${F.validYears} Jahre für mehrere Einreisen; Sie beantragen nicht für jede Reise neu. Bei jeder Einreise neu festgelegt wird die Aufenthaltsdauer.`,
    related: ["ankunft-in-korea", "steuerrueckerstattung-korea", "fluessigkeiten-und-powerbanks"],
    blocks: [
      {
        p: `Eine K-ETA gilt ${F.validYears} Jahre und für mehrere Einreisen. Kurze Reisen aus Korea hinaus und zurück erfordern also keinen neuen Antrag. Jede Einreise wird aber für sich geprüft, und die Grenzbehörde legt die zulässige Aufenthaltsdauer jedes Mal neu fest.`,
      },
      {
        note: `Mit deutschem Reisepass brauchen Sie bis zum ${EXEMPT_UNTIL} für solche Reisen überhaupt keine K-ETA. Prüfen Sie Ihre Situation, bevor Sie etwas bezahlen.`,
      },
      { h2: "Was sich nicht zurücksetzt" },
      {
        ul: [
          "Die Visumbefreiung selbst – aus einer Regelung über 30 Tage wird durch wiederholte Einreisen kein Daueraufenthalt",
          "Die Gültigkeit Ihrer K-ETA – sie endet weiterhin am ursprünglichen Datum",
          "Die Aufzeichnung darüber, wie Sie sie bisher genutzt haben",
        ],
      },
      { h2: "Wiederholte Besuche fallen auf" },
      {
        p: "Korea behandelt die visumfreie Einreise wie die meisten Länder als Einreise zu Besuchszwecken. Wer jedes Mal, wenn die Aufenthaltsdauer abläuft, für ein paar Tage ausreist und zurückkommt, ist im System sichtbar, und die Grenzbehörde kann die Einreise auch mit gültiger K-ETA verweigern.",
      },
      { h2: "Was Sie bei der Wiedereinreise bereithalten sollten" },
      {
        ul: [
          "Ein Weiter- oder Rückflugticket",
          "Ihre Unterkunftsadresse in Korea",
          "Etwas, das zeigt, dass Sie nach Hause zurückkehren: Arbeit, Studium, Familie",
        ],
      },
      { source: SRC_PORTAL },
    ],
  },

  /* ── travel-authorisations-compared ── */
  {
    slug: "reisegenehmigungen-im-vergleich",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    title: "Welche Reisegenehmigung brauchen Sie? NZeTA, eVisitor, K-ETA, ESTA und die anderen im Vergleich",
    description:
      "Ähnliche Namen, sehr unterschiedliche Regeln. Welches System für welches Reiseziel gilt, was es kostet und welche Fehler aus Verwechslungen entstehen.",
    related: ["keta-kosten", "korea-aufenthaltsdauer", "offizielle-keta-website"],
    blocks: [
      {
        p: "Elektronische Reisegenehmigungen sehen von außen austauschbar aus. Sie sind es nicht. Jedes Land betreibt sein eigenes System, mit eigener Liste berechtigter Staaten, eigenem Preis und eigener Vorstellung davon, was das Dokument überhaupt ist – manche sind Visa, manche ausdrücklich nicht.",
      },
      {
        p: `Diese Seite zeigt, was was ist. Für Südkorea ist es die K-ETA, und sie kostet ${F.fee}.`,
      },
      {
        note: "Eine Regel gilt überall: Sie beantragen auf der Website der jeweiligen Regierung, und kein Vermittler kann eine Entscheidung beschleunigen. Seiten, die ein Vielfaches der offiziellen Gebühr verlangen, füllen für Sie dasselbe Formular aus.",
      },
      { h2: "Südkorea – K-ETA" },
      {
        p: `Kostet ${F.fee} und gilt ${F.validYears} Jahre. Viele Staatsangehörigkeiten sind bis zum ${EXEMPT_UNTIL} vorübergehend befreit – darunter derzeit Deutschland. Prüfen Sie also vor einem Antrag, ob er für Sie überhaupt nötig ist. Wie lange Sie bleiben dürfen, legt das Visumbefreiungsabkommen Ihrer Staatsangehörigkeit fest, nicht die K-ETA selbst – üblicherweise ${STAY_RANGE}.`,
      },
      { h2: "Neuseeland – NZeTA" },
      {
        p: "Eine Vorabgenehmigung für Reisepässe mit Visumbefreiung, kein Visum. Die Kosten bestehen aus zwei Teilen: einer Antragsgebühr und einer gesonderten Abgabe für Naturschutz und Tourismus. Deshalb weichen die Gesamtbeträge je nach Quelle voneinander ab.",
      },
      { h2: "Australien – eVisitor oder ETA" },
      {
        p: "Australien nutzt je nach Reisepass zwei Systeme. Der eVisitor (subclass 651) ist ein Visum und kostenlos. Die ETA (subclass 601) ist die kostenpflichtige Alternative und wird in der offiziellen App beantragt.",
      },
      { h2: "Vereinigtes Königreich – ETA" },
      {
        p: "Gilt für Besuche von bis zu 6 Monaten im Vereinigten Königreich, auf Jersey, Guernsey und der Isle of Man. GOV.UK nennt als Kosten 20 £. Beantragt wird über den offiziellen Dienst.",
      },
      {
        source: {
          label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
          url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
        },
      },
      { h2: "USA – ESTA, und Kanada – eTA" },
      {
        p: "Beide betreiben vergleichbare Systeme für Reisende mit Visumbefreiung. Ihre Gebühren nennen wir hier nicht, weil wir die aktuellen Beträge beim Schreiben dieser Seite nicht anhand der offiziellen Quellen bestätigen konnten – ein veralteter Preis ist schlechter als keiner. Prüfen Sie direkt auf den offiziellen Seiten – und nur dort.",
      },
      {
        ul: [
          "USA: esta.cbp.dhs.gov",
          "Kanada: canada.ca (Immigration, Refugees and Citizenship Canada)",
        ],
      },
      { h2: "Die Fehler, die tatsächlich Geld kosten" },
      {
        ul: [
          "Annehmen, eine Genehmigung decke eine Reise durch mehrere Länder ab. Jedes Reiseziel ist getrennt zu betrachten, auch ein Zwischenstopp, bei dem Sie den Flughafen verlassen.",
          "Annehmen, es sei ein Visum. Manche sind es, manche nicht – und der Unterschied entscheidet, was Sie vor Ort tun dürfen.",
          "Annehmen, der Preis sei der Preis. Mehrere Systeme erheben eine zusätzliche Abgabe oder verlangen je nach Antragsweg einen anderen Betrag.",
          "Über einen kostenpflichtigen Vermittler beantragen, weil man glaubt, es gehe schneller. Es ist dasselbe Formular und dieselbe Entscheidung.",
        ],
      },
      { h2: "Prüfen Sie Ihren eigenen Reisepass, nicht eine Zusammenfassung" },
      {
        p: "Listen berechtigter Staaten ändern sich, und wer zwei Reisepässe hat, bekommt oft zwei verschiedene Antworten. Jedes der genannten Systeme bietet eine offizielle Prüfmöglichkeit. Nutzen Sie sie für den Reisepass, mit dem Sie tatsächlich reisen.",
      },
    ],
  },
];
