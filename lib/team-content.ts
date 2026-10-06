export type TeamSection = 'founders' | 'core' | 'advisers' | 'clinicians' | 'volunteers';

export type TeamLinkKind =
  | 'linkedin'
  | 'website'
  | 'x'
  | 'github'
  | 'scholar'
  | 'portfolio'
  | 'video'
  | 'email';

export interface LocalizedText {
  en: string;
  fr: string;
}

export interface TeamLink {
  kind: TeamLinkKind;
  label: LocalizedText;
  href?: string;
}

export interface TeamVideo {
  title: LocalizedText;
  description: LocalizedText;
  href: string;
  poster?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: LocalizedText;
  summary: LocalizedText;
  quote?: LocalizedText;
  biography: LocalizedText[];
  expertise: LocalizedText[];
  section: Exclude<TeamSection, 'volunteers'>;
  image?: string;
  imagePosition?: string;
  imageIsPlaceholder?: boolean;
  links?: TeamLink[];
  featuredVideo?: TeamVideo;
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'abdoul-azis',
    name: 'Abdoul Azis',
    role: { en: 'CEO & Co-Founder', fr: 'Directeur général et cofondateur' },
    summary: {
      en: 'Inventor of IntelliBra and co-founder of ANORA S.A.S. and the Anora Breast Cancer Research Foundation.',
      fr: "Inventeur d'IntelliBra et cofondateur d'ANORA S.A.S. et de l'Anora Breast Cancer Research Foundation.",
    },
    quote: {
      en: 'Early detection should not depend on where a woman lives. IntelliBra exists to bring a practical first step closer to her.',
      fr: "La détection précoce ne devrait pas dépendre du lieu de vie d'une femme. IntelliBra existe pour rapprocher d'elle une première étape concrète.",
    },
    biography: [
      {
        en: 'Abdoul is a Cameroonian computer scientist who created IntelliBra and now leads its product vision, AI direction, and company strategy. He co-founded both ANORA S.A.S. and the Anora Breast Cancer Research Foundation to bring earlier breast-cancer detection closer to the communities that need it.',
        fr: "Informaticien camerounais, Abdoul a créé IntelliBra et dirige aujourd'hui sa vision produit, son orientation en intelligence artificielle et la stratégie de l'entreprise. Il a cofondé ANORA S.A.S. et l'Anora Breast Cancer Research Foundation afin de rapprocher la détection précoce du cancer du sein des communautés qui en ont besoin.",
      },
      {
        en: 'His work on IntelliBra is protected by OAPI Patent No. 21836. His leadership has also been recognised through the Grand Prix of the President of the Republic of Cameroon in 2024 and first place for Best AI Project at YouthConneckt Africa 2025.',
        fr: "Son travail sur IntelliBra est protégé par le brevet OAPI n° 21836. Son leadership a également été récompensé par le Grand Prix du Président de la République du Cameroun en 2024 et le premier prix du meilleur projet d'IA à YouthConneckt Africa 2025.",
      },
    ],
    expertise: [
      { en: 'AI model architecture', fr: "Architecture de modèles d'IA" },
      { en: 'Mobile product development', fr: 'Développement de produits mobiles' },
      { en: 'Company strategy', fr: "Stratégie d'entreprise" },
    ],
    section: 'founders',
    image: '/images/team/founders/abdoul-azis.jpg',
    imagePosition: '50% 28%',
    imageIsPlaceholder: false,
    links: [
      {
        kind: 'email',
        label: { en: 'Email Abdoul', fr: 'Écrire à Abdoul' },
        href: 'mailto:abdoul.azis@anora.solutions',
      },
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
      {
        kind: 'x',
        label: { en: 'X', fr: 'X' },
      },
    ],
  },
  {
    slug: 'baimam-boukar-jean-jacques',
    name: 'Baimam Boukar Jean Jacques',
    role: { en: 'CTO, Team Lead & Co-Founder', fr: "Directeur technique, chef d'équipe et cofondateur" },
    summary: {
      en: 'Software and cloud architect leading IntelliBra’s backend infrastructure, systems integration, and engineering standards.',
      fr: "Architecte logiciel et cloud, il dirige l'infrastructure backend, l'intégration des systèmes et les standards d'ingénierie d'IntelliBra.",
    },
    quote: {
      en: 'Reliable health technology begins when every part of the system works together, even where connectivity is limited.',
      fr: 'Une technologie de santé fiable commence lorsque chaque partie du système fonctionne ensemble, même lorsque la connectivité est limitée.',
    },
    biography: [
      {
        en: 'Jean Jacques leads the backend, cloud, and systems-integration disciplines at IntelliBra. His work connects the device, clinical applications, and data infrastructure into a reliable system designed for real-world care settings.',
        fr: "Jean Jacques dirige les activités backend, cloud et d'intégration des systèmes d'IntelliBra. Son travail relie le dispositif, les applications cliniques et l'infrastructure de données dans un système fiable conçu pour les réalités des soins.",
      },
      {
        en: 'He studied Applied Machine Learning at Carnegie Mellon University Africa and has worked across mobile engineering, open-source performance tooling, and research at CMU Africa’s CyLab.',
        fr: "Il a étudié l'apprentissage automatique appliqué à Carnegie Mellon University Africa et a travaillé dans l'ingénierie mobile, les outils open source de performance et la recherche au CyLab de CMU Africa.",
      },
    ],
    expertise: [
      { en: 'Cloud architecture', fr: 'Architecture cloud' },
      { en: 'Backend infrastructure', fr: 'Infrastructure backend' },
      { en: 'Systems integration', fr: 'Intégration des systèmes' },
    ],
    section: 'founders',
    image: '/images/team/founders/baimam-boukar-jean-jacques.png',
    imagePosition: '50% 30%',
    imageIsPlaceholder: false,
    links: [
      {
        kind: 'email',
        label: { en: 'Email Jean Jacques', fr: 'Écrire à Jean Jacques' },
        href: 'mailto:bbaimamb@andrew.cmu.edu',
      },
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
      {
        kind: 'x',
        label: { en: 'X', fr: 'X' },
      },
    ],
  },
  {
    slug: 'anzia-juvis',
    name: 'Anzia Juvis',
    role: { en: 'Hardware Lead & Co-Founder', fr: 'Responsable matériel et cofondatrice' },
    summary: {
      en: 'Hardware lead advancing the sensor array and embedded systems from prototype to a clinically manufacturable device.',
      fr: "Responsable matériel, elle fait évoluer les capteurs et systèmes embarqués du prototype vers un dispositif cliniquement industrialisable.",
    },
    quote: {
      en: 'A meaningful medical device must be precise, durable, and designed for the realities of the people who will use it.',
      fr: 'Un dispositif médical utile doit être précis, durable et conçu pour les réalités des personnes qui vont l’utiliser.',
    },
    biography: [
      {
        en: 'Anzia oversees the sensor-array design and embedded systems that power the IntelliBra wearable. She was part of the original founding group at ICT University in Yaoundé.',
        fr: "Anzia supervise la conception des capteurs et les systèmes embarqués qui font fonctionner le dispositif IntelliBra. Elle faisait partie du groupe fondateur d'origine à l'ICT University de Yaoundé.",
      },
      {
        en: 'Her work focuses on moving the hardware from a functional prototype toward a durable, clinically manufacturable device.',
        fr: "Son travail vise à faire évoluer le matériel d'un prototype fonctionnel vers un dispositif durable et industrialisable pour un usage clinique.",
      },
    ],
    expertise: [
      { en: 'Sensor array design', fr: 'Conception de réseaux de capteurs' },
      { en: 'Embedded systems', fr: 'Systèmes embarqués' },
      { en: 'Hardware validation', fr: 'Validation matérielle' },
    ],
    section: 'founders',
    image: '/images/team/founders/anzia-juvis.png',
    imagePosition: '50% 34%',
    imageIsPlaceholder: false,
    links: [
      {
        kind: 'email',
        label: { en: 'Email Anzia', fr: 'Écrire à Anzia' },
        href: 'mailto:anziajuvis@gmail.com',
      },
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
      {
        kind: 'x',
        label: { en: 'X', fr: 'X' },
      },
    ],
  },
  {
    slug: 'chendjou-chendjou-honore',
    name: 'Chendjou Chendjou Honore',
    role: { en: 'Technical Lead & Co-Founder', fr: 'Responsable technique et cofondateur' },
    summary: {
      en: 'Technical lead developing IntelliBra’s hardware systems and embedded engineering foundations.',
      fr: "Responsable technique, il développe les systèmes matériels et les fondations d'ingénierie embarquée d'IntelliBra.",
    },
    quote: {
      en: 'Strong engineering turns a promising prototype into technology clinicians can trust in real time.',
      fr: 'Une ingénierie solide transforme un prototype prometteur en une technologie à laquelle les cliniciens peuvent faire confiance en temps réel.',
    },
    biography: [
      {
        en: 'Chendjou is a co-founder and technical lead at ANORA S.A.S. He contributes to the development of IntelliBra’s hardware systems and embedded engineering solutions.',
        fr: "Chendjou est cofondateur et responsable technique chez ANORA S.A.S. Il contribue au développement des systèmes matériels et des solutions d'ingénierie embarquée d'IntelliBra.",
      },
      {
        en: 'His work supports the integration of high-performance sensors and real-time processing in the IntelliBra technology.',
        fr: "Son travail soutient l'intégration de capteurs haute performance et du traitement en temps réel dans la technologie IntelliBra.",
      },
    ],
    expertise: [
      { en: 'Embedded engineering', fr: 'Ingénierie embarquée' },
      { en: 'Real-time processing', fr: 'Traitement en temps réel' },
      { en: 'Hardware systems', fr: 'Systèmes matériels' },
    ],
    section: 'founders',
    image: '/images/team/founders/chendjou-chendjou-honore.png',
    imagePosition: '50% 22%',
    imageIsPlaceholder: false,
    links: [
      {
        kind: 'email',
        label: { en: 'Email', fr: 'E-mail' },
      },
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
      {
        kind: 'x',
        label: { en: 'X', fr: 'X' },
      },
    ],
  },
  {
    slug: 'numfor-elmer',
    name: 'Numfor Elmer',
    role: { en: 'AI Engineer', fr: 'Ingénieur IA' },
    summary: {
      en: 'AI engineer who designs, develops, and trains the AI models powering IntelliBra.',
      fr: "Ingénieur IA, il conçoit, développe et entraîne les modèles d'intelligence artificielle d'IntelliBra.",
    },
    biography: [
      {
        en: 'Numfor holds a BSc in Software Engineering and designs, develops, and trains all of the AI models powering IntelliBra.',
        fr: "Titulaire d'une licence en génie logiciel, Numfor conçoit, développe et entraîne l'ensemble des modèles d'intelligence artificielle d'IntelliBra.",
      },
      {
        en: 'He previously worked as a Data Scientist at Camsol in Cameroon and as an ML Engineer at Omdena (UAE).',
        fr: "Il a auparavant été data scientist chez Camsol au Cameroun et ingénieur en apprentissage automatique chez Omdena (Émirats arabes unis).",
      },
    ],
    expertise: [
      { en: 'Machine learning', fr: 'Apprentissage automatique' },
      { en: 'Data science', fr: 'Science des données' },
      { en: 'Software engineering', fr: 'Génie logiciel' },
    ],
    section: 'core',
    image: '/images/team/core/numfor-elmer.jpg',
    imagePosition: '50% 22%',
    imageIsPlaceholder: false,
  },
  {
    slug: 'jerry-yonga',
    name: 'Prof. Jerry Yonga',
    role: { en: 'Healthcare Cybersecurity Adviser', fr: 'Conseiller en cybersécurité de la santé' },
    summary: {
      en: 'A cybersecurity expert advising the team on secure healthcare systems and responsible digital infrastructure.',
      fr: "Expert en cybersécurité, il conseille l'équipe sur la sécurité des systèmes de santé et l'infrastructure numérique responsable.",
    },
    biography: [
      {
        en: 'Prof. Yonga advises IntelliBra on cybersecurity for connected healthcare systems. His perspective helps the team treat security, privacy, and resilient infrastructure as product requirements from the start.',
        fr: "Le Pr Yonga conseille IntelliBra sur la cybersécurité des systèmes de santé connectés. Son expertise aide l'équipe à considérer la sécurité, la confidentialité et la résilience comme des exigences produit dès le départ.",
      },
    ],
    expertise: [
      { en: 'Healthcare cybersecurity', fr: 'Cybersécurité de la santé' },
      { en: 'Secure systems', fr: 'Systèmes sécurisés' },
      { en: 'Software project management', fr: 'Gestion de projets logiciels' },
    ],
    section: 'advisers',
    image: '/images/team/advisers/jerry-yonga.png',
    imagePosition: '50% 30%',
    imageIsPlaceholder: false,
    links: [
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
    ],
  },
  {
    slug: 'hasini',
    name: 'Dr. Hasini',
    role: { en: 'Expert Adviser', fr: 'Conseillère experte' },
    summary: {
      en: 'PhD researcher bringing independent scientific expertise to IntelliBra’s advisory network.',
      fr: "Docteure (PhD), elle apporte une expertise scientifique indépendante au réseau de conseillers d'IntelliBra.",
    },
    biography: [],
    expertise: [],
    section: 'advisers',
    image: '/images/team/advisers/hasini.jpg',
    imagePosition: '50% 30%',
    imageIsPlaceholder: false,
  },
  {
    slug: 'robert-william-dykes',
    name: 'Prof. Robert William Dykes',
    role: { en: 'Neuroscience Adviser', fr: 'Conseiller en neurosciences' },
    summary: {
      en: 'Professor Emeritus at McGill University with a background in psychophysiology, physiology, and neuroscience.',
      fr: "Professeur émérite à l'Université McGill, spécialiste de la psychophysiologie, de la physiologie et des neurosciences.",
    },
    biography: [
      {
        en: 'Prof. Dykes is Professor Emeritus at McGill University. He holds a BSc in Psychophysiology from Berkeley and a PhD in Physiology from Johns Hopkins, and brings decades of scientific research experience to IntelliBra’s advisory network.',
        fr: "Le Pr Dykes est professeur émérite à l'Université McGill. Titulaire d'une licence en psychophysiologie de Berkeley et d'un doctorat en physiologie de Johns Hopkins, il apporte au réseau de conseillers d'IntelliBra une longue expérience de la recherche scientifique.",
      },
    ],
    expertise: [
      { en: 'Neuroscience', fr: 'Neurosciences' },
      { en: 'Physiology', fr: 'Physiologie' },
    ],
    section: 'advisers',
    image: '/images/team/advisers/robert-william-dykes.jpg',
    imagePosition: '50% 32%',
    imageIsPlaceholder: false,
  },
  {
    slug: 'francoise-nissack',
    name: 'Dr. Françoise Nissack',
    role: { en: 'Public Health Adviser', fr: 'Conseillère en santé publique' },
    summary: {
      en: 'A public-health expert advising IntelliBra on prevention, screening access, and health-system alignment.',
      fr: "Experte en santé publique, elle conseille IntelliBra sur la prévention, l'accès au dépistage et l'intégration au système de santé.",
    },
    biography: [
      {
        en: 'Dr. Nissack brings a public-health perspective to IntelliBra’s advisory network. Her guidance helps the team connect product decisions with prevention priorities and the realities of screening programmes in Cameroon.',
        fr: "La Dre Nissack apporte une perspective de santé publique au réseau de conseillers d'IntelliBra. Ses orientations aident l'équipe à relier les décisions produit aux priorités de prévention et aux réalités des programmes de dépistage au Cameroun.",
      },
    ],
    expertise: [
      { en: 'Public health', fr: 'Santé publique' },
      { en: 'Prevention strategy', fr: 'Stratégie de prévention' },
      { en: 'Screening access', fr: 'Accès au dépistage' },
    ],
    section: 'advisers',
    image: '/images/team/advisers/francoise-nissack.jpg',
    imagePosition: '50% 32%',
    imageIsPlaceholder: false,
    links: [
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
      {
        kind: 'x',
        label: { en: 'X', fr: 'X' },
      },
    ],
  },
  {
    slug: 'simon-balemba-effansa',
    name: 'Engr. Simon Balemba Effansa',
    role: { en: 'Ecosystem & Venture Adviser', fr: "Conseiller écosystème et développement d'entreprise" },
    summary: {
      en: 'An ecosystem and venture builder advising IntelliBra on acceleration, partnerships, and sustainable growth.',
      fr: "Expert en écosystèmes et développement d'entreprise, il conseille IntelliBra sur l'accélération, les partenariats et la croissance durable.",
    },
    biography: [
      {
        en: 'Simon supports IntelliBra’s path from research-led innovation to a sustainable health-technology organisation. He brings experience in venture building, accelerator management, and SME consulting.',
        fr: "Simon accompagne le passage d'IntelliBra d'une innovation issue de la recherche à une organisation de technologie de santé durable. Il apporte son expérience en création d'entreprises, gestion d'accélérateurs et conseil aux PME.",
      },
    ],
    expertise: [
      { en: 'Venture building', fr: "Développement d'entreprise" },
      { en: 'Ecosystem partnerships', fr: "Partenariats d'écosystème" },
      { en: 'Acceleration strategy', fr: "Stratégie d'accélération" },
    ],
    section: 'advisers',
    links: [
      {
        kind: 'linkedin',
        label: { en: 'LinkedIn', fr: 'LinkedIn' },
      },
      {
        kind: 'website',
        label: { en: 'Personal website', fr: 'Site personnel' },
      },
    ],
  },
  {
    slug: 'blaise-nkegoum',
    name: 'Prof. Blaise Nkegoum',
    role: { en: 'Principal Investigator', fr: 'Investigateur principal' },
    summary: {
      en: 'Professor of Medicine at the University of Yaoundé I and pathologist, coordinating IntelliBra’s clinical trials.',
      fr: "Professeur de médecine à l'Université de Yaoundé I et pathologiste, il coordonne les essais cliniques d'IntelliBra.",
    },
    biography: [
      {
        en: 'Prof. Nkegoum is a Professor of Medicine at the University of Yaoundé I and a pathologist. He coordinates IntelliBra’s clinical trials as Principal Investigator.',
        fr: "Le Pr Nkegoum est professeur de médecine à l'Université de Yaoundé I et pathologiste. Il coordonne les essais cliniques d'IntelliBra en tant qu'investigateur principal.",
      },
      {
        en: 'He previously served as Permanent Secretary of Cameroon’s National Committee for the Fight Against Cancer, bringing a national perspective on cancer control to the team’s clinical work.',
        fr: "Ancien secrétaire permanent du Comité national de lutte contre le cancer du Cameroun, il apporte une perspective nationale de la lutte contre le cancer au travail clinique de l'équipe.",
      },
    ],
    expertise: [
      { en: 'Pathology', fr: 'Anatomopathologie' },
      { en: 'Clinical trials', fr: 'Essais cliniques' },
      { en: 'Cancer control', fr: 'Lutte contre le cancer' },
    ],
    section: 'clinicians',
    image: '/images/team/clinicians/blaise-nkegoum.jpg',
    imagePosition: '50% 20%',
    imageIsPlaceholder: false,
  },
  {
    slug: 'michel-auguste-mouelle',
    name: 'Dr. Michel Auguste Mouelle',
    role: { en: 'Medical Director & Regulatory Lead', fr: 'Directeur médical et responsable réglementaire' },
    summary: {
      en: 'Oncologic surgeon and senologist guiding clinical strategy, patient safety, and regulatory readiness.',
      fr: "Chirurgien oncologue et sénologue, il guide la stratégie clinique, la sécurité des patientes et la préparation réglementaire.",
    },
    biography: [
      {
        en: 'Dr. Mouelle leads IntelliBra’s clinical and regulatory affairs. As an oncologic surgeon and senologist, he helps ensure that the product and its studies remain grounded in patient safety, clinical usefulness, and appropriate care pathways.',
        fr: "Le Dr Mouelle dirige les affaires cliniques et réglementaires d'IntelliBra. Chirurgien oncologue et sénologue, il veille à ce que le produit et ses études restent fondés sur la sécurité des patientes, l'utilité clinique et des parcours de soins adaptés.",
      },
    ],
    expertise: [
      { en: 'Oncologic surgery', fr: 'Chirurgie oncologique' },
      { en: 'Senology', fr: 'Sénologie' },
      { en: 'Clinical regulation', fr: 'Réglementation clinique' },
    ],
    section: 'clinicians',
    image: '/images/team/clinicians/michel-auguste-mouelle.png',
    imagePosition: '50% 38%',
    imageIsPlaceholder: false,
  },
  {
    slug: 'simon-taiki-foka',
    name: 'Dr. Simon Taiki Foka',
    role: { en: 'Psychologist & Mental Health Expert', fr: 'Psychologue et expert en santé mentale' },
    summary: {
      en: 'Psychologist and mental-health expert leading the mental-health component of IntelliBra’s clinical trials.',
      fr: "Psychologue et expert en santé mentale, il pilote le volet santé mentale des essais cliniques d'IntelliBra.",
    },
    biography: [
      {
        en: 'Dr. Taiki Foka is a psychologist and mental-health expert. He handles the mental-health component of IntelliBra’s clinical trials.',
        fr: "Le Dr Taiki Foka est psychologue et expert en santé mentale. Il est responsable du volet santé mentale des essais cliniques d'IntelliBra.",
      },
    ],
    expertise: [
      { en: 'Psychology', fr: 'Psychologie' },
      { en: 'Mental health', fr: 'Santé mentale' },
    ],
    section: 'clinicians',
  },
];

export function getTeamMember(slug: string) {
  return teamMembers.find((member) => member.slug === slug);
}

export function initials(name: string) {
  return name
    .replace(/^(Dr|Prof|Pr|Engr)\.?\s+/i, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export function localize(text: LocalizedText, locale: string) {
  return locale === 'fr' ? text.fr : text.en;
}
