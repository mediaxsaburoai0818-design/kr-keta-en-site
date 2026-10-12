import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * フランス語（/fr/）の入国後実用ページ（英語 data/pages-practical.ts の15ページ＝ハブ＋14テーマ）。
 * 読者＝フランスのパスポート保持者。二人称は vous。サイト名は「Guide K-ETA」。
 * ファクト＝~/projects/kr-entry-facts-2026-10-12.md（fr行・スラッグ表）／生ログ raw-C（仏外務省の運転・医療）
 *
 * ⚠️ フランスは K-ETA 一時免除国（〜2026-12-31）＋到着自動ゲート42か国の対象。
 *    免除中は K-ETA を持たない＝入国申告書が必要。
 * ⚠️ 運転: 仏外務省「1年未満の滞在は国際免許で可」「レンタルは仏免許では不可」を前面に。
 * ⚠️ 医療: 仏外務省「保険は impératif」。仏韓社会保障協定は労働者の社会保険＝観光客の医療を
 *    カバーするかは不明（どちらとも書かない）。
 * ⚠️ 緊急: 1345＝仏語あり（平日・有料）／112＝英中のみ／1330＝仏語なし／Emergency Ready App＝仏語あり。
 * ⚠️ 仏語版に無い英語ページ（border-questions, quarantine, customs-allowances, passport-and-details,
 *    leaving-and-returning, how-long-can-you-stay）にはリンクしない。
 * ⚠️ 数値は F から。表記だけを仏語にした定数（値は F と同じものを指す）:
 */
const EXEMPT_UNTIL = "31 décembre 2026"; // = F.exemptionUntil
const EGATE_SINCE = "16 mars 2026"; // = F.egateSince
const POWERBANK_SINCE = "20 avril 2026"; // = F.powerBankSince
const LIQUID_BAG = "1 litre"; // = F.liquidBag
const LIQUID_ML = "100 ml"; // = F.liquidMl
const BAC = "0,03 %"; // = F.bacLimit

const CHECKED = "12 octobre 2026";
const HUB = "arriver-en-coree";

export const frPractical: PracticalPack = {
  ui: { faq: "Questions fréquentes", source: "Source", related: "À lire aussi" },
  articles: [
    /* ── Hub ── */
    {
      slug: HUB,
      enSlug: "arriving-in-korea",
      title: "Arriver en Corée : le guide pratique, avec ou sans K-ETA",
      description: "La K-ETA ou la dispense vous fait embarquer. La suite — carte d'arrivée, e-gates, argent, détaxe, santé, urgences — vérifiée aux sources officielles.",
      related: ["carte-arrivee-et-e-gates", "argent-et-pourboire", "soins-en-coree"],
      checked: CHECKED,
      practical: false,
      blocks: [
        {
          p: `La K-ETA — ou la dispense temporaire qui couvre de nombreuses nationalités, dont la France, jusqu'au ${EXEMPT_UNTIL} — ne règle qu'une question : pouvez-vous embarquer pour la Corée sans visa ? Elle ne dit rien de ce qui se passe à l'aéroport, de ce que vous pouvez emporter, de la façon de payer, de vous déplacer ou de réagir en cas de problème. Ces pages le font. Chacune est vérifiée auprès de l'autorité coréenne compétente, avec un lien vers sa page.`,
        },
        { h2: "À la frontière" },
        { links: ["carte-arrivee-et-e-gates", "keta-dispense-2026", "medicaments-en-voyage", "voyager-avec-enfants"] },
        { h2: "Argent" },
        { links: ["argent-et-pourboire", "detaxe-coree"] },
        { h2: "Se déplacer et rester joignable" },
        { links: ["transports-et-t-money", "conduire-en-coree", "telephone-et-carte-sim", "prises-et-tension", "jours-feries-coree"] },
        { h2: "Santé et sécurité" },
        { links: ["soins-en-coree", "numeros-urgence-coree", "tabac-vapotage-alcool"] },
        { h2: "Le vol retour" },
        { links: ["liquides-et-batteries-externes", "coree-duree-de-sejour"] },
        {
          note: "Un sujet sans page dédiée : la validité du passeport. La loi coréenne exige un passeport valide, et nous n'avons trouvé aucune durée minimale de validité restante fixée officiellement pour les visiteurs exemptés de visa — les compagnies aériennes et les pays de transit peuvent toutefois avoir leurs propres règles.",
        },
      ],
    },

    /* ── Carte d'arrivée et e-gates ── */
    {
      slug: "carte-arrivee-et-e-gates",
      enSlug: "arrival-card-and-e-gates",
      title: "Carte d'arrivée et e-gates en Corée : qui remplit quoi, qui évite la file",
      description: `Sans K-ETA, carte d'arrivée obligatoire (en ligne dès ${F.earrivalDaysBefore} jours avant). Depuis le ${EGATE_SINCE}, e-gates pour ${F.egateCountries} pays dès ${F.egateMinAge} ans, France incluse.`,
      related: [HUB, "voyager-avec-enfants", "keta-dispense-2026"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Deux choses déterminent le déroulement de votre arrivée en Corée, et aucune des deux n'est la K-ETA elle-même : devez-vous remettre une carte d'arrivée, et pouvez-vous passer par les portiques automatiques plutôt que par les guichets ?",
        },
        { h2: "Qui doit remplir une carte d'arrivée" },
        {
          p: "En principe, tout étranger qui entre en Corée remet une carte d'arrivée. Pour les visiteurs, la principale exception est la K-ETA valide : si vous en avez une et entrez sans visa, vous ne remplissez pas de carte. Tous les autres la remplissent — y compris les personnes qui n'ont pas besoin de K-ETA.",
        },
        {
          ul: [
            `Ressortissants des pays sous dispense temporaire de K-ETA (jusqu'au ${EXEMPT_UNTIL}), dont la France — carte obligatoire`,
            `Enfants de ${F.ketaChildMaxAge} ans ou moins et adultes de ${F.ketaSeniorMinAge} ans ou plus, dispensés de K-ETA — carte obligatoire`,
            "Titulaires d'un visa — carte obligatoire (même s'ils ont aussi une K-ETA mais entrent avec le visa)",
            "Titulaires d'une K-ETA valide entrant sans visa — pas de carte",
          ],
        },
        {
          note: "C'est le seul avantage pratique de demander une K-ETA alors que vous en êtes dispensé : les autorités coréennes indiquent que les voyageurs dispensés peuvent quand même faire la demande, payer les frais et ne pas remplir la carte d'arrivée. À vous de juger si cela vaut les frais — la carte elle-même est gratuite et se remplit en quelques minutes.",
        },
        { h2: "La carte d'arrivée électronique (e-Arrival card)" },
        {
          ul: [
            `À remplir sur e-arrivalcard.go.kr à partir de ${F.earrivalDaysBefore} jours avant l'arrivée, comptés en heure coréenne, jour d'arrivée inclus (arrivée le 31 : le 29, le 30 ou le 31)`,
            "Elle est gratuite. Le site officiel fonctionne sur ordinateur et sur navigateur mobile ; il n'existe pas d'application",
            "Elle a la même valeur que la carte papier, qui reste disponible si vous préférez",
            `Elle expire ${F.earrivalValidHours} heures après l'envoi, et dès que vous passez l'immigration — remplissez-en une nouvelle à chaque entrée`,
            "Vous pouvez encore la remplir après l'atterrissage, tant que vous n'êtes pas arrivé au guichet de l'immigration",
            "C'est un système distinct de la K-ETA. Les sites qui regroupent les deux et les facturent ne sont pas officiels",
          ],
        },
        { source: { label: "Ministère de la Justice — guide de l'e-Arrival card", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacGuide.do" } },
        { source: { label: "Ministère de la Justice — qui doit remplir l'e-Arrival card", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "Empreintes digitales et photo" },
        {
          p: `Les étrangers de ${F.biometricsMinAge} ans et plus font scanner leurs deux index et sont photographiés au visage à l'entrée en Corée. Les enfants de moins de ${F.biometricsMinAge} ans en sont dispensés.`,
        },
        { source: { label: "Service coréen de l'immigration — vérification des empreintes digitales des étrangers", url: "https://www.immigration.go.kr/immigration/2429/subview.do" } },
        { h2: "Les e-gates à l'arrivée" },
        {
          p: `Depuis le ${EGATE_SINCE}, les visiteurs exemptés de visa âgés de ${F.egateMinAge} ans et plus, ressortissants de ${F.egateCountries} pays et territoires, peuvent s'enregistrer à l'arrivée puis utiliser les portiques automatiques. La liste comprend les États de l'UE et de l'espace Schengen — donc la France —, le Royaume-Uni, le Canada, le Japon, Taïwan, Hong Kong, Macao, Singapour, les Émirats arabes unis, le Mexique, l'Australie et la Nouvelle-Zélande. Les États-Unis n'y figurent pas.`,
        },
        {
          ul: [
            "Les comptoirs d'enregistrement se trouvent dans les halls d'immigration des arrivées à Incheon (terminaux 1 et 2) et à Jeju",
            "Les étapes : scanner votre passeport, enregistrer vos empreintes, enregistrer votre visage — puis passer le portique",
            "Une fois enregistré, vous pouvez réutiliser les portiques lors de vos visites suivantes, y compris dans d'autres aéroports",
          ],
        },
        { h2: "Les e-gates au départ" },
        {
          p: `À la sortie, c'est plus simple : les visiteurs de courte durée âgés de ${F.egateMinAge} ans et plus peuvent utiliser les e-gates de départ sans enregistrement préalable.`,
        },
        { source: { label: "Communiqué du ministère de la Justice, 16 mars 2026 — e-gates d'arrivée ouverts à 42 pays (en coréen, PDF)", url: "https://www.immigration.go.kr/bbs/moj/182/491982/download.do" } },
        { source: { label: "Service coréen de l'immigration — Smart Entry Service (SES)", url: "https://www.immigration.go.kr/immigration/1527/subview.do" } },
        {
          note: "Passer par un e-gate ne change rien à votre séjour. La durée autorisée découle toujours de l'accord d'exemption de visa de votre pays, et ce n'est pas la K-ETA qui donne accès aux portiques.",
        },
      ],
      faq: [
        {
          q: "Faut-il une carte d'arrivée si mon pays est dispensé de K-ETA ?",
          a: "Oui. Les voyageurs sous dispense temporaire — dont les Français — ainsi que les enfants et les seniors dispensés en raison de leur âge doivent remettre une carte d'arrivée, en ligne (e-Arrival card) ou sur papier. Seuls les visiteurs sans visa titulaires d'une K-ETA valide en sont exemptés.",
        },
        {
          q: "Avec un passeport français, puis-je utiliser les e-gates à l'arrivée ?",
          a: `Oui, à partir de ${F.egateMinAge} ans : la France fait partie des ${F.egateCountries} pays et territoires admis depuis le ${EGATE_SINCE}. Il faut d'abord s'enregistrer dans le hall des arrivées à Incheon (terminaux 1 et 2) ou à Jeju. Au départ, aucun enregistrement n'est nécessaire.`,
        },
        {
          q: "L'e-Arrival card est-elle la même chose que la K-ETA ?",
          a: `Non. L'e-Arrival card est une déclaration d'arrivée gratuite, valable pour une seule entrée ; la K-ETA est une autorisation de voyage payante, valable jusqu'à ${F.validYears} ans. Le site officiel le précise explicitement.`,
        },
      ],
    },

    /* ── Liquides et batteries externes ── */
    {
      slug: "liquides-et-batteries-externes",
      enSlug: "airport-security-liquids",
      title: `Quitter la Corée en avion : liquides de ${LIQUID_ML} et deux batteries externes maximum`,
      description: `En cabine : contenants de ${LIQUID_ML} dans un sac fermé de ${LIQUID_BAG}. Depuis le ${POWERBANK_SINCE}, ${F.powerBankMax} batteries externes max. par personne, sans recharge à bord.`,
      related: [HUB, "detaxe-coree", "medicaments-en-voyage"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Pour les liquides, les règles de sûreté des aéroports coréens sont les règles internationales habituelles. Ce qui a changé en 2026, ce sont les batteries externes : la Corée applique désormais l'une des règles les plus strictes, et celle-ci a été adoptée comme norme internationale.",
        },
        { h2: "Liquides en bagage cabine (vols internationaux)" },
        {
          ul: [
            `Chaque contenant fait ${LIQUID_ML} au maximum — c'est la taille du contenant qui compte, pas ce qu'il reste dedans`,
            `Tous les contenants dans un seul sac plastique transparent et fermé de ${LIQUID_BAG} maximum par personne`,
            "Les aliments liquides ou en gel comptent aussi — gochujang et kimchi compris",
            "Les vols intérieurs en Corée n'ont pas de limite pour les liquides",
          ],
        },
        { h2: "Exceptions" },
        {
          ul: [
            `Les produits pour bébé destinés à un enfant de ${F.babyItemsMaxAge} ans ou moins — lait, eau, jus, aliments pour bébé, lingettes — dans la quantité nécessaire pour le vol`,
            `Les médicaments liquides de plus de ${LIQUID_ML} (l'insuline, par exemple) avec une attestation médicale ou une ordonnance en coréen ou en anglais, dans la quantité nécessaire à bord ; le reste va en soute`,
            "Les liquides achetés en duty free, quel que soit le volume, uniquement dans le sac scellé du duty free, non ouvert jusqu'à l'embarquement sur le vol vers votre destination finale",
          ],
        },
        {
          note: "Si vous changez d'avion dans un autre aéroport, ce sont ses règles qui s'appliquent, et vos liquides peuvent y être confisqués même si Incheon les a laissés passer. Renseignez-vous auprès de votre compagnie avant d'acheter en duty free pour une correspondance.",
        },
        { source: { label: "Aéroport international d'Incheon — objets interdits (en coréen)", url: "https://www.airport.kr/ap_ko/906/subview.do" } },
        { source: { label: "Aéroport international d'Incheon — FAQ sur les objets interdits (en coréen)", url: "https://www.airport.kr/ap_ko/907/subview.do" } },
        { h2: `Batteries externes depuis le ${POWERBANK_SINCE}` },
        {
          ul: [
            `${F.powerBankMax} batteries externes au maximum par personne, de ${F.powerBankWh} chacune au plus`,
            "Entre 100 et 160 Wh, il faut l'accord de la compagnie aérienne ; au-delà de 160 Wh, elles sont interdites",
            "En cabine uniquement — les batteries externes sont interdites en soute",
            "Interdiction de recharger la batterie externe à bord, et de s'en servir pour recharger un téléphone ou tout autre appareil",
          ],
        },
        {
          p: "La Corée a adopté cette règle après l'incendie d'une batterie externe à bord d'un avion d'Air Busan en janvier 2025. L'Organisation de l'aviation civile internationale l'a intégrée à ses instructions sur les marchandises dangereuses le 27 mars 2026. Certains pays appliquent déjà des règles plus strictes : vérifiez aussi les limites de votre compagnie pour le vol retour.",
        },
        { source: { label: "Ministère du Territoire, des Infrastructures et des Transports — règles sur les batteries externes, 8 avril 2026 (en coréen)", url: "https://www.molit.go.kr/USR/NEWS/m_71/dtl.jsp?lcmspage=1&id=95091874" } },
        {
          note: `Vous lirez peut-être que les aéroports coréens ont assoupli la limite des liquides grâce à de nouveaux scanners. Nous ne l'avons trouvé ni sur le site du ministère ni sur celui de l'aéroport d'Incheon, qui indiquent toujours la règle des ${LIQUID_ML} — prévoyez donc de la respecter.`,
        },
      ],
      faq: [
        {
          q: "Puis-je mettre du kimchi dans mon bagage cabine ?",
          a: `Uniquement dans des contenants de ${LIQUID_ML} au maximum, placés dans le sac de ${LIQUID_BAG} — l'aéroport d'Incheon le traite comme un aliment liquide. Les plus grandes quantités vont en soute.`,
        },
        {
          q: "Combien de batteries externes puis-je emporter sur un vol au départ de la Corée ?",
          a: `Depuis le ${POWERBANK_SINCE} : ${F.powerBankMax} par personne au maximum, de ${F.powerBankWh} chacune au plus, en bagage cabine uniquement, et vous ne pouvez ni les recharger ni les utiliser pendant le vol.`,
        },
      ],
    },

    /* ── Argent et pourboire ── */
    {
      slug: "argent-et-pourboire",
      enSlug: "money-and-tipping",
      title: `L'argent en Corée : wons, cartes, pourboire et espèces au-delà de ${F.cashDeclareOver}`,
      description: `Cartes largement acceptées, espèces utiles aux marchés, pas de pourboire. Espèces et chèques au-delà de ${F.cashDeclareOver} au total : à déclarer.`,
      related: [HUB, "detaxe-coree", "transports-et-t-money"],
      checked: CHECKED,
      practical: true,
      blocks: [
        { p: "La monnaie coréenne est le won (KRW, ₩). Les billets sont de 1 000, 5 000, 10 000 et 50 000 wons ; les pièces de 10, 50, 100 et 500 wons." },
        { h2: "Cartes et espèces" },
        {
          ul: [
            "Visa, Mastercard, American Express, JCB et UnionPay sont acceptées dans la plupart des magasins, hôtels et grands magasins, selon l'Office national du tourisme coréen (KTO)",
            "Les marchés traditionnels et les stands de rue peuvent n'accepter que les espèces — prévoyez-en",
            "Les cartes de transport prépayées rechargeables comme T-money permettent aussi de payer dans les commerces partenaires qui affichent leur logo",
            "Changez votre argent dans une banque ou un bureau de change agréé ; les banques ouvrent en général de 9 h à 16 h en semaine",
          ],
        },
        { source: { label: "Office national du tourisme coréen (KTO) — monnaie et change", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140040" } },
        { h2: "Pourboire" },
        {
          p: "L'Office national du tourisme coréen est clair : en Corée, le pourboire n'est ni obligatoire ni attendu. Au restaurant, l'eau et le resservice des accompagnements sont gratuits.",
        },
        { source: { label: "Office national du tourisme coréen (KTO) — la cuisine coréenne", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140727" } },
        { h2: `Arriver avec plus de ${F.cashDeclareOver}` },
        {
          p: `Si les devises étrangères, les billets en wons et les chèques que vous transportez — chèques de banque en wons compris — dépassent ${F.cashDeclareOver} au total, vous devez les déclarer à la douane à l'arrivée. Cochez la rubrique 3 de la déclaration du voyageur et indiquez le montant ; la douane vous remet un certificat de déclaration. Il ne peut plus être délivré une fois sorti de la zone d'immigration : faites-le à l'arrivée.`,
        },
        {
          ul: [
            "Il s'agit d'une déclaration, pas d'un plafond — vous pouvez apporter davantage si vous le déclarez",
            `L'absence de déclaration peut entraîner une amende administrative pouvant atteindre ${F.cashAdminFineMax}`,
            `Si le montant non déclaré dépasse ${F.cashCriminalOver}, c'est une infraction pénale (jusqu'à un an de prison ou une amende)`,
            "En quittant la Corée, un visiteur peut ressortir jusqu'au montant déclaré à l'arrivée sans nouvelle déclaration",
          ],
        },
        { source: { label: "Service des douanes coréennes — déclaration des devises", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10800&cntntsId=5500" } },
        { source: { label: "Loi sur les opérations de change (en coréen)", url: "https://www.law.go.kr/법령/외국환거래법" } },
      ],
      faq: [
        { q: "Faut-il laisser un pourboire au restaurant en Corée ?", a: "Non. L'Office national du tourisme coréen indique que le pourboire n'est ni obligatoire ni attendu en Corée." },
        {
          q: "Combien d'espèces puis-je apporter en Corée ?",
          a: `Il n'y a pas de plafond, mais si le total des devises, billets en wons et chèques dépasse ${F.cashDeclareOver}, vous devez le déclarer à la douane à l'arrivée.`,
        },
      ],
    },

    /* ── Détaxe ── */
    {
      slug: "detaxe-coree",
      enSlug: "tax-refund-for-tourists",
      title: `Détaxe en Corée : dès ${F.taxRefundMin} d'achat, et remboursement immédiat`,
      description: `TVA remboursée aux visiteurs dès ${F.taxRefundMin} d'achat en boutique tax free. Sur place : achat sous ${F.immediateRefundPerPurchase}, ${F.immediateRefundTotal} max. par séjour.`,
      related: [HUB, "argent-et-pourboire", "liquides-et-batteries-externes"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "En Corée, les prix incluent la TVA. Les visiteurs étrangers peuvent se la faire rembourser sur les marchandises qu'ils emportent, à condition d'acheter dans une boutique tax free participante et que les marchandises quittent la Corée dans les délais.",
        },
        { h2: "Qui peut en bénéficier" },
        {
          ul: [
            "Les non-résidents — l'Office national du tourisme coréen les définit comme les étrangers séjournant en Corée moins de six mois",
            "Pas les résidents en Corée, les entreprises, ni les diplomates et militaires en poste en Corée",
          ],
        },
        { h2: "Les règles" },
        {
          ul: [
            `Minimum ${F.taxRefundMin} par achat (TTC), dans une boutique qui propose la détaxe`,
            `Les marchandises doivent quitter la Corée dans les ${F.taxRefundExportMonths} mois suivant l'achat`,
            "Sont exclus le tabac, les médicaments pouvant créer une dépendance et les marchandises interdites à l'importation ou à l'exportation",
          ],
        },
        { h2: "Le remboursement immédiat en magasin" },
        {
          p: `De nombreuses boutiques déduisent la taxe directement en caisse. Cela ne fonctionne que si chaque achat est inférieur à ${F.immediateRefundPerPurchase} et si vos achats avec remboursement immédiat ne dépassent pas ${F.immediateRefundTotal} au total pendant le séjour. Au-delà, vous demandez le remboursement plus tard.`,
        },
        { h2: "Se faire rembourser à l'aéroport ou en ville" },
        {
          ul: [
            "Au départ, ayez votre passeport, les tickets de caisse et les marchandises (non ouvertes, non utilisées) — la douane peut demander à les voir",
            "Dans les aéroports équipés de bornes douanières : saisissez votre passeport et les données du ticket sur la borne ; n'allez au comptoir des douanes que si vous êtes sélectionné pour un contrôle",
            `Les comptoirs de remboursement en ville acceptent les tickets jusqu'à ${F.downtownRefundCap} chacun ; ceux des aéroports et terminaux portuaires n'ont pas de plafond`,
          ],
        },
        { source: { label: "Service des douanes coréennes — remboursement de taxe", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=10803&cntntsId=5504" } },
        { source: { label: "Office national du tourisme coréen (KTO) — duty free et détaxe", url: "https://english.visitkorea.or.kr/svc/contents/infoBscView.do?vcontsId=140736" } },
        { source: { label: "Règles spéciales de TVA pour les touristes étrangers — décret présidentiel (en coréen)", url: "https://www.law.go.kr/법령/외국인관광객 등에 대한 부가가치세 및 개별소비세 특례규정" } },
        {
          note: "Vérifiez le montant remboursé en boutique, pas dans un guide : il dépend de l'achat et de l'opérateur de détaxe, et nous n'avons trouvé aucun barème officiel que nous puissions reproduire.",
        },
      ],
      faq: [
        { q: "Quel est l'achat minimum pour la détaxe en Corée ?", a: `${F.taxRefundMin} par achat, TTC, dans une boutique tax free participante.` },
        {
          q: "Puis-je récupérer la taxe directement en magasin ?",
          a: `Oui, dans les boutiques qui le proposent, si l'achat est inférieur à ${F.immediateRefundPerPurchase} et si vos remboursements immédiats ne dépassent pas ${F.immediateRefundTotal} sur le séjour.`,
        },
      ],
    },

    /* ── Médicaments ── */
    {
      slug: "medicaments-en-voyage",
      enSlug: "bringing-medicines",
      title: "Médicaments en Corée : ce qui exige une autorisation avant le départ",
      description: `Médicaments courants : ${F.medsBottles} flacons ou ${F.medsMonths} mois de traitement max. Traitements du TDAH, codéine, somnifères et autres stupéfiants : autorisation préalable.`,
      related: [HUB, "soins-en-coree", "liquides-et-batteries-externes"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "La plupart des voyageurs emportent quelques boîtes de médicaments courants et n'ont aucun souci à se faire. Une minorité emporte un produit que la loi coréenne traite comme une substance contrôlée — souvent un médicament banal dans leur pays — et cela demande une autorisation avant le voyage, pas une explication à l'aéroport.",
        },
        { h2: "Médicaments courants pour votre usage personnel" },
        {
          ul: [
            `Jusqu'à ${F.medsBottles} flacons, ou jusqu'à ${F.medsMonths} mois de traitement selon la posologie prescrite`,
            `Ils comptent dans votre franchise de ${F.customsGoodsAllowance} — ils ne s'y ajoutent pas`,
            "Certains médicaments que la douane juge susceptibles d'abus (par exemple certains produits contre les troubles de l'érection) sont limités à une prescription d'un médecin coréen",
          ],
        },
        { source: { label: "Douane principale d'Incheon — médicaments à l'arrivée (en coréen)", url: "https://www.customs.go.kr/incheon/cm/cntnts/cntntsView.do?mi=10784&cntntsId=5480" } },
        { h2: "Médicaments contenant un stupéfiant ou un psychotrope" },
        {
          p: "Si un médicament contient un principe actif stupéfiant ou psychotrope, la loi coréenne le traite comme tel, même s'il est en vente libre chez vous ou s'il vous a été prescrit par un médecin. L'introduire sans autorisation préalable du ministère de la Sécurité des aliments et des médicaments (MFDS) peut donner lieu à des poursuites.",
        },
        {
          p: "Parmi les substances citées par la douane coréenne :",
        },
        {
          ul: [
            "Codéine, morphine, oxycodone, tapentadol, méthadone",
            "Méthylphénidate et amphétamines — des traitements courants du TDAH",
            "Zolpidem, alprazolam, diazépam, lorazépam, clonazépam — somnifères et tranquillisants",
            "Dextrométhorphane — présent dans certains produits contre la toux et le rhume",
          ],
        },
        { h2: "Obtenir l'autorisation" },
        {
          ul: [
            "Faites la demande en ligne auprès du MFDS, sur son portail nedrug.mfds.go.kr (demande d'importation de stupéfiants pour traitement personnel), avant le voyage",
            "Il faut une copie de vos documents de voyage, un document indiquant le médicament, la quantité, la durée du séjour et le motif, et un diagnostic établi par un médecin (établissement coréen ou étranger) — ou une autorisation d'exportation délivrée par les autorités de votre pays de départ",
            "La règle s'applique aux Coréens comme aux étrangers",
          ],
        },
        { source: { label: "Service des douanes coréennes — médicaments contenant des stupéfiants (en coréen)", url: "https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=13807&cntntsId=7640" } },
        { source: { label: "Ministère de la Sécurité des aliments et des médicaments (MFDS) — importation de stupéfiants pour traitement personnel", url: "https://www.mfds.go.kr/brd/m_74/view.do?seq=43906" } },
        { h2: "Cannabis et CBD" },
        {
          p: "Tous les produits à base de cannabis — y compris l'huile de CBD et les cartouches de vapoteuse — exposent à des poursuites pénales s'ils sont introduits en Corée. C'est vrai même s'ils sont légaux dans votre pays.",
        },
        {
          note: "Nous ne savons pas combien de temps le MFDS met à se prononcer, et il ne publie pas de délai d'instruction. Faites la demande le plus tôt possible et, si vous ne savez pas si une substance est contrôlée, interrogez le MFDS avant de partir.",
        },
      ],
      faq: [
        {
          q: "Puis-je emporter mon traitement contre le TDAH en Corée ?",
          a: "Le méthylphénidate et les amphétamines sont contrôlés en Corée. Il faut une autorisation du ministère de la Sécurité des aliments et des médicaments avant le voyage, demandée en ligne avec un diagnostic médical.",
        },
        {
          q: "L'huile de CBD est-elle autorisée en Corée ?",
          a: "Non. La douane coréenne indique que tous les produits à base de cannabis, y compris l'huile de CBD et les cartouches de vapoteuse, exposent à des poursuites pénales s'ils sont introduits en Corée.",
        },
      ],
    },

    /* ── Tabac, vapotage, alcool ── */
    {
      slug: "tabac-vapotage-alcool",
      enSlug: "smoking-vaping-and-alcohol",
      title: `Tabac, vapotage et alcool en Corée : ${F.customsAgeMin} ans par année de naissance, amende de ${F.smokingFine}`,
      description: `Alcool et tabac en vente dès l'année de vos ${F.customsAgeMin} ans. Fumer ou vapoter en zone non-fumeurs : ${F.smokingFine} d'amende. Alcool au volant dès ${BAC}.`,
      related: [HUB, "conduire-en-coree", "medicaments-en-voyage"],
      checked: CHECKED,
      practical: true,
      blocks: [
        { h2: "L'âge légal" },
        {
          p: `La vente d'alcool ou de tabac aux moins de ${F.customsAgeMin} ans est interdite. La Corée compte par année de naissance : à partir du 1er janvier de l'année de vos ${F.customsAgeMin} ans, vous êtes considéré comme majeur sur ce point. Les vendeurs doivent vérifier l'âge et l'identité : ayez votre passeport sur vous.`,
        },
        { source: { label: "Loi sur la protection de la jeunesse (en coréen)", url: "https://www.law.go.kr/법령/청소년 보호법" } },
        { h2: "Où il est interdit de fumer" },
        {
          p: "Une grande partie de la vie publique est non-fumeurs par la loi. La loi sur la promotion de la santé publique rend des établissements entiers non-fumeurs, notamment :",
        },
        {
          ul: [
            "Salles d'attente et quais des aéroports, gares et gares routières, passages souterrains et véhicules de grande taille",
            "Hôtels et autres hébergements touristiques",
            "Restaurants, cafés et boulangeries au-delà d'une certaine surface",
            "Hôpitaux, écoles et bains publics",
            "D'autres lieux désignés par arrêté des collectivités locales — souvent des parcs, arrêts de bus et rues",
          ],
        },
        {
          p: `Fumer dans une zone non-fumeurs est puni d'une amende de ${F.smokingFine} (dans les zones fixées par arrêté local, jusqu'à ce montant).`,
        },
        { h2: "La cigarette électronique compte aussi" },
        {
          p: "Depuis le 24 avril 2026, la loi coréenne inclut dans la définition du tabac les produits fabriqués à partir de nicotine, naturelle ou synthétique. Le ministère de la Santé et des Affaires sociales confirme que les cigarettes électroniques à nicotine synthétique sont soumises aux mêmes règles d'interdiction que les cigarettes.",
        },
        { source: { label: "Ministère de la Santé et des Affaires sociales — cigarettes électroniques à nicotine synthétique, 23 juin 2026 (en coréen)", url: "https://mohw.go.kr/board.es?act=view&bid=0027&list_no=1490975&mid=a10503010100&nPage=1&tag=" } },
        { source: { label: "Loi sur la promotion de la santé publique (en coréen)", url: "https://www.law.go.kr/법령/국민건강증진법" } },
        { h2: "Boire dans l'espace public" },
        {
          p: "Il n'existe pas d'interdiction nationale de boire dans l'espace public. Les collectivités locales peuvent créer par arrêté des zones où l'alcool est interdit, avec des amendes pouvant atteindre 100 000 wons : repérez les panneaux dans les parcs et lieux similaires.",
        },
        { h2: "Alcool au volant" },
        {
          p: `La limite est un taux d'alcool dans le sang de ${BAC} — plus bas que dans de nombreux pays — et elle s'applique aux vélos comme aux voitures.`,
        },
        { source: { label: "Code de la route coréen (en coréen)", url: "https://www.law.go.kr/법령/도로교통법" } },
        {
          note: `L'entrée de cigarettes ou d'alcool en Corée relève de la franchise douanière (${F.customsCigarettes} cigarettes ; alcool jusqu'à ${F.customsAlcoholLitres} litres et ${F.customsAlcoholValue}), et les voyageurs de moins de ${F.customsAgeMin} ans n'ont droit à aucune franchise pour l'un ni pour l'autre.`,
        },
      ],
      faq: [
        { q: "À quel âge peut-on boire de l'alcool en Corée ?", a: `${F.customsAgeMin} ans, comptés par année de naissance : à partir du 1er janvier de l'année de vos ${F.customsAgeMin} ans, vous pouvez acheter de l'alcool et du tabac.` },
        { q: "Puis-je vapoter là où il est interdit de fumer ?", a: "Non. Les cigarettes électroniques, y compris les liquides à nicotine synthétique, sont traitées comme du tabac et ne peuvent pas être utilisées dans les zones non-fumeurs." },
      ],
    },

    /* ── Voyager avec des enfants ── */
    {
      slug: "voyager-avec-enfants",
      enSlug: "travelling-with-children",
      title: `Voyager en Corée avec des enfants : pas de K-ETA jusqu'à ${F.ketaChildMaxAge} ans, mais une carte d'arrivée`,
      description: `À ${F.ketaChildMaxAge} ans ou moins le jour de l'entrée, pas de K-ETA, mais une carte d'arrivée. Ce qui change pour les familles à la frontière et dans l'avion.`,
      related: [HUB, "carte-arrivee-et-e-gates", "liquides-et-batteries-externes", "keta-dispense-2026"],
      checked: CHECKED,
      practical: true,
      blocks: [
        { h2: "K-ETA : dispense liée à l'âge" },
        {
          p: `Depuis le 3 juillet 2023, les voyageurs âgés de ${F.ketaChildMaxAge} ans ou moins — et de ${F.ketaSeniorMinAge} ans ou plus — le jour de leur entrée en Corée sont dispensés de K-ETA. C'est l'âge à la date d'entrée qui compte : un adolescent qui a 18 ans avant l'arrivée doit avoir sa propre K-ETA (sauf si sa nationalité relève de la dispense temporaire jusqu'au ${EXEMPT_UNTIL}, comme la France).`,
        },
        { source: { label: "K-ETA — avis sur la dispense liée à l'âge (en coréen)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=175266&esntlPnotiMtYn=Y" } },
        { h2: "La carte d'arrivée reste obligatoire" },
        {
          p: "Comme ils n'ont pas de K-ETA, les enfants dispensés doivent remettre une carte d'arrivée — en ligne via l'e-Arrival card, ou sur papier. Un enfant de moins de 14 ans ne peut pas être le déclarant principal : un parent remplit donc la carte pour la famille ; la déclaration groupée pour plus de 9 personnes ne fonctionne que sur ordinateur.",
        },
        {
          p: "L'avis officiel sur la K-ETA précise que les voyageurs dispensés en raison de leur âge peuvent quand même faire la demande (et payer les frais) s'ils veulent profiter des avantages de la K-ETA, comme ne pas remplir la carte d'arrivée.",
        },
        { source: { label: "Ministère de la Justice — qui doit remplir l'e-Arrival card", url: "https://www.e-arrivalcard.go.kr/portal/guide/eacTargetGuide.do" } },
        { h2: "À l'immigration" },
        {
          ul: [
            `Les enfants de moins de ${F.biometricsMinAge} ans ne donnent ni empreintes digitales ni photo du visage à l'entrée`,
            `Les e-gates d'arrivée sont réservés aux visiteurs de ${F.egateMinAge} ans et plus — les familles se séparent généralement : les adultes au portique, les enfants à un guichet`,
          ],
        },
        { h2: "Dans l'avion du retour" },
        {
          p: `Les produits pour bébé destinés à un enfant de ${F.babyItemsMaxAge} ans ou moins — lait, eau, jus, aliments pour bébé, lingettes — peuvent aller en cabine au-delà de la limite de ${LIQUID_ML}, dans la quantité nécessaire pour le vol.`,
        },
        {
          note: "Nous n'avons trouvé aucune exigence officielle coréenne d'autorisation parentale lorsqu'un enfant voyage seul ou avec un seul parent. Les compagnies aériennes et votre pays peuvent toutefois en demander une : renseignez-vous auprès d'eux.",
        },
      ],
      faq: [
        { q: "Mon enfant a-t-il besoin d'une K-ETA pour la Corée ?", a: `Non s'il a ${F.ketaChildMaxAge} ans ou moins le jour de l'entrée en Corée. À partir de 18 ans à la date d'entrée, il lui faut la sienne, sauf si sa nationalité est temporairement dispensée — c'est le cas de la France jusqu'au ${EXEMPT_UNTIL}.` },
        { q: "Mon enfant doit-il remplir une carte d'arrivée ?", a: "Oui. Les enfants sans K-ETA remettent une carte d'arrivée ; un parent peut la remplir pour eux sur le site de l'e-Arrival card." },
      ],
    },

    /* ── Transports ── */
    {
      slug: "transports-et-t-money",
      enSlug: "transport-cards",
      title: "Se déplacer en Corée : T-money, bus sans espèces et Climate Card de Séoul",
      description: "Une carte prépayée pour presque tous les transports, des bus sans espèces, et une Climate Card limitée à Séoul depuis le 1er octobre 2026.",
      related: [HUB, "argent-et-pourboire", "telephone-et-carte-sim"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "La Corée est l'un des rares pays où une seule carte prépayée permet de prendre le bus, le métro et le taxi presque partout. Pour un visiteur, en acheter une dès le premier jour est la chose la plus utile à faire.",
        },
        { h2: "Les cartes T-money et EZL" },
        {
          ul: [
            "Selon l'Office national du tourisme coréen, les cartes T-money et EZL fonctionnent dans pratiquement tous les transports publics de Corée : métro, bus urbains, bus express et interurbains, taxis et trains",
            "En vente dans les supérettes de tout le pays et aux centres d'information du métro de Séoul (lignes 1 à 8) ; la carte elle-même coûte de 3 000 à 5 000 wons",
            "Rechargement aux distributeurs de billets du métro ou en supérette",
            "Payer par carte donne droit à la réduction de correspondance bus–métro ; pas en espèces",
          ],
        },
        { source: { label: "Office national du tourisme coréen (KTO) — cartes de transport", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140663" } },
        { h2: "Beaucoup de bus n'acceptent pas les espèces" },
        {
          p: "Les villes coréennes passent leurs bus au paiement sans espèces. Séoul recense 183 lignes sans espèces (janvier 2026), les autres bus de Séoul acceptant encore les espèces. Selon l'Office national du tourisme coréen, tous les bus urbains d'Incheon, de Daegu et de Gwangju sont sans espèces. Les règles de correspondance gratuite varient aussi d'une ville à l'autre — jusqu'à quatre correspondances gratuites à Séoul, deux à Busan.",
        },
        { source: { label: "Ville de Séoul — lignes de bus sans espèces, janvier 2026 (en coréen)", url: "https://news.seoul.go.kr/traffic/archives/508898" } },
        { source: { label: "Office national du tourisme coréen (KTO) — bus urbains", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140659" } },
        { h2: "Les pass courte durée de la Climate Card de Séoul" },
        {
          ul: [
            "Pass à trajets illimités de 1, 2, 3, 5 ou 7 jours, de 5 000 à 20 000 wons, sur une carte physique qui coûte 3 000 wons",
            "Le pass démarre au moment où vous le chargez — impossible de le charger à l'avance pour une date ultérieure",
            "Depuis le 1er octobre 2026, il couvre le métro dans Séoul, les bus urbains et de quartier sous licence de Séoul (bus de nuit et circulaires compris), et la descente aux terminaux 1 et 2 de l'aéroport d'Incheon",
            "Les zones hors de Séoul auparavant incluses — Gimpo, Goyang, Gwacheon, Guri, Seongnam, Hanam, Namyangju et d'autres — ne le sont plus",
            "Depuis le 17 mars 2026, les nouveaux distributeurs des lignes 1 à 8 du métro de Séoul acceptent les cartes Visa et Mastercard étrangères pour acheter et charger le pass, avec des frais de service de 3,7 % en moyenne",
          ],
        },
        { source: { label: "Ville de Séoul — périmètre des pass courte durée de la Climate Card à partir du 1er octobre 2026 (en coréen)", url: "https://news.seoul.go.kr/traffic/archives/519012" } },
        { source: { label: "Ville de Séoul — cartes étrangères aux distributeurs à partir du 17 mars 2026 (en coréen)", url: "https://news.seoul.go.kr/traffic/archives/516544" } },
        {
          note: "Des pages en anglais, y compris certaines pages officielles, décrivent encore l'ancien périmètre de la Climate Card et affirment que les cartes étrangères ne sont pas acceptées. Les avis d'octobre 2026 de la ville de Séoul ci-dessus sont les plus récents.",
        },
      ],
      faq: [
        { q: "La carte T-money fonctionne-t-elle hors de Séoul ?", a: "Oui. Selon l'Office national du tourisme coréen, les cartes T-money et EZL fonctionnent dans pratiquement tous les transports publics du pays, taxis et trains compris." },
        { q: "Peut-on payer le bus en espèces en Corée ?", a: "Pas toujours. Beaucoup de bus urbains sont sans espèces — 183 lignes à Séoul, et tous les bus urbains d'Incheon, de Daegu et de Gwangju selon l'Office national du tourisme coréen. Procurez-vous d'abord une carte de transport." },
      ],
    },

    /* ── Téléphone et carte SIM ── */
    {
      slug: "telephone-et-carte-sim",
      enSlug: "phones-and-sim-cards",
      title: "Carte SIM ou eSIM en Corée : n'oubliez pas votre passeport",
      description: "Les opérateurs coréens vérifient votre identité, avec le passeport pour un visiteur. Où trouver une SIM prépayée ou une eSIM, et les nouveautés 2026.",
      related: [HUB, "transports-et-t-money", "numeros-urgence-coree"],
      checked: CHECKED,
      practical: true,
      blocks: [
        { h2: "Où en acheter une" },
        {
          ul: [
            "Les centres d'itinérance des opérateurs coréens dans les grands aéroports internationaux — Incheon, Gimpo, Gimhae et Jeju — vendent des cartes SIM prépayées (USIM) et remettent celles commandées en ligne",
            "Au terminal 1 d'Incheon, les trois opérateurs ont des centres d'itinérance ouverts 24 h/24 au niveau des arrivées",
            "Les grandes chaînes de supérettes vendent aussi des cartes USIM physiques, mais le stock varie selon le magasin",
            "Les eSIM s'achètent en ligne et s'activent en scannant un QR code — vérifiez d'abord que votre téléphone est compatible eSIM",
          ],
        },
        { source: { label: "Office national du tourisme coréen (KTO) — électricité et communications", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "Aéroport international d'Incheon — télécommunications", url: "https://www.airport.kr/ap_en/1536/subview.do" } },
        { h2: "Une vérification d'identité imposée par la loi" },
        {
          p: "La loi coréenne oblige les opérateurs mobiles à vérifier l'identité de toute personne qui souscrit un abonnement, y compris chez les revendeurs et en boutique, et les autorise à refuser si vous ne vous y prêtez pas. Pour les étrangers, le passeport fait partie des documents acceptés. Ayez-le sur vous quand vous achetez une SIM.",
        },
        { source: { label: "Décret d'application de la loi sur les télécommunications, article 37-7 (en coréen)", url: "https://www.law.go.kr/LSW/lsInfoR.do?lsiSeq=290813&chrClsCd=010202&urlMode=lsInfoP&efYd=20261001&ancYnChk=0" } },
        { h2: "Ce qui a changé en 2026" },
        {
          ul: [
            "La Corée durcit les souscriptions téléphoniques pour lutter contre la fraude. La vérification faciale a commencé progressivement le 6 juillet 2026, pour les souscriptions faites avec une carte d'identité de résident coréen ou un permis de conduire coréen",
            "Le ministère des Sciences et des TIC indique avoir réduit de deux à une le nombre de lignes qu'un étranger peut ouvrir avec un passeport",
            "Il prévoit d'étendre le contrôle par photo aux cartes d'identité d'étranger au second semestre 2026, et aux passeports en 2027",
          ],
        },
        { source: { label: "Ministère des Sciences et des TIC — mesures contre l'usage frauduleux des téléphones, 30 juin 2026 (en coréen)", url: "https://www.msit.go.kr/bbs/view.do?sCode=user&mId=307&mPid=208&bbsSeqNo=94&nttSeqNo=3187497" } },
        {
          note: "Nous n'indiquons pas de prix et ne recommandons pas de vendeur. Qu'une eSIM « data seule » demande votre passeport dépend du produit ; la vérification d'identité légale s'applique aux contrats avec les opérateurs mobiles coréens.",
        },
      ],
      faq: [
        { q: "Faut-il mon passeport pour acheter une carte SIM en Corée ?", a: "Oui. La loi coréenne oblige les opérateurs mobiles à vérifier l'identité de l'abonné, et pour les étrangers, le passeport est un document accepté." },
        { q: "Peut-on acheter une carte SIM à l'aéroport d'Incheon ?", a: "Oui. Les centres d'itinérance des opérateurs à Incheon vendent des cartes SIM prépayées ; au terminal 1, les trois opérateurs ont des centres ouverts 24 h/24 au niveau des arrivées." },
      ],
    },

    /* ── Prises et tension ── */
    {
      slug: "prises-et-tension",
      enSlug: "power-plugs",
      title: "Prises et tension en Corée : 220 V, 60 Hz, deux broches rondes",
      description: "Prises à deux broches rondes, 220 volts à 60 hertz : comme en France pour la fiche. Ce qu'il faut vérifier sur votre chargeur avant de le brancher.",
      related: [HUB, "telephone-et-carte-sim"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "En Corée, la tension standard est de 220 volts à 60 hertz, et les prises domestiques ont deux trous ronds. Une page touristique de la ville de Gangneung les désigne comme des prises de types C et F, les mêmes qu'en France, en Allemagne, en Autriche, en Espagne et en Grèce.",
        },
        { h2: "Ce que cela signifie pour vos appareils" },
        {
          ul: [
            "Les fiches d'Europe continentale, dont les fiches françaises, s'adaptent en général sans adaptateur",
            "Les fiches à broches plates — utilisées au Royaume-Uni, aux États-Unis, en Chine continentale, à Taïwan et ailleurs — nécessitent un adaptateur",
            "Regardez l'étiquette de votre chargeur : s'il indique INPUT 100–240V, il fonctionne en 220 V. S'il n'indique que 110 V ou 120 V, il n'est pas conçu pour la tension coréenne",
            "Les hôtels peuvent prêter ou vendre des adaptateurs ; on en trouve aussi dans les aéroports, les grands magasins et les supérettes",
          ],
        },
        { source: { label: "Office national du tourisme coréen (KTO) — électricité et communications", url: "https://english.visitkorea.or.kr/svc/contents/infoHtmlView.do?vcontsId=140041" } },
        { source: { label: "Règlement d'application de la loi sur l'électricité, annexe 3 — tension et fréquence standard (en coréen, PDF)", url: "https://www.law.go.kr/LSW/flDownload.do?gubun=&flSeq=168742119&bylClsCd=110201" } },
      ],
      faq: [
        { q: "Quel type de prise utilise-t-on en Corée ?", a: "Des fiches à deux broches rondes (types C et F) — les mêmes qu'en France et dans la plupart de l'Europe continentale. La tension est de 220 V à 60 Hz." },
        { q: "Mes chargeurs fonctionneront-ils en Corée ?", a: "La plupart des chargeurs de téléphone et d'ordinateur portable sont prévus pour 100–240 V et fonctionnent en 220 V ; vérifiez la ligne INPUT de l'étiquette avant de brancher. Les fiches à broches plates nécessitent un adaptateur." },
      ],
    },

    /* ── Jours fériés ── */
    {
      slug: "jours-feries-coree",
      enSlug: "public-holidays",
      title: "Jours fériés en Corée : fin 2026 et année 2027",
      description: "Les jours fériés officiels de fin 2026 et de 2027 en Corée, avec Seollal, Chuseok, les jours de remplacement et deux fêtes devenues fériées en 2026.",
      related: [HUB, "transports-et-t-money", "coree-duree-de-sejour"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "Les jours fériés coréens sont fixés par la loi, et les fêtes lunaires changent de date chaque année. Le gouvernement publie le calendrier officiel de chaque année au Journal officiel. Deux changements de 2026 comptent : la fête du Travail (1er mai) est devenue fériée, ainsi que toutes les fêtes nationales, ce qui rétablit la fête de la Constitution (17 juillet).",
        },
        { h2: "Fin 2026" },
        { ul: ["Vendredi 25 décembre — Noël"] },
        { h2: "2027 (calendrier officiel)" },
        {
          ul: [
            "1er janvier (ven.) — Jour de l'An",
            "6–8 février (sam.–lun.) — Seollal (Nouvel An lunaire), avec un jour de remplacement le 9 février (mar.)",
            "1er mars (lun.) — Fête du mouvement d'indépendance",
            "1er mai (sam.) — Fête du Travail, jour de remplacement le 3 mai (lun.)",
            "5 mai (mer.) — Fête des enfants",
            "13 mai (jeu.) — Anniversaire de Bouddha",
            "6 juin (dim.) — Jour du Souvenir (pas de jour de remplacement)",
            "17 juillet (sam.) — Fête de la Constitution, jour de remplacement le 19 juillet (lun.)",
            "15 août (dim.) — Fête de la Libération, jour de remplacement le 16 août (lun.)",
            "14–16 septembre (mar.–jeu.) — Chuseok",
            "3 octobre (dim.) — Fête de la Fondation nationale, jour de remplacement le 4 octobre (lun.)",
            "9 octobre (sam.) — Jour du hangeul, jour de remplacement le 11 octobre (lun.)",
            "25 décembre (sam.) — Noël, jour de remplacement le 27 décembre (lun.)",
          ],
        },
        { source: { label: "Agence aérospatiale coréenne — calendrier officiel 2027, avis au Journal officiel 2026-0078 (en coréen)", url: "https://astro.kasi.re.kr/kor/life/post/almanac?search_year=2027&bbs_uniq_id=almanac" } },
        { source: { label: "Règlement sur les jours fériés (en coréen)", url: "https://www.law.go.kr/법령/관공서의공휴일에관한규정" } },
        { h2: "À quoi s'attendre autour de Seollal et Chuseok" },
        {
          p: "Les deux grandes fêtes lunaires sont des congés de trois jours pendant lesquels beaucoup de gens rentrent dans leur région d'origine. Réservez transports et hébergement tôt si votre séjour tombe à ces dates. La loi fixe les jours fériés des administrations et laisse les jours travaillés des entreprises privées au droit du travail : l'ouverture d'un magasin ou d'un restaurant dépend donc de l'établissement — vérifiez avant d'y aller.",
        },
        {
          note: "Le gouvernement peut décréter des jours fériés exceptionnels par décision du Conseil des ministres, parfois à bref délai. Nous mettrons cette page à jour si l'un d'eux est annoncé pour 2027.",
        },
      ],
      faq: [
        { q: "Quand tombe Chuseok en 2027 ?", a: "Du 14 au 16 septembre 2027 (du mardi au jeudi), selon le calendrier officiel publié au Journal officiel." },
        { q: "Quand tombe Seollal (Nouvel An lunaire) en 2027 ?", a: "Du 6 au 8 février 2027, avec un jour de remplacement le mardi 9 février, car l'un des jours tombe un dimanche." },
      ],
    },

    /* ── Conduire ── */
    {
      slug: "conduire-en-coree",
      enSlug: "driving-in-korea",
      title: "Conduire en Corée : permis international obligatoire, valable un an",
      description: `Le permis français seul ne suffit pas : il faut un permis international, valable un an à partir de l'entrée. Conduite à droite ; alcool : ${BAC}.`,
      related: [HUB, "tabac-vapotage-alcool", "numeros-urgence-coree"],
      checked: CHECKED,
      practical: true,
      blocks: [
        {
          p: "La règle qui piège les voyageurs : en Corée, votre permis de conduire national ne vous autorise pas, à lui seul, à conduire. La Road Traffic Authority (l'autorité coréenne de la circulation routière) l'écrit noir sur blanc.",
        },
        {
          note: "Ce que dit France Diplomatie pour les Français : pour un séjour de moins d'un an, le permis international est accepté ; au-delà d'un an, il faut un permis coréen. Et pour louer un véhicule, il faut un permis international ou un permis coréen — le permis français n'est pas accepté.",
        },
        { source: { label: "France Diplomatie — Corée du Sud, informations utiles", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/coree-du-sud/conseils-aux-voyageurs-informations-utiles" } },
        { h2: "Ce qu'il vous faut" },
        {
          ul: [
            "Un permis de conduire international délivré en application de la Convention de Genève de 1949 ou de la Convention de Vienne de 1968 sur la circulation routière, ou",
            "Un permis international ou un permis reconnu en vertu d'un accord bilatéral entre la Corée et le pays qui l'a délivré",
            "Il est valable un an à compter de votre entrée en Corée, et uniquement pour les catégories de véhicules qui y figurent",
            "Vous pouvez louer une voiture avec, mais pas conduire un véhicule professionnel comme un taxi ou un camion de location avec chauffeur",
          ],
        },
        { source: { label: "Code de la route coréen, article 96 (en coréen)", url: "https://www.law.go.kr/법령/도로교통법" } },
        { source: { label: "Road Traffic Authority — permis étrangers (en coréen)", url: "https://www.safedriving.or.kr/diGuide/selectDiGuide05.do" } },
        { h2: "Louer une voiture" },
        {
          p: "Selon l'Office national du tourisme coréen, les loueurs demandent un permis international, un passeport et une carte de crédit au nom du conducteur, et le conducteur doit avoir plus de 21 ans. Certains demandent aussi à voir votre permis national : ayez-le sur vous. Ce sont des conditions des loueurs et non de la loi : vérifiez auprès de l'agence que vous réservez.",
        },
        { source: { label: "Office national du tourisme coréen (KTO) — conduire en Corée", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140664" } },
        { h2: "Les règles de la route" },
        {
          ul: [
            "On roule à droite",
            "Tous les occupants doivent porter la ceinture de sécurité, à toutes les places ; les jeunes enfants doivent avoir un siège enfant",
            `L'alcool au volant commence à un taux d'alcool dans le sang de ${BAC}, et la règle vaut aussi pour les vélos. Vous devez vous soumettre à l'alcootest si la police le demande`,
            "Les conducteurs et passagers de deux-roues motorisés doivent porter un casque",
            "Les distances sont en kilomètres et les vitesses en km/h",
          ],
        },
        {
          note: "D'autres pays donnent leurs propres indications : le ministère allemand des Affaires étrangères indique qu'un permis international allemand, avec le permis allemand, est valable jusqu'à un an ; Taïwan indique que ses permis internationaux sont reconnus en Corée pour les voitures particulières. Nous n'avons trouvé aucune indication officielle sur les permis de Chine continentale.",
        },
      ],
      faq: [
        { q: "Puis-je conduire en Corée avec mon permis français ?", a: "Pas avec lui seul. La Road Traffic Authority indique qu'un permis délivré à l'étranger ne suffit pas à lui seul : il faut un permis international (Convention de Genève ou de Vienne, ou reconnu par accord bilatéral). France Diplomatie précise aussi que le permis français n'est pas accepté pour louer un véhicule." },
        { q: "Combien de temps un permis international est-il valable en Corée ?", a: "Un an à compter de votre entrée en Corée (code de la route coréen, article 96). France Diplomatie l'accepte pour les séjours de moins d'un an." },
      ],
    },

    /* ── Soins ── */
    {
      slug: "soins-en-coree",
      enSlug: "healthcare-for-visitors",
      title: "Se soigner en Corée : les soins sont à vos frais, l'assurance est impérative",
      description: "Les touristes ne sont pas couverts par l'assurance maladie coréenne. Où se soigner avec un interprète, quel numéro appeler, et pourquoi s'assurer.",
      related: [HUB, "numeros-urgence-coree", "medicaments-en-voyage"],
      checked: CHECKED,
      practical: true,
      blocks: [
        { h2: "Aucune couverture publique pour les touristes" },
        {
          p: "L'assurance maladie nationale coréenne ne couvre les étrangers qu'une fois enregistrés comme résidents (enregistrement d'étranger) et après une certaine durée de séjour, ou s'ils travaillent pour un employeur coréen. Un visiteur qui entre sans visa ou avec une K-ETA en est exclu et paie ses soins.",
        },
        {
          p: "Nous n'avons trouvé aucun accord qui donne aux touristes français des soins gratuits ou à tarif réduit en Corée. L'accord de sécurité sociale entre la Corée et la France porte sur l'assurance sociale des travailleurs ; nous n'avons rien trouvé indiquant qu'il couvre les soins médicaux des touristes.",
        },
        {
          p: "France Diplomatie juge « impératif » de disposer d'un contrat d'assistance ou d'une assurance couvrant tous les frais médicaux (dont la chirurgie et l'hospitalisation) et le rapatriement sanitaire, au risque de ne pas avoir accès aux soins, y compris en cas d'urgence vitale. Ces frais ne peuvent en aucun cas être pris en charge par l'ambassade de France.",
        },
        { source: { label: "Loi sur l'assurance maladie nationale, article 109 (en coréen)", url: "https://www.law.go.kr/법령/국민건강보험법" } },
        { source: { label: "Service national des pensions — accord de sécurité sociale Corée–France (en coréen)", url: "https://www.nps.or.kr/pnsinfo/sclsmise/getOHAF0131M0.do?id=11_01" } },
        { source: { label: "France Diplomatie — Corée du Sud, santé", url: "https://www.diplomatie.gouv.fr/fr/information-par-pays/coree-du-sud/conseils-aux-voyageurs-sante" } },
        { h2: "Hôpitaux avec interprètes" },
        {
          p: "De nombreux grands hôpitaux coréens ont un centre de soins international (International Health Care Center) dont le personnel parle anglais et d'autres langues et aide pour les rendez-vous et les traitements. L'Office national du tourisme coréen en publie la liste, dont Seoul Asan, Severance, Samsung Medical Center, l'hôpital de l'université nationale de Séoul et Seoul St. Mary's. Ils fonctionnent aux heures de bureau en semaine — la nuit et le week-end, allez aux urgences.",
        },
        { source: { label: "Office national du tourisme coréen (KTO) — urgences et cliniques internationales", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "Quel numéro appeler" },
        {
          ul: [
            "119 — ambulance (et pompiers)",
            "1339 — la ligne 24 h/24 de l'Agence coréenne de contrôle et de prévention des maladies, pour les questions sur les maladies et les suspicions de maladie infectieuse. Ce n'est pas un numéro d'ambulance. Les étrangers sont aidés par un appel à trois avec le 1330 ou le 1345",
            "1330 — Korea Travel Helpline, pour l'interprétation et l'information touristique (+82-2-1330 depuis l'étranger)",
          ],
        },
        { source: { label: "Agence coréenne de contrôle et de prévention des maladies — centre d'appel 1339 (en coréen)", url: "https://kdca.go.kr/kdca/2777/subview.do" } },
        {
          note: "Les médicaments que vous apportez sont une autre question : certains médicaments courants sur ordonnance exigent une autorisation avant le voyage. Voir la page sur les médicaments.",
        },
      ],
      faq: [
        { q: "Les soins sont-ils gratuits pour les touristes en Corée ?", a: "Non. Les visiteurs de courte durée ne sont pas couverts par l'assurance maladie nationale coréenne et paient eux-mêmes leurs soins. France Diplomatie juge impératif d'avoir une assurance couvrant les frais médicaux et le rapatriement." },
        { q: "Le 1339 est-il un numéro d'urgence ?", a: "Pas pour les ambulances. Le 1339 est la ligne de l'agence de contrôle des maladies pour les questions sur les maladies et les suspicions d'infection. Pour une ambulance, appelez le 119." },
      ],
    },

    /* ── Urgences ── */
    {
      slug: "numeros-urgence-coree",
      enSlug: "emergency-and-safety",
      title: "Numéros d'urgence en Corée : 112, 119, et de l'aide en français",
      description: "112 pour la police, 119 pour les pompiers et l'ambulance. Quelles lignes parlent français, l'Emergency Ready App et les alertes sur votre téléphone.",
      related: [HUB, "soins-en-coree", "telephone-et-carte-sim"],
      checked: CHECKED,
      practical: true,
      blocks: [
        { h2: "Les numéros" },
        {
          ul: [
            "112 — police",
            "119 — pompiers et ambulance",
            "1339 — questions sur les maladies infectieuses (Agence coréenne de contrôle et de prévention des maladies)",
            "1330 — Korea Travel Helpline : information touristique, interprétation et réclamations, par téléphone ou par chat (+82-2-1330 depuis l'étranger)",
            "1345 — centre d'appel de l'immigration, ministère de la Justice (+82-2-1345 depuis l'étranger)",
          ],
        },
        { source: { label: "Office national du tourisme coréen (KTO) — situations d'urgence", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=140042" } },
        { h2: "Obtenir de l'aide en français" },
        {
          ul: [
            "1345 : 20 langues dont le français, en semaine de 9 h à 22 h (après 18 h, uniquement en coréen, en anglais et en chinois — le français est donc disponible de 9 h à 18 h). Les appels sont payants",
            "112 : depuis mars 2024, la ligne d'urgence de la police propose une interprétation 24 h/24 en anglais et en chinois, par appel à trois",
            "1330 : l'Office national du tourisme coréen cite l'anglais, le japonais, le chinois, le russe, le vietnamien, le thaï, le malais et l'indonésien — pas le français",
            "Le 119 accepte aussi les signalements par SMS, avec photos ou vidéo, ce qui aide s'il vous est difficile de parler",
          ],
        },
        { source: { label: "Korean Culture and Information Service — interprétation 24 h/24 pour le 112 (2024)", url: "https://www.korean-culture.org/eng/webzine/202405/sub10.html" } },
        { source: { label: "Service coréen de l'immigration — centre d'appel 1345 (en coréen)", url: "https://www.immigration.go.kr/immigration/1530/subview.do" } },
        { h2: "Emergency Ready App et alertes sur téléphone" },
        {
          p: "L'Emergency Ready App du gouvernement coréen affiche les alertes de catastrophe, les abris, services d'urgence et commissariats les plus proches, ainsi que des guides de premiers secours. L'Office national du tourisme coréen la présente en 22 langues, dont le français. Par ailleurs, depuis février 2024, les alertes d'urgence les plus fortes, envoyées à tous les téléphones d'une zone, indiquent le type de catastrophe et la magnitude d'un séisme en anglais en plus du coréen.",
        },
        { source: { label: "Office national du tourisme coréen (KTO) — applications et ressources utiles", url: "https://english.visitkorea.or.kr/svc/contents/contentsView.do?vcontsId=198570" } },
        { source: { label: "Ministère de l'Intérieur et de la Sécurité — l'anglais dans les alertes d'urgence, 28 février 2024 (en coréen)", url: "https://www.mois.go.kr/frt/bbs/type010/commonSelectBoardArticle.do?bbsId=BBSMSTR_000000000008&nttId=107429" } },
        { h2: "Exercices de défense civile" },
        {
          p: "La Corée organise de temps en temps des exercices de défense civile : les sirènes retentissent, la circulation s'arrête et les passants sont dirigés vers des abris, souvent dans les stations de métro ou les parkings souterrains. Le ministère allemand des Affaires étrangères indique que les étrangers ne sont pas tenus d'y participer, mais que c'est recommandé.",
        },
        {
          note: "Un objet perdu ? La police gère un service d'objets trouvés sur lost112.go.kr, en coréen, anglais, japonais et chinois.",
        },
      ],
      faq: [
        { q: "Quel est le numéro d'urgence en Corée ?", a: "Le 112 pour la police, le 119 pour les pompiers et l'ambulance." },
        { q: "Peut-on parler français au 112 ?", a: "Non. Depuis mars 2024, la ligne d'urgence de la police propose une interprétation 24 h/24 en anglais et en chinois, par appel à trois. En français, le 1345 répond en semaine de 9 h à 18 h (appel payant)." },
      ],
    },
  ],
};
