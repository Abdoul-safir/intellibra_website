'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
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
  MapPin,
  ChevronDown,
} from 'lucide-react';
import { Button } from '../../components/ui/button';
import { cn } from '../../lib/utils';

// ─── Animation variants ───────────────────────────────────────────────────────

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// ─── Count-up hook ────────────────────────────────────────────────────────────

function CountUp({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const numeric = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isNumeric = !isNaN(numeric);

  useEffect(() => {
    if (!isInView || !isNumeric || !ref.current) return;
    const el = ref.current;
    const suffix = value.replace(/[0-9.,]/g, '');
    const controls = animate(0, numeric, {
      duration,
      ease: 'easeOut',
      onUpdate(v) {
        el.textContent = (numeric >= 100 ? Math.round(v).toLocaleString() : Math.round(v).toString()) + suffix;
      },
    });
    return () => controls.stop();
  }, [isInView, isNumeric, numeric, value, duration]);

  return <span ref={ref}>{isNumeric ? '0' : value}</span>;
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

const heroStats = [
  { value: '2,840', label: 'Target participants', color: 'text-[#FF2C62]' },
  { value: '20',    label: 'Hospital sites',      color: 'text-[#C32BFF]' },
  { value: '10',    label: 'Regions covered',     color: 'text-[#FF2C62]' },
  { value: '25+',   label: 'Age group (years)',   color: 'text-[#C32BFF]' },
  { value: 'Free',  label: 'All examinations',    color: 'text-[#FF2C62]' },
];

function HeroSection() {
  return (
    <section className="relative bg-[#0f0f10] text-white overflow-hidden flex flex-col min-h-screen pb-16">
      {/* Gradient blobs */}
      <div className="absolute top-20 right-10 w-56 h-56 bg-gradient-to-br from-[#FF2C62] to-[#C32BFF] rounded-full opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-[#C32BFF] to-[#FF2C62] rounded-full opacity-5 blur-3xl pointer-events-none" />

      {/* Main copy */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-start max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center pt-36 pb-12">
        {/* Headline — two lines staggered */}
        <div className="overflow-hidden mb-2">
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Early breast cancer detection
          </motion.p>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl font-medium leading-tight bg-gradient-to-r from-[#FF2C62] to-[#C32BFF] bg-clip-text text-transparent"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          >
            for every woman in Cameroon
          </motion.p>
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          A portable AI-powered screening device evaluated across 20 hospital
          sites in all 10 regions of Cameroon. Free for 2,840 women aged 25 and above.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href="/documents/ANORA-INTBRA-CT-2025-V2.2-Protocol.pdf">
            <Button variant="pink" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              Read the protocol
            </Button>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats strip — pinned to bottom of hero */}
      <motion.div
        className="relative z-10 w-full border-t border-white/10 bg-white/[0.04]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {heroStats.map((s, i) => (
            <motion.div
              key={s.label}
              className={cn(
                'flex flex-col items-center justify-center py-6 px-4 text-center',
                i < heroStats.length - 1 && 'border-r border-white/10',
              )}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
            >
              <span className={`text-2xl sm:text-3xl font-bold ${s.color}`}>
                <CountUp value={s.value} />
              </span>
              <span className="text-gray-500 text-xs mt-1 leading-tight">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Section 3: About ─────────────────────────────────────────────────────────

const aboutCards = [
  {
    Icon: Activity,
    title: 'The device',
    body: 'IntelliBra is a connected brassiere integrating miniaturized ultrasound sensors and infrared thermography, analyzed by an embedded AI algorithm in real time. It connects to a mobile application that transmits results to the Cameroon National Breast Cancer Registry (CNBCR).',
  },
  {
    Icon: Microscope,
    title: 'The comparison',
    body: 'Results are compared against the standard reference examination: breast ultrasound for women under 40 and digital mammography for women aged 40 and above. In cases of suspected abnormality, biopsy serves as the definitive reference standard.',
  },
  {
    Icon: BookOpen,
    title: 'Primary outcome',
    body: 'The primary aim is to measure the sensitivity and specificity of IntelliBra versus the reference standard. Secondary outcomes include PPV, NPV, AUC, patient acceptability, ease of use, and early detection rate.',
  },
  {
    Icon: Shield,
    title: 'Data and privacy',
    body: 'All participant data is anonymized and stored in the CNBCR. No national identity number is collected. Data is accessible only to authorized researchers and shared upon formal request with ethical approval.',
  },
];

function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About the study
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A rigorous multicenter evaluation of AI-powered breast cancer
            screening across all 10 regions of Cameroon
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {aboutCards.map(({ Icon, title, body }, i) => (
            <motion.div
              key={title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className={`w-12 h-12 rounded-full ${i % 2 === 0 ? 'bg-[#FF2C62]' : 'bg-[#C32BFF]'} flex items-center justify-center mb-6`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4: Timeline ──────────────────────────────────────────────────────

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
    body: 'Initial testing of study procedures and protocols before full-scale deployment. Feasibility and protocol validation. Results used to confirm readiness for expansion.',
  },
  {
    phase: 'Phase II',
    title: 'Extension',
    participants: '50 participants',
    body: 'Validation of Phase I results on a broader sample. Comparative analysis between phases. Funding secured through fundraising based on Phase I outcomes.',
  },
  {
    phase: 'Phase III',
    title: 'Full deployment',
    participants: '2,840 participants',
    body: 'Complete multicenter study across all 10 regions. Final statistical analysis including sensitivity, specificity, AUC, PPV, NPV, and acceptability metrics. Submission for peer-reviewed publication.',
  },
  {
    phase: '+12 months',
    title: 'Results publication',
    participants: null,
    body: 'Summary results published in the PACTR registry and submitted to peer-reviewed journals per WHO requirements. Data made available via the CNBCR platform for qualified secondary research.',
  },
];

function TimelineSection() {
  return (
    <section
      id="timeline"
      className="py-20 bg-gray-900 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Study timeline
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A phased approach to rigorous clinical validation
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-[1.875rem] top-4 bottom-4 w-px bg-white/10" />
          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                className="relative flex gap-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-[3.75rem] flex justify-center">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF2C62] to-[#C32BFF] flex items-center justify-center z-10 relative mt-1 text-white text-xs font-bold shadow-lg"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: i * 0.1 }}
                  >
                    {i + 1}
                  </motion.div>
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300">
                      {p.phase}
                    </span>
                    {p.participants && (
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {p.participants}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Eligibility ───────────────────────────────────────────────────

const inclusion = [
  'Women aged 25 years or older',
  'Residing in areas covered by participating study centers',
  'Voluntarily agreed to participate after receiving full informed consent',
  'Available for follow-up examinations at 6 and 12 months if required',
  'Women with or without prior history of breast disease or risk factors',
];

const exclusion = [
  'Confirmed pregnancy at the time of enrollment',
  'History of major breast surgery that altered breast morphology',
  'Serious unstabilized medical condition preventing safe participation',
  'Currently undergoing active treatment for breast cancer',
  'Invasive breast procedure within 6 months prior to enrollment',
  'Refusal to sign the informed consent form',
];

function EligibilitySection() {
  return (
    <section
      id="eligibility"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who can participate
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All examinations, consultations, and follow-up visits are free of
            charge. Participation may be withdrawn at any time without
            consequence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-12 rounded-full bg-[#FF2C62] flex items-center justify-center mb-6">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Inclusion criteria
            </h3>
            <ul className="space-y-3">
              {inclusion.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#FF2C62]" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-6">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Exclusion criteria
            </h3>
            <ul className="space-y-3">
              {exclusion.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="max-w-3xl mx-auto rounded-2xl p-6 text-center bg-[#FF2C62]/5 border border-[#FF2C62]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-sm leading-relaxed">
            All examinations, consultations, biopsy procedures, and follow-up
            visits are provided{' '}
            <strong className="text-[#FF2C62]">free of charge</strong>. No
            financial compensation is offered. Participation is entirely
            voluntary and may be withdrawn at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6: Recruiting centers (region cards) ────────────────────────────

const sitesByRegion = [
  {
    region: 'Adamawa',
    hospitals: [
      { name: 'Centre Hospitalier Régional de Ngaoundéré', city: 'Ngaoundéré' },
    ],
  },
  {
    region: 'Centre',
    hospitals: [
      { name: 'Hôpital Gynéco-Obstétrique et Pédiatrique de Yaoundé', city: 'Yaoundé' },
      { name: 'Centre Hospitalier Universitaire de Yaoundé', city: 'Yaoundé' },
      { name: 'Hôpital Central de Yaoundé', city: 'Yaoundé' },
    ],
  },
  {
    region: 'East',
    hospitals: [
      { name: 'Centre Hospitalier Régional de Bertoua', city: 'Bertoua' },
    ],
  },
  {
    region: 'Far North',
    hospitals: [
      { name: 'Hôpital Régional de Maroua', city: 'Maroua' },
      { name: 'Hôpital Régional de Yagoua', city: 'Yagoua' },
    ],
  },
  {
    region: 'Littoral',
    hospitals: [
      { name: 'Hôpital Régional de Nkongsamba', city: 'Nkongsamba' },
      { name: "Hôpital Régional d'Edéa", city: 'Edéa' },
      { name: 'Hôpital Gynéco-Obstétrique de Douala', city: 'Douala' },
      { name: 'Hôpital Laquintinie de Douala', city: 'Douala' },
    ],
  },
  {
    region: 'North',
    hospitals: [
      { name: 'Hôpital Régional de Garoua', city: 'Garoua' },
      { name: 'Hôpital de Référence de Garoua', city: 'Garoua' },
    ],
  },
  {
    region: 'North West',
    hospitals: [
      { name: 'Hôpital Régional de Bamenda', city: 'Bamenda' },
    ],
  },
  {
    region: 'West',
    hospitals: [
      { name: 'Centre Hospitalier Régional de Bafoussam', city: 'Bafoussam' },
      { name: 'Hôpital de District de Foumban', city: 'Foumban' },
    ],
  },
  {
    region: 'South',
    hospitals: [
      { name: "Centre Hospitalier Régional d'Ebolowa", city: 'Ebolowa' },
      { name: 'Hôpital de Référence de Sangmélima', city: 'Sangmélima' },
    ],
  },
  {
    region: 'South West',
    hospitals: [
      { name: 'Hôpital Régional de Buea', city: 'Buea' },
      { name: 'Hôpital Régional de Limbé', city: 'Limbé' },
    ],
  },
];

function SitesSection() {
  return (
    <section
      id="sites"
      className="py-20 bg-gray-900 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recruiting centers
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Reference hospital sites across all 10 administrative regions of
            Cameroon
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {sitesByRegion.map(({ region, hospitals }) => (
            <motion.div
              key={region}
              className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Region header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#FF2C62] to-[#C32BFF] flex-shrink-0" />
                <h3 className="font-bold text-white text-sm uppercase tracking-wide">
                  {region}
                </h3>
                <span className="ml-auto text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full flex-shrink-0">
                  {hospitals.length}
                </span>
              </div>

              {/* Hospital list */}
              <ul className="space-y-3">
                {hospitals.map((h) => (
                  <li key={h.name} className="flex items-start gap-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF2C62] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-300 leading-snug">
                        {h.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{h.city}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7: Research team ─────────────────────────────────────────────────

const team = [
  //{ name: 'Abdoul Azis', role: 'Principal Investigator', affiliation: 'Secretary General, ANORA S.A.S / ABCRF', color: 'bg-[#FF2C62]' },
  { name: 'Prof. Blaise Nkegoum', role: 'Co-Principal Investigator', affiliation: 'Permanent Secretary, National Cancer Control Programme, Cameroon', color: 'bg-[#C32BFF]' },
  { name: 'Dr. Michel Auguste Mouelle', role: 'Co-Investigator', affiliation: 'UICC Technical Fellow 2024', color: 'bg-[#FF2C62]' },
  { name: 'ANORA S.A.S', role: 'Primary Sponsor', affiliation: 'Cameroonian startup, Yaoundé, Cameroon', color: 'bg-[#C32BFF]' },
  { name: 'ABCRF', role: 'Secondary Sponsor', affiliation: 'Anora Breast Cancer Research Foundation, Yaoundé, Cameroon', color: 'bg-[#FF2C62]' },
];

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Research team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Led by clinicians and researchers with deep expertise in cancer
            care and AI-powered diagnostics
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div
                className={`w-12 h-12 rounded-full ${member.color} flex items-center justify-center mb-6 text-white font-bold text-lg`}
              >
                {member.name.charAt(0)}
              </div>
              <p className="font-bold text-gray-900 text-lg">{member.name}</p>
              <p className="text-[#FF2C62] font-medium text-sm mt-1">
                {member.role}
              </p>
              <p className="text-gray-500 text-sm mt-2">{member.affiliation}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8: Documents ─────────────────────────────────────────────────────

type DocStatus = 'available' | 'pending' | 'upcoming';

const documents: {
  name: string;
  audience: string;
  status: DocStatus;
  file: string | null;
}[] = [
  { name: 'Study Protocol (ANORA-INTBRA-CT-2025-V2.2)', audience: 'Researchers / Ethics', status: 'available', file: 'ANORA-INTBRA-CT-2025-V2.2-Protocol.pdf' },
  { name: 'Participant Information Notice (French)', audience: 'Participants', status: 'available', file: 'Participant-Information-Notice-FR.pdf' },
  { name: 'Participant Information Notice (English)', audience: 'Participants', status: 'available', file: 'Participant-Information-Notice-EN.pdf' },
  { name: 'Informed Consent Form (French)', audience: 'Participants', status: 'available', file: 'Informed-Consent-Form-FR.pdf' },
  { name: 'Informed Consent Form (English)', audience: 'Participants', status: 'available', file: 'Informed-Consent-Form-EN.pdf' },
  { name: 'Participant Questionnaire (French)', audience: 'Participants', status: 'available', file: 'Participant-Questionnaire-FR.pdf' },
  { name: 'Participant Questionnaire (English)', audience: 'Participants', status: 'available', file: 'Participant-Questionnaire-EN.pdf' },
  { name: 'Ethics Clearance Certificate (CNERSH)', audience: 'All', status: 'pending', file: null },
  { name: 'Statistical Analysis Plan', audience: 'Researchers', status: 'pending', file: null },
  { name: 'Summary Results', audience: 'All', status: 'upcoming', file: null },
];

function DocumentsSection() {
  return (
    <section
      id="documents"
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Documents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Study documents available for download
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
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
                <FileText className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#FF2C62]" />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{doc.audience}</p>
                </div>
              </div>
              <div className="flex-shrink-0 pl-7 sm:pl-0">
                {doc.status === 'available' && doc.file ? (
                  <a href={`/documents/${doc.file}`}>
                    <Button variant="pink" size="sm" className="gap-1.5 text-xs">
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </Button>
                  </a>
                ) : doc.status === 'pending' ? (
                  <span className="text-xs font-medium text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
                    Pending
                  </span>
                ) : (
                  <span className="text-xs font-medium text-gray-400 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg">
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

// ─── Section 9: Registry ──────────────────────────────────────────────────────

const registryRows = [
  { label: 'PACTR Number', value: 'Pending, registration in progress' },
  { label: 'ClinicalTrials.gov NCT', value: 'Pending' },
  { label: 'Protocol Number', value: 'ANORA-INTBRA-CT-2025-V2.2' },
  { label: 'Ethics Committee', value: "CNERSH, Comité National d'Éthique de la Recherche pour la Santé Humaine" },
  { label: 'Ethics Status', value: 'Submission pending, number to be inserted upon issuance' },
  { label: 'Regulatory Filing (DROS)', value: 'Underway with Cameroon Ministry of Public Health' },
  { label: 'IPD Sharing', value: 'Yes, anonymized data via CNBCR platform, 12 months post-completion' },
];

function RegistrySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Registry &amp; regulatory status
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Registration and ethics oversight information
          </p>
        </motion.div>

        <motion.dl
          className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {registryRows.map((row, i) => (
            <div
              key={row.label}
              className={cn(
                'grid grid-cols-1 sm:grid-cols-3 gap-1 px-6 py-4',
                i !== 0 && 'border-t border-gray-100',
                i % 2 !== 0 && 'bg-gray-50/60',
              )}
            >
              <dt className="text-sm font-semibold text-gray-500">{row.label}</dt>
              <dd className="sm:col-span-2 text-sm text-gray-800">{row.value}</dd>
            </div>
          ))}
        </motion.dl>

        <p className="text-xs text-gray-400 mt-4 text-center">
          PACTR and ClinicalTrials.gov numbers will link to live registry
          records once issued.
        </p>
      </div>
    </section>
  );
}

// ─── Section 10: Contact ──────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Reach the research team, ethics committee, or submit a data access
            request
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-full bg-[#FF2C62] flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-5">Principal Investigator</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: 'Name', value: 'Abdoul Azis' },
                { label: 'Title', value: 'Principal Investigator, Secretary General, ABCRF / ANORA S.A.S' },
                { label: 'Address', value: 'Yaoundé, Emana Rue 9562, Cameroon' },
                { label: 'Phone', value: '+237 656 170 749 / +237 670 629 094' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</dt>
                  <dd className="text-gray-300 mt-0.5">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-1">Email</dt>
                <dd className="space-y-1">
                  <a href="mailto:abdoul.azis@abcrf.org" className="flex items-center gap-1 text-[#FF2C62] hover:underline text-sm">
                    <Mail className="w-3 h-3" /> abdoul.azis@abcrf.org
                  </a>
                  <a href="mailto:contact@abcrf.org" className="flex items-center gap-1 text-[#FF2C62] hover:underline text-sm">
                    <Mail className="w-3 h-3" /> contact@abcrf.org
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-full bg-[#C32BFF] flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-5">Ethics Committee</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: 'Name', value: "CNERSH, Comité National d'Éthique de la Recherche pour la Santé Humaine" },
                { label: 'Address', value: 'Lieu-dit Hygiène Mobile, Yaoundé, Cameroon' },
                { label: 'Phone', value: '+237 243 674 339 / +237 690 006 781' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</dt>
                  <dd className="text-gray-300 mt-0.5">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-gray-500 text-xs font-medium uppercase tracking-wide mb-1">Email</dt>
                <dd>
                  <a href="mailto:setcominae@gmail.com" className="flex items-center gap-1 text-[#FF2C62] hover:underline text-sm">
                    <Mail className="w-3 h-3" /> setcominae@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
            variants={fadeInUp}
          >
            <div className="w-12 h-12 rounded-full bg-[#FF2C62] flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg mb-5">Data access requests</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Researchers wishing to access anonymized individual participant
              data should submit a formal request including the proposed
              research question, institutional ethics approval, and a signed
              data sharing agreement.
            </p>
            <a href="mailto:abdoul.azis@abcrf.org?subject=Data Access Request, IntelliBra Clinical Trial">
              <Button variant="pink" size="lg" className="gap-2 w-full">
                <Mail className="w-4 h-4" />
                Submit a request
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Disclaimer strip ─────────────────────────────────────────────────────────

function TrialDisclaimerStrip() {
  return (
    <section className="bg-[#0f0f10] text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <p className="text-sm text-gray-500">
            IntelliBra Clinical Trial · ANORA S.A.S / ABCRF · Yaoundé, Cameroon · 2025
          </p>
          <p className="text-sm text-gray-500">
            Free screening · No compensation · Voluntary participation
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm border-t border-white/10 pt-6 mb-6">
          <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">
            Privacy policy
          </Link>
          <a href="mailto:abdoul.azis@abcrf.org?subject=Data Access Request" className="text-gray-500 hover:text-white transition-colors">
            Data access request
          </a>
          <a href="https://pactr.samrc.ac.za" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors">
            PACTR registry <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors">
            ClinicalTrials.gov <ExternalLink className="w-3 h-3" />
          </a>
          <a href="https://anora.solutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-500 hover:text-white transition-colors">
            anora.solutions <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
          This clinical trial is registered with the Pan African Clinical Trials
          Registry (PACTR) and conducted under the ethical oversight of CNERSH.
          All participant data is handled in accordance with applicable national
          and international data protection standards.
        </p>
      </div>
    </section>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function TrialPage() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <EligibilitySection />
      <SitesSection />
      <TeamSection />
      <DocumentsSection />
      <RegistrySection />
      <ContactSection />
      <TrialDisclaimerStrip />
    </div>
  );
}
