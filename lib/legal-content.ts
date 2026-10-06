export type LegalDocumentKey = 'privacy' | 'dataProtection' | 'terms' | 'ethics';

type LegalSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  draftLabel: string;
  draftNotice: string;
  updatedLabel: string;
  updated: string;
  scopeLabel: string;
  scope: string;
  ownerLabel: string;
  owner: string;
  contentsLabel: string;
  contactTitle: string;
  contactBody: string;
  sections: LegalSection[];
};

const english: Record<LegalDocumentKey, LegalDocument> = {
  privacy: {
    title: 'Privacy Policy',
    summary: 'How IntelliBra intends to collect, use, protect, and respect personal information across its digital services.',
    draftLabel: 'Working draft',
    draftNotice: 'This page contains placeholder policy language for design review. It is not legal advice and must be reviewed and replaced before public launch.',
    updatedLabel: 'Last updated',
    updated: '19 July 2026',
    scopeLabel: 'Scope',
    scope: 'IntelliBra websites and digital services',
    ownerLabel: 'Document owner',
    owner: 'ANORA S.A.S.',
    contentsLabel: 'On this page',
    contactTitle: 'Questions about privacy?',
    contactBody: 'Contact contact@anora.solutions. A dedicated privacy contact and response procedure will be confirmed before launch.',
    sections: [
      { id: 'purpose', title: 'Purpose and scope', body: ['This draft describes the privacy approach intended for visitors, prospective partners, research participants, clinicians, and other people who interact with IntelliBra digital services.', 'Clinical-study information and medical records may be governed by additional consent forms, research protocols, and applicable health-data requirements.'] },
      { id: 'information', title: 'Information we may process', body: ['The final policy should identify every category of information collected and the source of that information.'], bullets: ['Contact details submitted through forms', 'Organization and partnership information', 'Technical information needed for security and service reliability', 'Consent choices and communication preferences', 'Clinical or research data only where separately authorized'] },
      { id: 'use', title: 'How information may be used', body: ['Information should be used only for clear, documented purposes and never beyond the expectations established at collection.'], bullets: ['Responding to inquiries and partnership requests', 'Operating, protecting, and improving digital services', 'Meeting legal, ethical, and research-governance obligations', 'Sending updates only where a valid communication preference exists'] },
      { id: 'retention', title: 'Retention and sharing', body: ['The final policy should define retention periods by data type. Personal information should be deleted or anonymized when it is no longer required.', 'Information should not be sold. Any processor, research partner, or authorized institution receiving information should be bound by appropriate confidentiality, security, and purpose limitations.'] },
      { id: 'rights', title: 'Your choices and rights', body: ['Depending on the applicable law and context, people may be able to request access, correction, deletion, restriction, or a copy of their information, and may withdraw consent where consent is the lawful basis.', 'The final policy will explain how identity is verified and how requests are handled.'] },
    ],
  },
  dataProtection: {
    title: 'Data Protection Policy',
    summary: 'The proposed governance and security principles for protecting personal, clinical, and research information.',
    draftLabel: 'Working draft',
    draftNotice: 'This operational policy is placeholder content for design review. Security owners, controls, retention schedules, and incident procedures require formal approval.',
    updatedLabel: 'Last updated',
    updated: '19 July 2026',
    scopeLabel: 'Scope',
    scope: 'Staff, systems, vendors, and research partners',
    ownerLabel: 'Document owner',
    owner: 'ANORA S.A.S.',
    contentsLabel: 'On this page',
    contactTitle: 'Report a data concern',
    contactBody: 'Contact contact@anora.solutions. A dedicated security and data-protection reporting channel will be confirmed before launch.',
    sections: [
      { id: 'principles', title: 'Protection principles', body: ['IntelliBra intends to apply purpose limitation, data minimization, accuracy, retention control, confidentiality, accountability, and privacy by design throughout the information lifecycle.'] },
      { id: 'classification', title: 'Classification and access', body: ['Information should be classified according to sensitivity. Access to clinical and research information should follow least-privilege rules and be reviewed regularly.'], bullets: ['Role-based access and strong authentication', 'Separation of identifying and research data where practical', 'Documented authorization for exports and secondary use', 'Audit records for sensitive access and changes'] },
      { id: 'security', title: 'Security controls', body: ['The final policy should specify approved encryption, backup, endpoint, network, application, and physical-security controls. Offline clinical workflows require the same protection standard as connected workflows.', 'Vendors and processors should be assessed before receiving protected information.'] },
      { id: 'incidents', title: 'Incident response', body: ['Suspected loss, unauthorized disclosure, misuse, or security compromise should be reported immediately, contained, investigated, documented, and escalated to affected institutions or authorities where required.'] },
      { id: 'governance', title: 'Governance and review', body: ['Named owners should maintain inventories, risk assessments, retention schedules, training, vendor records, and evidence of compliance. The policy should be reviewed at least annually and after material system or regulatory changes.'] },
    ],
  },
  terms: {
    title: 'Terms of Use',
    summary: 'The proposed rules for accessing and using IntelliBra public websites, information, and digital materials.',
    draftLabel: 'Working draft',
    draftNotice: 'These terms are placeholder language for interface review and are not enforceable terms. Formal legal review is required before publication.',
    updatedLabel: 'Last updated',
    updated: '19 July 2026',
    scopeLabel: 'Scope',
    scope: 'Public IntelliBra websites and materials',
    ownerLabel: 'Document owner',
    owner: 'ANORA S.A.S.',
    contentsLabel: 'On this page',
    contactTitle: 'Questions about these terms?',
    contactBody: 'Contact contact@anora.solutions. Formal legal contact information will be added to the approved version.',
    sections: [
      { id: 'acceptance', title: 'Using the website', body: ['The final terms should explain when acceptance occurs, who may use the services, and which additional agreements apply to clinical, research, partner, or account-based services.'] },
      { id: 'medical', title: 'Clinical information disclaimer', body: ['Website content is provided for general information and should not replace professional medical advice, diagnosis, emergency care, or the judgment of a qualified clinician.', 'Product and trial information may change as evaluation and regulatory work progresses.'] },
      { id: 'acceptable-use', title: 'Acceptable use', body: ['Users should not interfere with service operation, attempt unauthorized access, introduce malicious code, misrepresent affiliation, scrape protected information, or use content in a way that violates law, ethics, or third-party rights.'] },
      { id: 'ownership', title: 'Intellectual property', body: ['The final terms should identify ownership and permitted use of IntelliBra names, marks, interfaces, documents, research materials, software, and other protected content. No implied license should be created by access to the website.'] },
      { id: 'availability', title: 'Availability and changes', body: ['Services may be updated, suspended, or corrected. The approved terms should define warranties, liability limits, governing law, dispute handling, and how users are notified of material changes.'] },
    ],
  },
  ethics: {
    title: 'Ethical Guidelines for Data Use',
    summary: 'The principles intended to guide responsible use of clinical, research, and AI-development data within the IntelliBra ecosystem.',
    draftLabel: 'Working draft',
    draftNotice: 'This is a design-stage ethics framework. It does not replace an approved research protocol, ethics-committee decision, participant consent, or applicable law.',
    updatedLabel: 'Last updated',
    updated: '19 July 2026',
    scopeLabel: 'Scope',
    scope: 'Clinical care, research, registries, and AI development',
    ownerLabel: 'Document owner',
    owner: 'ANORA S.A.S.',
    contentsLabel: 'On this page',
    contactTitle: 'Raise an ethical concern',
    contactBody: 'Contact contact@anora.solutions. Independent ethics and whistleblowing channels will be listed after formal approval.',
    sections: [
      { id: 'respect', title: 'Respect, consent, and agency', body: ['People should receive understandable information about what data is collected, why it is needed, who may use it, foreseeable risks, and how to ask questions or withdraw where withdrawal is possible.', 'Refusal to contribute data should not reduce access to appropriate care.'] },
      { id: 'fairness', title: 'Fairness and representation', body: ['Data collection and model evaluation should reflect the communities IntelliBra intends to serve. Performance should be assessed across relevant demographic and clinical groups, with limitations communicated plainly.'] },
      { id: 'necessity', title: 'Necessity and proportionality', body: ['Only data necessary for a defined clinical, operational, or research purpose should be used. More intrusive processing requires stronger justification, safeguards, and oversight.'] },
      { id: 'oversight', title: 'Human oversight and accountability', body: ['AI output should support—not replace—qualified clinical judgment. Responsibilities for review, escalation, correction, and adverse-event reporting should be explicit and auditable.'] },
      { id: 'secondary-use', title: 'Research and secondary use', body: ['Secondary use should be compatible with consent, protocol, law, community expectations, and ethics approval. De-identification alone does not remove the need to consider harm, fairness, benefit sharing, and re-identification risk.'] },
    ],
  },
};

const french: Record<LegalDocumentKey, LegalDocument> = Object.fromEntries(
  Object.entries(english).map(([key, document]) => [
    key,
    {
      ...document,
      draftLabel: 'Projet de travail',
      draftNotice: "Cette page contient un texte provisoire destiné à la revue du design. Elle ne constitue pas un avis juridique et doit être révisée avant le lancement public.",
      updatedLabel: 'Dernière mise à jour',
      updated: '19 juillet 2026',
      scopeLabel: 'Champ d’application',
      ownerLabel: 'Responsable du document',
      contentsLabel: 'Sur cette page',
      contactTitle: 'Une question ou une préoccupation ?',
      contactBody: "Contactez contact@anora.solutions. Les coordonnées officielles et la procédure de réponse seront confirmées avant le lancement.",
    },
  ]),
) as Record<LegalDocumentKey, LegalDocument>;

french.privacy.title = 'Politique de confidentialité';
french.privacy.summary = 'Comment IntelliBra prévoit de collecter, utiliser, protéger et respecter les informations personnelles dans ses services numériques.';
french.privacy.scope = 'Sites web et services numériques IntelliBra';
french.privacy.sections = [
  { id: 'purpose', title: 'Objet et champ d’application', body: ["Ce projet décrit l’approche de confidentialité destinée aux visiteurs, partenaires potentiels, participantes à la recherche, cliniciens et autres personnes utilisant les services numériques IntelliBra.", "Les informations d’étude clinique et les dossiers médicaux peuvent être régis par des consentements, protocoles de recherche et exigences supplémentaires."] },
  { id: 'information', title: 'Informations susceptibles d’être traitées', body: ["La version finale identifiera chaque catégorie d’information collectée ainsi que sa source."], bullets: ['Coordonnées transmises par les formulaires', 'Informations sur les organisations et partenariats', 'Données techniques nécessaires à la sécurité et à la fiabilité', 'Choix de consentement et préférences de communication', 'Données cliniques ou de recherche uniquement avec une autorisation distincte'] },
  { id: 'use', title: 'Utilisation possible des informations', body: ["Les informations ne doivent être utilisées que pour des finalités claires et documentées."], bullets: ['Répondre aux demandes et propositions de partenariat', 'Exploiter, protéger et améliorer les services numériques', 'Respecter les obligations légales, éthiques et de gouvernance', 'Envoyer des informations uniquement avec une préférence valide'] },
  { id: 'retention', title: 'Conservation et partage', body: ["La version finale définira des durées de conservation par type de données. Les informations seront supprimées ou anonymisées lorsqu’elles ne seront plus nécessaires.", "Les données ne seront pas vendues. Tout prestataire ou partenaire autorisé devra respecter des obligations de confidentialité, sécurité et limitation des finalités."] },
  { id: 'rights', title: 'Vos choix et vos droits', body: ["Selon le droit applicable, chacun peut demander l’accès, la rectification, la suppression, la limitation ou une copie de ses informations, et retirer son consentement lorsque celui-ci constitue la base du traitement.", "La version finale expliquera la vérification d’identité et le traitement des demandes."] },
];
french.dataProtection.title = 'Politique de protection des données';
french.dataProtection.summary = 'Les principes proposés de gouvernance et de sécurité pour protéger les informations personnelles, cliniques et de recherche.';
french.dataProtection.scope = 'Personnel, systèmes, prestataires et partenaires de recherche';
french.dataProtection.sections = [
  { id: 'principles', title: 'Principes de protection', body: ["IntelliBra prévoit d’appliquer la limitation des finalités, la minimisation, l’exactitude, la maîtrise de la conservation, la confidentialité, la responsabilité et la protection dès la conception."] },
  { id: 'classification', title: 'Classification et accès', body: ["Les informations seront classées selon leur sensibilité. L’accès aux données cliniques et de recherche suivra le principe du moindre privilège."], bullets: ['Accès par rôle et authentification forte', 'Séparation des identifiants et données de recherche lorsque possible', 'Autorisation documentée pour les exports et usages secondaires', 'Traçabilité des accès et modifications sensibles'] },
  { id: 'security', title: 'Mesures de sécurité', body: ["La version finale précisera les exigences de chiffrement, sauvegarde, sécurité des appareils, réseaux, applications et locaux.", "Les prestataires seront évalués avant de recevoir des informations protégées."] },
  { id: 'incidents', title: 'Réponse aux incidents', body: ["Toute perte, divulgation non autorisée, utilisation abusive ou compromission présumée sera immédiatement signalée, contenue, examinée, documentée et transmise aux institutions ou autorités concernées si nécessaire."] },
  { id: 'governance', title: 'Gouvernance et révision', body: ["Des responsables identifiés maintiendront les inventaires, évaluations de risques, calendriers de conservation, formations et preuves de conformité. La politique sera révisée au moins chaque année."] },
];
french.terms.title = "Conditions d’utilisation";
french.terms.summary = "Les règles proposées pour l’accès et l’utilisation des sites, informations et supports numériques publics d’IntelliBra.";
french.terms.scope = 'Sites publics et supports IntelliBra';
french.terms.sections = [
  { id: 'acceptance', title: 'Utilisation du site', body: ["La version finale expliquera quand l’acceptation intervient, qui peut utiliser les services et quels accords supplémentaires s’appliquent aux services cliniques, de recherche ou partenaires."] },
  { id: 'medical', title: 'Avertissement relatif aux informations cliniques', body: ["Le contenu du site est fourni à titre général et ne remplace pas un avis médical professionnel, un diagnostic, des soins d’urgence ou le jugement d’un clinicien qualifié.", "Les informations sur le produit et l’essai peuvent évoluer au fil de l’évaluation et des démarches réglementaires."] },
  { id: 'acceptable-use', title: 'Utilisation acceptable', body: ["Il est interdit de perturber le service, tenter un accès non autorisé, introduire un code malveillant, usurper une affiliation ou utiliser le contenu en violation du droit, de l’éthique ou des droits de tiers."] },
  { id: 'ownership', title: 'Propriété intellectuelle', body: ["La version finale identifiera la propriété et les usages autorisés des noms, marques, interfaces, documents, logiciels et autres contenus IntelliBra."] },
  { id: 'availability', title: 'Disponibilité et modifications', body: ["Les services peuvent être mis à jour, suspendus ou corrigés. Les conditions approuvées préciseront les garanties, limites de responsabilité, droit applicable et modalités de notification."] },
];
french.ethics.title = "Directives éthiques d’utilisation des données";
french.ethics.summary = "Les principes destinés à guider l’utilisation responsable des données cliniques, de recherche et de développement de l’IA.";
french.ethics.scope = 'Soins cliniques, recherche, registres et développement de l’IA';
french.ethics.sections = [
  { id: 'respect', title: 'Respect, consentement et autonomie', body: ["Chaque personne doit recevoir une information compréhensible sur les données collectées, leur finalité, leurs utilisateurs, les risques prévisibles et les possibilités de retrait.", "Le refus de contribuer des données ne doit pas réduire l’accès à des soins appropriés."] },
  { id: 'fairness', title: 'Équité et représentativité', body: ["La collecte et l’évaluation des modèles doivent refléter les communautés desservies. Les performances seront examinées pour les groupes démographiques et cliniques pertinents, avec une communication claire des limites."] },
  { id: 'necessity', title: 'Nécessité et proportionnalité', body: ["Seules les données nécessaires à une finalité clinique, opérationnelle ou de recherche définie doivent être utilisées. Les traitements plus intrusifs exigent une justification, des garanties et un contrôle renforcés."] },
  { id: 'oversight', title: 'Supervision humaine et responsabilité', body: ["Les résultats de l’IA doivent soutenir, et non remplacer, le jugement clinique qualifié. Les responsabilités de revue, d’escalade, de correction et de signalement doivent être explicites et auditables."] },
  { id: 'secondary-use', title: 'Recherche et utilisation secondaire', body: ["Toute utilisation secondaire doit être compatible avec le consentement, le protocole, le droit, les attentes communautaires et l’approbation éthique. La dé-identification ne supprime pas les risques de préjudice ou de ré-identification."] },
];

export function getLegalDocument(locale: string, key: LegalDocumentKey) {
  return locale === 'fr' ? french[key] : english[key];
}
