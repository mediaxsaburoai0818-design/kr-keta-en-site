import { FACTS as F, type LangContent } from "./_schema";

/** 表記のローカライズ。⚠️ 値は FACTS と同じものを指す（別の数字を書かない）。
 *  F.exemptionUntil = "31 December 2026" / F.decisionTypical = "72 hours"
 *  / F.feeUsdApprox = "about US$7–8" / F.stayRange = "30 to 90 days" */
const EXEMPT_UNTIL = "31. Dezember 2026";
const DECISION = "72 Stunden";
const USD_APPROX = "rund 7–8 US-Dollar";
const STAY_RANGE = "30 bis 90 Tage";

/**
 * ドイツ語（/de/）。読者＝ドイツのパスポート保持者。
 *
 * ⚠️ ドイツは **K-ETAの一時免除の対象**（2026-12-31まで。2026-09-17に確認）。
 *    つまり読者にとっての事実は「いまは要らない。2027年1月1日以降は要る見込み」。
 *    「今すぐ申請しましょう」と書くと不要な出費をさせることになる。構成を反転させない。
 * ⚠️ 滞在日数はK-ETAでは決まらない。ドイツはビザ免除協定で**90日**だが、
 *    協定は変わりうるので断定せず公式確認を促す。
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ 敬称は Sie。役所の手続きの説明なので砕けた口調にしない。
 */
export const de: LangContent = {
  code: "de",
  htmlLang: "de",
  label: "Deutsch",
  audience: "Deutschland",
  meta: {
    title: `Deutsche brauchen bis ${EXEMPT_UNTIL} keine K-ETA — und danach?`,
    description: `Für deutsche Reisepässe ist die K-ETA-Pflicht bis zum ${EXEMPT_UNTIL} ausgesetzt. Danach ist wieder mit ihr zu rechnen: ${F.fee}, ${F.validYears} Jahre gültig.`,
  },
  header: {
    site: "K-ETA Ratgeber",
    tagline: "Südkorea · Elektronische Reisegenehmigung (K-ETA)",
    official: "Offizielle Seite",
  },
  hero: {
    eyebrow: "Südkorea · Elektronische Reisegenehmigung · K-ETA",
    h1Before: "Mit deutschem Reisepass brauchen Sie derzeit ",
    h1Highlight: "keine K-ETA",
    h1After: "",
    lead: `Südkorea hat die K-ETA-Pflicht für eine Reihe von Ländern vorübergehend ausgesetzt — Deutschland gehört dazu. Die Aussetzung gilt bis zum ${EXEMPT_UNTIL}. Bis dahin steigen Sie ohne Antrag ins Flugzeug. Danach ist wieder mit der Pflicht zu rechnen: ${F.fee}, ${F.validYears} Jahre gültig.`,
    ctaPrimary: "Offizielle Länderliste prüfen",
    ctaSecondary: "Brauche ich jetzt eine?",
    disclaimer: "Unabhängiger Ratgeber · keine Verbindung zur südkoreanischen Regierung · Stand",
    imageAlt: "Geschwungenes Dach eines koreanischen Palasts vor der Skyline von Seoul",
  },
  stats: [
    { v: "Kein Antrag", l: `bis ${EXEMPT_UNTIL}`, s: "gilt für deutsche Reisepässe" },
    { v: F.fee, l: "Gebühr danach", s: USD_APPROX },
    { v: `${F.validYears} Jahre`, l: "Gültigkeit", s: "mehrere Einreisen" },
    { v: DECISION, l: "Bearbeitung", s: "früh beantragen" },
  ],
  whatIs: {
    h2: "Brauche ich jetzt eine K-ETA — ja oder nein?",
    p1: `Nein. Im Rahmen der Tourismuskampagne hat Südkorea die K-ETA-Pflicht für mehrere Länder ausgesetzt, und die Aussetzung wurde mehrfach verlängert. Der aktuelle Stichtag ist der ${EXEMPT_UNTIL}. Bis dahin reisen Sie mit einem deutschen Reisepass ohne K-ETA.`,
    p2: `Die Befreiung ist aber ausdrücklich befristet. Wird sie nicht erneut verlängert, gilt ab dem 1. Januar 2027 wieder die Antragspflicht. Wenn Ihre Reise um den Jahreswechsel liegt, prüfen Sie die Liste kurz vor Abflug noch einmal — sie wurde in der Vergangenheit bereits geändert.`,
  },
  features: [
    {
      h: "Antragen dürfen Sie trotzdem",
      p: "Auch wer befreit ist, kann freiwillig beantragen. Der praktische Vorteil: Mit einer K-ETA entfällt die Papier-Einreisekarte bei der Ankunft. Die Gebühr wird trotzdem fällig — ob sich das lohnt, entscheiden Sie.",
    },
    {
      h: "Die K-ETA bestimmt nicht, wie lange Sie bleiben dürfen",
      p: `Sie erlaubt nur das Einsteigen. Die Aufenthaltsdauer ergibt sich aus dem Visumbefreiungsabkommen Ihrer Staatsangehörigkeit (üblicherweise ${STAY_RANGE}); über die Einreise entscheidet die Grenzbehörde.`,
    },
    {
      h: "Nur die offiziellen Kanäle sind echt",
      p: `Beantragt wird ausschließlich auf ${F.officialHost} und in der offiziellen App. Die staatliche Gebühr beträgt ${F.fee}. Seiten, die deutlich mehr verlangen, sind Vermittler.`,
    },
  ],
  eligibility: {
    h2: "Was Sie jetzt tun sollten",
    lead: "Die Antwort hängt von Ihrem Reisepass und vom Einreisedatum ab. Die Befreiung wurde schon mehr als einmal verlängert — maßgeblich ist immer die offizielle Liste.",
    th: ["Ihre Situation", "K-ETA nötig?", "Was zu tun ist", "Kosten"],
    rows: [
      [
        `Deutscher Reisepass, Einreise bis ${EXEMPT_UNTIL}`,
        "Nein",
        "Einfach fliegen. Wer die Einreisekarte sparen will, kann freiwillig beantragen",
        "0 ohne Antrag",
      ],
      [
        "Einreise ab 1. Januar 2027",
        "Voraussichtlich ja",
        "Liste vor Abflug erneut prüfen und rechtzeitig beantragen",
        F.fee,
      ],
      [
        "Visumfreies Land, aber nicht auf der Befreiungsliste",
        "Ja",
        `Antrag auf ${F.officialHost}`,
        F.fee,
      ],
      ["Reisepass ohne Visumbefreiung", "Nicht anwendbar", "Sie brauchen ein Visum, keine K-ETA", "je nach Visum"],
    ],
    note: `Zur Zahl der befreiten Länder kursieren widersprüchliche Angaben (22 Länder, 67 Länder). Deshalb nennen wir hier keine Zahl — maßgeblich ist die offizielle Liste auf ${F.officialHost}. Geprüft am 17. August 2026.`,
  },
  steps: {
    h2: "Der Ablauf, wenn ein Antrag nötig ist",
    items: [
      {
        h: "Zuerst prüfen, ob Sie überhaupt befreit sind",
        p: `Die Befreiung gilt bis zum ${EXEMPT_UNTIL}. Die Liste wurde schon geändert — prüfen Sie sie vor dem Abflug auf ${F.officialHost}.`,
      },
      {
        h: "Offizielle Website oder offizielle App nutzen",
        p: `Nur ${F.officialHost} und die offizielle App sind echte Kanäle. Die staatliche Gebühr beträgt ${F.fee}; höhere Preise enthalten eine Servicegebühr für das Ausfüllen des Formulars.`,
      },
      {
        h: "Foto hochladen und bezahlen",
        p: "Passdaten, ein Gesichtsfoto und Angaben zur Reise eingeben, dann per Karte zahlen. Alle Felder müssen exakt mit dem Reisepass übereinstimmen.",
      },
      {
        h: "Erst nach der Entscheidung reisen",
        p: `Die Bearbeitung dauert in der Regel bis zu ${DECISION}, garantiert ist das nicht. Beantragen Sie nicht am Abflugtag — und eine Genehmigung ist keine Einreisegarantie.`,
      },
    ],
    cta: `Zu ${F.officialHost}`,
  },
  rules: {
    h2: "Was erlaubt ist und was nicht",
    allowedH: "Erlaubt",
    allowed: [
      "Urlaub sowie Besuche bei Familie und Freunden",
      "Kurze geschäftliche Termine wie Meetings und Konferenzen",
      "Mehrere Einreisen innerhalb der Gültigkeit",
      "Freiwilliger Antrag, um die Papier-Einreisekarte zu sparen",
    ],
    deniedH: "Nicht erlaubt",
    denied: [
      "Bezahlte Arbeit in Südkorea",
      "Ein Aufenthalt über die im Abkommen zulässige Dauer hinaus",
      "Die K-ETA als Visumersatz nutzen (ohne Visumbefreiung bleibt das Visum nötig)",
      "Über nicht-offizielle Seiten beantragen in der Annahme, es gehe schneller",
    ],
  },
  border: {
    h2: "Bei der Einreise",
    p: "Reisen Sie mit demselben Reisepass, mit dem Sie beantragt haben — die Genehmigung ist elektronisch damit verknüpft, es gibt nichts auszudrucken. Wie lange Sie bleiben dürfen, ergibt sich aus dem Visumbefreiungsabkommen; die Entscheidung trifft die Grenzbehörde, und eine genehmigte K-ETA garantiert die Einreise nicht. Wer eine K-ETA hat, muss keine Papier-Einreisekarte ausfüllen — genau deshalb beantragen manche auch während der Befreiung.",
  },
  faq: {
    h2: "Häufige Fragen",
    items: [
      {
        q: "Brauche ich mit deutschem Reisepass gerade eine K-ETA?",
        a: `Nein. Die Pflicht ist für Deutschland und weitere Länder bis zum ${EXEMPT_UNTIL} ausgesetzt. Bis dahin reisen Sie ohne Antrag — prüfen Sie die Liste aber vor Abflug auf ${F.officialHost}, sie hat sich schon geändert.`,
      },
      {
        q: `Was passiert nach dem ${EXEMPT_UNTIL}?`,
        a: "Ohne erneute Verlängerung gilt ab dem 1. Januar 2027 wieder die Antragspflicht. Verlängert wurde bereits mehrfach, sicher ist das also nicht. Wer um den Jahreswechsel reist, prüft es früh.",
      },
      {
        q: "Warum beantragen manche trotz Befreiung?",
        a: "Weil mit einer K-ETA die Papier-Einreisekarte bei der Ankunft entfällt. Die Gebühr wird trotzdem fällig — das ist die ganze Abwägung.",
      },
      {
        q: "Was kostet die K-ETA?",
        a: `Die staatliche Gebühr beträgt ${F.fee} (${USD_APPROX}), zahlbar per Karte im Antrag. Deutlich höhere Preise stammen von Vermittlern.`,
      },
      {
        q: "Wie lange ist sie gültig?",
        a: `${F.validYears} Jahre ab Genehmigung, oder bis der Reisepass abläuft — je nachdem, was früher eintritt. In dieser Zeit können Sie mehrfach einreisen.`,
      },
      {
        q: "Wie lange darf ich bleiben?",
        a: `Das entscheidet nicht die K-ETA, sondern das Visumbefreiungsabkommen Ihrer Staatsangehörigkeit (üblicherweise ${STAY_RANGE}; für deutsche Reisepässe wird 90 Tage genannt). Die tatsächliche Dauer legt die Grenzbehörde fest.`,
      },
      {
        q: "Ist die K-ETA ein Visum?",
        a: "Nein. Sie ist eine Vorabgenehmigung für Menschen, die ohnehin visumfrei einreisen dürfen. Ohne Visumbefreiung brauchen Sie ein Visum.",
      },
    ],
  },
  cta: {
    h2: "Prüfen Sie Ihren Status auf der offiziellen Seite",
    p: `Nur ${F.officialHost} und die offizielle App sind echte Kanäle. Dieser Ratgeber ist unabhängig und nimmt keine Anträge entgegen.`,
    button: `${F.officialHost} öffnen`,
  },
  footer: {
    disclaimer: `Unabhängiger Ratgeber. Keine Verbindung zur südkoreanischen Regierung, zur Einwanderungsbehörde oder zu ${F.officialHost}. Wir nehmen keine Anträge entgegen — beantragen Sie ausschließlich über die offiziellen Kanäle.`,
  },
  ui: {
    updated: "Stand",
    backToTop: "Nach oben",
    languages: "Sprache",
    articles: "Weitere Themen",
    readMore: "Weiterlesen",
    updatedLabel: "17. August 2026",
  },
  pages: [
    {
      slug: "keta-kosten",
      title: "Was kostet die K-ETA — und müssen Sie überhaupt zahlen?",
      description:
        "Die offizielle Gebühr, die Frage ob Sie während der Befreiung zahlen müssen, und warum manche Seiten ein Vielfaches verlangen.",
      blocks: [
        { h2: "Vor der Gebühr kommt die Frage, ob Sie beantragen müssen" },
        {
          p: `Deutsche Reisepässe stehen derzeit auf der Befreiungsliste (bis ${F.exemptionUntil}). In den meisten Fällen müssen Sie also weder beantragen noch zahlen. Klären Sie das zuerst — danach erst die Gebühr.`,
        },
        { h2: "Die offizielle Gebühr, wenn ein Antrag nötig ist" },
        {
          p: `Ist ein Antrag nötig, beträgt die Gebühr ${F.fee} (${F.feeUsdApprox}). Das ist der Betrag, der an die koreanische Behörde geht. Weitere notwendige Kosten gibt es nicht.`,
        },
        { h2: "Warum im Netz höhere Preise stehen" },
        {
          p: `Seiten, die deutlich mehr als ${F.fee} verlangen, sind in aller Regel Vermittler und berechnen das Ausfüllen des Formulars. Das macht die Bearbeitung weder schneller noch die Genehmigung wahrscheinlicher.`,
        },
        {
          ul: [
            `Offizielle Seite: ${F.officialHost}`,
            "Eine kostenpflichtige Expressbearbeitung gibt es offiziell nicht",
            "Wer befreit ist und trotzdem zahlt, erhält dadurch keinerlei Vorteil",
          ],
        },
        {
          note: "Der teuerste Fehler ist nicht der falsche Anbieter, sondern zu zahlen, obwohl man gar nicht antragspflichtig ist. Erst prüfen, dann zahlen.",
        },
      ],
    },
    {
      slug: "keta-unterlagen",
      title: "Was Sie für den K-ETA-Antrag brauchen",
      description:
        "Die Angaben, die tatsächlich abgefragt werden — und der häufigste Grund, aus dem ein Foto abgelehnt wird.",
      blocks: [
        { h2: "Das brauchen Sie" },
        {
          ul: [
            "Einen gültigen Reisepass (Nummer und Ablaufdatum werden eingetragen)",
            "Ein digitales Gesichtsfoto (wird im Antrag hochgeladen)",
            "Eine E-Mail-Adresse, auf die Sie zugreifen können",
            "Die Unterkunft in Korea (Name und Adresse)",
            "Eine Zahlungsmöglichkeit (Kreditkarte)",
          ],
        },
        { h2: "Am Foto scheitert es am häufigsten" },
        {
          p: "Das Foto muss aktuell sein, frontal und mit ruhigem Hintergrund. Der mit Abstand häufigste Ablehnungsgrund sind Schatten im Gesicht oder im Hintergrund, danach folgen Kopfbedeckungen, getönte Brillen und alte Aufnahmen. Vor einer weißen Wand bei gleichmäßigem Licht ist am sichersten.",
        },
        { h2: "Wenn die Unterkunft noch nicht feststeht" },
        {
          p: "Tragen Sie die geplante Unterkunft ein. Eine spätere Änderung macht eine erteilte K-ETA nicht ungültig. Wichtig ist nur: nicht leer lassen und keine erfundene Adresse eintragen.",
        },
        {
          note: "Schreiben Sie den Namen exakt so, wie er im Reisepass steht. Weicht er ab, findet die Fluggesellschaft die Genehmigung beim Check-in möglicherweise nicht.",
        },
      ],
    },
    {
      slug: "keta-bearbeitungszeit",
      title: "Wie lange dauert die K-ETA?",
      description:
        "Was „in der Regel innerhalb von 72 Stunden“ praktisch bedeutet, was die Bearbeitung verlangsamt, und warum es keine Expressoption gibt.",
      blocks: [
        { h2: "Die offizielle Angabe" },
        {
          p: `Offiziell wird in der Regel innerhalb von ${F.decisionTypical} entschieden. Das ist ein Richtwert, keine Zusage. In der Hauptreisezeit kann es länger dauern.`,
        },
        { h2: "Was die Bearbeitung verlangsamt" },
        {
          ul: [
            "Angaben, die nicht mit dem Reisepass übereinstimmen",
            "Ein Foto, das den Vorgaben nicht entspricht und neu eingereicht werden muss",
            "Eine frühere Einreiseverweigerung oder Überschreitung der Aufenthaltsdauer",
            "Antragsspitzen vor Feiertagen",
          ],
        },
        { h2: "Eine kostenpflichtige Beschleunigung gibt es nicht" },
        {
          p: "Die Behörde bietet keine Expressbearbeitung an. Wer damit wirbt, beschleunigt allenfalls das eigene Ausfüllen des Formulars — an der Reihenfolge der Prüfung ändert das nichts.",
        },
        {
          note: "Nicht am Vortag beantragen. Sobald die Reise feststeht, ist der richtige Zeitpunkt.",
        },
      ],
    },
    {
      slug: "keta-gueltigkeit",
      title: "Gültigkeit der K-ETA und was bei einem neuen Reisepass gilt",
      description: `Wie lange eine erteilte K-ETA nutzbar ist, warum ein neuer Reisepass sie beendet, und worin sie sich von der Aufenthaltsdauer unterscheidet.`,
      blocks: [
        { h2: "Gültigkeitsdauer" },
        {
          p: `Eine K-ETA ist ${F.validYears} Jahre ab Erteilung nutzbar und erlaubt in dieser Zeit mehrere Einreisen. Läuft der Reisepass früher ab, endet sie mit dem Reisepass.`,
        },
        { h2: "Neuer Reisepass, neue K-ETA" },
        {
          p: "Die Genehmigung ist an die Passnummer gebunden. Nach Verlängerung, Verlust oder Neuausstellung ist die alte K-ETA nicht mehr nutzbar; Sie beantragen mit dem neuen Pass erneut. Das wird am häufigsten übersehen.",
        },
        { h2: "Gültigkeit ist nicht Aufenthaltsdauer" },
        {
          p: `Hier werden zwei Dinge verwechselt. Die ${F.validYears} Jahre sagen, wie lange die Genehmigung nutzbar ist — nicht, wie lange Sie pro Einreise bleiben dürfen. Das ergibt sich aus dem Visumbefreiungsabkommen und liegt üblicherweise bei ${F.stayRange}.`,
        },
        {
          note: "Wie viele Tage Ihnen tatsächlich gewährt werden, entscheidet die Grenzbehörde bei der Ankunft.",
        },
      ],
    },
    {
      slug: "keta-status",
      title: "K-ETA-Status prüfen — wenn die E-Mail nicht ankommt",
      description:
        "Wie Sie den Stand Ihres Antrags prüfen, und wo Sie Ihre Passnummer auf keinen Fall eingeben sollten.",
      blocks: [
        { h2: "Die Entscheidung kommt per E-Mail" },
        {
          p: "Nach der Prüfung wird eine Benachrichtigung verschickt. Die K-ETA ist elektronisch mit dem Reisepass verknüpft, ausdrucken müssen Sie nichts. Ein Screenshot schadet trotzdem nicht.",
        },
        { h2: "Wenn keine E-Mail ankommt" },
        {
          ul: [
            "Zuerst Spam- und Werbeordner prüfen",
            "Prüfen, ob die eingetragene Adresse einen Tippfehler enthält",
            `Den Status mit der Antragsnummer auf ${F.officialHost} abfragen`,
          ],
        },
        { h2: "Passnummer nur auf der offiziellen Seite eingeben" },
        {
          p: `Der einzige Ort, an dem Sie Ihre Passnummer eingeben sollten, ist ${F.officialHost}. Dritte, die eine „Statusabfrage“ gegen Gebühr anbieten, sind überflüssig — und Sie geben ihnen Ihre Passdaten.`,
        },
        {
          note: "Die Fluggesellschaft fragt den Status beim Check-in direkt im koreanischen System ab. Ohne Ausdruck stehen Sie also nicht schlechter da.",
        },
      ],
    },
    {
      slug: "keta-faq",
      title: "K-ETA: häufig gestellte Fragen",
      description: "Kurze Antworten auf das, was mit deutschem Reisepass am häufigsten gefragt wird.",
      blocks: [
        { h2: "Brauche ich jetzt eine oder nicht?" },
        {
          p: `Deutschland steht derzeit auf der Befreiungsliste (bis ${F.exemptionUntil}). Die Liste kann sich ändern — prüfen Sie sie vor Abflug auf der offiziellen Seite.`,
        },
        { h2: "Was, wenn ich während der Befreiung trotzdem beantrage?" },
        {
          p: "Das hat keine negativen Folgen, die Gebühr wird aber nicht erstattet und bringt Ihnen keinen Vorteil außer dem Wegfall der Papier-Einreisekarte.",
        },
        { h2: "Ist die K-ETA ein Visum?" },
        {
          p: "Nein. Sie ist eine elektronische Vorabgenehmigung. Auch mit Genehmigung entscheidet die Grenzbehörde über die Einreise.",
        },
        { h2: "Wie lange darf ich bleiben?" },
        {
          p: `Das regelt das Visumbefreiungsabkommen, üblicherweise ${F.stayRange}; für deutsche Reisepässe wird 90 Tage genannt. Die K-ETA selbst legt das nicht fest.`,
        },
        { h2: "Brauche ich sie beim Umsteigen?" },
        {
          p: "Wenn Sie nicht einreisen und den Transitbereich nicht verlassen, in der Regel nicht. Verlassen Sie den Flughafen, reisen Sie ein — dann gelten die Einreisebedingungen.",
        },
        { h2: "Darf ich arbeiten?" },
        {
          p: "Nein. Erlaubt sind Urlaub, Besuche und kurze geschäftliche Termine, keine Beschäftigung.",
        },
      ],
    },
    {
      slug: "impressum",
      title: "Impressum und Angaben zur Website",
      description: "Wer diesen unabhängigen Ratgeber zur südkoreanischen K-ETA betreibt.",
      blocks: [
        { h2: "Betreiber" },
        {
          p: "Dies ist ein unabhängiger Ratgeber zur elektronischen Reisegenehmigung Südkoreas (K-ETA). Wir sind keine Behörde und stehen in keiner Verbindung zur südkoreanischen Regierung oder Einwanderungsbehörde. Betreiber: MediaX Co., Ltd. (Japan). Kontakt: webmaster@mediax.biz",
        },
        { h2: "Was wir nicht tun" },
        {
          ul: [
            "Wir nehmen keine Anträge entgegen.",
            "Wir erheben keine Antragsgebühren.",
            "Wir erteilen keine Rechts- oder Migrationsberatung.",
          ],
        },
        { h2: "Zur Richtigkeit" },
        {
          p: "Alle Angaben beruhen auf den offiziellen Veröffentlichungen zum angegebenen Stand. Regelungen ändern sich; maßgeblich ist immer die offizielle Seite. Hinweise auf Fehler nehmen wir gern entgegen und korrigieren sie.",
        },
      ],
    },
    {
      slug: "datenschutz",
      title: "Datenschutzerklärung",
      description: "Welche Daten diese Website verarbeitet, warum, und welche Rechte Sie haben.",
      blocks: [
        { h2: "Überblick" },
        {
          p: "Diese Website besteht aus statischen Informationsseiten. Es gibt keine Registrierung, keinen Verkauf und keine Erfassung von Passdaten. Personenbezogene Daten werden nur im technisch notwendigen Umfang verarbeitet.",
        },
        { h2: "Server-Protokolle" },
        {
          p: "Die Auslieferung erfolgt über Cloudflare Pages. Beim Abruf werden IP-Adresse, Zeitpunkt, aufgerufene Adresse und Browserangaben protokolliert — zum stabilen Betrieb und zur Abwehr von Angriffen.",
        },
        { h2: "Cookies und Analyse" },
        {
          p: "Wir setzen keine Werbe-Cookies und binden keine Tracking-Skripte Dritter ein. Sollte später eine Reichweitenmessung hinzukommen, wird sie zuerst an dieser Stelle beschrieben.",
        },
        { h2: "Externe Links" },
        {
          p: "Die Seiten verlinken auf offizielle Stellen. Für diese gelten deren eigene Datenschutzbestimmungen.",
        },
        { h2: "Kontakt" },
        { p: "Fragen zum Datenschutz: webmaster@mediax.biz" },
      ],
    },
    {
      slug: "nutzungsbedingungen",
      title: "Nutzungsbedingungen",
      description: "Unter welchen Bedingungen Sie die Informationen dieser Website nutzen.",
      blocks: [
        { h2: "Zweck" },
        {
          p: "Die Inhalte dienen der allgemeinen Information über die südkoreanische K-ETA. Sie sind keine Rechts- oder Migrationsberatung und begründen kein Mandat.",
        },
        { h2: "Keine Antragsbearbeitung" },
        {
          p: "Wir sind weder Vermittler noch Behörde. Anträge laufen ausschließlich über die offiziellen Kanäle; wir nehmen keine Formulare, Gebühren oder Passdaten entgegen.",
        },
        { h2: "Haftung" },
        {
          p: "Wir halten die Angaben aktuell und richtig, können Vollständigkeit und Fehlerfreiheit aber nicht zusichern. Für Schäden aus der Nutzung haften wir nur bei Vorsatz und grober Fahrlässigkeit.",
        },
        { h2: "Urheberrecht" },
        {
          p: "Texte und Gestaltung sind urheberrechtlich geschützt. Eine vollständige Übernahme ohne Zustimmung ist nicht gestattet; kurze Zitate mit Quellenangabe und Link sind ausdrücklich willkommen.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "keta-befreiung-2026",
      title: `K-ETA bis ${EXEMPT_UNTIL} ausgesetzt — was deutsche Reisende jetzt wissen müssen`,
      description:
        "Woher die Befreiung kommt, bis wann sie gilt, und wie Sie entscheiden, wenn Ihre Reise um den Jahreswechsel liegt.",
      blocks: [
        {
          p: `Südkorea hat die K-ETA-Pflicht für eine Reihe von Ländern ausgesetzt — Deutschland gehört dazu, befristet bis zum ${EXEMPT_UNTIL}. In diesem Zeitraum steigen deutsche Reisepassinhaber ohne K-ETA ins Flugzeug.`,
        },
        { h2: "Warum es die Befreiung gibt" },
        {
          p: "Sie wurde eingeführt, um mehr Besucher ins Land zu holen, und seither mehrfach verlängert. Es handelt sich also um eine befristete politische Maßnahme — das System selbst wurde nicht abgeschafft.",
        },
        { h2: "Wer um den Jahreswechsel reist, sollte genauer hinsehen" },
        {
          ul: [
            `Einreise bis ${EXEMPT_UNTIL}: derzeit keine K-ETA nötig`,
            "Einreise ab 1. Januar 2027: ohne erneute Verlängerung wieder antragspflichtig",
            "Reise über den Jahreswechsel: maßgeblich ist die Regel am Tag der Einreise, nicht am Tag der Buchung",
          ],
        },
        {
          note: `Liste und Frist können sich erneut ändern. Verlassen Sie sich nicht auf ältere Blogbeiträge, sondern prüfen Sie kurz vor Abflug ${F.officialHost}.`,
        },
        { h2: "Wenn Sie trotz Befreiung beantragen wollen" },
        {
          p: `Das ist möglich. Der Vorteil ist, dass die Papier-Einreisekarte bei der Ankunft entfällt; die Gebühr von ${F.fee} wird trotzdem fällig. Wer am Flughafen einen Schritt sparen will, für den kann sich das lohnen — sonst gibt es keinen Grund.`,
        },
      ],
    },
    {
      slug: "keta-antrag-anleitung",
      title: "K-ETA beantragen: Ablauf und die typischen Stolperstellen",
      description: `Die offiziellen Kanäle, die Gebühr von ${F.fee}, die Bearbeitungszeit und die Fehler, an denen Anträge tatsächlich hängen bleiben.`,
      blocks: [
        {
          p: `Wenn ein Antrag nötig ist, läuft er ausschließlich über ${F.officialHost} oder die offizielle App. Die staatliche Gebühr beträgt ${F.fee} (${USD_APPROX}), die Entscheidung kommt in der Regel innerhalb von ${DECISION}.`,
        },
        { h2: "Was Sie bereithalten" },
        {
          ul: [
            "Einen gültigen Reisepass",
            "Ein Gesichtsfoto nach den Vorgaben",
            "Unterkunft und grobe Reisedaten",
            "Eine Kreditkarte für die Online-Zahlung",
          ],
        },
        { h2: "Die typischen Stolperstellen" },
        {
          ul: [
            "Schreibweise des Namens weicht vom Reisepass ab (der häufigste Fall)",
            "Das Foto entspricht nicht den Vorgaben und wird zurückgewiesen",
            "Eine Vermittlerseite wird für die offizielle gehalten und eine Servicegebühr bezahlt",
            "Antrag erst ein, zwei Tage vor Abflug — bei manueller Prüfung wird es dann knapp",
          ],
        },
        {
          note: `Die offizielle Adresse ist ${F.officialHost}. In den Suchergebnissen stehen oft Anzeigen von Vermittlern weiter oben — prüfen Sie die Adresse, bevor Sie persönliche Daten eingeben.`,
        },
        { h2: "Nach der Genehmigung" },
        {
          p: "Die Genehmigung ist elektronisch mit dem Reisepass verknüpft, ausdrucken müssen Sie nichts. Reisen Sie mit demselben Pass; nach einem Passwechsel beantragen Sie neu.",
        },
      ],
    },
    {
      slug: "korea-aufenthaltsdauer",
      title: "Wie lange dürfen Sie in Südkorea bleiben — die K-ETA entscheidet das nicht",
      description:
        "Die Aufenthaltsdauer ergibt sich aus dem Visumbefreiungsabkommen, nicht aus der K-ETA. Wie beides zusammenhängt und warum die Unterscheidung wichtig ist.",
      blocks: [
        {
          p: `Viele Zusammenfassungen schreiben „mit der K-ETA 90 Tage“. Das vermischt zwei Dinge. Die K-ETA ist die Vorabgenehmigung zum Einsteigen; wie lange Sie bleiben dürfen, ergibt sich aus dem Visumbefreiungsabkommen Ihrer Staatsangehörigkeit.`,
        },
        { h2: "Der Unterschied" },
        {
          ul: [
            `Gültigkeit der K-ETA: ${F.validYears} Jahre, mehrere Einreisen`,
            `Erlaubte Dauer je Einreise: nach Abkommen, üblicherweise ${STAY_RANGE} — für deutsche Reisepässe wird 90 Tage genannt`,
            "Tatsächlich gewährte Dauer: entscheidet die Grenzbehörde bei der Ankunft",
          ],
        },
        { h2: "Warum das auseinanderzuhalten ist" },
        {
          p: "Weil Abkommen zwischen einzelnen Staaten geschlossen und angepasst werden. Wer eine lange Reise plant, weil „jemand 90 Tage bleiben durfte“, trägt das Risiko selbst. Prüfen Sie vor der Buchung, was für Ihren Reisepass gilt.",
        },
        {
          note: "Eine genehmigte K-ETA ist keine Einreisegarantie. Rückflug, Unterkunft und der Zweck der Reise können bei der Einreise weiterhin erfragt werden.",
        },
      ],
    },
  ],
};
