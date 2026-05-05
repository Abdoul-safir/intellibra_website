'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Activity,
  Users,
  Shield,
  FileText,
  Download,
  Mail,
  ExternalLink,
  CheckCircle,
  XCircle,
  Microscope,
  BookOpen,
} from 'lucide-react';
import { cn } from '../../lib/utils';

const G = '#0D7A5F';
const G_BG = '#F0FAF7';
const G_BORDER = '#C0EBE0';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

// ─── Section 1: In-page sticky subnav ────────────────────────────────────────

const subnavLinks = [
  { label: 'About the study', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Who can participate', href: '#eligibility' },
  { label: 'Sites', href: '#sites' },
  { label: 'Team', href: '#team' },
  { label: 'Documents', href: '#documents' },
  { label: 'Contact', href: '#contact' },
];

function TrialSubNav() {
  return (
    <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-none min-w-0">
            {subnavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-intellibra-green font-medium transition-colors whitespace-nowrap py-1 flex-shrink-0"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#eligibility"
            className="hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold text-white ml-6 flex-shrink-0 transition-opacity hover:opacity-90"
            style={{ backgroundColor: G }}
          >
            Check my eligibility
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Section 2: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative pb-20 pt-16 bg-[#0a1a14] text-white overflow-hidden">
      <div
        className="absolute -right-40 top-10 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: G }}
      />
      <div
        className="absolute -left-40 bottom-0 w-[32rem] h-[32rem] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: G }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium border"
            style={{
              backgroundColor: 'rgba(13,122,95,0.15)',
              color: '#4ECBA8',
              borderColor: 'rgba(13,122,95,0.3)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ECBA8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ECBA8]" />
            </span>
            Recruiting — Cameroon 2025
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          A national clinical trial for early breast cancer detection
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          IntelliBra is a portable AI-powered screening device being evaluated
          across 20 hospital sites in all 10 regions of Cameroon. Free screening
          for 2,840 women aged 25 and above.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#eligibility"
            className="px-8 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: G }}
          >
            Check my eligibility
          </a>
          <a
            href="/documents/ANORA-INTBRA-CT-2025-V2.2-Protocol.pdf"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white border border-white/25 hover:bg-white/10 transition-colors"
          >
            <Download className="w-4 h-4" />
            Read the protocol
          </a>
        </motion.div>

        {/* Protocol tag */}
        <motion.p
          className="mt-6 text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Protocol ANORA-INTBRA-CT-2025-V2.2 · Sponsored by ANORA S.A.S /
          ABCRF · Yaoundé, Cameroon
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 3: Stats bar ─────────────────────────────────────────────────────

const stats = [
  { value: '2,840', label: 'Target participants' },
  { value: '20', label: 'Hospital sites' },
  { value: '10', label: 'Regions covered' },
  { value: '25+', label: 'Age group (years)' },
  { value: 'Free', label: 'All examinations' },
];

function StatsSection() {
  return (
    <section style={{ backgroundColor: G }} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
              <p className="text-sm text-green-100 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: About the study ───────────────────────────────────────────────

const aboutCards = [
  {
    Icon: Activity,
    title: 'The device',
    body: 'IntelliBra is a connected brassiere integrating miniaturized ultrasound sensors and infrared thermography, analyzed by an embedded AI algorithm in real time. It connects to a mobile application that transmits results to the Cameroon National Breast Cancer Registry (CNBCR).',
  },
  {
    Icon: Microscope,
    title: 'The comparison',
    body: 'Results are compared against the standard reference examination: breast ultrasound for women under 40 years of age and digital mammography for women aged 40 and above. In cases of suspected abnormality, histological confirmation by biopsy serves as the definitive reference standard.',
  },
  {
    Icon: BookOpen,
    title: 'Primary outcome',
    body: 'The primary aim is to measure the sensitivity and specificity of IntelliBra versus the reference standard. Secondary outcomes include PPV, NPV, area under the ROC curve (AUC), patient acceptability, ease of use, and early detection rate.',
  },
  {
    Icon: Shield,
    title: 'Data and privacy',
    body: 'All participant data is anonymized and stored in the Cameroon National Breast Cancer Registry (CNBCR). No national identity number is collected. Data is accessible only to authorized research team members and will be shared with qualified researchers upon formal request and ethical approval.',
  },
];

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            About the study
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A rigorous multicenter evaluation of AI-powered breast cancer
            screening
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutCards.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: G_BG }}
              >
                <Icon className="w-6 h-6" style={{ color: G }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Study timeline ────────────────────────────────────────────────

const phases = [
  {
    phase: 'Phase 0',
    title: 'Preparation',
    participants: null,
    body: 'Formation of research team, ethics submission to CNERSH, regulatory filing with Cameroon health authorities, equipment deployment across 20 sites, staff training. Self-financed by ANORA S.A.S.',
  },
  {
    phase: 'Phase I',
    title: 'Pilot',
    participants: '10 participants',
    body: 'Initial testing of study procedures and protocols with 10 participants before full-scale deployment. Feasibility and protocol validation. Results used to confirm readiness for expansion.',
  },
  {
    phase: 'Phase II',
    title: 'Extension',
    participants: '50 participants',
    body: 'Validation of Phase I results on a broader sample of 50 participants. Comparative analysis between phases. Funding secured through fundraising based on Phase I outcomes.',
  },
  {
    phase: 'Phase III',
    title: 'Full deployment',
    participants: '2,840 participants',
    body: 'Complete multicenter study across all 10 regions of Cameroon. Final statistical analysis including sensitivity, specificity, AUC, PPV, NPV, and acceptability metrics. Report writing and submission for peer-reviewed publication.',
  },
  {
    phase: '+12 months',
    title: 'Results publication',
    participants: null,
    body: 'Summary results published in the PACTR registry and submitted to peer-reviewed scientific journals in compliance with WHO mandatory requirements. Data made available via the CNBCR platform for qualified secondary research.',
  },
];

function TimelineSection() {
  return (
    <section id="timeline" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Study timeline
          </h2>
          <p className="text-lg text-gray-500">
            A phased approach to rigorous clinical validation
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector */}
          <div className="absolute left-[1.9rem] top-4 bottom-4 w-0.5 bg-gray-200" />

          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Step circle */}
                <div className="flex-shrink-0 w-[3.75rem] flex justify-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center z-10 relative mt-1 text-white text-xs font-bold"
                    style={{ backgroundColor: G }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: G_BG, color: G }}
                    >
                      {p.phase}
                    </span>
                    {p.participants && (
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {p.participants}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Eligibility ───────────────────────────────────────────────────

const inclusion = [
  'Women aged 25 years or older',
  'Residing in areas covered by the participating study centers',
  'Having voluntarily agreed to participate after receiving full informed consent',
  'Available for follow-up examinations at 6 and 12 months if required',
  'Women with or without prior history of breast disease or risk factors for breast cancer',
];

const exclusion = [
  'Confirmed pregnancy at the time of enrollment',
  'History of major breast surgery that has altered breast morphology',
  'Serious unstabilized medical condition preventing safe participation',
  'Currently undergoing active treatment for breast cancer',
  'Invasive breast procedure within 6 months prior to enrollment',
  'Refusal to sign the informed consent form',
];

function EligibilitySection() {
  return (
    <section id="eligibility" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Who can participate
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            All examinations are free of charge. Participation is entirely
            voluntary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Inclusion */}
          <motion.div
            className="p-8 rounded-2xl border-2"
            style={{ backgroundColor: G_BG, borderColor: G_BORDER }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-5" style={{ color: G }}>
              Inclusion criteria
            </h3>
            <ul className="space-y-3">
              {inclusion.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: G }}
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Exclusion */}
          <motion.div
            className="p-8 rounded-2xl border-2 border-red-100 bg-red-50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-red-700 mb-5">
              Exclusion criteria
            </h3>
            <ul className="space-y-3">
              {exclusion.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Participation note */}
        <motion.div
          className="max-w-3xl mx-auto p-6 rounded-2xl border text-center text-sm text-gray-600 leading-relaxed"
          style={{ backgroundColor: G_BG, borderColor: G_BORDER }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          All examinations, consultations, biopsy procedures, and follow-up
          visits are provided{' '}
          <strong style={{ color: G }}>free of charge</strong>. No financial
          compensation is offered for participation. Participation is entirely
          voluntary and may be withdrawn at any time without consequence.
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7: Recruiting centers ───────────────────────────────────────────

const sites = [
  { region: 'Adamawa', hospital: 'Centre Hospitalier Régional de Ngaoundéré', city: 'Ngaoundéré' },
  { region: 'Centre', hospital: 'Hôpital Gynéco-Obstétrique et Pédiatrique de Yaoundé', city: 'Yaoundé' },
  { region: 'Centre', hospital: 'Centre Hospitalier Universitaire de Yaoundé', city: 'Yaoundé' },
  { region: 'Centre', hospital: 'Hôpital Central de Yaoundé', city: 'Yaoundé' },
  { region: 'East', hospital: 'Centre Hospitalier Régional de Bertoua', city: 'Bertoua' },
  { region: 'Far North', hospital: 'Hôpital Régional de Maroua', city: 'Maroua' },
  { region: 'Far North', hospital: 'Hôpital Régional de Yagoua', city: 'Yagoua' },
  { region: 'Littoral', hospital: 'Hôpital Régional de Nkongsamba', city: 'Nkongsamba' },
  { region: 'Littoral', hospital: "Hôpital Régional d'Edéa", city: 'Edéa' },
  { region: 'Littoral', hospital: 'Hôpital Gynéco-Obstétrique de Douala', city: 'Douala' },
  { region: 'Littoral', hospital: 'Hôpital Laquintinie de Douala', city: 'Douala' },
  { region: 'North', hospital: 'Hôpital Régional de Garoua', city: 'Garoua' },
  { region: 'North', hospital: 'Hôpital de Référence de Garoua', city: 'Garoua' },
  { region: 'North West', hospital: 'Hôpital Régional de Bamenda', city: 'Bamenda' },
  { region: 'West', hospital: 'Centre Hospitalier Régional de Bafoussam', city: 'Bafoussam' },
  { region: 'West', hospital: 'Hôpital de District de Foumban', city: 'Foumban' },
  { region: 'South', hospital: "Centre Hospitalier Régional d'Ebolowa", city: 'Ebolowa' },
  { region: 'South', hospital: 'Hôpital de Référence de Sangmélima', city: 'Sangmélima' },
  { region: 'South West', hospital: 'Hôpital Régional de Buea', city: 'Buea' },
  { region: 'South West', hospital: 'Hôpital Régional de Limbé', city: 'Limbé' },
];

function SitesSection() {
  return (
    <section id="sites" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Recruiting centers
          </h2>
          <p className="text-lg text-gray-500">
            20 reference hospital sites across all 10 administrative regions of
            Cameroon
          </p>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: G_BG }}>
                  <th
                    className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: G }}
                  >
                    Region
                  </th>
                  <th
                    className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: G }}
                  >
                    Hospital
                  </th>
                  <th
                    className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: G }}
                  >
                    City
                  </th>
                </tr>
              </thead>
              <tbody>
                {sites.map((s, i) => (
                  <tr
                    key={`${s.region}-${s.hospital}`}
                    className={cn(
                      'border-t border-gray-100 transition-colors hover:bg-gray-50',
                      i % 2 !== 0 && 'bg-gray-50/40',
                    )}
                  >
                    <td className="px-6 py-3 font-medium text-gray-700 whitespace-nowrap">
                      {s.region}
                    </td>
                    <td className="px-6 py-3 text-gray-600">{s.hospital}</td>
                    <td className="px-6 py-3 text-gray-500 whitespace-nowrap">
                      {s.city}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8: Research team ─────────────────────────────────────────────────

const team = [
  {
    name: 'Abdoul Azis',
    role: 'Principal Investigator',
    affiliation: 'Secretary General, ANORA S.A.S / ABCRF',
  },
  {
    name: 'Prof. Blaise Nkegoum',
    role: 'Co-Principal Investigator',
    affiliation:
      'Permanent Secretary, National Cancer Control Programme, Cameroon',
  },
  {
    name: 'Dr. Michel Auguste Mouelle',
    role: 'Co-Investigator',
    affiliation: 'UICC Technical Fellow 2024',
  },
  {
    name: 'ANORA S.A.S',
    role: 'Primary Sponsor',
    affiliation: 'Cameroonian startup, Yaoundé, Cameroon',
  },
  {
    name: 'ABCRF',
    role: 'Secondary Sponsor',
    affiliation:
      'Anora Breast Cancer Research Foundation, Yaoundé, Cameroon',
  },
];

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Research team
          </h2>
          <p className="text-lg text-gray-500">
            Clinicians and researchers dedicated to cancer care and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: G }}
              >
                {member.name.charAt(0)}
              </div>
              <p className="font-semibold text-gray-900">{member.name}</p>
              <p className="text-sm font-medium mt-0.5" style={{ color: G }}>
                {member.role}
              </p>
              <p className="text-sm text-gray-500 mt-1">{member.affiliation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: Documents ─────────────────────────────────────────────────────

type DocStatus = 'available' | 'pending' | 'upcoming';

const documents: {
  name: string;
  audience: string;
  status: DocStatus;
  file: string | null;
}[] = [
  {
    name: 'Study Protocol (ANORA-INTBRA-CT-2025-V2.2)',
    audience: 'Researchers / Ethics',
    status: 'available',
    file: 'ANORA-INTBRA-CT-2025-V2.2-Protocol.pdf',
  },
  {
    name: 'Participant Information Notice (French)',
    audience: 'Participants',
    status: 'available',
    file: 'Participant-Information-Notice-FR.pdf',
  },
  {
    name: 'Participant Information Notice (English)',
    audience: 'Participants',
    status: 'available',
    file: 'Participant-Information-Notice-EN.pdf',
  },
  {
    name: 'Informed Consent Form (French)',
    audience: 'Participants',
    status: 'available',
    file: 'Informed-Consent-Form-FR.pdf',
  },
  {
    name: 'Informed Consent Form (English)',
    audience: 'Participants',
    status: 'available',
    file: 'Informed-Consent-Form-EN.pdf',
  },
  {
    name: 'Participant Questionnaire (French)',
    audience: 'Participants',
    status: 'available',
    file: 'Participant-Questionnaire-FR.pdf',
  },
  {
    name: 'Participant Questionnaire (English)',
    audience: 'Participants',
    status: 'available',
    file: 'Participant-Questionnaire-EN.pdf',
  },
  {
    name: 'Ethics Clearance Certificate (CNERSH)',
    audience: 'All',
    status: 'pending',
    file: null,
  },
  {
    name: 'Statistical Analysis Plan',
    audience: 'Researchers',
    status: 'pending',
    file: null,
  },
  {
    name: 'Summary Results',
    audience: 'All',
    status: 'upcoming',
    file: null,
  },
];

function DocumentsSection() {
  return (
    <section id="documents" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Documents
          </h2>
          <p className="text-lg text-gray-500">
            Study documents available to participants and researchers
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {documents.map((doc, i) => (
            <div
              key={doc.name}
              className={cn(
                'flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4',
                i !== 0 && 'border-t border-gray-100',
              )}
            >
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <FileText
                  className="w-4 h-4 mt-0.5 flex-shrink-0"
                  style={{ color: G }}
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {doc.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{doc.audience}</p>
                </div>
              </div>

              <div className="flex-shrink-0 pl-7 sm:pl-0">
                {doc.status === 'available' && doc.file ? (
                  <a
                    href={`/documents/${doc.file}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: G }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </a>
                ) : doc.status === 'pending' ? (
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1.5 rounded-lg">
                    Pending
                  </span>
                ) : (
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg">
                    Within 12 months
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 10: Registry & regulatory status ─────────────────────────────────

const registryRows = [
  { label: 'PACTR Number', value: 'Pending — registration in progress' },
  { label: 'ClinicalTrials.gov NCT', value: 'Pending' },
  { label: 'Protocol Number', value: 'ANORA-INTBRA-CT-2025-V2.2' },
  {
    label: 'Ethics Committee',
    value:
      'CNERSH — Comité National d\'Éthique de la Recherche pour la Santé Humaine',
  },
  {
    label: 'Ethics Status',
    value: 'Submission pending — number to be inserted upon issuance',
  },
  {
    label: 'Regulatory Filing (DROS)',
    value: 'Underway with Cameroon Ministry of Public Health',
  },
  {
    label: 'IPD Sharing',
    value:
      'Yes — anonymized data via CNBCR platform, 12 months post-completion',
  },
];

function RegistrySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Registry &amp; regulatory status
          </h2>
          <p className="text-lg text-gray-500">
            Registration and ethics oversight information
          </p>
        </motion.div>

        <motion.dl
          className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {registryRows.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                'grid grid-cols-1 sm:grid-cols-3 gap-1 px-6 py-4',
                i !== 0 && 'border-t border-gray-100',
                i % 2 !== 0 && 'bg-gray-50/50',
              )}
            >
              <dt className="text-sm font-semibold text-gray-500">
                {row.label}
              </dt>
              <dd className="sm:col-span-2 text-sm text-gray-800">
                {row.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <p className="text-xs text-gray-400 mt-4 text-center">
          PACTR and ClinicalTrials.gov numbers will link directly to live
          registry records once issued.
        </p>
      </div>
    </section>
  );
}

// ─── Section 11: Contact ──────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-14" {...fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Contact
          </h2>
          <p className="text-lg text-gray-500">
            Reach the research team, ethics committee, or submit a data request
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Principal Investigator */}
          <motion.div
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-5 text-lg" style={{ color: G }}>
              Principal Investigator
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Name
                </dt>
                <dd className="text-gray-800 mt-0.5">Abdoul Azis</dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Title
                </dt>
                <dd className="text-gray-800 mt-0.5">
                  Principal Investigator — Secretary General, ABCRF / ANORA
                  S.A.S
                </dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Address
                </dt>
                <dd className="text-gray-800 mt-0.5">
                  Yaoundé, Emana Rue 9562, Cameroon
                </dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Phone
                </dt>
                <dd className="text-gray-800 mt-0.5">
                  +237 656 170 749 / +237 670 629 094
                </dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Email
                </dt>
                <dd className="mt-0.5 space-y-0.5">
                  <a
                    href="mailto:abdoul.azis@abcrf.org"
                    className="flex items-center gap-1 hover:underline"
                    style={{ color: G }}
                  >
                    <Mail className="w-3 h-3" />
                    abdoul.azis@abcrf.org
                  </a>
                  <a
                    href="mailto:contact@abcrf.org"
                    className="flex items-center gap-1 hover:underline"
                    style={{ color: G }}
                  >
                    <Mail className="w-3 h-3" />
                    contact@abcrf.org
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Ethics Committee */}
          <motion.div
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-semibold mb-5 text-lg" style={{ color: G }}>
              Ethics Committee
            </h3>
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Name
                </dt>
                <dd className="text-gray-800 mt-0.5">
                  CNERSH — Comité National d&apos;Éthique de la Recherche pour
                  la Santé Humaine
                </dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Address
                </dt>
                <dd className="text-gray-800 mt-0.5">
                  Lieu-dit Hygiène Mobile, Yaoundé, Cameroon
                </dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Phone
                </dt>
                <dd className="text-gray-800 mt-0.5">
                  +237 243 674 339 / +237 690 006 781
                </dd>
              </div>
              <div>
                <dt className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                  Email
                </dt>
                <dd className="mt-0.5">
                  <a
                    href="mailto:setcominae@gmail.com"
                    className="flex items-center gap-1 hover:underline"
                    style={{ color: G }}
                  >
                    <Mail className="w-3 h-3" />
                    setcominae@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          {/* Data access */}
          <motion.div
            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-5 text-lg" style={{ color: G }}>
              Data access requests
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Researchers wishing to access anonymized individual participant
              data following study completion should submit a formal request
              including the proposed research question, institutional ethics
              approval, and a signed data sharing agreement.
            </p>
            <a
              href="mailto:abdoul.azis@abcrf.org?subject=Data Access Request — IntelliBra Clinical Trial"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: G }}
            >
              <Mail className="w-4 h-4" />
              Submit a request
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 12: Trial footer strip ──────────────────────────────────────────

function TrialFooterStrip() {
  return (
    <section className="bg-[#071210] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <p className="text-sm text-gray-400">
            IntelliBra Clinical Trial — ANORA S.A.S / ABCRF — Yaoundé,
            Cameroon — 2025
          </p>
          <p className="text-sm text-gray-400">
            Free screening · No compensation · Voluntary participation
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm border-t border-white/10 pt-6 mb-6">
          <Link
            href="/privacy"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Privacy policy
          </Link>
          <a
            href="mailto:abdoul.azis@abcrf.org?subject=Data Access Request"
            className="text-gray-500 hover:text-white transition-colors"
          >
            Data access request
          </a>
          <a
            href="https://pactr.samrc.ac.za"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
          >
            PACTR registry
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://clinicaltrials.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
          >
            ClinicalTrials.gov
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://anora.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors"
          >
            anora.solutions
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
          This clinical trial is registered with the Pan African Clinical Trials
          Registry (PACTR) and conducted under the ethical oversight of the
          National Ethics Committee for Human Health Research of Cameroon
          (CNERSH). All participant data is handled in accordance with
          applicable national and international data protection standards.
        </p>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function TrialPage() {
  return (
    <div>
      <TrialSubNav />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <TimelineSection />
      <EligibilitySection />
      <SitesSection />
      <TeamSection />
      <DocumentsSection />
      <RegistrySection />
      <ContactSection />
      <TrialFooterStrip />
    </div>
  );
}
