import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * Deutsch – Praxisseiten nach der Ankunft (Übersetzung von data/pages-practical.ts, 2026-10-12).
 * Leser: Inhaber eines deutschen Reisepasses. Anrede: Sie.
 * Deutschland ist bis EXEMPT_UNTIL von der K-ETA befreit (→ Einreisekarte nötig) und steht auf der e-Gate-Liste.
 * ⚠️ Zahlen nur über F. Fakten nicht verändern – nur die Sprache.
 * ⚠️ Deutsch–Korea-Sozialversicherungsabkommen: Rente/Arbeitslosenversicherung, keine Krankenversicherung.
 * ⚠️ Notruf: 1345 hat Deutsch (werktags, kostenpflichtig); 112 nur Englisch/Chinesisch; 1330 kein Deutsch.
 * Fakten und Quellen: ~/projects/kr-entry-facts-2026-10-12.md
 */

/** Lokalisierte Schreibweisen. ⚠️ Werte entsprechen FACTS (keine anderen Daten eintragen). */
const EXEMPT_UNTIL = "31. Dezember 2026"; // = F.exemptionUntil
const EGATE_SINCE = "16. März 2026"; // = F.egateSince
const POWERBANK_SINCE = "20. April 2026"; // = F.powerBankSince
const LIQUID_BAG = "1 Liter"; // = F.liquidBag
const LIQUID_ML = "100 ml"; // = F.liquidMl

const CHECKED = "12. Oktober 2026";

export const dePractical: PracticalPack = {
  ui: { faq: "Häufige Fragen", source: "Quelle", related: "Weitere Themen" },
  articles: [
    {
      slug: "ankunft-in-korea",
      enSlug: "arriving-in-korea",
      title: "Ankunft in Korea: Praxisratgeber für K-ETA-Inhaber und befreite Reisende",
      description:
        "Die K-ETA bringt Sie ins Flugzeug. Was danach kommt – Einreisekarte, e-Gates, Geld, Steuererstattung, Verkehr, Gesundheit, Notfälle – amtlich geprüft.",
      checked: CHECKED,
      practical: false,
      related: ["einreisekarte-und-e-gates", "keta-befreiung-2026", "korea-aufenthaltsdauer"],
      blocks: [
        {
          p: `Eine K-ETA – oder die vorübergehende Befreiung, die bis zum ${EXEMPT_UNTIL} für viele Staatsangehörigkeiten gilt, auch für Deutschland – klärt nur eine Frage: ob Sie ohne Visum in ein Flugzeug nach Korea steigen dürfen. Was am Flughafen passiert, was Sie mitnehmen dürfen, wie Sie bezahlen, wie Sie sich fortbewegen oder was Sie tun, wenn etwas schiefgeht, steht darin nicht. Darum geht es auf diesen Seiten. Jede Seite ist anhand der zuständigen koreanischen Behörde geprüft und verlinkt auf sie.`,
        },
        { h2: "An der Grenze" },
        { links: ["einreisekarte-und-e-gates", "keta-befreiung-2026", "medikamente-mitnehmen", "reisen-mit-kindern"] },
        { h2: "Geld" },
        { links: ["geld-und-trinkgeld", "steuerrueckerstattung-korea"] },
        { h2: "Unterwegs und erreichbar" },
        { links: ["nahverkehr-und-t-money", "autofahren-in-korea", "handy-und-sim-karte", "steckdosen-und-strom", "feiertage-korea"] },
        { h2: "Gesundheit und Sicherheit" },
        { links: ["gesundheitsversorgung-korea", "notrufnummern-korea", "rauchen-vapes-alkohol"] },
        { h2: "Rückflug" },
        { links: ["fluessigkeiten-und-powerbanks", "korea-aufenthaltsdauer"] },
        {
          note: "Wozu wir keine eigene Seite geschrieben haben: die Gültigkeit des Reisepasses. Das koreanische Recht verlangt einen gültigen Reisepass; eine amtliche Mindest-Restgültigkeit für visumfrei Einreisende haben wir nicht gefunden. Fluggesellschaften und Transitländer können eigene Regeln haben – fragen Sie dort nach.",
        },
      ],
    },
    {
      slug: "einreisekarte-und-e-gates",
      enSlug: "arrival-card-and-e-gates",
      title: "Einreisekarte und e-Gates in Korea: wer was ausfüllt, wer schneller durchkommt",
      description: `Ohne K-ETA füllen Sie eine Einreisekarte aus (online ab ${F.earrivalDaysBefore} Tagen vorher). Seit ${EGATE_SINCE} dürfen Reisende ab ${F.egateMinAge} aus ${F.egateCountries} Ländern e-Gates nutzen.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "reisen-mit-kindern", "keta-befreiung-2026"],
      blocks: [
        {
          p: "Zwei Dinge entscheiden darüber, wie Ihre Ankunft in Korea abläuft, und keines davon ist die K-ETA selbst: ob Sie eine Einreisekarte abgeben müssen und ob Sie die automatischen Schleusen statt der besetzten Schalter nutzen können.",
        },
        { h2: "Wer eine Einreisekarte abgeben muss" },
        {
          p: "Grundsätzlich gibt jeder Ausländer bei der Einreise nach Korea eine Einreisekarte ab. Die wichtigste Ausnahme für Besucher ist eine gültige K-ETA: Wer eine hat und visumfrei einreist, braucht keine Karte. Alle anderen schon – auch diejenigen, die keine K-ETA brauchen. Für Reisende mit deutschem Pass heißt das derzeit: Einreisekarte ausfüllen.",
        },
        {
          ul: [
            `Staatsangehörige von Ländern mit vorübergehender K-ETA-Befreiung (bis ${EXEMPT_UNTIL}, darunter Deutschland) – Karte erforderlich`,
            `Kinder bis ${F.ketaChildMaxAge} Jahre und Erwachsene ab ${F.ketaSeniorMinAge} Jahren, die von der K-ETA befreit sind – Karte erforderlich`,
            "Inhaber eines Visums – Karte erforderlich (auch wenn sie zusätzlich eine K-ETA haben, aber mit dem Visum einreisen)",
            "Inhaber einer gültigen K-ETA, die visumfrei einreisen – keine Karte",
          ],
        },
        {
          note: "Das ist der einzige praktische Vorteil, wenn Sie trotz Befreiung eine K-ETA beantragen: Laut den koreanischen Behörden dürfen befreite Reisende trotzdem einen Antrag stellen, die Gebühr zahlen und sich so die Einreisekarte sparen. Ob Ihnen das die Gebühr wert ist, entscheiden Sie – die Karte selbst ist kostenlos und in wenigen Minuten ausgefüllt.",
        },
        { h2: "Die e-Arrival card (elektronische Einreisekarte)" },
        {
          ul: [
            `Ausfüllen auf e-arrivalcard.go.kr ab ${F.earrivalDaysBefore} Tagen vor der Ankunft, gerechnet nach koreanischer Zeit und einschließlich des Ankunftstags (Ankunft am 31.: Abgabe am 29., 30. oder 31.)`,
            "Sie ist kostenlos. Die offizielle Seite läuft im Browser auf PC und Smartphone; eine App gibt es nicht",
            "Sie hat dieselbe Wirkung wie die Papierkarte, und die Papierkarte gibt es weiterhin, wenn Sie sie lieber nutzen",
            `Sie verfällt ${F.earrivalValidHours} Stunden nach der Abgabe sowie mit der Einreisekontrolle – für jede Einreise füllen Sie eine neue aus`,
            "Sie können sie auch noch nach der Landung ausfüllen, solange Sie den Schalter der Einreisekontrolle noch nicht erreicht haben",
            "Sie ist ein anderes System als die K-ETA. Seiten, die beides bündeln und dafür Geld verlangen, sind nicht offiziell",
          ],
        },
        { source: { label: "Justizministerium — Anleitung zur e-Arrival card", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do" } },
        { source: { label: "Justizministerium — wer die e-Arrival card ausfüllen muss", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "Fingerabdrücke und Foto" },
        {
          p: `Bei Ausländern ab ${F.biometricsMinAge} Jahren werden bei der Einreise beide Zeigefinger gescannt und ein Gesichtsfoto aufgenommen. Kinder unter ${F.biometricsMinAge} Jahren sind davon ausgenommen.`,
        },
        { source: { label: "Korea Immigration Service — Fingerabdruck-Abgleich für Ausländer", url: "https://www.immigration.go.kr/immigration/2429/subview.do" } },
        { h2: "Ankunfts-e-Gates für Besucher" },
        {
          p: `Seit dem ${EGATE_SINCE} können visumfrei einreisende Besucher ab ${F.egateMinAge} Jahren aus ${F.egateCountries} Ländern und Regionen sich bei der Ankunft registrieren und danach die automatischen Ankunftsschleusen nutzen. Deutschland gehört dazu: Die Liste umfasst die EU- und Schengen-Staaten, außerdem unter anderem das Vereinigte Königreich, Kanada, Japan, Taiwan, Hongkong, Macau, Singapur, die Vereinigten Arabischen Emirate, Mexiko, Australien und Neuseeland. Die USA stehen nicht darauf.`,
        },
        {
          ul: [
            "Registrierungsschalter gibt es in den Einreisehallen der Flughäfen Incheon (Terminal 1 und 2) und Jeju",
            "Der Ablauf: Pass scannen, Fingerabdrücke registrieren, Gesicht registrieren – dann durch das Gate",
            "Einmal registriert, können Sie die Gates auch bei späteren Reisen nutzen, auch an anderen Flughäfen",
          ],
        },
        { h2: "e-Gates bei der Ausreise" },
        {
          p: `Bei der Ausreise ist es einfacher: Kurzzeitbesucher ab ${F.egateMinAge} Jahren können die Ausreise-e-Gates ohne vorherige Registrierung nutzen.`,
        },
        { source: { label: `Pressemitteilung des Justizministeriums, 16. März 2026 — Ankunfts-e-Gates für ${F.egateCountries} Länder geöffnet (Koreanisch, PDF)`, url: "https://www.immigration.go.kr/bbs/moj/182/491982/download.do" } },
        { source: { label: "Korea Immigration Service — Smart Entry Service (SES)", url: "https://www.immigration.go.kr/immigration/1527/subview.do" } },
        {
          note: "Die Nutzung eines e-Gates ändert nichts an Ihrem Aufenthalt. Wie lange Sie bleiben dürfen, ergibt sich weiterhin aus der Visumfreiheit für Ihr Land, und es ist nicht die K-ETA, die Ihnen Zugang zu den Gates verschafft.",
        },
      ],
      faq: [
        {
          q: "Brauche ich eine Einreisekarte, obwohl Deutschland von der K-ETA befreit ist?",
          a: "Ja. Reisende mit vorübergehender Befreiung sowie Kinder und Senioren, die altersbedingt befreit sind, müssen eine Einreisekarte abgeben – online (e-Arrival card) oder auf Papier. Nur visumfrei einreisende Inhaber einer gültigen K-ETA sind davon ausgenommen.",
        },
        {
          q: "Können Deutsche die Ankunfts-e-Gates in Korea nutzen?",
          a: `Ja. Deutschland gehört zu den ${F.egateCountries} Ländern und Regionen, deren visumfrei einreisende Staatsangehörige ab ${F.egateMinAge} Jahren sich seit dem ${EGATE_SINCE} in Incheon oder Jeju bei der Ankunft registrieren und dann die Gates nutzen können. Die USA stehen nicht auf der Liste.`,
        },
        {
          q: "Ist die e-Arrival card dasselbe wie die K-ETA?",
          a: `Nein. Die e-Arrival card ist eine kostenlose Einreiseerklärung für eine einzige Einreise; die K-ETA ist eine kostenpflichtige Reisegenehmigung, die bis zu ${F.validYears} Jahre gilt. Die offizielle Seite weist ausdrücklich darauf hin.`,
        },
      ],
    },
    {
      slug: "fluessigkeiten-und-powerbanks",
      enSlug: "airport-security-liquids",
      title: `Rückflug ab Korea: die ${LIQUID_ML}-Regel und höchstens ${F.powerBankMax} Powerbanks`,
      description: `Handgepäck: Flüssigkeiten in Behältern bis ${LIQUID_ML} im ${LIQUID_BAG}-Beutel. Seit ${POWERBANK_SINCE} max. ${F.powerBankMax} Powerbanks pro Person, kein Laden an Bord.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "steuerrueckerstattung-korea", "medikamente-mitnehmen"],
      blocks: [
        {
          p: "Die Regeln für Flüssigkeiten bei der Sicherheitskontrolle an koreanischen Flughäfen sind die bekannten internationalen. Neu ist 2026 die Regel für Powerbanks: Korea hat jetzt eine der strengsten, und sie wurde als internationaler Standard übernommen.",
        },
        { h2: "Flüssigkeiten im Handgepäck (internationale Flüge)" },
        {
          ul: [
            `Jeder Behälter höchstens ${LIQUID_ML} – maßgeblich ist die Größe des Behälters, nicht wie viel noch darin ist`,
            `Alle Behälter in einem durchsichtigen, verschlossenen Plastikbeutel von bis zu ${LIQUID_BAG} pro Person`,
            "Auch Lebensmittel zählen, wenn sie flüssig oder gelartig sind – Gochujang und Kimchi eingeschlossen",
            "Auf Inlandsflügen innerhalb Koreas gibt es keine Flüssigkeitsgrenze",
          ],
        },
        { h2: "Ausnahmen" },
        {
          ul: [
            `Babybedarf für ein Kind bis ${F.babyItemsMaxAge} Jahre – Milch, Wasser, Saft, Babynahrung, Feuchttücher – in der für den Flug nötigen Menge`,
            `Flüssige Medikamente über ${LIQUID_ML} (zum Beispiel Insulin) mit ärztlichem Attest oder Rezept auf Koreanisch oder Englisch, in der an Bord benötigten Menge; der Rest kommt ins aufgegebene Gepäck`,
            "Duty-free-Flüssigkeiten in beliebiger Menge, aber nur im versiegelten Duty-free-Beutel, ungeöffnet bis zum Einsteigen in den Flug zu Ihrem Endziel",
          ],
        },
        {
          note: "Wenn Sie an einem anderen Flughafen umsteigen, gelten dort dessen Regeln, und Flüssigkeiten können dort abgenommen werden, auch wenn Incheon sie durchgelassen hat. Fragen Sie bei Ihrer Fluggesellschaft nach, bevor Sie für einen Anschlussflug Duty-free einkaufen.",
        },
        { source: { label: "Incheon International Airport — verbotene und eingeschränkte Gegenstände (Koreanisch)", url: "https://www.airport.kr/ap_ko/906/subview.do" } },
        { source: { label: "Incheon International Airport — FAQ zu eingeschränkten Gegenständen (Koreanisch)", url: "https://www.airport.kr/ap_ko/907/subview.do" } },
        { h2: `Powerbanks seit dem ${POWERBANK_SINCE}` },
        {
          ul: [
            `Höchstens ${F.powerBankMax} Powerbanks pro Person, jede mit höchstens ${F.powerBankWh}`,
            "Powerbanks zwischen 100 und 160 Wh brauchen die Zustimmung der Fluggesellschaft; über 160 Wh sind sie gar nicht erlaubt",
            "Nur im Handgepäck – im aufgegebenen Gepäck sind Powerbanks nicht erlaubt",
            "An Bord darf die Powerbank weder geladen noch zum Laden des Handys oder anderer Geräte benutzt werden",
          ],
        },
        {
          p: "Korea hat die Regel nach einem Powerbank-Brand an Bord eines Flugzeugs von Air Busan im Januar 2025 eingeführt. Die Internationale Zivilluftfahrt-Organisation (ICAO) hat sie am 27. März 2026 in ihre Gefahrgutvorschriften übernommen. Manche Länder haben bereits strengere Regeln – prüfen Sie die Grenzen Ihrer Fluggesellschaft auch für den Rückflug.",
        },
        { source: { label: "Ministerium für Land, Infrastruktur und Verkehr — Regeln für Powerbanks, 8. April 2026 (Koreanisch)", url: "https://www.molit.go.kr/USR/NEWS/m_71/dtl.jsp?lcmspage=1&id=95091874" } },
        {
          note: `Vielleicht lesen Sie, koreanische Flughäfen hätten die Flüssigkeitsgrenze wegen neuer Scanner gelockert. Auf den Websites des Verkehrsministeriums und des Flughafens Incheon haben wir das nicht gefunden; dort steht weiterhin die ${LIQUID_ML}-Regel – planen Sie also damit.`,
        },
      ],
      faq: [
        {
          q: "Darf ich Kimchi im Handgepäck mitnehmen?",
          a: `Nur in Behältern bis ${LIQUID_ML} im ${LIQUID_BAG}-Beutel – der Flughafen Incheon behandelt es als flüssiges Lebensmittel. Größere Mengen gehören ins aufgegebene Gepäck.`,
        },
        {
          q: "Wie viele Powerbanks darf ich auf einem Flug ab Korea mitnehmen?",
          a: `Seit dem ${POWERBANK_SINCE}: bis zu ${F.powerBankMax} pro Person, jede mit höchstens ${F.powerBankWh}, nur im Handgepäck, und Sie dürfen sie während des Flugs weder laden noch benutzen.`,
        },
      ],
    },
    {
      slug: "geld-und-trinkgeld",
      enSlug: "money-and-tipping",
      title: `Geld in Korea: Won, Karten, Trinkgeld und Bargeld über ${F.cashDeclareOver}`,
      description: `Karten gehen fast überall, Märkte wollen oft Bargeld, Trinkgeld ist unüblich. Bargeld und Schecks über ${F.cashDeclareOver} melden Sie bei der Einreise an.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "steuerrueckerstattung-korea", "nahverkehr-und-t-money"],
      blocks: [
        { p: "Die Währung Koreas ist der Won (KRW, ₩). Banknoten gibt es zu 1.000, 5.000, 10.000 und 50.000 Won, Münzen zu 10, 50, 100 und 500 Won." },
        { h2: "Karten und Bargeld" },
        {
          ul: [
            "Visa, Mastercard, American Express, JCB und UnionPay werden laut der Korea Tourism Organization in den meisten Geschäften, Hotels und Kaufhäusern akzeptiert",
            "Auf traditionellen Märkten und an Straßenständen wird oft nur Bargeld genommen – haben Sie etwas dabei",
            "Aufladbare Prepaid-Verkehrskarten wie T-money funktionieren auch als Zahlungsmittel in Partnergeschäften, die das Logo der Karte zeigen",
            "Geld tauschen Sie bei einer Bank oder einer zugelassenen Wechselstube; Banken haben in der Regel werktags von 9 bis 16 Uhr geöffnet",
          ],
        },
        { source: { label: "Korea Tourism Organization — Währung und Geldwechsel", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140040" } },
        { h2: "Trinkgeld" },
        {
          p: "Die Korea Tourism Organization sagt es klar: Trinkgeld ist in Korea weder nötig noch erwartet. Zusätzliches Wasser und das Nachfüllen der Beilagen im Restaurant sind kostenlos.",
        },
        { source: { label: "Korea Tourism Organization — über das koreanische Essen", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140727" } },
        { h2: `Mehr als ${F.cashDeclareOver} dabei` },
        {
          p: `Wenn Fremdwährung, Won-Banknoten und Schecks – einschließlich Won-Bankschecks –, die Sie mitführen, zusammen mehr als ${F.cashDeclareOver} ergeben, müssen Sie das bei der Einreise beim Zoll anmelden. Kreuzen Sie Punkt 3 der Zollerklärung an und tragen Sie den Betrag ein; der Zoll stellt Ihnen eine Anmeldebescheinigung aus. Sie kann nicht mehr ausgestellt werden, wenn Sie den Einreisebereich verlassen haben – erledigen Sie das also bei der Ankunft.`,
        },
        {
          ul: [
            "Das ist eine Anmeldepflicht, keine Obergrenze – Sie dürfen mehr mitbringen, wenn Sie es anmelden",
            `Wer nicht anmeldet, riskiert ein Bußgeld von bis zu ${F.cashAdminFineMax}`,
            `Liegt der nicht angemeldete Betrag über ${F.cashCriminalOver}, ist es eine Straftat (bis zu einem Jahr Freiheitsstrafe oder Geldstrafe)`,
            "Bei der Ausreise dürfen Besucher ohne neue Anmeldung bis zu dem Betrag ausführen, den sie bei der Einreise angemeldet haben",
          ],
        },
        { source: { label: "Korea Customs Service — Anmeldung von Fremdwährung", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10800&cntntsId=5500" } },
        { source: { label: "Devisengesetz (Foreign Exchange Transactions Act) (Koreanisch)", url: "https://www.law.go.kr/법령/외국환거래법" } },
      ],
      faq: [
        { q: "Gibt man in koreanischen Restaurants Trinkgeld?", a: "Nein. Laut der Korea Tourism Organization ist Trinkgeld in Korea weder nötig noch erwartet." },
        {
          q: "Wie viel Bargeld darf ich nach Korea mitnehmen?",
          a: `Eine Obergrenze gibt es nicht. Liegen Fremdwährung, Won-Banknoten und Schecks zusammen über ${F.cashDeclareOver}, müssen Sie den Betrag aber bei der Einreise beim Zoll anmelden.`,
        },
      ],
    },
    {
      slug: "steuerrueckerstattung-korea",
      enSlug: "tax-refund-for-tourists",
      title: `Steuerrückerstattung in Korea: ab ${F.taxRefundMin} – auch direkt im Geschäft`,
      description: `Besucher erhalten die Mehrwertsteuer ab ${F.taxRefundMin} pro Einkauf zurück. Sofort im Laden: unter ${F.immediateRefundPerPurchase} je Einkauf, ${F.immediateRefundTotal} pro Reise.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "geld-und-trinkgeld", "fluessigkeiten-und-powerbanks"],
      blocks: [
        {
          p: "Preise in Korea enthalten die Mehrwertsteuer. Ausländische Besucher können sie sich für Waren erstatten lassen, die sie mit nach Hause nehmen – sofern sie in einem teilnehmenden Tax-free-Geschäft einkaufen und die Waren Korea rechtzeitig verlassen.",
        },
        { h2: "Wer berechtigt ist" },
        {
          ul: [
            "Nicht in Korea Ansässige – die Korea Tourism Organization beschreibt das als Ausländer, die sich weniger als sechs Monate in Korea aufhalten",
            "Nicht berechtigt sind in Korea Ansässige, Unternehmen sowie in Korea stationierte Diplomaten und Militärangehörige",
          ],
        },
        { h2: "Die Regeln" },
        {
          ul: [
            `Mindestens ${F.taxRefundMin} pro Einkauf (inklusive Steuer) in einem Geschäft, das Tax-free-Shopping anbietet`,
            `Die Waren müssen Korea innerhalb von ${F.taxRefundExportMonths} Monaten nach dem Kauf verlassen`,
            "Ausgenommen sind Tabakwaren, suchterzeugende Arzneimittel und Waren mit Ein- oder Ausfuhrverbot",
          ],
        },
        { h2: "Sofortige Erstattung im Geschäft" },
        {
          p: `Viele Geschäfte ziehen die Steuer direkt an der Kasse ab. Das geht nur, wenn jeder einzelne Einkauf unter ${F.immediateRefundPerPurchase} liegt und Ihre Einkäufe mit Sofort-Erstattung während der Reise insgesamt höchstens ${F.immediateRefundTotal} betragen. Darüber beantragen Sie die Erstattung stattdessen nachträglich.`,
        },
        { h2: "Erstattung am Flughafen oder in der Stadt" },
        {
          ul: [
            "Halten Sie bei der Ausreise Pass, Kassenbelege und die Waren (ungeöffnet und unbenutzt) bereit – der Zoll kann sie sehen wollen",
            "An Flughäfen mit Zoll-Kiosken geben Sie Pass- und Belegdaten am Kiosk ein; zum Zollschalter gehen Sie nur, wenn Sie für eine Kontrolle ausgewählt werden",
            `Erstattungsschalter in der Stadt nehmen Belege bis zu ${F.downtownRefundCap} pro Beleg an; an Flughäfen und Fährterminals gibt es keine Obergrenze`,
          ],
        },
        { source: { label: "Korea Customs Service — Steuerrückerstattung", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10803&cntntsId=5504" } },
        { source: { label: "Korea Tourism Organization — Duty-free und Steuerrückerstattung", url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140736" } },
        { source: { label: "Sonderregeln zur Mehrwertsteuer für ausländische Touristen – Präsidialverordnung (Koreanisch)", url: "https://www.law.go.kr/법령/외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정" } },
        {
          note: "Wie hoch die Erstattung ausfällt, erfragen Sie im Geschäft, nicht in einem Ratgeber: Sie hängt vom Einkauf und vom Erstattungsanbieter ab, und eine amtliche Tabelle, die wir wiedergeben könnten, haben wir nicht gefunden.",
        },
      ],
      faq: [
        { q: "Ab welchem Betrag gibt es in Korea eine Steuerrückerstattung?", a: `Ab ${F.taxRefundMin} pro Einkauf, inklusive Steuer, in einem teilnehmenden Tax-free-Geschäft.` },
        {
          q: "Kann ich die Steuer sofort im Geschäft zurückbekommen?",
          a: `Ja, in Geschäften, die das anbieten – wenn der Einkauf unter ${F.immediateRefundPerPurchase} liegt und Ihre Sofort-Erstattungen auf der Reise insgesamt höchstens ${F.immediateRefundTotal} betragen.`,
        },
      ],
    },
    {
      slug: "medikamente-mitnehmen",
      enSlug: "bringing-medicines",
      title: "Medikamente nach Korea mitnehmen: was vor der Reise genehmigt werden muss",
      description: `Normale Medikamente: bis ${F.medsBottles} Flaschen oder ${F.medsMonths} Monatsvorrat. ADHS-Mittel, Codein, Schlafmittel und andere kontrollierte Mittel nur mit Genehmigung.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "gesundheitsversorgung-korea", "fluessigkeiten-und-powerbanks"],
      blocks: [
        {
          p: "Die meisten Reisenden haben ein paar Packungen gewöhnlicher Medikamente dabei und müssen sich um nichts sorgen. Eine Minderheit bringt etwas mit, das nach koreanischem Recht als kontrollierte Substanz gilt – oft ein Medikament, das zu Hause ganz normal ist –, und dafür braucht es eine Genehmigung vor der Reise, nicht eine Erklärung am Flughafen.",
        },
        { h2: "Gewöhnliche Medikamente für den Eigenbedarf" },
        {
          ul: [
            `Bis zu ${F.medsBottles} Flaschen oder bis zu ${F.medsMonths} Monatsvorrat bei der verordneten Dosierung`,
            `Sie werden auf Ihren zollfreien Freibetrag von ${F.customsGoodsAllowance} angerechnet – nicht zusätzlich gewährt`,
            "Manche Arzneimittel, die der Zoll für missbrauchsanfällig hält (zum Beispiel bestimmte Mittel gegen Erektionsstörungen), sind auf ein Rezept eines koreanischen Arztes beschränkt",
          ],
        },
        { source: { label: "Zollamt Incheon — Arzneimittel bei der Einreise (Koreanisch)", url: "https://www.customs.go.kr/incheon/cm/cntnts/cntntsView.do?mi=10784&cntntsId=5480" } },
        { h2: "Medikamente mit Betäubungsmittel- oder psychotropen Wirkstoffen" },
        {
          p: "Enthält ein Medikament einen Betäubungsmittel- oder psychotropen Wirkstoff, behandelt das koreanische Recht es entsprechend – auch wenn es bei Ihnen rezeptfrei erhältlich ist oder ärztlich verordnet wurde. Wer es ohne vorherige Genehmigung des Ministeriums für Lebensmittel- und Arzneimittelsicherheit (MFDS) einführt, kann strafrechtlich verfolgt werden.",
        },
        {
          p: "Der koreanische Zoll nennt unter anderem diese Wirkstoffe:",
        },
        {
          ul: [
            "Codein, Morphin, Oxycodon, Tapentadol, Methadon",
            "Methylphenidat und Amphetamine – verbreitete ADHS-Medikamente",
            "Zolpidem, Alprazolam, Diazepam, Lorazepam, Clonazepam – Schlaf- und Beruhigungsmittel",
            "Dextromethorphan – in manchen Husten- und Erkältungsmitteln enthalten",
          ],
        },
        { h2: "So erhalten Sie die Genehmigung" },
        {
          ul: [
            "Beantragen Sie sie vor der Reise online beim MFDS über das Portal nedrug.mfds.go.kr (Antrag auf Einfuhr von Betäubungsmitteln zur Eigenbehandlung)",
            "Sie brauchen eine Kopie Ihrer Reisedokumente, ein Dokument mit Medikament, Menge, Aufenthaltsdauer und Zweck sowie eine ärztliche Diagnose (einer koreanischen oder ausländischen medizinischen Einrichtung) – oder eine Ausfuhrgenehmigung der Regierung Ihres Abreiselandes",
            "Die Regel gilt für Koreaner und Ausländer gleichermaßen",
          ],
        },
        { source: { label: "Korea Customs Service — Arzneimittel mit Betäubungsmittelwirkstoffen (Koreanisch)", url: "https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=13807&cntntsId=7640" } },
        { source: { label: "Ministerium für Lebensmittel- und Arzneimittelsicherheit (MFDS) — Einfuhr von Betäubungsmitteln zur Eigenbehandlung", url: "https://www.mfds.go.kr/brd/m_74/view.do?seq=43906" } },
        { h2: "Cannabis und CBD" },
        {
          p: "Alle Cannabisprodukte – einschließlich CBD-Öl und Vape-Kartuschen – sind bei der Einfuhr nach Korea strafbar. Das gilt auch dann, wenn sie zu Hause legal sind.",
        },
        {
          note: "Wie lange das MFDS für die Entscheidung braucht, wissen wir nicht; eine Bearbeitungszeit veröffentlicht es nicht. Stellen Sie den Antrag so früh wie möglich, und wenn Sie unsicher sind, ob ein Wirkstoff kontrolliert ist, fragen Sie vor dem Abflug beim MFDS nach.",
        },
      ],
      faq: [
        {
          q: "Darf ich meine ADHS-Medikamente nach Korea mitnehmen?",
          a: "Methylphenidat und Amphetamine sind in Korea kontrolliert. Sie brauchen vor der Reise eine Genehmigung des Ministeriums für Lebensmittel- und Arzneimittelsicherheit, die Sie online mit einer ärztlichen Diagnose beantragen.",
        },
        {
          q: "Ist CBD-Öl in Korea erlaubt?",
          a: "Nein. Laut dem koreanischen Zoll ist die Einfuhr aller Cannabisprodukte, einschließlich CBD-Öl und Vape-Kartuschen, strafbar.",
        },
      ],
    },
    {
      slug: "rauchen-vapes-alkohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: `Rauchen, Vapes und Alkohol in Korea: ab ${F.customsAgeMin} nach Geburtsjahr, ${F.smokingFine} Bußgeld`,
      description: `Alkohol und Tabak gibt es ab dem Jahr, in dem Sie ${F.customsAgeMin} werden. Rauchen oder Dampfen im Rauchverbot kostet ${F.smokingFine}. Promillegrenze: ${F.bacLimit}.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "autofahren-in-korea", "geld-und-trinkgeld"],
      blocks: [
        { h2: "Das Mindestalter" },
        {
          p: `Der Verkauf von Alkohol und Tabak an Personen unter ${F.customsAgeMin} ist verboten. Korea rechnet dabei nach Geburtsjahr: Ab dem 1. Januar des Jahres, in dem Sie ${F.customsAgeMin} werden, gelten Sie dafür als erwachsen. Verkäufer müssen Alter und Identität prüfen – haben Sie Ihren Pass dabei.`,
        },
        { source: { label: "Jugendschutzgesetz (Juvenile Protection Act) (Koreanisch)", url: "https://www.law.go.kr/법령/청소년 보호법" } },
        { h2: "Wo Sie nicht rauchen dürfen" },
        {
          p: "Große Teile des öffentlichen Lebens sind gesetzlich rauchfrei. Das Gesetz zur Gesundheitsförderung (National Health Promotion Act) erklärt ganze Einrichtungen zu Nichtraucherbereichen, darunter:",
        },
        {
          ul: [
            "Wartebereiche und Bahnsteige an Flughäfen, Bahnhöfen und Busterminals, unterirdische Passagen und größere Verkehrsmittel",
            "Hotels und andere touristische Unterkünfte",
            "Restaurants, Cafés und Bäckereien ab einer bestimmten Fläche",
            "Krankenhäuser, Schulen und öffentliche Badehäuser",
            "Weitere Orte, die Kommunen per Satzung festlegen – oft Parks, Bushaltestellen und Straßen",
          ],
        },
        {
          p: `Wer im Nichtraucherbereich raucht, zahlt ein Bußgeld von ${F.smokingFine} (in kommunal festgelegten Zonen bis zu diesem Betrag).`,
        },
        { h2: "E-Zigaretten zählen mit" },
        {
          p: "Seit dem 24. April 2026 gelten nach koreanischem Recht auch Produkte aus natürlichem oder synthetischem Nikotin als Tabak. Das Gesundheitsministerium bestätigt, dass E-Zigaretten mit synthetischem Nikotin denselben Rauchverboten unterliegen wie Zigaretten.",
        },
        { source: { label: "Ministerium für Gesundheit und Soziales — E-Zigaretten mit synthetischem Nikotin, 23. Juni 2026 (Koreanisch)", url: "https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1490975&mid=a10503010100&nPage=1&tag=" } },
        { source: { label: "Gesetz zur Gesundheitsförderung (National Health Promotion Act) (Koreanisch)", url: "https://www.law.go.kr/법령/국민건강증진법" } },
        { h2: "Alkohol in der Öffentlichkeit" },
        {
          p: "Ein landesweites Alkoholverbot in der Öffentlichkeit gibt es nicht. Kommunen können per Satzung alkoholfreie Zonen festlegen, mit Bußgeldern von bis zu 100.000 Won – achten Sie in Parks und ähnlichen Orten auf Schilder.",
        },
        { h2: "Alkohol am Steuer" },
        {
          p: `Die Grenze liegt bei einer Blutalkoholkonzentration von ${F.bacLimit} und gilt für Fahrräder ebenso wie für Autos.`,
        },
        { source: { label: "Straßenverkehrsgesetz (Road Traffic Act) (Koreanisch)", url: "https://www.law.go.kr/법령/도로교통법" } },
        {
          note: `Für die Einfuhr von Zigaretten und Alkohol nach Korea gilt der Zollfreibetrag (${F.customsCigarettes} Zigaretten; Alkohol bis ${F.customsAlcoholLitres} Liter und ${F.customsAlcoholValue}); Reisende unter ${F.customsAgeMin} haben für beides keinen Freibetrag.`,
        },
      ],
      faq: [
        { q: "Ab welchem Alter darf man in Korea Alkohol trinken?", a: `Ab ${F.customsAgeMin}, gerechnet nach Geburtsjahr: Ab dem 1. Januar des Jahres, in dem Sie ${F.customsAgeMin} werden, dürfen Sie Alkohol und Tabak kaufen.` },
        { q: "Darf ich dort dampfen, wo Rauchen verboten ist?", a: "Nein. E-Zigaretten, auch Liquids mit synthetischem Nikotin, gelten als Tabak und dürfen in Nichtraucherbereichen nicht benutzt werden." },
      ],
    },
    {
      slug: "reisen-mit-kindern",
      enSlug: "travelling-with-children",
      title: `Mit Kindern nach Korea: bis ${F.ketaChildMaxAge} keine K-ETA, aber eine Einreisekarte`,
      description: `Kinder, die am Einreisetag höchstens ${F.ketaChildMaxAge} sind, brauchen keine K-ETA, aber eine Einreisekarte. Was für Familien an Grenze und im Flugzeug sonst gilt.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "einreisekarte-und-e-gates", "fluessigkeiten-und-powerbanks", "keta-befreiung-2026"],
      blocks: [
        { h2: "K-ETA: altersbedingt befreit" },
        {
          p: `Seit dem 3. Juli 2023 sind Reisende, die am Tag der Einreise nach Korea ${F.ketaChildMaxAge} Jahre oder jünger – oder ${F.ketaSeniorMinAge} Jahre oder älter – sind, von der K-ETA-Pflicht befreit. Entscheidend ist das Alter am Einreisetag: Wer vor der Ankunft 18 wird, braucht eine eigene K-ETA – es sei denn, die Staatsangehörigkeit fällt unter die vorübergehende Befreiung bis zum ${EXEMPT_UNTIL}, wie derzeit bei deutschen Reisepässen.`,
        },
        { source: { label: "K-ETA — Hinweis zur Altersbefreiung (Koreanisch)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175266&esntlPnotiMtYn=Y" } },
        { h2: "Die Einreisekarte gilt trotzdem" },
        {
          p: "Weil befreite Kinder keine K-ETA haben, müssen sie eine Einreisekarte abgeben – online über die e-Arrival card oder auf Papier. Kinder unter 14 Jahren können nicht die Hauptperson eines Antrags sein, daher füllt ein Elternteil die Karte für die Familie aus; Gruppenanmeldungen für mehr als 9 Personen funktionieren nur am PC.",
        },
        {
          p: "Laut dem offiziellen K-ETA-Hinweis dürfen altersbedingt befreite Reisende trotzdem eine K-ETA beantragen (und die Gebühr zahlen), wenn sie deren Vorteile nutzen wollen, etwa den Wegfall der Einreisekarte.",
        },
        { source: { label: "Justizministerium — wer die e-Arrival card ausfüllen muss", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "Bei der Einreisekontrolle" },
        {
          ul: [
            `Kinder unter ${F.biometricsMinAge} Jahren geben bei der Einreise keine Fingerabdrücke und kein Gesichtsfoto ab`,
            `Die Ankunfts-e-Gates sind für Besucher ab ${F.egateMinAge} Jahren – Familien teilen sich daher oft auf: Erwachsene am Gate, Kinder am besetzten Schalter`,
          ],
        },
        { h2: "Auf dem Rückflug" },
        {
          p: `Babybedarf für ein Kind bis ${F.babyItemsMaxAge} Jahre – Milch, Wasser, Saft, Babynahrung, Feuchttücher – darf über die ${LIQUID_ML}-Grenze hinaus in der für den Flug nötigen Menge in die Kabine.`,
        },
        {
          note: "Eine amtliche koreanische Pflicht zu einer Einverständniserklärung der Eltern, wenn ein Kind allein oder mit nur einem Elternteil reist, haben wir nicht gefunden. Fluggesellschaften oder deutsche Stellen können trotzdem eine verlangen – fragen Sie dort nach.",
        },
      ],
      faq: [
        { q: "Braucht mein Kind eine K-ETA für Korea?", a: `Nicht, wenn es am Tag der Einreise ${F.ketaChildMaxAge} Jahre oder jünger ist. Ab 18 am Einreisetag braucht es eine eigene – außer die Staatsangehörigkeit ist vorübergehend befreit, wie bei deutschen Reisepässen bis zum ${EXEMPT_UNTIL}.` },
        { q: "Braucht mein Kind eine Einreisekarte?", a: "Ja. Kinder ohne K-ETA geben eine Einreisekarte ab; ein Elternteil kann sie auf der Seite der e-Arrival card für sie ausfüllen." },
      ],
    },
    {
      slug: "nahverkehr-und-t-money",
      enSlug: "transport-cards",
      title: "Unterwegs in Korea: T-money, Busse ohne Bargeld und Seouls Climate Card",
      description: "Eine Prepaid-Karte gilt fast überall. Viele Busse nehmen kein Bargeld, und seit 1. Oktober 2026 gilt Seouls Climate Card nur noch in Seoul.",
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "geld-und-trinkgeld", "handy-und-sim-karte"],
      blocks: [
        {
          p: "Korea ist eines der wenigen Länder, in denen Sie mit einer einzigen Prepaid-Karte fast überall in Bus, U-Bahn und Taxi kommen. Für Besucher ist es das Nützlichste, gleich am ersten Tag eine zu kaufen.",
        },
        { h2: "T-money- und EZL-Karten" },
        {
          ul: [
            "Laut der Korea Tourism Organization funktionieren T-money- und EZL-Karten in praktisch allen öffentlichen Verkehrsmitteln Koreas: U-Bahn, Stadtbusse, Express- und Überlandbusse, Taxis und Züge",
            "Erhältlich in Convenience Stores im ganzen Land und an den Informationsschaltern der Seouler U-Bahn (Linien 1–8); die Karte selbst kostet 3.000–5.000 Won",
            "Aufladen an U-Bahn-Automaten oder in Convenience Stores",
            "Wer mit Karte zahlt, bekommt den Umsteigerabatt zwischen Bus und U-Bahn; bei Barzahlung nicht",
          ],
        },
        { source: { label: "Korea Tourism Organization — Verkehrskarten", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140663" } },
        { h2: "Viele Busse nehmen kein Bargeld" },
        {
          p: "Koreanische Städte stellen ihre Busse auf bargeldlosen Betrieb um. Seoul nennt 183 bargeldlose Linien (Januar 2026), während andere Seouler Busse noch Bargeld annehmen. Laut der Korea Tourism Organization sind alle Stadtbusse in Incheon, Daegu und Gwangju bargeldlos. Auch die Regeln für kostenloses Umsteigen unterscheiden sich von Stadt zu Stadt – Seoul erlaubt bis zu vier kostenlose Umstiege, Busan zwei.",
        },
        { source: { label: "Stadtverwaltung Seoul — bargeldlose Buslinien, Januar 2026 (Koreanisch)", url: "https://news.seoul.go.kr/traffic/archives/508898" } },
        { source: { label: "Korea Tourism Organization — Stadtbusse", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140659" } },
        { h2: "Kurzzeittickets der Seouler Climate Card" },
        {
          ul: [
            "Tickets für unbegrenzte Fahrten über 1, 2, 3, 5 oder 7 Tage zu Preisen von 5.000 bis 20.000 Won, auf einer physischen Karte, die 3.000 Won kostet",
            "Das Ticket startet beim Aufladen – im Voraus für ein späteres Datum aufladen geht nicht",
            "Seit dem 1. Oktober 2026 gilt es für die U-Bahn innerhalb Seouls, für in Seoul zugelassene Stadt- und Quartierbusse (einschließlich Nacht- und Ringbusse) und für das Aussteigen an den Terminals 1 und 2 des Flughafens Incheon",
            "Gebiete außerhalb Seouls, die früher eingeschlossen waren – Gimpo, Goyang, Gwacheon, Guri, Seongnam, Hanam, Namyangju und weitere –, gehören nicht mehr dazu",
            "Seit dem 17. März 2026 akzeptieren die neuen Fahrkartenautomaten der Seouler U-Bahn-Linien 1–8 ausländische Visa- und Mastercard-Karten zum Kaufen und Aufladen des Tickets, mit einer Servicegebühr von durchschnittlich 3,7 %",
          ],
        },
        { source: { label: "Stadtverwaltung Seoul — Geltungsbereich der Climate-Card-Kurzzeittickets ab 1. Oktober 2026 (Koreanisch)", url: "https://news.seoul.go.kr/traffic/archives/519012" } },
        { source: { label: "Stadtverwaltung Seoul — ausländische Karten an Fahrkartenautomaten ab 17. März 2026 (Koreanisch)", url: "https://news.seoul.go.kr/traffic/archives/516544" } },
        {
          note: "Englischsprachige Seiten, auch manche offiziellen, beschreiben noch den alten Geltungsbereich der Climate Card und schreiben, ausländische Karten könnten nicht verwendet werden. Aktuell sind die oben verlinkten Mitteilungen der Stadt Seoul vom Oktober 2026.",
        },
      ],
      faq: [
        { q: "Funktioniert T-money auch außerhalb von Seoul?", a: "Ja. Laut der Korea Tourism Organization funktionieren T-money- und EZL-Karten in praktisch allen öffentlichen Verkehrsmitteln im ganzen Land, auch in Taxis und Zügen." },
        { q: "Kann ich den Bus in Korea bar bezahlen?", a: "Nicht immer. Viele Stadtbusse sind bargeldlos – 183 Linien in Seoul und laut der Korea Tourism Organization alle Stadtbusse in Incheon, Daegu und Gwangju. Besorgen Sie sich zuerst eine Verkehrskarte." },
      ],
    },
    {
      slug: "handy-und-sim-karte",
      enSlug: "phones-and-sim-cards",
      title: "SIM-Karte oder eSIM in Korea: Reisepass nicht vergessen",
      description: "Koreanische Mobilfunkanbieter müssen Ihre Identität prüfen – bei Besuchern per Reisepass. Wo es Prepaid-SIM und eSIM gibt, was sich 2026 ändert.",
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "nahverkehr-und-t-money", "notrufnummern-korea"],
      blocks: [
        { h2: "Wo Sie eine bekommen" },
        {
          ul: [
            "Die Roaming-Center der koreanischen Mobilfunkanbieter an den großen internationalen Flughäfen – Incheon, Gimpo, Gimhae und Jeju – verkaufen Prepaid-SIM-Karten (USIM) und geben online bestellte Karten aus",
            "In Incheon Terminal 1 haben alle drei Anbieter rund um die Uhr geöffnete Roaming-Center in der Ankunftsebene",
            "Auch große Convenience-Store-Ketten verkaufen physische USIM-Karten, der Bestand schwankt aber je nach Filiale",
            "eSIMs kaufen Sie online und richten sie per QR-Code ein – prüfen Sie vorher, ob Ihr Handy eSIM unterstützt",
          ],
        },
        { source: { label: "Korea Tourism Organization — Strom und Kommunikation", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "Incheon International Airport — Telekommunikationseinrichtungen", url: "https://www.airport.kr/ap_en/1536/subview.do" } },
        { h2: "Identitätsprüfung ist gesetzlich vorgeschrieben" },
        {
          p: "Das koreanische Recht verpflichtet Mobilfunkanbieter, die Identität aller zu prüfen, die einen Anschluss abschließen – auch über Händler und Geschäfte –, und erlaubt ihnen, den Vertrag abzulehnen, wenn Sie das verweigern. Für Ausländer ist der Reisepass eines der zulässigen Dokumente. Haben Sie ihn beim SIM-Kauf dabei.",
        },
        { source: { label: "Durchführungsverordnung zum Telekommunikationsgesetz, Artikel 37-7 (Koreanisch)", url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290813&chrClsCd=010202&urlMode=lsInfoP&efYd=20261001&ancYnChk=0" } },
        { h2: "Was sich 2026 geändert hat" },
        {
          ul: [
            "Korea verschärft die Anmeldung von Mobilfunkanschlüssen, um Betrug zu bekämpfen. Seit dem 6. Juli 2026 wird schrittweise eine Gesichtsprüfung eingeführt – für Anmeldungen mit koreanischem Personalausweis oder Führerschein",
            "Laut dem Ministerium für Wissenschaft und IKT wurde die Zahl der Anschlüsse, die ein Ausländer mit einem Reisepass eröffnen kann, von zwei auf einen gesenkt",
            "Die Fotoprüfung soll in der zweiten Jahreshälfte 2026 auf ausländische Ausweise und 2027 auf Reisepässe ausgeweitet werden",
          ],
        },
        { source: { label: "Ministerium für Wissenschaft und IKT — Maßnahmen gegen den Missbrauch von Mobilfunkanschlüssen, 30. Juni 2026 (Koreanisch)", url: "https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3187497" } },
        {
          note: "Wir nennen keine Preise und empfehlen keine Anbieter. Ob eine bestimmte reine Daten-eSIM nach Ihrem Pass fragt, hängt vom Produkt ab; die gesetzliche Identitätsprüfung gilt für Verträge mit koreanischen Mobilfunkanbietern.",
        },
      ],
      faq: [
        { q: "Brauche ich meinen Reisepass, um in Korea eine SIM-Karte zu kaufen?", a: "Ja. Das koreanische Recht verpflichtet Mobilfunkanbieter, die Identität der Kunden zu prüfen, und für Ausländer ist der Reisepass ein zulässiges Dokument." },
        { q: "Kann ich am Flughafen Incheon eine SIM-Karte kaufen?", a: "Ja. Die Roaming-Center der Anbieter in Incheon verkaufen Prepaid-SIM-Karten; in Terminal 1 haben alle drei Anbieter rund um die Uhr geöffnete Center in der Ankunftsebene." },
      ],
    },
    {
      slug: "steckdosen-und-strom",
      enSlug: "power-plugs",
      title: "Steckdosen und Spannung in Korea: 220 V, 60 Hz, zwei runde Stifte",
      description: "Koreas Steckdosen: zwei runde Stifte, 220 Volt, 60 Hertz. Deutsche Stecker passen meist ohne Adapter – was Sie am Ladegerät prüfen sollten.",
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "handy-und-sim-karte"],
      blocks: [
        {
          p: "Die Standardspannung in Korea beträgt 220 Volt bei 60 Hertz, und Haushaltssteckdosen haben zwei runde Löcher. Eine Tourismusseite der Stadt Gangneung nennt diese Steckdosen Typ C und F – dieselben wie in Deutschland, Frankreich, Österreich, Spanien und Griechenland.",
        },
        { h2: "Was das für Ihre Geräte bedeutet" },
        {
          ul: [
            "Stecker aus Kontinentaleuropa, also auch aus Deutschland, passen in der Regel ohne Adapter",
            "Stecker mit flachen Stiften – wie im Vereinigten Königreich, in den USA, in Festlandchina, Taiwan und vielen anderen Ländern – brauchen einen Adapter",
            "Schauen Sie auf das Etikett Ihres Ladegeräts: Steht dort INPUT 100–240V, funktioniert es mit 220 V. Steht dort nur 110 V oder 120 V, ist es nicht für die koreanische Spannung ausgelegt",
            "Hotels verleihen oder verkaufen manchmal Adapter; erhältlich sind sie auch an Flughäfen, in größeren Geschäften und in Convenience Stores",
          ],
        },
        { source: { label: "Korea Tourism Organization — Strom und Kommunikation", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "Durchführungsbestimmung zum Elektrizitätsgesetz, Anhang 3 – Standardspannung und -frequenz (Koreanisch, PDF)", url: "https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=168742119&bylClsCd=110201" } },
      ],
      faq: [
        { q: "Welche Steckdosen gibt es in Korea?", a: "Steckdosen für Stecker mit zwei runden Stiften (Typ C und F) – wie in den meisten Ländern Kontinentaleuropas, auch in Deutschland. Die Spannung beträgt 220 V bei 60 Hz." },
        { q: "Brauche ich in Korea einen Adapter für deutsche Stecker?", a: "In der Regel nicht – Stecker aus Kontinentaleuropa passen meist ohne Adapter. Prüfen Sie aber auf dem Etikett des Ladegeräts die INPUT-Angabe: Bei 100–240 V funktioniert es mit 220 V." },
      ],
    },
    {
      slug: "feiertage-korea",
      enSlug: "public-holidays",
      title: "Feiertage in Korea: der Rest von 2026 und das Jahr 2027",
      description: "Die amtlichen Feiertage Koreas für Ende 2026 und ganz 2027, mit Seollal, Chuseok und Ersatzfeiertagen – und zwei Feiertagen, die 2026 neu hinzukamen.",
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "nahverkehr-und-t-money", "korea-aufenthaltsdauer"],
      blocks: [
        {
          p: "Die koreanischen Feiertage sind gesetzlich festgelegt, und die Mondkalender-Feiertage verschieben sich jedes Jahr. Die Regierung veröffentlicht den amtlichen Kalender für jedes Jahr im Amtsblatt. Zwei Änderungen von 2026 sind wichtig: Der Tag der Arbeit (1. Mai) wurde zum Feiertag, ebenso alle Nationalfeiertage – damit ist auch der Tag der Verfassung (17. Juli) wieder ein Feiertag.",
        },
        { h2: "Rest von 2026" },
        { ul: ["Freitag, 25. Dezember — Weihnachten"] },
        { h2: "2027 (amtlicher Kalender)" },
        {
          ul: [
            "1. Januar (Fr) — Neujahr",
            "6.–8. Februar (Sa–Mo) — Seollal (Mondneujahr), mit Ersatzfeiertag am 9. Februar (Di)",
            "1. März (Mo) — Tag der Unabhängigkeitsbewegung",
            "1. Mai (Sa) — Tag der Arbeit, Ersatzfeiertag 3. Mai (Mo)",
            "5. Mai (Mi) — Kindertag",
            "13. Mai (Do) — Buddhas Geburtstag",
            "6. Juni (So) — Gedenktag für die Gefallenen (kein Ersatzfeiertag)",
            "17. Juli (Sa) — Tag der Verfassung, Ersatzfeiertag 19. Juli (Mo)",
            "15. August (So) — Tag der Befreiung, Ersatzfeiertag 16. August (Mo)",
            "14.–16. September (Di–Do) — Chuseok",
            "3. Oktober (So) — Tag der Staatsgründung, Ersatzfeiertag 4. Oktober (Mo)",
            "9. Oktober (Sa) — Hangeul-Tag, Ersatzfeiertag 11. Oktober (Mo)",
            "25. Dezember (Sa) — Weihnachten, Ersatzfeiertag 27. Dezember (Mo)",
          ],
        },
        { source: { label: "Korea AeroSpace Administration — amtlicher Kalender 2027, Bekanntmachung im Amtsblatt 2026-0078 (Koreanisch)", url: "https://astro.kasi.re.kr/kor/life/post/almanac?search_year=2027&bbs_uniq_id=almanac" } },
        { source: { label: "Verordnung über die Feiertage der Behörden (Koreanisch)", url: "https://www.law.go.kr/법령/관공서의공휴일에관한규정" } },
        { h2: "Was Sie rund um Seollal und Chuseok erwartet" },
        {
          p: "Die beiden großen Mondkalender-Feiertage dauern jeweils drei Tage, und viele Menschen fahren dann in ihre Heimatorte. Planen Sie Verkehrsmittel und Unterkunft frühzeitig, wenn Ihre Reise in diese Zeit fällt. Das Gesetz legt die Feiertage für Behörden fest und überlässt die Arbeitstage in Privatunternehmen dem Arbeitsrecht – ob ein bestimmtes Geschäft oder Restaurant geöffnet hat, entscheidet es also selbst. Erkundigen Sie sich vorher.",
        },
        {
          note: "Die Regierung kann per Kabinettsbeschluss zusätzliche einmalige Feiertage festlegen, manchmal kurzfristig. Wird einer für 2027 angekündigt, aktualisieren wir diese Seite.",
        },
      ],
      faq: [
        { q: "Wann ist Chuseok 2027?", a: "Vom 14. bis 16. September 2027 (Dienstag bis Donnerstag), laut dem im Amtsblatt veröffentlichten amtlichen Kalender." },
        { q: "Wann ist Seollal (Mondneujahr) 2027?", a: "Vom 6. bis 8. Februar 2027, mit einem Ersatzfeiertag am Dienstag, 9. Februar, weil einer der Tage auf einen Sonntag fällt." },
      ],
    },
    {
      slug: "autofahren-in-korea",
      enSlug: "driving-in-korea",
      title: "Autofahren in Korea: mit Internationalem Führerschein, ein Jahr lang",
      description: `Der Führerschein allein reicht nicht: Besucher fahren mit Internationalem Führerschein, ein Jahr ab Einreise. Rechtsverkehr, Promillegrenze ${F.bacLimit}.`,
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "rauchen-vapes-alkohol", "notrufnummern-korea"],
      blocks: [
        {
          p: "Die Regel, die viele überrascht: In Korea dürfen Sie mit Ihrem nationalen Führerschein allein nicht fahren. Die koreanische Verkehrsbehörde (Road Traffic Authority) sagt das ausdrücklich.",
        },
        { h2: "Was Sie brauchen" },
        {
          ul: [
            "Einen Internationalen Führerschein (IDP), ausgestellt nach dem Genfer Abkommen von 1949 oder dem Wiener Übereinkommen von 1968 über den Straßenverkehr, oder",
            "Einen IDP oder Führerschein, der aufgrund eines bilateralen Abkommens zwischen Korea und dem ausstellenden Land anerkannt ist",
            "Er gilt ein Jahr ab dem Tag Ihrer Einreise nach Korea, und nur für die darauf eingetragenen Fahrzeugklassen",
            "Sie dürfen damit ein Auto mieten, aber kein gewerbliches Fahrzeug wie ein Taxi oder einen Miet-Lkw fahren",
          ],
        },
        {
          note: "Für Reisende aus Deutschland: Laut dem Auswärtigen Amt gilt der deutsche Internationale Führerschein zusammen mit dem deutschen Führerschein bis zu einem Jahr. Nehmen Sie also beide mit. (Andere Länder äußern sich zu ihren eigenen Führerscheinen; für Festlandchina haben wir keine amtliche Aussage gefunden.)",
        },
        { source: { label: "Auswärtiges Amt — Republik Korea: Reise- und Sicherheitshinweise", url: "https://www.auswaertiges-amt.de/de/service/laender/republikkoreasuedkorea-node/republikkoreasuedkoreasicherheit-216132" } },
        { source: { label: "Straßenverkehrsgesetz, Artikel 96 (Koreanisch)", url: "https://www.law.go.kr/법령/도로교통법" } },
        { source: { label: "Road Traffic Authority — ausländische Führerscheine (Koreanisch)", url: "https://www.safedriving.or.kr/diGuide/selectDiGuide05.do" } },
        { h2: "Ein Auto mieten" },
        {
          p: "Laut der Korea Tourism Organization verlangen Autovermietungen einen IDP, einen Reisepass und eine Kreditkarte auf den Namen des Fahrers, und Fahrer müssen älter als 21 sein. Manche wollen auch den heimischen Führerschein sehen – haben Sie ihn dabei. Das sind Bedingungen der Unternehmen, keine gesetzlichen Vorgaben; fragen Sie bei der Firma nach, bei der Sie buchen.",
        },
        { source: { label: "Korea Tourism Organization — Autofahren in Korea", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140664" } },
        { h2: "Verkehrsregeln" },
        {
          ul: [
            "Es gilt Rechtsverkehr",
            "Alle Insassen müssen auf allen Sitzen angeschnallt sein; Kleinkinder brauchen einen Kindersitz",
            `Die Promillegrenze liegt bei einer Blutalkoholkonzentration von ${F.bacLimit}, und sie gilt auch fürs Fahrrad. Auf Verlangen der Polizei müssen Sie einen Atemtest machen`,
            "Motorradfahrer und Mitfahrer müssen einen Helm tragen",
            "Entfernungen in Kilometern, Geschwindigkeiten in km/h",
          ],
        },
      ],
      faq: [
        { q: "Darf ich in Korea mit meinem deutschen Führerschein fahren?", a: "Nicht allein. Laut der Road Traffic Authority reicht ein im Ausland ausgestellter Führerschein für sich nicht aus. Besucher brauchen einen Internationalen Führerschein nach dem Genfer oder Wiener Abkommen oder einen aufgrund eines bilateralen Abkommens anerkannten. Das Auswärtige Amt nennt den deutschen IDP zusammen mit dem deutschen Führerschein." },
        { q: "Wie lange gilt ein Internationaler Führerschein in Korea?", a: "Ein Jahr ab dem Tag der Einreise nach Korea (Straßenverkehrsgesetz, Artikel 96)." },
      ],
    },
    {
      slug: "gesundheitsversorgung-korea",
      enSlug: "healthcare-for-visitors",
      title: "Gesundheitsversorgung in Korea: Sie zahlen selbst – also versichern",
      description: "Touristen sind in Korea nicht staatlich krankenversichert. Kliniken mit Dolmetschern, die richtige Nummer und warum eine Reiseversicherung zählt.",
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "notrufnummern-korea", "medikamente-mitnehmen"],
      blocks: [
        { h2: "Kein staatlicher Schutz für Touristen" },
        {
          p: "Koreas staatliche Krankenversicherung (National Health Insurance) umfasst Ausländer erst, wenn sie als Einwohner registriert sind (Ausländerregistrierung) und eine bestimmte Zeit in Korea gelebt haben oder für einen koreanischen Arbeitgeber arbeiten. Wer visumfrei oder mit K-ETA einreist, ist nicht versichert und zahlt die Behandlung selbst.",
        },
        {
          p: "Ein Abkommen, das deutschen Touristen in Korea eine kostenlose oder ermäßigte Behandlung verschafft, haben wir nicht gefunden. Das deutsch-koreanische Sozialversicherungsabkommen betrifft die Renten- und Arbeitslosenversicherung, nicht die Krankenversicherung. Das Auswärtige Amt empfiehlt deshalb eine Auslandsreise-Kranken- und Rückholversicherung; auch das französische Außenministerium rät zu einer Reisekrankenversicherung, die den Rücktransport abdeckt.",
        },
        { source: { label: "Gesetz über die staatliche Krankenversicherung, Artikel 109 (Koreanisch)", url: "https://www.law.go.kr/법령/국민건강보험법" } },
        { source: { label: "France Diplomatie — Südkorea, Gesundheit (Französisch)", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/coree-du-sud/conseils-aux-voyageurs-sante" } },
        { source: { label: "Auswärtiges Amt — Republik Korea: Reise- und Sicherheitshinweise", url: "https://www.auswaertiges-amt.de/de/service/laender/republikkoreasuedkorea-node/republikkoreasuedkoreasicherheit-216132" } },
        { h2: "Krankenhäuser mit Dolmetschern" },
        {
          p: "Viele große koreanische Krankenhäuser haben ein International Health Care Center mit Personal, das Englisch und andere Sprachen spricht und bei Terminen und Behandlung hilft. Die Korea Tourism Organization listet sie auf, darunter Seoul Asan, Severance, Samsung Medical Center, das Seoul National University Hospital und Seoul St. Mary's. Sie arbeiten zu Bürozeiten an Werktagen – nachts und am Wochenende gehen Sie in eine Notaufnahme.",
        },
        { source: { label: "Korea Tourism Organization — Notfälle und internationale Kliniken", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "Welche Nummer Sie wählen" },
        {
          ul: [
            "119 — Rettungsdienst (und Feuerwehr)",
            "1339 — die rund um die Uhr erreichbare Hotline der koreanischen Seuchenschutzbehörde (KDCA) für Fragen zu Krankheiten und bei Verdacht auf Infektionskrankheiten. Sie ist keine Notrufnummer für den Rettungsdienst. Ausländern wird über eine Dreierkonferenz mit 1330 oder 1345 geholfen",
            "1330 — Korea Travel Helpline, für Dolmetschen und touristische Auskünfte (+82-2-1330 aus dem Ausland)",
          ],
        },
        { source: { label: "Korea Disease Control and Prevention Agency — 1339 Callcenter (Koreanisch)", url: "https://kdca.go.kr/kdca/2777/subview.do" } },
        {
          note: "Mitgebrachte Medikamente sind eine eigene Frage: Für manche gängigen verschreibungspflichtigen Arzneimittel brauchen Sie vor der Reise eine Genehmigung. Siehe die Seite zum Mitnehmen von Medikamenten.",
        },
      ],
      faq: [
        { q: "Ist die Behandlung für Touristen in Korea kostenlos?", a: "Nein. Kurzzeitbesucher sind nicht in Koreas staatlicher Krankenversicherung versichert und zahlen die Behandlung selbst. Das Auswärtige Amt empfiehlt eine Auslandsreise-Kranken- und Rückholversicherung." },
        { q: "Ist 1339 eine Notrufnummer?", a: "Nicht für den Rettungsdienst. 1339 ist die Hotline der Seuchenschutzbehörde für Fragen zu Krankheiten und bei Verdacht auf Infektionen. Für einen Rettungswagen wählen Sie 119." },
      ],
    },
    {
      slug: "notrufnummern-korea",
      enSlug: "emergency-and-safety",
      title: "Notrufnummern in Korea: 112, 119 und Hilfe auf Deutsch",
      description: "112 für Polizei, 119 für Feuerwehr und Rettungsdienst. Welche Hotlines dolmetschen (auch Deutsch), die Emergency Ready App und Warnungen aufs Handy.",
      checked: CHECKED,
      practical: true,
      related: ["ankunft-in-korea", "gesundheitsversorgung-korea", "handy-und-sim-karte"],
      blocks: [
        { h2: "Die Nummern" },
        {
          ul: [
            "112 — Polizei",
            "119 — Feuerwehr und Rettungsdienst",
            "1339 — Fragen zu Infektionskrankheiten (Korea Disease Control and Prevention Agency)",
            "1330 — Korea Travel Helpline: touristische Auskünfte, Dolmetschen und Beschwerden, per Telefon oder Chat (+82-2-1330 aus dem Ausland)",
            "1345 — Immigration Contact Center des Justizministeriums (+82-2-1345 aus dem Ausland)",
          ],
        },
        { source: { label: "Korea Tourism Organization — Notfälle", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "Hilfe in Ihrer Sprache" },
        {
          ul: [
            "1345: 20 Sprachen, darunter Deutsch, werktags von 9 bis 22 Uhr (nach 18 Uhr nur Koreanisch, Englisch und Chinesisch). Die Anrufe sind kostenpflichtig",
            "112: Seit März 2024 bietet die Polizei-Hotline rund um die Uhr Dolmetschen auf Englisch und Chinesisch über eine Dreierkonferenz",
            "1330: Die Korea Tourism Organization nennt Englisch, Japanisch, Chinesisch, Russisch, Vietnamesisch, Thai, Malaiisch und Indonesisch – kein Deutsch",
            "119 nimmt Meldungen auch per SMS an, mit Fotos oder Video – hilfreich, wenn Sprechen schwierig ist",
          ],
        },
        { source: { label: "Korean Culture and Information Service — Dolmetschen rund um die Uhr für 112 (2024)", url: "https://www.korean-culture.org/eng/webzine/202405/sub10.html" } },
        { source: { label: "Korea Immigration Service — 1345 Immigration Contact Center (Koreanisch)", url: "https://www.immigration.go.kr/immigration/1530/subview.do" } },
        { h2: "Emergency Ready App und Warnungen aufs Handy" },
        {
          p: "Die Emergency Ready App der koreanischen Regierung zeigt Katastrophenwarnungen, die nächsten Schutzräume, Notaufnahmen und Polizeiwachen sowie Erste-Hilfe-Anleitungen. Die Korea Tourism Organization führt sie in 22 Sprachen, darunter Deutsch, Englisch, Chinesisch und Französisch. Unabhängig davon zeigen die lautesten Notfall-SMS, die an alle Handys in einem Gebiet gehen, seit Februar 2024 die Art der Katastrophe und die Stärke eines Erdbebens auch auf Englisch, nicht nur auf Koreanisch.",
        },
        { source: { label: "Korea Tourism Organization — nützliche Apps und Angebote", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=198570" } },
        { source: { label: "Ministerium für Inneres und Sicherheit — Englisch in Notfallwarnungen, 28. Februar 2024 (Koreanisch)", url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=107429" } },
        { h2: "Zivilschutzübungen" },
        {
          p: "In Korea finden gelegentlich Zivilschutzübungen statt: Sirenen heulen, der Verkehr hält an und Menschen werden in Schutzräume geleitet, oft in U-Bahn-Stationen oder Tiefgaragen. Laut dem Auswärtigen Amt sind Ausländer nicht zur Teilnahme verpflichtet, es wird ihnen aber empfohlen.",
        },
        {
          note: "Etwas verloren? Die Polizei betreibt unter lost112.go.kr ein Fundbüro-Portal auf Koreanisch, Englisch, Japanisch und Chinesisch.",
        },
      ],
      faq: [
        { q: "Wie lautet die Notrufnummer in Korea?", a: "112 für die Polizei, 119 für Feuerwehr und Rettungsdienst." },
        { q: "Gibt es in Korea eine Hotline auf Deutsch?", a: "Ja, das Immigration Contact Center 1345 bietet Deutsch an – werktags, und die Anrufe sind kostenpflichtig. Die Polizei-Hotline 112 dolmetscht rund um die Uhr auf Englisch und Chinesisch, die Korea Travel Helpline 1330 hat kein Deutsch. Die Emergency Ready App gibt es auf Deutsch." },
      ],
    },
  ],
};
