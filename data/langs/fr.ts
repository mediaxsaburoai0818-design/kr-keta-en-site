import { FACTS as F, type LangContent } from "./_schema";

/** 表記のローカライズ。⚠️ 値は FACTS と同じものを指す（別の数字を書かない）。
 *  F.exemptionUntil = "31 December 2026" / F.decisionTypical = "72 hours"
 *  / F.feeUsdApprox = "about US$7–8" / F.stayRange = "30 to 90 days" */
const EXEMPT_UNTIL = "31 décembre 2026";
const DECISION = "72 heures";
const USD_APPROX = "environ 7 à 8 dollars US";
const STAY_RANGE = "30 à 90 jours";

/**
 * フランス語（/fr/）。読者＝フランスのパスポート保持者。
 *
 * ⚠️ フランスは **K-ETAの一時免除の対象**（2026-12-31まで。2026-09-17に確認）。
 *    独語版と同じく「いまは要らない／2027年1月1日以降は要る見込み」が主役。
 *    「今すぐ申請を」と書き換えないこと（不要な出費をさせる）。
 * ⚠️ 滞在日数はK-ETAでは決まらない。フランスはビザ免除協定で**90日**だが、
 *    協定は変わりうるので断定せず公式確認を促す。
 * ⚠️ 数値は F（data/facts.ts）から入れる。文中に直接書かない。
 * ⚠️ 二人称は vous。行政手続きの説明なので口語に崩さない。
 */
export const fr: LangContent = {
  code: "fr",
  htmlLang: "fr",
  label: "Français",
  audience: "France",
  meta: {
    title: `Les passeports français sont dispensés de K-ETA jusqu'au ${EXEMPT_UNTIL}`,
    description: `La Corée du Sud suspend l'obligation de K-ETA pour la France jusqu'au ${EXEMPT_UNTIL}. D'ici là, vous embarquez sans demande. Ensuite, l'obligation devrait revenir : ${F.fee}, valable ${F.validYears} ans. Ce qu'il faut faire maintenant et après.`,
  },
  header: {
    site: "Guide K-ETA",
    tagline: "Corée du Sud · autorisation électronique de voyage (K-ETA)",
    official: "Site officiel",
  },
  hero: {
    eyebrow: "Corée du Sud · autorisation électronique de voyage · K-ETA",
    h1Before: "Avec un passeport français, la K-ETA ",
    h1Highlight: "n'est pas requise",
    h1After: " pour l'instant",
    lead: `La Corée du Sud a suspendu l'obligation de K-ETA pour plusieurs pays, dont la France, jusqu'au ${EXEMPT_UNTIL}. D'ici là, vous embarquez sans demande. Après cette date, l'obligation devrait revenir : ${F.fee}, valable ${F.validYears} ans.`,
    ctaPrimary: "Vérifier la liste officielle",
    ctaSecondary: "En ai-je besoin maintenant ?",
    disclaimer: "Guide indépendant · sans lien avec le gouvernement coréen · mise à jour",
    imageAlt: "Toiture incurvée d'un palais coréen devant les tours de Séoul",
  },
  stats: [
    { v: "Aucune demande", l: `jusqu'au ${EXEMPT_UNTIL}`, s: "passeports français concernés" },
    { v: F.fee, l: "Frais ensuite", s: USD_APPROX },
    { v: `${F.validYears} ans`, l: "Validité", s: "entrées multiples" },
    { v: DECISION, l: "Délai d'instruction", s: "demander tôt" },
  ],
  whatIs: {
    h2: "Faut-il en demander une aujourd'hui ?",
    p1: `Non. Dans le cadre de sa campagne touristique, la Corée du Sud a suspendu l'obligation de K-ETA pour plusieurs pays, et cette suspension a déjà été prolongée à plusieurs reprises. L'échéance actuelle est le ${EXEMPT_UNTIL} : d'ici là, un passeport français embarque sans K-ETA.`,
    p2: `Cette dispense reste toutefois temporaire. Sans nouvelle prolongation, l'obligation s'appliquera de nouveau à partir du 1er janvier 2027. Si votre voyage se situe autour du changement d'année, revérifiez la liste juste avant le départ : elle a déjà été modifiée par le passé.`,
  },
  features: [
    {
      h: "Vous pouvez demander quand même",
      p: "Les personnes dispensées peuvent déposer une demande volontairement. L'intérêt est concret : avec une K-ETA, la carte de débarquement papier n'est plus à remplir à l'arrivée. Les frais restent dus — à vous de juger si cela en vaut la peine.",
    },
    {
      h: "La K-ETA ne fixe pas la durée de séjour",
      p: `Elle autorise seulement l'embarquement. La durée autorisée découle de l'accord d'exemption de visa propre à votre nationalité (en général ${STAY_RANGE}) et la décision d'entrée revient à l'officier d'immigration.`,
    },
    {
      h: "Seuls les canaux officiels sont authentiques",
      p: `La demande se fait uniquement sur ${F.officialHost} et dans l'application officielle. Les frais publics sont de ${F.fee}. Les sites qui facturent nettement plus sont des intermédiaires.`,
    },
  ],
  eligibility: {
    h2: "Que faire selon votre situation",
    lead: "La réponse dépend de votre passeport et de votre date d'entrée. La dispense a déjà été prolongée plus d'une fois : c'est la liste officielle qui fait foi.",
    th: ["Votre situation", "K-ETA nécessaire ?", "Ce qu'il faut faire", "Coût"],
    rows: [
      [
        `Passeport français, entrée avant le ${EXEMPT_UNTIL}`,
        "Non",
        "Embarquez simplement. Vous pouvez demander volontairement pour éviter la carte de débarquement",
        "0 sans demande",
      ],
      [
        "Entrée à partir du 1er janvier 2027",
        "Probablement oui",
        "Revérifiez la liste avant le départ et demandez à l'avance si nécessaire",
        F.fee,
      ],
      [
        "Pays exempté de visa mais absent de la liste de dispense",
        "Oui",
        `Demande sur ${F.officialHost}`,
        F.fee,
      ],
      ["Passeport sans exemption de visa", "Sans objet", "Il vous faut un visa, pas une K-ETA", "selon le visa"],
    ],
    note: `Les chiffres publiés sur le nombre de pays dispensés se contredisent (22 pays, 67 pays selon les sources). Nous n'en citons donc aucun : seule la liste officielle sur ${F.officialHost} fait foi. Vérifié le 17 août 2026.`,
  },
  steps: {
    h2: "La marche à suivre lorsqu'une demande est nécessaire",
    items: [
      {
        h: "Vérifier d'abord si vous êtes dispensé",
        p: `La dispense court jusqu'au ${EXEMPT_UNTIL}. La liste a déjà changé : contrôlez-la avant le départ sur ${F.officialHost}.`,
      },
      {
        h: "Utiliser le site officiel ou l'application officielle",
        p: `Seuls ${F.officialHost} et l'application officielle sont de vrais canaux. Les frais publics sont de ${F.fee} ; les tarifs plus élevés incluent une prestation de saisie du formulaire.`,
      },
      {
        h: "Téléverser la photo et payer",
        p: "Saisissez les données du passeport, une photo de visage et les informations de voyage, puis payez par carte. Chaque champ doit correspondre exactement au passeport.",
      },
      {
        h: "Ne partir qu'une fois la décision reçue",
        p: `L'instruction prend en général jusqu'à ${DECISION}, sans garantie. Ne demandez pas le jour du départ, et rappelez-vous qu'une autorisation ne garantit pas l'entrée.`,
      },
    ],
    cta: `Aller sur ${F.officialHost}`,
  },
  rules: {
    h2: "Ce qui est permis et ce qui ne l'est pas",
    allowedH: "Permis",
    allowed: [
      "Tourisme, visite à la famille ou à des proches",
      "Déplacements professionnels courts : réunions, conférences",
      "Entrées multiples pendant la durée de validité",
      "Demande volontaire pour éviter la carte de débarquement papier",
    ],
    deniedH: "Non permis",
    denied: [
      "Exercer une activité rémunérée en Corée du Sud",
      "Rester au-delà de la durée prévue par l'accord d'exemption de visa",
      "Utiliser la K-ETA comme un visa (sans exemption, le visa reste obligatoire)",
      "Passer par un site non officiel en croyant accélérer l'instruction",
    ],
  },
  border: {
    h2: "À l'arrivée",
    p: "Voyagez avec le passeport utilisé lors de la demande : l'autorisation y est liée électroniquement et rien n'est à imprimer. La durée de séjour dépend de l'accord d'exemption de visa, la décision d'entrée revient à l'officier d'immigration, et une K-ETA accordée ne garantit pas l'entrée. Les détenteurs d'une K-ETA n'ont pas à remplir la carte de débarquement papier — c'est la raison pour laquelle certains en demandent une même pendant la dispense.",
  },
  faq: {
    h2: "Questions fréquentes",
    items: [
      {
        q: "Un passeport français a-t-il besoin d'une K-ETA en ce moment ?",
        a: `Non. L'obligation est suspendue pour la France et d'autres pays jusqu'au ${EXEMPT_UNTIL}. D'ici là vous embarquez sans demande, mais vérifiez la liste avant le départ sur ${F.officialHost} : elle a déjà été modifiée.`,
      },
      {
        q: `Que se passera-t-il après le ${EXEMPT_UNTIL} ?`,
        a: "Sans nouvelle prolongation, l'obligation reviendra le 1er janvier 2027. Comme la dispense a déjà été prolongée plusieurs fois, rien n'est certain : si vous voyagez autour du changement d'année, vérifiez tôt.",
      },
      {
        q: "Pourquoi certains en demandent-ils une malgré la dispense ?",
        a: "Parce qu'avec une K-ETA, la carte de débarquement papier n'est plus à remplir. Les frais restent dus : c'est tout l'arbitrage.",
      },
      {
        q: "Combien coûte la K-ETA ?",
        a: `Les frais publics sont de ${F.fee} (${USD_APPROX}), payés par carte au moment de la demande. Les tarifs nettement supérieurs proviennent d'intermédiaires.`,
      },
      {
        q: "Quelle est sa durée de validité ?",
        a: `${F.validYears} ans à compter de l'accord, ou jusqu'à l'expiration du passeport si elle intervient avant. Les entrées multiples sont possibles pendant cette période.`,
      },
      {
        q: "Combien de temps puis-je rester ?",
        a: `Ce n'est pas la K-ETA qui le détermine, mais l'accord d'exemption de visa propre à votre nationalité (en général ${STAY_RANGE} ; 90 jours sont indiqués pour les passeports français). La durée effective est fixée à l'arrivée.`,
      },
      {
        q: "La K-ETA est-elle un visa ?",
        a: "Non. C'est une autorisation préalable destinée aux personnes déjà exemptées de visa. Sans exemption, il vous faut un visa.",
      },
    ],
  },
  cta: {
    h2: "Vérifiez votre situation sur le site officiel",
    p: `Seuls ${F.officialHost} et l'application officielle sont de vrais canaux. Ce guide est indépendant et ne traite aucune demande.`,
    button: `Ouvrir ${F.officialHost}`,
  },
  footer: {
    disclaimer: `Guide indépendant. Sans lien avec le gouvernement sud-coréen, les services d'immigration ou ${F.officialHost}. Nous ne traitons aucune demande : passez exclusivement par les canaux officiels.`,
  },
  ui: {
    updated: "Mise à jour",
    backToTop: "Haut de page",
    languages: "Langue",
    articles: "À lire aussi",
    readMore: "Lire la suite",
    updatedLabel: "17 août 2026",
  },
  pages: [
    {
      slug: "keta-tarif",
      title: "Combien coûte la K-ETA — et devez-vous vraiment payer ?",
      description:
        "Les frais officiels, la question du paiement pendant la dispense, et pourquoi certains sites affichent plusieurs fois le prix.",
      blocks: [
        { h2: "Avant le tarif, la question de l'obligation" },
        {
          p: `Les passeports français figurent actuellement sur la liste de dispense (jusqu'au ${F.exemptionUntil}). Dans la plupart des cas, vous n'avez donc ni demande à déposer ni frais à payer. Réglez d'abord cette question, le tarif vient ensuite.`,
        },
        { h2: "Les frais officiels lorsqu'une demande est nécessaire" },
        {
          p: `Si une demande s'impose, les frais sont de ${F.fee} (${F.feeUsdApprox}). C'est le montant versé à l'administration coréenne ; aucun autre frais n'est nécessaire.`,
        },
        { h2: "Pourquoi les prix vus en ligne sont plus élevés" },
        {
          p: `Les sites qui facturent nettement plus que ${F.fee} sont en général des intermédiaires, et facturent la saisie du formulaire. Cela n'accélère pas l'instruction et n'améliore pas vos chances.`,
        },
        {
          ul: [
            `Site officiel : ${F.officialHost}`,
            "Aucune procédure d'urgence payante n'existe officiellement",
            "Une personne dispensée qui paie n'obtient aucun avantage en retour",
          ],
        },
        {
          note: "L'erreur la plus coûteuse n'est pas le mauvais prestataire : c'est de payer alors qu'on n'est pas soumis à l'obligation. Vérifier d'abord, payer ensuite.",
        },
      ],
    },
    {
      slug: "keta-documents",
      title: "Ce qu'il faut préparer pour une demande de K-ETA",
      description:
        "Les informations réellement demandées, et la raison la plus fréquente de refus d'une photo.",
      blocks: [
        { h2: "À préparer" },
        {
          ul: [
            "Un passeport en cours de validité (numéro et date d'expiration à saisir)",
            "Une photo de visage au format numérique (à téléverser)",
            "Une adresse e-mail accessible pendant le voyage",
            "L'hébergement en Corée (nom et adresse)",
            "Un moyen de paiement (carte bancaire)",
          ],
        },
        { h2: "C'est la photo qui pose le plus de problèmes" },
        {
          p: "La photo doit être récente, de face, sur fond neutre. La cause de refus la plus fréquente est de loin une ombre sur le visage ou le fond, suivie des couvre-chefs, des verres teintés et des photos anciennes. Devant un mur blanc, avec une lumière uniforme, c'est le plus sûr.",
        },
        { h2: "Si l'hébergement n'est pas encore réservé" },
        {
          p: "Indiquez l'hébergement envisagé. Un changement ultérieur n'invalide pas une K-ETA accordée. L'essentiel est de ne pas laisser le champ vide et de ne pas inventer d'adresse.",
        },
        {
          note: "Saisissez le nom exactement tel qu'il figure sur le passeport. En cas d'écart, la compagnie aérienne risque de ne pas retrouver votre autorisation à l'enregistrement.",
        },
      ],
    },
    {
      slug: "keta-delai",
      title: "Quel est le délai d'instruction de la K-ETA ?",
      description:
        "Ce que signifie concrètement « en général sous 72 heures », ce qui ralentit le traitement, et pourquoi il n'existe pas d'option express.",
      blocks: [
        { h2: "Ce que dit l'administration" },
        {
          p: `L'instruction se fait en général sous ${F.decisionTypical}. C'est un ordre de grandeur, pas un engagement : en haute saison, le délai peut s'allonger.`,
        },
        { h2: "Ce qui ralentit le traitement" },
        {
          ul: [
            "Des informations qui ne correspondent pas au passeport",
            "Une photo non conforme, à soumettre de nouveau",
            "Un antécédent de refus d'entrée ou de dépassement de séjour en Corée",
            "Les pics de demandes avant les périodes de vacances",
          ],
        },
        { h2: "Il n'existe pas d'accélération payante" },
        {
          p: "L'administration ne propose aucun traitement accéléré. Les sites qui le promettent n'accélèrent que leur propre saisie du formulaire : l'ordre d'examen côté coréen reste identique.",
        },
        {
          note: "Ne demandez pas la veille du départ. Le bon moment est celui où le voyage est confirmé.",
        },
      ],
    },
    {
      slug: "keta-validite",
      title: "Validité de la K-ETA et changement de passeport",
      description:
        "Combien de temps une K-ETA accordée reste utilisable, pourquoi un nouveau passeport y met fin, et en quoi cela diffère de la durée de séjour.",
      blocks: [
        { h2: "Durée de validité" },
        {
          p: `Une K-ETA est utilisable pendant ${F.validYears} ans à compter de son octroi et permet plusieurs entrées. Si le passeport expire avant, elle prend fin avec lui.`,
        },
        { h2: "Nouveau passeport, nouvelle K-ETA" },
        {
          p: "L'autorisation est liée au numéro de passeport. Après un renouvellement, une perte ou une réédition, l'ancienne K-ETA n'est plus utilisable : il faut redéposer une demande avec le nouveau passeport. C'est le point le plus souvent oublié.",
        },
        { h2: "Validité n'est pas durée de séjour" },
        {
          p: `C'est la confusion la plus répandue. Les ${F.validYears} ans indiquent combien de temps l'autorisation reste utilisable, pas combien de temps vous pouvez rester à chaque entrée. Cette durée découle de l'accord d'exemption de visa et se situe en général entre ${F.stayRange}.`,
        },
        {
          note: "Le nombre de jours effectivement accordé est fixé par l'officier d'immigration à l'arrivée.",
        },
      ],
    },
    {
      slug: "keta-statut",
      title: "Vérifier le statut de sa K-ETA — quand l'e-mail n'arrive pas",
      description:
        "Comment contrôler l'état de votre demande, et où il ne faut surtout pas saisir votre numéro de passeport.",
      blocks: [
        { h2: "La décision arrive par e-mail" },
        {
          p: "Une notification est envoyée après l'examen. La K-ETA est électronique et liée au passeport : rien à imprimer. Conserver une capture d'écran ne nuit pas pour autant.",
        },
        { h2: "Si l'e-mail n'arrive pas" },
        {
          ul: [
            "Vérifier d'abord les dossiers indésirables et promotions",
            "Contrôler que l'adresse saisie ne comporte pas de faute",
            `Interroger le statut avec le numéro de demande sur ${F.officialHost}`,
          ],
        },
        { h2: "Ne saisissez votre numéro de passeport que sur le site officiel" },
        {
          p: `Le seul endroit où saisir votre numéro de passeport est ${F.officialHost}. Les tiers qui proposent une « vérification de statut » payante sont inutiles — et vous leur confiez vos données de passeport.`,
        },
        {
          note: "La compagnie aérienne interroge directement le système coréen à l'enregistrement : l'absence de document imprimé ne vous pénalise pas.",
        },
      ],
    },
    {
      slug: "keta-faq",
      title: "K-ETA : questions fréquentes",
      description: "Réponses courtes aux questions les plus posées avec un passeport français.",
      blocks: [
        { h2: "Faut-il en demander une aujourd'hui ?" },
        {
          p: `La France figure actuellement sur la liste de dispense (jusqu'au ${F.exemptionUntil}). Cette liste peut changer : vérifiez-la sur le site officiel avant le départ.`,
        },
        { h2: "Et si je demande quand même pendant la dispense ?" },
        {
          p: "Il n'y a aucune conséquence négative, mais les frais ne sont pas remboursés et n'apportent rien d'autre que la dispense de carte de débarquement papier.",
        },
        { h2: "La K-ETA est-elle un visa ?" },
        {
          p: "Non. C'est une autorisation électronique préalable. Même accordée, elle laisse la décision d'entrée à l'officier d'immigration.",
        },
        { h2: "Combien de temps puis-je rester ?" },
        {
          p: `Cela relève de l'accord d'exemption de visa, en général ${F.stayRange} ; 90 jours sont indiqués pour les passeports français. La K-ETA ne fixe pas cette durée.`,
        },
        { h2: "En ai-je besoin pour une simple correspondance ?" },
        {
          p: "Si vous n'entrez pas sur le territoire et restez en zone de transit, généralement non. Si vous sortez de l'aéroport, vous entrez sur le territoire : les conditions d'entrée s'appliquent.",
        },
        { h2: "Puis-je travailler ?" },
        {
          p: "Non. Sont couverts le tourisme, les visites et les déplacements professionnels courts, pas un emploi.",
        },
      ],
    },
    {
      slug: "a-propos",
      title: "À propos du site et de son éditeur",
      description: "Qui édite ce guide indépendant consacré à la K-ETA sud-coréenne.",
      blocks: [
        { h2: "Éditeur" },
        {
          p: "Ce site est un guide indépendant consacré à l'autorisation électronique de voyage de la Corée du Sud (K-ETA). Nous ne sommes pas une administration et n'avons aucun lien avec le gouvernement coréen ni ses services d'immigration. Éditeur : MediaX Co., Ltd. (Japon). Contact : webmaster@mediax.biz",
        },
        { h2: "Ce que nous ne faisons pas" },
        {
          ul: [
            "Nous ne traitons aucune demande.",
            "Nous ne percevons aucun frais de dossier.",
            "Nous ne délivrons aucun conseil juridique ou en immigration.",
          ],
        },
        { h2: "Exactitude des informations" },
        {
          p: "Tout le contenu repose sur les publications officielles à la date de vérification indiquée. Les règles évoluent : le site officiel fait foi. Signalez-nous toute erreur, nous la corrigerons.",
        },
      ],
    },
    {
      slug: "confidentialite",
      title: "Politique de confidentialité",
      description: "Quelles données ce site traite, pourquoi, et quels sont vos droits.",
      blocks: [
        { h2: "En résumé" },
        {
          p: "Ce site est constitué de pages d'information statiques. Il n'y a ni inscription, ni vente, ni collecte de données de passeport. Les données personnelles ne sont traitées que dans la mesure technique nécessaire.",
        },
        { h2: "Journaux du serveur" },
        {
          p: "Le site est hébergé sur Cloudflare Pages. À chaque consultation sont enregistrés l'adresse IP, l'horodatage, l'adresse demandée et des informations sur le navigateur, pour assurer la stabilité et prévenir les attaques.",
        },
        { h2: "Cookies et mesure d'audience" },
        {
          p: "Nous n'utilisons pas de cookies publicitaires et n'intégrons aucun script de suivi tiers. Si une mesure d'audience était ajoutée plus tard, elle serait d'abord décrite ici.",
        },
        { h2: "Liens externes" },
        {
          p: "Le site renvoie vers des sources officielles, soumises à leurs propres politiques de confidentialité.",
        },
        { h2: "Contact" },
        { p: "Pour toute question relative aux données : webmaster@mediax.biz" },
      ],
    },
    {
      slug: "conditions",
      title: "Conditions d'utilisation",
      description: "Les conditions applicables à l'usage des informations de ce site.",
      blocks: [
        { h2: "Objet" },
        {
          p: "Les contenus fournissent une information générale sur la K-ETA sud-coréenne. Ils ne constituent ni un conseil juridique ni un conseil en immigration et ne créent aucun mandat.",
        },
        { h2: "Aucun traitement de demande" },
        {
          p: "Nous ne sommes ni intermédiaire ni administration. Les demandes passent exclusivement par les canaux officiels ; nous ne recevons ni formulaires, ni frais, ni données de passeport.",
        },
        { h2: "Limitation de responsabilité" },
        {
          p: "Nous nous efforçons de maintenir des informations exactes et à jour, sans pouvoir en garantir l'exhaustivité ni l'absence d'erreur. Notre responsabilité n'est engagée qu'en cas de faute intentionnelle ou de négligence grave.",
        },
        { h2: "Droit d'auteur" },
        {
          p: "Les textes et la mise en forme sont protégés. Toute reprise intégrale sans accord est interdite ; les citations courtes avec mention de la source et lien sont les bienvenues.",
        },
      ],
    },
  ],
  articles: [
    {
      slug: "keta-dispense-2026",
      title: `K-ETA suspendue jusqu'au ${EXEMPT_UNTIL} — ce que les voyageurs français doivent savoir`,
      description:
        "D'où vient la dispense, jusqu'à quand elle s'applique, et comment décider si votre voyage se situe autour du changement d'année.",
      blocks: [
        {
          p: `La Corée du Sud a suspendu l'obligation de K-ETA pour plusieurs pays, dont la France, jusqu'au ${EXEMPT_UNTIL}. Pendant cette période, un passeport français embarque sans K-ETA.`,
        },
        { h2: "Pourquoi cette dispense existe" },
        {
          p: "Elle a été instaurée pour attirer davantage de visiteurs et a depuis été prolongée plusieurs fois. Il s'agit donc d'une mesure politique temporaire : le dispositif lui-même n'a pas été supprimé.",
        },
        { h2: "Voyager autour du changement d'année demande une vérification" },
        {
          ul: [
            `Entrée jusqu'au ${EXEMPT_UNTIL} : aucune K-ETA nécessaire pour l'instant`,
            "Entrée à partir du 1er janvier 2027 : obligation rétablie sans nouvelle prolongation",
            "Voyage à cheval sur les deux années : c'est la règle applicable le jour de l'entrée qui compte, pas celle du jour de la réservation",
          ],
        },
        {
          note: `La liste et l'échéance peuvent encore évoluer. Ne vous fiez pas à d'anciens articles de blog : vérifiez ${F.officialHost} juste avant le départ.`,
        },
        { h2: "Si vous souhaitez demander malgré la dispense" },
        {
          p: `C'est possible. L'avantage est de ne plus avoir à remplir la carte de débarquement papier ; les frais de ${F.fee} restent dus. Pour qui veut gagner une étape à l'aéroport, cela peut se justifier — sinon, il n'y a pas de raison.`,
        },
      ],
    },
    {
      slug: "keta-guide-demande",
      title: "Demander une K-ETA : déroulé et pièges habituels",
      description: `Les canaux officiels, les frais de ${F.fee}, le délai d'instruction et les erreurs qui bloquent réellement les demandes.`,
      blocks: [
        {
          p: `Lorsqu'une demande est nécessaire, elle se fait uniquement sur ${F.officialHost} ou dans l'application officielle. Les frais publics sont de ${F.fee} (${USD_APPROX}) et la décision intervient en général sous ${DECISION}.`,
        },
        { h2: "Ce qu'il faut avoir sous la main" },
        {
          ul: [
            "Un passeport en cours de validité",
            "Une photo de visage conforme",
            "L'hébergement et les grandes lignes du voyage",
            "Une carte bancaire pour le paiement en ligne",
          ],
        },
        { h2: "Les pièges habituels" },
        {
          ul: [
            "Orthographe du nom différente de celle du passeport (le cas le plus fréquent)",
            "Photo non conforme et donc rejetée",
            "Site d'intermédiaire pris pour le site officiel, avec des frais de service payés en trop",
            "Demande déposée un ou deux jours avant le départ : en cas d'examen manuel, le délai devient trop court",
          ],
        },
        {
          note: `L'adresse officielle est ${F.officialHost}. Dans les résultats de recherche, les annonces d'intermédiaires apparaissent souvent au-dessus : vérifiez l'adresse avant de saisir des données personnelles.`,
        },
        { h2: "Après l'accord" },
        {
          p: "L'autorisation est liée électroniquement au passeport, rien n'est à imprimer. Voyagez avec le même passeport ; après un changement de passeport, redéposez une demande.",
        },
      ],
    },
    {
      slug: "coree-duree-de-sejour",
      title: "Combien de temps rester en Corée du Sud — ce n'est pas la K-ETA qui décide",
      description:
        "La durée de séjour découle de l'accord d'exemption de visa, pas de la K-ETA. Comment les deux s'articulent et pourquoi la distinction compte.",
      blocks: [
        {
          p: `Beaucoup de résumés écrivent « 90 jours avec la K-ETA ». Cela mélange deux choses. La K-ETA est l'autorisation préalable d'embarquer ; la durée de séjour découle de l'accord d'exemption de visa propre à votre nationalité.`,
        },
        { h2: "La différence" },
        {
          ul: [
            `Validité de la K-ETA : ${F.validYears} ans, entrées multiples`,
            `Durée autorisée par entrée : selon l'accord, en général ${STAY_RANGE} — 90 jours sont indiqués pour les passeports français`,
            "Durée effectivement accordée : décidée par l'officier d'immigration à l'arrivée",
          ],
        },
        { h2: "Pourquoi il faut distinguer les deux" },
        {
          p: "Parce que ces accords sont conclus État par État et peuvent être ajustés. Organiser un long séjour parce que « quelqu'un est resté 90 jours » fait porter le risque sur vous. Vérifiez avant de réserver ce qui s'applique à votre passeport.",
        },
        {
          note: "Une K-ETA accordée ne garantit pas l'entrée. Le vol retour, l'hébergement et le motif du voyage peuvent toujours être demandés au contrôle.",
        },
      ],
    },
  ],
};
