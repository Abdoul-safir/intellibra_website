import type { LocalizedText } from './team-content';

export type NewsCategory = 'milestone' | 'field-notes' | 'perspective' | 'media';

export interface NewsMediaImage {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

export type NewsMediaBlock =
  | {
      id: string;
      type: 'image';
      afterParagraph: number;
      image: NewsMediaImage;
    }
  | {
      id: string;
      type: 'gallery';
      afterParagraph: number;
      images: NewsMediaImage[];
      caption?: LocalizedText;
    }
  | {
      id: string;
      type: 'video';
      afterParagraph: number;
      src: string;
      poster: string;
      title: LocalizedText;
      caption: LocalizedText;
    };

export interface NewsArticle {
  slug: string;
  category: NewsCategory;
  date: string;
  readTime: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  body: LocalizedText[];
  media?: NewsMediaBlock[];
  quote?: LocalizedText;
  quoteAttribution?: LocalizedText;
  link?: { label: LocalizedText; href: string };
  featured?: boolean;
}

export const newsCategoryLabels: Record<NewsCategory, LocalizedText> = {
  milestone: { en: 'Milestone', fr: 'Étape clé' },
  'field-notes': { en: 'Field notes', fr: 'Carnet de terrain' },
  perspective: { en: 'Perspective', fr: 'Point de vue' },
  media: { en: 'Media', fr: 'Média' },
};

export const newsArticles: NewsArticle[] = [
  {
    slug: 'from-prototype-to-clinical-validation',
    category: 'milestone',
    date: '2026-07-14',
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'From working prototype to clinical validation',
      fr: 'Du prototype fonctionnel à la validation clinique',
    },
    excerpt: {
      en: 'A new chapter begins as IntelliBra prepares its technology, sites, and study teams for structured clinical evaluation.',
      fr: "Un nouveau chapitre commence alors qu'IntelliBra prépare sa technologie, ses sites et ses équipes à une évaluation clinique structurée.",
    },
    image: '/images/medecin.png',
    imageAlt: {
      en: 'Clinicians speaking with a patient in a care setting',
      fr: 'Des cliniciens échangeant avec une patiente dans un espace de soins',
    },
    body: [
      {
        en: 'Reaching a working prototype is an important engineering moment. Preparing that prototype for clinical evaluation is a much broader team effort—one that brings together safety reviews, site preparation, training, data governance, and clear participant communication.',
        fr: "Atteindre un prototype fonctionnel est une étape d'ingénierie importante. Le préparer à une évaluation clinique mobilise une équipe bien plus large : examens de sécurité, préparation des sites, formation, gouvernance des données et information claire des participantes.",
      },
      {
        en: 'Over the coming phase, our team will focus on repeatability and workflow. The goal is not only to understand how the system performs, but also how it fits into the rhythm of frontline care and supports appropriate follow-up.',
        fr: "Au cours de cette phase, notre équipe se concentrera sur la répétabilité et les flux de travail. L'objectif est de comprendre non seulement les performances du système, mais aussi son intégration dans le rythme des soins de première ligne et son soutien au suivi approprié.",
      },
      {
        en: 'The findings will inform the next product iteration and help us define what responsible scale should look like. We will share progress in plain language as the work advances.',
        fr: "Les résultats guideront la prochaine itération du produit et nous aideront à définir une mise à l'échelle responsable. Nous partagerons les progrès dans un langage clair au fil de l'avancée des travaux.",
      },
    ],
    quote: {
      en: 'Validation is where technical promise meets the realities of care—and where listening becomes as important as measuring.',
      fr: "La validation est le point de rencontre entre la promesse technique et la réalité des soins, où l'écoute devient aussi importante que la mesure.",
    },
    quoteAttribution: { en: 'IntelliBra clinical team', fr: 'Équipe clinique IntelliBra' },
    link: {
      label: { en: 'Learn how clinical research works', fr: 'Comprendre le fonctionnement de la recherche clinique' },
      href: 'https://www.who.int/health-topics/clinical-trials',
    },
    featured: true,
  },
  {
    slug: 'preparing-frontline-clinics-for-the-study',
    category: 'field-notes',
    date: '2026-07-08',
    readTime: { en: '5 min read', fr: '5 min de lecture' },
    title: {
      en: 'Preparing frontline clinics for the study',
      fr: "Préparer les structures de première ligne à l'étude",
    },
    excerpt: {
      en: 'What site readiness looks like when training, connectivity, patient flow, and local context are designed together.',
      fr: "À quoi ressemble la préparation d'un site lorsque formation, connectivité, parcours patient et contexte local sont pensés ensemble.",
    },
    image: '/images/contact-clinician.webp',
    imageAlt: { en: 'A clinician reviewing a patient record', fr: 'Une clinicienne consultant un dossier patient' },
    body: [
      {
        en: 'A study site is more than a room and a device. It is a coordinated system of people, routines, safeguards, and referral pathways. Our preparation begins with a walkthrough led by the people who know the clinic best.',
        fr: "Un site d'étude est bien plus qu'une salle et un dispositif. C'est un système coordonné de personnes, routines, garanties et parcours d'orientation. Notre préparation commence par une visite guidée par celles et ceux qui connaissent le mieux la structure.",
      },
      {
        en: 'The first conversation is practical. Where do patients arrive? Who explains the study? Which room offers enough privacy for consent and screening? How does the team manage a busy morning when several services share the same space? We trace the real path through the clinic before deciding where the study workflow should sit within it.',
        fr: "La première conversation est pratique. Où les patientes arrivent-elles ? Qui explique l'étude ? Quelle salle offre suffisamment d'intimité pour le consentement et le dépistage ? Comment l'équipe gère-t-elle une matinée chargée lorsque plusieurs services partagent le même espace ? Nous retraçons le parcours réel dans la structure avant de décider comment y intégrer le protocole d'étude.",
      },
      {
        en: 'That walkthrough often reveals details that cannot be seen from a protocol alone. A power outlet may be farther from the examination area than expected. A consultation room may be available only at certain hours. A staff handover may happen during the period planned for participant visits. Each observation becomes a small design decision about equipment placement, scheduling, roles, or communication.',
        fr: "Cette visite révèle souvent des détails qu'un protocole ne montre pas à lui seul. Une prise électrique peut être plus éloignée que prévu de la zone d'examen. Une salle de consultation peut n'être disponible qu'à certaines heures. Un changement d'équipe peut avoir lieu pendant la période prévue pour les visites. Chaque observation devient une décision concrète concernant le matériel, les horaires, les rôles ou la communication.",
      },
      {
        en: 'Connectivity is tested where the work will actually happen—not only near the reception desk or an office router. The IntelliBra workflow is designed to keep essential tasks available offline, but the team still needs to understand when data can synchronize, how that status is communicated, and what happens after an interruption. We rehearse those recovery steps until they feel ordinary rather than exceptional.',
        fr: "La connectivité est testée là où le travail aura réellement lieu, et pas seulement près de l'accueil ou d'un routeur de bureau. Le parcours IntelliBra est conçu pour maintenir les fonctions essentielles hors connexion, mais l'équipe doit savoir quand les données peuvent se synchroniser, comment cet état est signalé et ce qui se passe après une interruption. Nous répétons ces étapes de reprise jusqu'à ce qu'elles deviennent ordinaires plutôt qu'exceptionnelles.",
      },
      {
        en: 'The equipment check is equally concrete. The team confirms that each component can be charged, cleaned, stored securely, and moved between rooms without disrupting care. Accessories are counted, device labels are matched to the site record, and the setup is repeated from a closed case rather than from an already prepared table. That simple reset shows whether the instructions are clear enough for the next shift to begin independently.',
        fr: "La vérification du matériel est tout aussi concrète. L'équipe confirme que chaque composant peut être chargé, nettoyé, stocké en sécurité et déplacé entre les salles sans perturber les soins. Les accessoires sont comptés, les étiquettes du dispositif sont rapprochées du registre du site et l'installation est répétée à partir d'une mallette fermée plutôt que d'une table déjà préparée. Cette remise à zéro montre si les instructions permettent à l'équipe suivante de commencer de façon autonome.",
      },
      {
        en: 'Training follows the same principle. Instead of separating the device from the surrounding care process, sessions move through complete scenarios: welcoming a participant, explaining consent, preparing the examination, documenting the result, cleaning the equipment, and closing the visit. Clinicians practice the expected path and the less predictable moments—a delayed appointment, an incomplete record, or a temporary loss of connectivity.',
        fr: "La formation suit le même principe. Plutôt que de séparer le dispositif du parcours de soins, les sessions couvrent des scénarios complets : accueillir une participante, expliquer le consentement, préparer l'examen, documenter le résultat, nettoyer le matériel et clôturer la visite. Les cliniciens répètent le parcours prévu ainsi que les situations moins prévisibles : un rendez-vous retardé, un dossier incomplet ou une perte temporaire de connexion.",
      },
      {
        en: 'Clear roles matter as much as technical competence. A site may have one person welcoming participants, another conducting the examination, and a senior clinician reviewing findings. The readiness session makes every handoff visible: who confirms consent, who checks completeness, who locks the device at the end of the day, and who responds when a question falls outside the planned workflow. Naming those responsibilities reduces hesitation when the clinic is busy.',
        fr: "La clarté des rôles compte autant que la compétence technique. Un site peut confier l'accueil des participantes à une personne, l'examen à une autre et la revue des résultats à un clinicien senior. La session de préparation rend chaque transmission visible : qui confirme le consentement, qui vérifie la complétude, qui sécurise le dispositif en fin de journée et qui répond lorsqu'une question sort du parcours prévu. Nommer ces responsabilités réduit les hésitations lorsque la structure est très sollicitée.",
      },
      {
        en: 'Participant experience is reviewed with equal care. Technical readiness means little if a woman does not know what will happen, how long the visit may take, or whom she can ask for help. The site team reviews the language used at each step, checks that privacy can be maintained, and confirms that choosing not to participate—or deciding to withdraw—does not affect access to routine care.',
        fr: "L'expérience des participantes est examinée avec la même attention. La préparation technique a peu de valeur si une femme ne sait pas ce qui va se passer, combien de temps la visite peut durer ou à qui poser ses questions. L'équipe revoit le langage utilisé à chaque étape, vérifie que la confidentialité peut être préservée et confirme que le refus de participer, ou le retrait ultérieur, n'affecte pas l'accès aux soins courants.",
      },
      {
        en: 'Data handling is rehearsed as part of care rather than treated as an administrative task for later. The team checks how study codes are assigned, where consent records are kept, who can access the tablet, and how a correction is documented without obscuring the original entry. No names or national identity numbers are entered into the research dataset. These safeguards are reviewed aloud so that privacy remains a shared clinical responsibility.',
        fr: "La gestion des données est répétée comme une composante du soin, et non comme une tâche administrative à remettre à plus tard. L'équipe vérifie comment les codes d'étude sont attribués, où les consentements sont conservés, qui peut accéder à la tablette et comment une correction est documentée sans masquer l'entrée initiale. Aucun nom ni numéro d'identité nationale n'est saisi dans les données de recherche. Ces garanties sont revues à voix haute afin que la confidentialité reste une responsabilité clinique partagée.",
      },
      {
        en: 'Referral planning is another essential part of readiness. The study does not end when a screening record is completed. Before enrollment begins, the site confirms who reviews findings, how a participant is contacted, which services can receive a referral, and how urgent cases are escalated. Clear ownership prevents a result from becoming an unanswered question between teams.',
        fr: "La planification de l'orientation est une autre composante essentielle. L'étude ne s'arrête pas lorsqu'un dossier de dépistage est complété. Avant le début des inclusions, le site confirme qui examine les résultats, comment une participante est contactée, quels services peuvent recevoir une orientation et comment les situations urgentes sont escaladées. Une responsabilité claire évite qu'un résultat ne devienne une question sans réponse entre les équipes.",
      },
      {
        en: 'A final simulation brings the pieces together. One team member plays the participant while the others complete the visit from arrival to departure. Observers record pauses, repeated questions, unclear prompts, and moments when staff leave the room to find information. The group then debriefs without assigning blame. The purpose is to improve the system around the team, not to reward a polished performance during inspection.',
        fr: "Une simulation finale rassemble tous les éléments. Un membre de l'équipe joue le rôle de la participante tandis que les autres réalisent la visite de l'arrivée au départ. Les observateurs notent les hésitations, les questions répétées, les indications peu claires et les moments où le personnel quitte la salle pour chercher une information. Le groupe débriefe ensuite sans chercher de responsable. L'objectif est d'améliorer le système autour de l'équipe, et non de récompenser une performance parfaite le jour de l'évaluation.",
      },
      {
        en: 'At the end of the preparation visit, the clinic and study teams review the same readiness record. Open items receive a named owner and a realistic date. Some can be resolved immediately; others require a follow-up call, a revised schedule, or a second simulation. Readiness is not treated as a single inspection or a pass–fail moment. It is a shared process of removing uncertainty before the first participant arrives.',
        fr: "À la fin de la visite de préparation, les équipes de la structure et de l'étude examinent le même bilan. Chaque point ouvert reçoit un responsable et une échéance réaliste. Certains peuvent être résolus immédiatement ; d'autres nécessitent un appel de suivi, un calendrier révisé ou une seconde simulation. La préparation n'est pas une inspection unique ni un verdict binaire. C'est un processus partagé visant à réduire l'incertitude avant l'arrivée de la première participante.",
      },
      {
        en: 'This work is deliberately detailed because reliable research depends on repeatable care. When roles are understood, contingencies are practiced, and referral paths are visible, clinicians can focus on the person in front of them. That is the standard we want every participating site to reach—and the reason readiness begins by listening closely to each clinic.',
        fr: "Ce travail est volontairement détaillé, car une recherche fiable repose sur des soins reproductibles. Lorsque les rôles sont compris, les imprévus répétés et les parcours d'orientation visibles, les cliniciens peuvent se concentrer sur la personne devant eux. C'est le niveau que nous souhaitons atteindre dans chaque site participant, et la raison pour laquelle la préparation commence par une écoute attentive de chaque structure.",
      },
    ],
    media: [
      {
        id: 'site-readiness-gallery',
        type: 'gallery',
        afterParagraph: 2,
        images: [
          {
            src: '/images/about/person2.png',
            alt: {
              en: 'A researcher preparing equipment in a laboratory',
              fr: 'Un chercheur préparant du matériel dans un laboratoire',
            },
            caption: {
              en: 'Laboratory checks before equipment moves into a clinic.',
              fr: 'Vérifications en laboratoire avant le transfert du matériel vers une structure de soins.',
            },
          },
          {
            src: '/images/sante-girl.jpg',
            alt: {
              en: 'A clinician reviewing a care workflow on a tablet',
              fr: 'Une clinicienne examinant un parcours de soins sur une tablette',
            },
            caption: {
              en: 'Digital workflow review for low-connectivity care.',
              fr: 'Revue du parcours numérique pour les soins à faible connectivité.',
            },
          },
        ],
        caption: {
          en: 'From laboratory checks to workflow review, each readiness step is tested in context.',
          fr: 'Des vérifications en laboratoire à la revue des flux, chaque étape de préparation est testée en contexte.',
        },
      },
      {
        id: 'site-readiness-video',
        type: 'video',
        afterParagraph: 5,
        src: '/videos/site-readiness-preview.mp4',
        poster: '/images/contact-clinician.webp',
        title: {
          en: 'Clinical coordination in practice',
          fr: 'La coordination clinique en pratique',
        },
        caption: {
          en: 'Training, patient flow, and low-connectivity workflows are reviewed together before the first participant arrives.',
          fr: "La formation, le parcours des participantes et les flux à faible connectivité sont examinés ensemble avant l'arrivée de la première participante.",
        },
      },
    ],
    quote: {
      en: 'Readiness is a shared confidence: the team knows what to do, the participant knows what to expect, and the referral path is clear.',
      fr: "La préparation est une confiance partagée : l'équipe sait quoi faire, la participante sait à quoi s'attendre et le parcours d'orientation est clair.",
    },
    quoteAttribution: { en: 'Clinical operations', fr: 'Opérations cliniques' },
  },
  {
    slug: 'why-offline-first-screening-matters',
    category: 'perspective',
    date: '2026-06-30',
    readTime: { en: '6 min read', fr: '6 min de lecture' },
    title: {
      en: 'Why offline-first screening matters',
      fr: 'Pourquoi le dépistage hors connexion est essentiel',
    },
    excerpt: {
      en: 'Reliable care cannot depend on a perfect connection. We explain the design choices behind a resilient screening workflow.',
      fr: "Des soins fiables ne peuvent dépendre d'une connexion parfaite. Nous expliquons les choix qui sous-tendent un parcours de dépistage résilient.",
    },
    image: '/images/sante-girl.jpg',
    imageAlt: { en: 'A clinician using a tablet', fr: 'Une clinicienne utilisant une tablette' },
    body: [
      {
        en: 'Connectivity can change from one neighborhood—or one room—to the next. An offline-first approach keeps core screening workflows available without asking clinicians to troubleshoot the network while caring for a patient.',
        fr: "La connectivité peut changer d'un quartier, voire d'une pièce, à l'autre. Une approche hors connexion maintient les fonctions essentielles sans demander aux cliniciens de résoudre des problèmes de réseau pendant les soins.",
      },
      {
        en: 'For IntelliBra, resilience means secure local processing, clear synchronization states, and interfaces that explain what is available now and what will update later. It also means testing recovery paths—not only the ideal path.',
        fr: "Pour IntelliBra, la résilience implique un traitement local sécurisé, des états de synchronisation clairs et des interfaces qui expliquent ce qui est disponible immédiatement et ce qui sera mis à jour plus tard. Cela signifie aussi tester les parcours de récupération, pas seulement le parcours idéal.",
      },
      {
        en: 'These choices reduce friction, but they do not remove the need for careful data governance. Privacy and security remain part of every technical decision.',
        fr: "Ces choix réduisent les frictions, sans supprimer la nécessité d'une gouvernance rigoureuse des données. La confidentialité et la sécurité restent au cœur de chaque décision technique.",
      },
    ],
    link: {
      label: { en: 'Read our data-protection approach', fr: 'Découvrir notre approche de protection des données' },
      href: '/data-protection',
    },
  },
  {
    slug: 'clinicians-shape-the-next-prototype',
    category: 'milestone',
    date: '2026-06-22',
    readTime: { en: '3 min read', fr: '3 min de lecture' },
    title: {
      en: 'Clinicians shape the next prototype',
      fr: 'Les cliniciens façonnent le prochain prototype',
    },
    excerpt: {
      en: 'A hands-on review turns frontline observations into clearer setup, simpler prompts, and a more confident workflow.',
      fr: "Une revue pratique transforme les observations du terrain en une installation plus claire, des indications plus simples et un parcours plus rassurant.",
    },
    image: '/images/about/person2.png',
    imageAlt: { en: 'A researcher at work in a laboratory', fr: 'Un chercheur au travail dans un laboratoire' },
    body: [
      {
        en: 'The fastest route to a better clinical tool is often a careful observation. During our latest review session, nurses and general practitioners walked through the full workflow while the product team documented every pause, question, and workaround.',
        fr: "Le chemin le plus rapide vers un meilleur outil clinique passe souvent par une observation attentive. Lors de notre dernière session, infirmiers et médecins généralistes ont parcouru l'ensemble du processus pendant que l'équipe produit documentait chaque hésitation, question et adaptation.",
      },
      {
        en: 'The result is a focused set of changes: fewer setup decisions, stronger progress feedback, and language that reflects how clinicians already explain the process to patients.',
        fr: "Le résultat est un ensemble ciblé d'améliorations : moins de décisions à l'installation, un meilleur retour de progression et un langage aligné sur la manière dont les cliniciens expliquent déjà le processus aux patientes.",
      },
    ],
    quote: {
      en: 'Co-design is not a workshop at the end. It is how the product learns throughout its life.',
      fr: "La co-conception n'est pas un atelier final. C'est la manière dont le produit apprend tout au long de sa vie.",
    },
    quoteAttribution: { en: 'IntelliBra product team', fr: 'Équipe produit IntelliBra' },
  },
  {
    slug: 'building-with-transparency',
    category: 'media',
    date: '2026-06-10',
    readTime: { en: '4 min read', fr: '4 min de lecture' },
    title: {
      en: 'Building health technology with transparency',
      fr: 'Construire une technologie de santé en toute transparence',
    },
    excerpt: {
      en: 'Our public commitment to communicating limits, evidence, and progress without turning research into hype.',
      fr: "Notre engagement public à communiquer les limites, les preuves et les progrès sans transformer la recherche en promesse excessive.",
    },
    image: '/images/about/person3.png',
    imageAlt: { en: 'Two women in conversation', fr: 'Deux femmes en conversation' },
    body: [
      {
        en: 'Health innovation carries a special responsibility. People need to understand what a technology can do today, what is still being studied, and what decisions remain in the hands of qualified clinicians.',
        fr: "L'innovation en santé porte une responsabilité particulière. Chacun doit comprendre ce qu'une technologie peut faire aujourd'hui, ce qui reste à étudier et quelles décisions demeurent entre les mains de cliniciens qualifiés.",
      },
      {
        en: 'Our communications will distinguish prototypes from validated products, describe study goals in accessible language, and make room for uncertainty. When findings are available, we will explain both strengths and limitations.',
        fr: "Nos communications distingueront les prototypes des produits validés, décriront les objectifs des études dans un langage accessible et laisseront une place à l'incertitude. Lorsque les résultats seront disponibles, nous expliquerons à la fois leurs forces et leurs limites.",
      },
    ],
    link: {
      label: { en: 'Explore our ethics commitments', fr: 'Découvrir nos engagements éthiques' },
      href: '/ethics',
    },
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
