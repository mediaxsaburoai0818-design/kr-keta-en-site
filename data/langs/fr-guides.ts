import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって fr 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝フランスのパスポート保持者＝K-ETA 一時免除中（〜2026-12-31）。
 *    「今は不要・2027年から要る見込み」を崩さない。免除中の申請は任意（手数料はかかる・
 *    公式告知が挙げる利点は入国カードの提出不要）。免除国の一覧は公開されていない
 *    （申請で旅券をスキャンするとポップアップで示される）。
 * ⚠️ 表記だけを仏語にした定数（値は F と同じものを指す）:
 */
const EXEMPT_UNTIL = "31 décembre 2026"; // = F.exemptionUntil
const DECISION = "72 heures"; // = F.decisionTypical
const USD_APPROX = "environ 7 à 8 dollars US"; // = F.feeUsdApprox
const STAY_RANGE = "30 à 90 jours"; // = F.stayRange
const QUARANTINE_FINE = "5 millions de wons"; // = F.quarantineMaxFine
const QUARANTINE_LAW = "loi sur la prévention des maladies animales contagieuses (Contagious Animal Diseases Prevention Act)"; // = F.quarantineLaw

/** 英語の NEW_CHECKED（"15 November 2026"）と同じ日付 */
const CHECKED_NEW = "15 novembre 2026";
const ADDED = "2026-11-15";
const HUB = "arriver-en-coree";

export const frGuides: Article[] = [
  /* ── what-is-keta ── */
  {
    slug: "keta-c-est-quoi",
    enSlug: "what-is-keta",
    added: ADDED,
    title: "Qu'est-ce que la K-ETA ? L'autorisation de voyage coréenne expliquée",
    description:
      "Autorisation électronique des voyageurs sans visa : ce qu'est la K-ETA, qui elle concerne, et pourquoi les Français n'en ont pas besoin pour le moment.",
    related: [HUB, "keta-ai-je-besoin", "keta-dispense-2026", "coree-duree-de-sejour"],
    blocks: [
      {
        p: `La K-ETA (Korea Electronic Travel Authorization) est une autorisation en ligne que les voyageurs exemptés de visa obtiennent normalement avant d'embarquer pour la Corée du Sud. Elle coûte ${F.fee} (${USD_APPROX}) et reste valable ${F.validYears} ans.`,
      },
      { h2: "Vérifier la dispense avant de demander" },
      {
        p: `C'est le point que la plupart des guides négligent. La Corée du Sud a suspendu temporairement l'obligation de K-ETA pour un certain nombre de pays et de régions jusqu'au ${EXEMPT_UNTIL}, dont la France. Si votre nationalité est actuellement dispensée, vous n'avez pas besoin de K-ETA. Vous pouvez tout de même choisir d'en demander une — l'avis officiel cite comme avantage le fait de ne pas avoir à remplir la carte d'arrivée —, mais les frais sont alors dus.`,
      },
      {
        note: `Le nombre de pays dispensés a été rapporté de façon contradictoire, et l'avis officiel de prolongation ne les énumère pas. Les voyageurs dispensés voient en revanche s'afficher un message (pop-up) lorsqu'ils scannent la page photo de leur passeport pendant la demande sur ${F.officialHost}. C'est ainsi qu'il faut vérifier votre propre passeport.`,
      },
      { h2: "Ce n'est pas un visa" },
      {
        p: "La K-ETA ne vaut pas autorisation d'entrée. Elle confirme que vous pouvez embarquer. À l'arrivée, c'est l'officier d'immigration qui décide de l'admission, et il peut la refuser.",
      },
      { h2: "Elle ne fixe pas la durée de séjour" },
      {
        p: `La durée de séjour autorisée découle de l'accord d'exemption de visa entre la Corée et votre pays — en général ${STAY_RANGE} ; 90 jours sont indiqués pour les passeports français. Deux voyageurs arrivés par le même vol avec la même K-ETA peuvent obtenir des durées différentes.`,
      },
    ],
  },

  /* ── do-i-need-keta ── */
  {
    slug: "keta-ai-je-besoin",
    enSlug: "do-i-need-keta",
    added: ADDED,
    title: "Ai-je besoin d'une K-ETA ? Comment vérifier si vous êtes dispensé",
    description: `Les passeports français sont dispensés de K-ETA jusqu'au ${EXEMPT_UNTIL}. Comment le vérifier pour votre passeport, et ce qui s'applique si vous ne l'êtes pas.`,
    related: ["carte-arrivee-et-e-gates", "voyager-avec-enfants", "keta-dispense-2026"],
    blocks: [
      {
        p: `Avant de dépenser quoi que ce soit, réglez une seule question : votre passeport est-il actuellement dispensé ? La dispense court jusqu'au ${EXEMPT_UNTIL} et dépend de la nationalité, non du lieu de résidence ni de la compagnie aérienne. Les passeports français en bénéficient : pour une entrée avant cette date, vous n'avez pas besoin de K-ETA. Sans nouvelle prolongation, elle devrait redevenir obligatoire à partir du 1er janvier 2027.`,
      },
      { h2: "Comment vérifier" },
      {
        ul: [
          `Commencez la demande sur le site officiel (${F.officialHost}) ou dans l'application K-ETA. Selon l'avis officiel, les voyageurs dispensés voient s'afficher un message (pop-up) lorsqu'ils scannent la page photo de leur passeport.`,
          "Vérifiez avec le passeport que vous utiliserez réellement pour voyager — pas une autre nationalité que vous auriez.",
          "Si vous êtes dispensé, vous n'avez ni demande à déposer ni frais à payer. Vous pouvez tout de même demander pour ne pas avoir à remplir la carte d'arrivée ; les frais sont alors dus.",
          "Si vous n'êtes pas dispensé, obtenez l'autorisation avant de partir.",
        ],
      },
      { h2: "Pourquoi nous ne publions pas de liste" },
      {
        p: "La dispense a été prolongée et modifiée plus d'une fois, et le nombre de pays concernés a été rapporté différemment selon les sources. L'avis officiel de prolongation n'énumère pas non plus les pays dispensés : la vérification se fait lorsque vous scannez votre passeport dans la demande officielle. Une liste recopiée dans un guide se périme sans bruit.",
      },
      { h2: "Dispensé ne veut pas dire sans rien à préparer" },
      {
        p: "Même sans K-ETA, il vous faut un passeport valable pour tout le voyage, un billet de continuation ou de retour, et une adresse en Corée pour la carte d'arrivée. Certains voyageurs doivent aussi remplir une déclaration d'arrivée.",
      },
      {
        note: "Si vous voyagez avec un visa (travail, études, long séjour), la K-ETA ne vous concerne pas du tout. Elle n'existe que pour l'entrée sans visa.",
      },
    ],
  },

  /* ── leaving-and-returning ── */
  {
    slug: "sortir-et-revenir-en-coree",
    enSlug: "leaving-and-returning",
    added: ADDED,
    title: "Quitter la Corée et y revenir avec la même K-ETA",
    description: `Une K-ETA couvre plusieurs entrées pendant ${F.validYears} ans : pas de nouvelle demande à chaque voyage. Ce qui repart de zéro à chaque entrée, c'est la durée de séjour.`,
    related: [HUB, "detaxe-coree", "liquides-et-batteries-externes"],
    blocks: [
      {
        p: `Une K-ETA est valable ${F.validYears} ans et permet plusieurs entrées : un court déplacement hors de Corée suivi d'un retour ne demande pas de nouvelle demande. Chaque entrée est toutefois examinée séparément, et l'officier d'immigration fixe de nouveau la durée de séjour autorisée.`,
      },
      { h2: "Ce qui ne repart pas de zéro" },
      {
        ul: [
          "L'accord d'exemption de visa lui-même : enchaîner les entrées ne transforme pas un séjour de visite en installation durable",
          "La validité de votre K-ETA : elle expire toujours à sa date d'origine",
          "L'historique de vos entrées et sorties",
        ],
      },
      { h2: "Les allers-retours répétés attirent les questions" },
      {
        p: "Comme la plupart des pays, la Corée considère l'entrée sans visa comme destinée aux visites. Quitter le pays quelques jours puis revenir chaque fois que la durée autorisée arrive à son terme se voit dans le système, et un officier peut refuser l'entrée même à une personne titulaire d'une K-ETA valide.",
      },
      { h2: "Ce qu'il faut avoir sous la main au retour" },
      {
        ul: [
          "Un billet de continuation ou de retour",
          "L'adresse de votre hébergement en Corée",
          "De quoi montrer que vous rentrez chez vous : travail, études, famille",
        ],
      },
      { source: { label: "K-ETA official portal", url: "https://www.k-eta.go.kr/portal/apply/index.do" } },
      {
        note: `Avec un passeport français, la K-ETA n'est pas exigée jusqu'au ${EXEMPT_UNTIL} : pour ces allers-retours, vous n'en avez pas besoin. Les autres règles de cette page — examen à chaque entrée, durée de séjour fixée à l'arrivée — s'appliquent quand même.`,
      },
    ],
  },

  /* ── border-questions ── */
  {
    slug: "controles-arrivee-coree",
    enSlug: "border-questions",
    added: ADDED,
    title: "Ce qui se passe à votre arrivée en Corée",
    description:
      "Immigration, quarantaine et douane sont trois contrôles distincts. Savoir lequel pose quelles questions fait la différence entre dix minutes et une heure.",
    related: [HUB, "carte-arrivee-et-e-gates", "quarantaine-coree", "medicaments-en-voyage"],
    blocks: [
      {
        p: "À l'arrivée, les passagers passent trois contrôles assurés par trois administrations différentes. Ils ne portent pas sur les mêmes points, et les formalités de chacun sont distinctes.",
      },
      { h2: "1. L'immigration" },
      {
        ul: [
          "La durée et le lieu de votre séjour",
          "Votre billet de continuation ou de retour",
          "Le motif de la visite",
          "Les empreintes digitales et une photo du visage, pour la plupart des voyageurs étrangers",
        ],
      },
      {
        p: "C'est ici que la durée de séjour autorisée est fixée. Une K-ETA valide — ou une dispense valable, comme celle dont bénéficient actuellement les passeports français — vous amène jusqu'à ce guichet ; elle ne décide pas de l'issue.",
      },
      { h2: "2. La quarantaine" },
      {
        p: `La Corée contrôle les produits d'origine animale et végétale apportés par les voyageurs. Ce n'est pas une formalité : ne pas déclarer peut entraîner une amende allant jusqu'à ${QUARANTINE_FINE}, en vertu de la ${QUARANTINE_LAW}.`,
      },
      { h2: "3. La douane" },
      {
        p: `Chaque voyageur remet une déclaration de ses effets personnels. Les marchandises qui dépassent la franchise de ${F.customsGoodsAllowance} doivent être déclarées.`,
      },
      { h2: "À préparer avant l'atterrissage" },
      {
        ul: [
          "L'adresse de votre hébergement en Corée, notée par écrit",
          "Les références de votre vol suivant ou de retour",
          "Une réponse honnête sur les aliments et les végétaux présents dans vos bagages",
        ],
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
      {
        note: "En cas de doute sur un article, déclarez-le. Déclarer un produit qui s'avère autorisé n'entraîne aucune sanction.",
      },
    ],
  },

  /* ── quarantine ── */
  {
    slug: "quarantaine-coree",
    enSlug: "quarantine",
    added: ADDED,
    title: "Quarantaine en Corée : viande, végétaux et amende en cas de non-déclaration",
    description: `Ne pas déclarer des produits animaux ou végétaux à l'arrivée en Corée peut coûter jusqu'à ${QUARANTINE_FINE} d'amende. Ce qu'il faut déclarer et pourquoi.`,
    related: [HUB, "medicaments-en-voyage", "franchises-douane-coree"],
    blocks: [
      {
        p: "Face à la peste porcine africaine et à d'autres maladies animales, la Corée a nettement renforcé ses contrôles sanitaires aux frontières. Les produits carnés transportés par les voyageurs sont l'une des voies par lesquelles ces maladies circulent, et les règles sont appliquées dès l'arrivée.",
      },
      { h2: "La sanction" },
      {
        p: `Le voyageur qui ne fait pas de déclaration de quarantaine s'expose à une amende pouvant atteindre ${QUARANTINE_FINE}, en vertu de la ${QUARANTINE_LAW}. L'amende sanctionne l'absence de déclaration, et pas seulement les produits qui se révèlent interdits.`,
      },
      { h2: "Ce que vous devez déclarer" },
      {
        ul: [
          "La viande et les produits à base de viande de toute sorte — y compris salés, séchés ou en conserve",
          "Les produits laitiers et les œufs",
          "Les fruits et légumes frais, les graines et les fruits à coque",
          "Les plantes, la terre et les objets qui portent de la terre",
          "Les animaux vivants et tout ce qui a servi à leur contact",
        ],
      },
      { h2: "Ce que les voyageurs croient autorisé, à tort" },
      {
        ul: [
          "Le saucisson ou la viande séchée achetés à l'aéroport de départ",
          "Les plats faits maison préparés par la famille",
          "La viande déshydratée contenue dans les sachets de nouilles instantanées",
          "Les fruits emportés de l'avion",
        ],
      },
      { h2: "La règle qui vous protège" },
      {
        p: "Déclarer ne coûte rien. Si le produit est autorisé, vous le gardez ; s'il ne l'est pas, il est détruit et l'affaire s'arrête là. L'amende vise l'absence de déclaration : se taire n'est donc jamais la meilleure option.",
      },
      { source: { label: "Animal and Plant Quarantine Agency — Rules for overseas travellers", url: "https://www.qia.go.kr/english/html/Animal_livestock/02AnimalLivestock_003-5.jsp" } },
    ],
  },

  /* ── customs-allowances ── */
  {
    slug: "franchises-douane-coree",
    enSlug: "customs-allowances",
    added: ADDED,
    title: "Franchises douanières en Corée pour les voyageurs à l'arrivée",
    description: `Franchise générale de ${F.customsGoodsAllowance}, avec des limites distinctes pour l'alcool, le tabac et le parfum. Avant ${F.customsAgeMin} ans, pas de franchise alcool ni tabac.`,
    related: [HUB, "argent-et-pourboire", "detaxe-coree", "tabac-vapotage-alcool"],
    blocks: [
      {
        p: "La douane est distincte de la quarantaine. La quarantaine se demande si un produit présente un risque sanitaire ; la douane, si des droits sont dus. Les deux déclarations se font à l'arrivée, et être en règle avec l'une ne vous dispense pas de l'autre.",
      },
      { h2: "Les franchises" },
      {
        ul: [
          `Marchandises en général : ${F.customsGoodsAllowance} de valeur imposable au total`,
          `Alcool : jusqu'à ${F.customsAlcoholLitres} litres au total et ${F.customsAlcoholValue}, comptés à part de la franchise générale`,
          `Tabac : ${F.customsCigarettes} cigarettes`,
          `Parfum : ${F.customsPerfumeMl} ml`,
        ],
      },
      { h2: "Limite d'âge" },
      {
        p: `Les voyageurs de moins de ${F.customsAgeMin} ans — comptés par année de naissance, et non à la date d'anniversaire — ne bénéficient pas des franchises pour l'alcool et le tabac. C'est un piège pour les familles qui pensent pouvoir utiliser la franchise d'un adolescent.`,
      },
      { h2: "Si vous dépassez la franchise" },
      {
        p: "Déclarez. Les droits et taxes sont calculés sur l'excédent. Ne pas déclarer des marchandises au-delà de la franchise est un problème distinct des droits eux-mêmes — et plus coûteux.",
      },
      { source: { label: "Korea Customs Service — Duty-free allowance for travellers", url: "https://www.customs.go.kr/english/cm/cntnts/cntntsView.do?mi=8028&cntntsId=2716" } },
      {
        note: "Les achats en duty free effectués sur le trajet vers la Corée comptent aussi dans la franchise. Les acheter en zone sous douane ne les en exonère pas.",
      },
    ],
  },

  /* ── transit-through-korea ── */
  {
    slug: "transit-en-coree",
    enSlug: "transit-through-korea",
    added: ADDED,
    title: "Correspondance en Corée : faut-il une K-ETA ?",
    description:
      "Pour un transit, tout dépend du passage ou non à l'immigration. Rester en zone de transit et entrer dans le pays sont deux situations différentes.",
    related: [HUB, "liquides-et-batteries-externes", "keta-dispense-2026"],
    blocks: [
      {
        p: "Une correspondance à Incheon est l'une des raisons les plus courantes d'arriver sur cette page, et la réponse tient à une seule question : quittez-vous la zone de transit internationale ?",
      },
      {
        note: `Avec un passeport français, la question ne se pose pas avant le ${EXEMPT_UNTIL} : la K-ETA n'est pas exigée, même si vous sortez de l'aéroport. Ce qui suit compte pour les voyages à partir du 1er janvier 2027, si la dispense n'est pas prolongée.`,
      },
      { h2: "Si vous restez en zone de transit" },
      {
        p: "Les passagers qui restent dans la zone de transit internationale et embarquent sur leur vol suivant n'entrent pas en Corée. Aucune autorisation d'entrée ne s'applique alors, puisqu'il n'y a pas d'entrée.",
      },
      { h2: "Si vous quittez l'aéroport" },
      {
        p: "Passer l'immigration — pour récupérer un bagage enregistré, passer la nuit hors de l'aéroport ou visiter la ville entre deux vols — constitue une entrée. C'est à ce moment que la K-ETA, ou une dispense applicable, entre en jeu, exactement comme pour un séjour touristique.",
      },
      { h2: "Les longues escales sont le piège" },
      {
        ul: [
          "Un bagage qui n'est pas enregistré jusqu'à la destination finale vous oblige à entrer dans le pays.",
          "Une correspondance de nuit avec un hôtel hors de l'aéroport est une entrée.",
          "Un changement de terminal qui impose de repasser l'immigration est une entrée.",
        ],
      },
      {
        note: `Tranchez la question avant de réserver, pas au comptoir de correspondance. Si votre voyage tombe après la fin de la dispense et qu'il y a la moindre chance que vous sortiez de l'aéroport, demandez l'autorisation à l'avance : elle est valable ${F.validYears} ans, elle ne sera donc pas perdue.`,
      },
      { source: { label: "K-ETA official portal", url: F.officialUrl } },
    ],
  },

  /* ── if-your-keta-is-denied ── */
  {
    slug: "keta-refusee",
    enSlug: "if-your-keta-is-denied",
    added: ADDED,
    title: "Que faire si votre K-ETA est refusée",
    description:
      "Un refus ne signifie pas forcément que vous ne pourrez pas voyager, mais la voie en ligne est fermée. Quelle est réellement l'étape suivante.",
    related: ["visa-court-sejour-c3", "keta-erreurs-frequentes", "keta-dispense-2026"],
    blocks: [
      {
        p: `La plupart des demandes reçoivent une réponse sous ${DECISION}. Si la réponse est un refus, la situation concrète est la suivante : vous ne pouvez pas entrer par la voie de l'exemption de visa et devez demander un visa à la place.`,
      },
      {
        note: `Avec un passeport français, cette page ne vous concerne que si vous avez déposé une demande facultative pendant la dispense (jusqu'au ${EXEMPT_UNTIL}) ou si vous voyagez à partir de 2027.`,
      },
      { h2: "Redéposer la même demande sert rarement" },
      {
        p: "Soumettre de nouveau les mêmes informations donne normalement le même résultat. Si une donnée a été mal saisie — numéro de passeport, date de naissance, nom orthographié autrement que dans le passeport —, il vaut la peine de la corriger. Sinon, la voie est une demande de visa auprès d'une représentation diplomatique coréenne.",
      },
      { h2: "Ne partez pas « pour voir »" },
      {
        p: "Les compagnies aériennes vérifient le statut avant l'embarquement. Se présenter à l'aéroport avec un refus enregistré, c'est être refoulé à l'enregistrement, et non à la frontière.",
      },
      {
        note: "Un refus est une décision sur cette demande, pas une interdiction définitive. Une demande de visa est examinée séparément, sur ses propres documents.",
      },
      { source: { label: "K-ETA official portal", url: F.officialUrl } },
    ],
  },

  /* ── common-mistakes ── */
  {
    slug: "keta-erreurs-frequentes",
    enSlug: "common-mistakes",
    added: ADDED,
    checked: CHECKED_NEW,
    title: "Les erreurs à éviter avec la K-ETA, et ce qu'en dit la FAQ officielle",
    description:
      "Données non modifiables après envoi, nouveau passeport = nouvelle K-ETA, voyage à mettre à jour : les erreurs signalées par les pages officielles.",
    related: ["keta-guide-demande", "keta-validite", "keta-refusee", "keta-documents"],
    blocks: [
      {
        p: "Le site officiel de la K-ETA ne publie aucun classement des erreurs les plus fréquentes, et le K-ETA Center n'indique pas aux demandeurs le motif exact d'un refus, les critères étant confidentiels. Il publie en revanche une FAQ détaillée et une série d'avis. Chaque point ci-dessous figure directement dans ces pages officielles.",
      },
      {
        note: `Avant tout : avec un passeport français, la K-ETA n'est pas exigée jusqu'au ${EXEMPT_UNTIL}. Ces points vous concernent si vous déposez une demande facultative pendant la dispense, ou pour un voyage à partir de 2027 si la dispense n'est pas prolongée.`,
      },
      { h2: "1. Compter corriger ses données après l'envoi" },
      {
        p: "Vous pouvez corriger toutes les informations avant d'envoyer la demande. Une fois envoyée, elle ne peut plus être corrigée. La FAQ officielle précise que les informations du passeport (données personnelles) ne sont pas modifiables après l'envoi, quel que soit le résultat, et qu'il faut déposer une nouvelle demande avec les bonnes données. Les frais déjà payés ne sont pas remboursés, quelle que soit l'issue.",
      },
      { h2: "2. Considérer comme valable une autorisation aux données erronées" },
      {
        p: "Si les informations d'une K-ETA accordée ne correspondent pas à votre passeport — numéro de passeport, nationalité, date de naissance, etc. —, vous risquez de ne pas pouvoir embarquer à bord de l'avion ou du navire à destination de la Corée, ou de vous voir refuser l'entrée. La consigne officielle : vérifier que tout est correctement rempli avant de payer.",
      },
      { h2: "3. Écrire son nom comme on en a l'habitude" },
      {
        ul: [
          "Les noms se saisissent en caractères latins, et les caractères spéciaux comme le trait d'union (-) ne peuvent pas être saisis",
          "La FAQ demande de reprendre la première ligne de la zone de lecture automatique (MRZ), en bas de la page photo du passeport",
          "Si votre passeport ne distingue pas nom et prénom, il est admis de saisir le nom complet tel qu'il figure dans la MRZ",
          "Si votre passeport n'indique que l'année de naissance (par exemple 1999-XX-XX), saisissez 1999-00-00",
        ],
      },
      { h2: "4. Voyager avec un autre passeport" },
      {
        p: "Le passeport de votre carte d'embarquement, celui que vous présentez à l'entrée en Corée et celui de l'autorisation K-ETA doivent être le même. Si vous obtenez un nouveau passeport — après un changement de nom, une perte ou un renouvellement —, vous devez redéposer une demande, même si l'ancien passeport avait une autorisation. Une nouvelle demande est aussi nécessaire en cas de changement de nationalité, de nom, de sexe, de date de naissance, de numéro ou de date d'expiration du passeport, de situation au regard des maladies infectieuses ou d'antécédents judiciaires. Un simple changement de profession n'impose pas de nouvelle demande.",
      },
      { h2: "5. Ne pas mettre à jour ses informations de voyage" },
      {
        p: "Si le motif d'entrée, l'adresse de séjour prévue, les coordonnées, les dates d'arrivée ou de départ prévues ou les personnes qui vous accompagnent changent après l'accord, le guide officiel indique qu'il faut les mettre à jour sur la page [Update Travel Information] du site K-ETA. À défaut, l'entrée peut être refusée ou d'autres désagréments peuvent suivre.",
      },
      { h2: "6. S'y prendre trop tard" },
      {
        ul: [
          "Demander après l'embarquement ou une fois en Corée peut conduire à un refus de la K-ETA ou à des restrictions d'entrée",
          "Un avis K-ETA recommande de faire la demande 1 à 2 mois avant la date d'entrée prévue",
          `L'examen prend en général jusqu'à ${DECISION}, et peut être plus long quand les demandes augmentent`,
          "Les demandes sont examinées dans leur ordre d'arrivée : il n'existe pas de traitement accéléré",
          "Un formulaire enregistré est supprimé automatiquement s'il n'est pas repris dans les 7 jours",
        ],
      },
      { h2: "7. Redemander encore et encore après un refus" },
      {
        p: "Une personne qui dépose 3 demandes ou plus en 6 mois ne peut en redéposer une que 6 mois après la date de notification du résultat de la première demande. Cette restriction ne s'applique pas à une nouvelle demande déposée parce que des données personnelles — numéro de passeport, nom, date de naissance, sexe, nationalité, photo, etc. — avaient été mal saisies. Si vous devez voyager pendant la période de restriction, l'avis officiel vous oriente vers une demande de visa auprès d'une ambassade ou d'un consulat de Corée.",
      },
      { h2: "8. Une photo qui ne respecte pas les exigences" },
      {
        ul: [
          "En couleur, au format JPG, 20 Mo au maximum",
          "Sans accessoire comme un chapeau, un foulard ou des lunettes de soleil",
          "Visage entier, de face, occupant environ 75 % de l'image, yeux ouverts et regard droit vers l'objectif",
          "Les tenues religieuses sont admises, mais le visage doit être clairement visible du front au menton",
        ],
      },
      { h2: "9. Une adresse e-mail qui risque de ne pas recevoir la réponse" },
      {
        p: "Un avis K-ETA signale des retards de réception des e-mails pour les utilisateurs de Gmail et invite les demandeurs à utiliser une autre adresse. Il ajoute que des services basés aux États-Unis, comme outlook.com et hotmail.com, peuvent connaître les mêmes retards.",
      },
      { h2: "10. Un paiement qui ne passe pas" },
      {
        p: "En cas d'erreur 3DS (authentification du payeur), la FAQ conseille de contacter votre banque émettrice. La page sur les frais précise que le paiement peut échouer si l'option de paiement à l'étranger de votre carte est bloquée.",
      },
      { h2: "11. Croire que le lieu de résidence décide de l'éligibilité" },
      {
        p: "L'éligibilité dépend de la nationalité indiquée sur la page photo du passeport. Le lieu de résidence, le lieu de départ, un visa pour un pays tiers et le statut vaccinal n'entrent pas en compte.",
      },
      { h2: "Deux points qui ne sont pas de simples erreurs de saisie" },
      {
        ul: [
          "Les fausses informations : une demande comportant de fausses informations peut être refusée, ou annulée à tout moment même après l'accord, et son auteur s'expose à des sanctions ou à des restrictions d'entrée",
          "Utiliser une K-ETA pour travailler ou étudier : un emploi, des études ou toute autre activité lucrative exigent un visa délivré par une ambassade ou un consulat de Corée",
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
      {
        q: "Puis-je corriger ma K-ETA après l'avoir envoyée ?",
        a: "Non. Les informations ne peuvent être corrigées qu'avant l'envoi. Pour des données de passeport erronées, la FAQ officielle indique de déposer une nouvelle demande avec les bonnes informations.",
      },
      {
        q: "Faut-il une nouvelle K-ETA si je change d'emploi ?",
        a: "Non. La FAQ officielle précise qu'un changement de profession n'impose pas de nouvelle demande. Un nouveau passeport, un changement de nom ou de nationalité, si.",
      },
      {
        q: "Pourquoi ma K-ETA a-t-elle été refusée ?",
        a: "Le K-ETA Center ne communique pas le motif exact, les critères étant confidentiels. Si vous souhaitez entrer en Corée, la FAQ vous oriente vers une demande de visa auprès d'une ambassade ou d'un consulat de Corée.",
      },
    ],
  },

  /* ── keta-app ── */
  {
    slug: "keta-application-officielle",
    enSlug: "keta-app",
    added: ADDED,
    checked: CHECKED_NEW,
    title: "L'application officielle K-ETA : où la trouver et à quoi elle sert",
    description:
      "La K-ETA se demande uniquement sur k-eta.go.kr ou dans l'application K-ETA du ministère coréen de la Justice. Ce qu'elle fait, et ce qu'elle ne change pas.",
    related: ["keta-site-officiel", "keta-guide-demande", "keta-statut", "keta-erreurs-frequentes"],
    blocks: [
      {
        p: "Le site officiel de la K-ETA indique que les demandes ne peuvent se faire que sur www.k-eta.go.kr ou dans l'application mobile appelée K-ETA. L'application est une seconde porte d'entrée vers le même système, pas un service distinct.",
      },
      {
        note: `Avec un passeport français, vous n'avez pas besoin de K-ETA jusqu'au ${EXEMPT_UNTIL}. L'application vous sera utile si vous choisissez de demander quand même — c'est facultatif, les frais sont dus, et l'avantage indiqué par l'avis officiel est de ne pas avoir à remplir la carte d'arrivée — ou pour un voyage à partir de 2027 si la dispense n'est pas prolongée.`,
      },
      { h2: "Où la télécharger" },
      {
        ul: [
          "Android : Google Play. iPhone : App Store. Recherchez « K-ETA »",
          "Sur Google Play, le développeur indiqué est 법무부 (le ministère de la Justice) ; sur l'App Store, le vendeur indiqué est Ministry of Justice",
          "La description de la boutique la présente comme l'application officielle du gouvernement de la République de Corée et donne www.k-eta.go.kr comme site officiel",
          `L'application est gratuite. Les frais de K-ETA de ${F.fee} par personne sont payés au cours de la demande`,
        ],
      },
      {
        note: "Vérifiez le nom de l'éditeur avant d'installer quoi que ce soit. L'application officielle est publiée par le ministère coréen de la Justice.",
      },
      { h2: "Ce que l'application simplifie" },
      {
        p: "Sur le site, la photo du visage et l'image de la page photo du passeport doivent chacune être un fichier JPG de moins de 20 Mo. La FAQ officielle indique que, dans l'application, la taille et le poids sont ajustés automatiquement.",
      },
      { h2: "Ce que l'application permet aussi" },
      {
        ul: [
          "Consulter le résultat dans [K-ETA Application Results]",
          "Modifier vos informations de voyage via [Update Travel Information], dans l'onglet [Application Results]",
          "Suivre l'état de la demande — la FAQ précise que cela se fait sur le site ou dans l'application",
        ],
      },
      { h2: "En cas de problème" },
      {
        ul: [
          "Erreurs de paiement sur un navigateur d'ordinateur : un avis officiel suggère d'essayer l'application K-ETA, ou le site mobile sur un appareil mobile",
          "Erreurs dans l'application : un avis officiel conseille de supprimer puis de réinstaller l'application K-ETA",
          "Erreur 3DS (authentification du payeur) : la FAQ conseille de contacter votre banque émettrice",
        ],
      },
      { h2: "Ce que l'application ne change pas" },
      {
        ul: [
          `Les frais de demande sont de ${F.fee} par personne (${USD_APPROX}) ; des frais de traitement du paiement en ligne, en général d'environ 3 %, peuvent s'ajouter. Les pages officielles n'indiquent pas de tarif différent pour l'application`,
          `L'examen prend en général jusqu'à ${DECISION}, et aucune demande ne bénéficie d'un traitement accéléré`,
          `Une K-ETA accordée est valable ${F.validYears} ans, quel que soit le canal utilisé`,
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
      {
        q: "L'application K-ETA est-elle gratuite ?",
        a: `Son téléchargement est gratuit. Les frais de demande de K-ETA, ${F.fee} par personne, sont facturés au moment de la demande.`,
      },
      {
        q: "L'application est-elle plus rapide que le site ?",
        a: "Les pages officielles ne le disent pas. Les demandes sont examinées dans leur ordre d'arrivée, et il n'existe pas de traitement accéléré.",
      },
    ],
  },

  /* ── official-site ── */
  {
    slug: "keta-site-officiel",
    enSlug: "official-site",
    added: ADDED,
    checked: CHECKED_NEW,
    title: "Le site officiel de la K-ETA, et comment le reconnaître",
    description: `Demandez uniquement sur www.k-eta.go.kr ou dans l'application K-ETA. La Corée n'a désigné aucun intermédiaire. Frais officiels : ${F.fee} par personne.`,
    related: ["keta-application-officielle", "keta-tarif", "keta-guide-demande", "carte-arrivee-et-e-gates"],
    blocks: [
      {
        p: "Il existe deux canaux officiels : le site www.k-eta.go.kr et l'application mobile K-ETA. Le site officiel met en garde contre les intermédiaires et les sites d'hameçonnage qui imitent son apparence et facturent des frais élevés sous prétexte de déposer la demande ou d'accélérer son traitement.",
      },
      {
        note: `Rappel : avec un passeport français, la K-ETA n'est pas exigée jusqu'au ${EXEMPT_UNTIL}. Un site qui présente la K-ETA comme obligatoire pour un voyage pendant cette période se trompe : la demander reste facultatif.`,
      },
      { h2: "Aucun intermédiaire n'a été désigné" },
      {
        p: "Un avis K-ETA indique que le gouvernement de la République de Corée n'a confié le service de demande de K-ETA à aucun intermédiaire, et que des sites non officiels exigeant des frais plus élevés ont été repérés. Le Service coréen de l'immigration a renouvelé l'avertissement en août 2025 : aucun intermédiaire n'a été désigné, et les demandes doivent passer par le site officiel ou l'application K-ETA.",
      },
      { h2: "Ce que facture le site officiel" },
      {
        ul: [
          `${F.fee} par personne (${USD_APPROX})`,
          "Des frais de traitement du paiement en ligne peuvent s'ajouter — en général environ 3 %",
          "Une fois payés, les frais ne sont pas remboursés, quelle que soit l'issue",
          "Cartes acceptées : VISA, MASTER, JCB, AMEX, Diners Club, DISCOVER, UnionPay et Alipay+",
          "Pour les demandes déposées après le 3 juillet 2023 à 9 h (heure coréenne), un reçu est envoyé automatiquement à l'adresse e-mail du demandeur",
        ],
      },
      { h2: "Le délai" },
      {
        p: `Le site officiel indique que l'examen prend en général jusqu'à ${DECISION}, et qu'il peut être plus long en cas d'afflux imprévu de demandes. Les demandes sont examinées dans leur ordre d'arrivée et il n'existe pas de traitement accéléré.`,
      },
      { h2: "Qui gère le site et comment le contacter" },
      {
        ul: [
          "Le site est exploité par le Korea Electronic Travel Authorization (K-ETA) Center du ministère de la Justice de la République de Corée",
          "En principe, le K-ETA Center n'assure ni consultation téléphonique ni accueil en personne. Les questions passent par [Ask Us], en coréen, anglais, thaï ou russe",
          "Le formulaire et les principaux avis existent en 10 langues, mais les champs de la demande n'acceptent que l'anglais",
          "Sur le site, un non-membre peut ajouter jusqu'à 9 autres personnes à une demande ; un membre, jusqu'à 1 000",
        ],
      },
      { h2: "La carte d'arrivée électronique a son propre site officiel" },
      {
        p: "Le Service coréen de l'immigration met en garde contre de faux sites de carte d'arrivée électronique (e-Arrival card). Le seul site officiel est www.e-arrivalcard.go.kr, et tout site qui demande des informations de paiement pour cette carte n'est pas un service officiel. C'est utile pendant la dispense : sans K-ETA, vous remplissez cette carte, et elle est gratuite.",
      },
      {
        note: `Ce guide est indépendant et n'est pas un site officiel. Nous ne recevons ni demandes ni paiements. Demandez uniquement sur ${F.officialHost} ou dans l'application K-ETA.`,
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
      {
        q: "Existe-t-il un intermédiaire agréé pour la K-ETA ?",
        a: "Non. Le gouvernement coréen indique n'avoir désigné aucun intermédiaire pour les demandes de K-ETA.",
      },
      {
        q: "Peut-on appeler le K-ETA Center ?",
        a: "En principe, le K-ETA Center n'assure ni consultation téléphonique ni accueil en personne. Utilisez [Ask Us] sur le site officiel.",
      },
    ],
  },

  /* ── news ── */
  {
    slug: "keta-actualites",
    enSlug: "news",
    added: ADDED,
    checked: CHECKED_NEW,
    title: `Actualités K-ETA : la dispense temporaire jusqu'au ${EXEMPT_UNTIL} et les changements précédents`,
    description: `La dispense de K-ETA court jusqu'au ${EXEMPT_UNTIL} ; au 15 novembre 2026, rien n'était annoncé pour 2027 sur k-eta.go.kr. Changements officiels depuis 2021.`,
    related: ["keta-dispense-2026", "keta-ai-je-besoin", "keta-faq"],
    blocks: [
      {
        p: "Cette page recense les changements de la K-ETA publiés sur les pages officielles du gouvernement coréen, avec la date indiquée par la page officielle. Elle est mise à jour lorsque nous vérifions ces pages ; la date de notre dernière vérification figure plus haut.",
      },
      { h2: "23 décembre 2025 — dispense prolongée jusqu'au 31 décembre 2026" },
      {
        ul: [
          `Le ministère de la Justice a prolongé la dispense temporaire d'un an, pour stimuler le secteur touristique. La période prolongée court du 1er janvier 2026 au ${EXEMPT_UNTIL} (heure coréenne)`,
          "Les pays et régions dispensés à cette date sont couverts par la prolongation. L'avis ne les énumère pas : les voyageurs dispensés voient s'afficher un message (pop-up) lorsqu'ils scannent la page photo de leur passeport pendant la demande",
          "Les voyageurs dispensés qui souhaitent bénéficier des avantages d'une K-ETA accordée, comme ne pas avoir à remplir la carte d'arrivée, peuvent quand même faire la demande ; les frais sont alors dus",
          "Une K-ETA déjà obtenue reste utilisable jusqu'à son expiration. Les frais payés ne sont pas remboursés",
        ],
      },
      { source: { label: "K-ETA notice — Extension of K-ETA temporary exemption (posted 23 December 2025)", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299707" } },
      { h2: "Après le 31 décembre 2026" },
      {
        p: "Au 15 novembre 2026, le tableau des avis K-ETA ne comportait aucun avis plus récent sur la dispense, et les dernières actualités en anglais du Service coréen de l'immigration ne mentionnaient pas la K-ETA. Une nouvelle prolongation n'a pas été annoncée sur ces pages. Si vous voyagez à partir du 1er janvier 2027, consultez les avis K-ETA peu avant votre départ.",
      },
      { source: { label: "K-ETA — Notices", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=notice" } },
      { source: { label: "Korea Immigration Service — News (English)", url: "https://www.immigration.go.kr/bbs/immigration_eng/229/artclList.do" } },
      { h2: "Les changements précédents" },
      {
        ul: [
          "1er septembre 2021 — mise en place de la K-ETA",
          "1er septembre 2022 — les voyageurs des 112 pays alors éligibles à la K-ETA doivent l'obtenir avant d'embarquer sur un vol ou un navire à destination de Jeju depuis l'étranger",
          "9 janvier 2023 — les titulaires de passeports diplomatiques et de service sont dispensés de K-ETA",
          `3 juillet 2023 — les voyageurs exemptés de visa âgés de ${F.ketaChildMaxAge} ans ou moins et de ${F.ketaSeniorMinAge} ans ou plus sont dispensés, et la validité passe de 2 à ${F.validYears} ans. Les reçus des demandes déposées après 9 h (heure coréenne) ce jour-là sont envoyés automatiquement par e-mail`,
          "18 mars 2024 — ajout du motif d'entrée « Tour (Incentive Travel) », pour les voyages et réunions de 10 personnes ou plus pris en charge par une entreprise",
          "31 août 2025 — le Service coréen de l'immigration ouvre à l'aéroport international d'Incheon un guichet d'entrée réservé aux voyageurs d'affaires étrangers, jusqu'en décembre",
          "2026 (avis daté du 11 mars 2026) — le K-ETA Center signale des retards de réception des e-mails pour les utilisateurs de Gmail et invite à utiliser une autre adresse",
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
        note: "Non repris ici : la date de début de la dispense temporaire et celles des prolongations antérieures. Les avis correspondants ne figurent plus sur k-eta.go.kr, et nous n'avons pas pu confirmer ces dates sur une page officielle.",
      },
    ],
  },

  /* ── short-term-visit-visa ── */
  {
    slug: "visa-court-sejour-c3",
    enSlug: "short-term-visit-visa",
    added: ADDED,
    checked: CHECKED_NEW,
    title: "Le visa de court séjour coréen (C-3) : quand il faut un visa plutôt qu'une K-ETA",
    description:
      "K-ETA refusée, restriction de nouvelle demande, travail ou études, passeport non exempté de visa : il faut alors un visa. Les catégories C-3 expliquées.",
    related: ["keta-refusee", "keta-ai-je-besoin", "coree-duree-de-sejour"],
    blocks: [
      {
        p: "La K-ETA ne concerne que les voyageurs qui peuvent entrer en Corée sans visa. Dans plusieurs cas, les pages officielles de la K-ETA renvoient vers un visa, à demander auprès d'une ambassade ou d'un consulat de Corée.",
      },
      {
        note: "Pour un séjour touristique ou une courte visite avec un passeport français, vous entrez sans visa : cette page vous concerne surtout si vous prévoyez de travailler ou d'étudier, ou si une demande de K-ETA a été refusée.",
      },
      { h2: "Quand il faut un visa" },
      {
        ul: [
          "Votre K-ETA a été refusée — la FAQ indique d'obtenir un visa auprès de l'ambassade ou du consulat de Corée le plus proche",
          "Vous êtes soumis à la restriction de nouvelle demande (3 demandes ou plus en 6 mois) et devez voyager pendant cette période",
          "Vous prévoyez un emploi, des études ou toute autre activité lucrative",
          "La nationalité de votre passeport n'ouvre pas droit à l'entrée sans visa — l'éligibilité à la K-ETA dépend de la nationalité indiquée sur la page photo du passeport",
        ],
      },
      { h2: "Si vous avez déjà un visa" },
      {
        p: "Les titulaires d'un visa coréen valide n'ont pas besoin de K-ETA. Le guide officiel précise que, si vous détenez un visa valide, votre statut et votre durée de séjour sont accordés selon ce visa, que vous ayez aussi une K-ETA ou non.",
      },
      { h2: "Les catégories de court séjour C-3" },
      {
        p: "Sur le Korea Visa Portal, la catégorie « Short Term Visit » correspond aux séjours de 90 jours au plus et se divise en ces sous-catégories :",
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
        p: "Le Visa Navigator décrit la catégorie Short-Term General (C-3-1) comme couvrant les visites à des proches, les rencontres sportives amicales, la participation ou l'assistance à des événements et réunions, la culture et les arts, les formations générales, les cours, les cérémonies religieuses, la collecte de documentation universitaire et d'autres motifs comparables. Les activités lucratives et l'emploi ne sont pas autorisés.",
      },
      {
        p: "Les titulaires d'une carte de voyage d'affaires APEC (APEC Business Travel Card) reçoivent à l'entrée le statut Short-Term Business (C-3-4) et peuvent séjourner jusqu'à 90 jours.",
      },
      { h2: "Comment faire la demande" },
      {
        p: "Le Visa Navigator présente trois voies : la demande auprès d'une représentation diplomatique coréenne, la demande de visa électronique et la demande de confirmation de délivrance de visa (Confirmation of Visa Issuance). La voie ouverte, les documents requis, les frais et le délai dépendent de votre nationalité et de l'ambassade ou du consulat qui traite votre dossier. Renseignez-vous auprès de cette ambassade ou de ce consulat, ou utilisez le Visa Navigator, avant de déposer votre demande.",
      },
      {
        note: "Le centre d'appel de l'immigration (Immigration Contact Center) est joignable au +82-1345.",
      },
      { source: { label: "Korea Visa Portal — Visa by categories", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10102&LANG_TYPE=EN" } },
      { source: { label: "Korea Visa Portal — Visa Navigator", url: "https://www.visa.go.kr/openPage.do?MENU_ID=10101&LANG_TYPE=EN" } },
      { source: { label: "K-ETA — Frequently asked questions", url: "https://www.k-eta.go.kr/portal/board/viewboardlist.do?tmpltNm=faq2" } },
      { source: { label: "K-ETA — Application guide", url: "https://www.k-eta.go.kr/portal/guide/viewetaapplication.do" } },
      { source: { label: "K-ETA notice — Restriction on the number of applications", url: "https://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=38748" } },
    ],
    faq: [
      {
        q: "Faut-il une K-ETA si j'ai un visa coréen ?",
        a: "Non. La FAQ officielle indique que les titulaires d'un visa coréen valide n'ont pas besoin de K-ETA.",
      },
      {
        q: "Quels documents faut-il pour un visa C-3 ?",
        a: "Ils dépendent de votre nationalité et de l'ambassade ou du consulat de Corée qui traite la demande. Renseignez-vous auprès de cette ambassade ou de ce consulat, ou sur le Korea Visa Portal.",
      },
    ],
  },

  /* ── travel-authorisations-compared ── */
  {
    slug: "autorisations-de-voyage-comparees",
    enSlug: "travel-authorisations-compared",
    added: ADDED,
    title: "Quelle autorisation de voyage vous faut-il ? NZeTA, eVisitor, K-ETA, ESTA et les autres",
    description:
      "Des noms proches, des règles très différentes. Quel dispositif pour quelle destination, ce que chacun coûte, et les erreurs qui naissent de la confusion.",
    related: ["keta-dispense-2026", "keta-tarif", "keta-site-officiel"],
    blocks: [
      {
        p: "Vues de l'extérieur, les autorisations électroniques de voyage semblent interchangeables. Elles ne le sont pas. Chaque pays gère son propre dispositif, avec sa propre liste de pays éligibles, son propre tarif et sa propre conception de ce qu'est ce document — certains sont des visas, d'autres précisent expressément qu'ils n'en sont pas.",
      },
      {
        p: `Cette page sert de repère. Pour la Corée du Sud, le dispositif s'appelle K-ETA et coûte ${F.fee}.`,
      },
      {
        note: "Une règle vaut partout : la demande se fait sur le site du gouvernement concerné, et aucun intermédiaire ne peut obtenir une décision plus vite. Les sites qui facturent plusieurs fois le tarif officiel remplissent le même formulaire à votre place.",
      },
      { h2: "Corée du Sud — K-ETA" },
      {
        p: `Elle coûte ${F.fee} et reste valable ${F.validYears} ans. De nombreuses nationalités en sont dispensées temporairement jusqu'au ${EXEMPT_UNTIL}, dont la France : vérifiez si elle vous concerne avant de demander. La durée de séjour autorisée est fixée par l'accord d'exemption de visa propre à votre nationalité, et non par la K-ETA elle-même — en général ${STAY_RANGE}.`,
      },
      { h2: "Nouvelle-Zélande — NZeTA" },
      {
        p: "Une autorisation préalable au voyage pour les passeports exemptés de visa, pas un visa. Son coût se compose de deux éléments : des frais de demande et une taxe distincte pour la préservation de l'environnement et le tourisme, ce qui explique que les montants totaux cités varient d'une source à l'autre.",
      },
      { h2: "Australie — eVisitor ou ETA" },
      {
        p: "L'Australie utilise deux dispositifs selon le passeport. L'eVisitor (subclass 651) est un visa, et il est gratuit. L'ETA (subclass 601) est l'alternative payante, à demander dans l'application officielle.",
      },
      { h2: "Royaume-Uni — ETA" },
      {
        p: "Elle couvre les séjours de 6 mois au plus au Royaume-Uni, à Jersey, à Guernesey et sur l'île de Man. GOV.UK indique un coût de 20 £. La demande se fait par le service officiel.",
      },
      {
        source: {
          label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
          url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
        },
      },
      { h2: "États-Unis — ESTA, et Canada — AVE (eTA)" },
      {
        p: "Les deux pays appliquent des dispositifs comparables pour les voyageurs exemptés de visa. Nous n'indiquons pas leurs tarifs ici, car nous n'avons pas pu vérifier les montants actuels auprès des sources officielles en rédigeant cette page, et un prix périmé est pire que pas de prix du tout. Consultez directement les sites officiels — et uniquement eux.",
      },
      {
        ul: [
          "États-Unis : esta.cbp.dhs.gov",
          "Canada : canada.ca (Immigration, Réfugiés et Citoyenneté Canada)",
        ],
      },
      { h2: "Les erreurs qui coûtent vraiment de l'argent" },
      {
        ul: [
          "Croire qu'une seule autorisation couvre un voyage dans plusieurs pays. Chaque destination est distincte, y compris une escale pendant laquelle vous quittez l'aéroport.",
          "Croire qu'il s'agit d'un visa. Certaines autorisations en sont, d'autres non, et la différence détermine ce que vous pouvez faire sur place.",
          "Croire que le prix affiché est le prix final. Plusieurs dispositifs ajoutent une taxe distincte ou facturent un montant différent selon le canal de demande.",
          "Passer par un intermédiaire payant en pensant aller plus vite. C'est le même formulaire et la même décision.",
        ],
      },
      { h2: "Vérifiez votre propre passeport, pas un résumé" },
      {
        p: "Les listes de pays éligibles évoluent, et deux passeports donnent souvent deux réponses différentes. Chaque dispositif ci-dessus propose un outil de vérification officiel. Utilisez-le pour le passeport avec lequel vous voyagerez réellement.",
      },
    ],
  },
];
