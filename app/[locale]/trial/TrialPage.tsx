'use client';

import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  MapPin,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { LogoMarquee } from '../../../components/logo-marquee';
import { Button } from '../../../components/ui/button';
import { Link } from '../../../i18n/navigation';
import { useTweaks } from '../../../lib/tweaks-context';
import { cn } from '../../../lib/utils';

const sitesByRegion = [
  {
    region: 'Adamawa',
    hospitals: [{ name: 'Centre Hospitalier Régional de Ngaoundéré', city: 'Ngaoundéré' }],
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
    hospitals: [{ name: 'Centre Hospitalier Régional de Bertoua', city: 'Bertoua' }],
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
    hospitals: [{ name: 'Hôpital Régional de Bamenda', city: 'Bamenda' }],
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

type DocStatus = 'pending' | 'upcoming';
type AudienceKey = 'participants' | 'researchers' | 'public';

const documents: {
  id: string;
  audienceKey: AudienceKey;
  status: DocStatus;
}[] = [
  { id: 'protocol', audienceKey: 'researchers', status: 'pending' },
  { id: 'piNoticeFr', audienceKey: 'participants', status: 'pending' },
  { id: 'piNoticeEn', audienceKey: 'participants', status: 'pending' },
  { id: 'icfFr', audienceKey: 'participants', status: 'pending' },
  { id: 'icfEn', audienceKey: 'participants', status: 'pending' },
  { id: 'questionnaireFr', audienceKey: 'participants', status: 'pending' },
  { id: 'questionnaireEn', audienceKey: 'participants', status: 'pending' },
  { id: 'ethicsCert', audienceKey: 'public', status: 'pending' },
  { id: 'sap', audienceKey: 'researchers', status: 'pending' },
  { id: 'summaryResults', audienceKey: 'public', status: 'upcoming' },
];

const audienceOrder: AudienceKey[] = ['participants', 'researchers', 'public'];

function HeroSection() {
  const t = useTranslations('trial.hero');
  const tEligibility = useTranslations('trial.eligibility');
  const stats = t.raw('stats') as { value: string; label: string }[];

  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-36 md:pb-28 md:pt-44">
      <div aria-hidden className="absolute -right-36 top-12 -z-10 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-3xl" />
      <div aria-hidden className="absolute -left-32 bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-primary/[.07] blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{t('eyebrow')}</p>
          <h1 className="mt-5 font-heading text-6xl font-medium leading-[.92] tracking-[-.05em] text-gray-950 sm:text-7xl lg:text-[5.5rem]">
            {t('line1')} <span className="block text-primary">{t('line2')}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
            {t('lead')}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="pink" size="xl" className="gap-2">
              <a href="#documents">
                <Download className="h-4 w-4" />
                {t('cta')}
              </a>
            </Button>
            <Button asChild variant="outline" size="xl" className="gap-2">
              <a href="#eligibility">
                {tEligibility('title')}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <figure className="min-w-0">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-100">
            <Image
              src="/images/contact-clinician.webp"
              alt={t('imageAlt')}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-5 grid grid-cols-3 divide-x divide-gray-200 border-y border-gray-200 py-4">
            {stats.map((stat) => (
              <div key={stat.label} className="min-w-0 px-3 first:pl-0 last:pr-0 sm:px-5">
                <span className="block font-heading text-2xl font-medium text-[#10233f] sm:text-3xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-[.68rem] leading-tight text-gray-500 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function SectionNavigation() {
  const t = useTranslations('trial');
  const links = [
    ['about', t('about.title')],
    ['timeline', t('timeline.title')],
    ['eligibility', t('eligibility.title')],
    ['sites', t('sites.title')],
    ['team', t('team.title')],
    ['documents', t('documents.title')],
  ];

  return (
    <div className="sticky top-[5.5rem] z-30 border-y border-gray-100 bg-white/95 backdrop-blur-xl">
      <nav aria-label="Clinical trial sections" className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-4 py-3.5 sm:px-6 lg:px-8">
        {links.map(([href, label]) => (
          <a key={href} href={`#${href}`} className="whitespace-nowrap text-sm font-medium text-gray-500 transition-colors hover:text-primary">
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

function AboutSection() {
  const t = useTranslations('trial.about');
  const items = t.raw('cards') as { title: string; body: string }[];

  return (
    <section id="about" className="scroll-mt-32 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">{t('title')}</h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-600">{t('lead')}</p>
          </div>

          <div className="grid border-t border-gray-200 sm:grid-cols-2">
            {items.map((item, index) => (
              <article key={item.title} className={cn('border-b border-gray-200 py-8 sm:px-7', index % 2 === 0 ? 'sm:border-r sm:pl-0' : 'sm:pr-0')}>
                <span className="text-xs font-semibold tracking-[.16em] text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 text-2xl font-semibold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const t = useTranslations('trial.timeline');
  const phases = t.raw('phases') as { phase: string; title: string; participants: string; body: string }[];

  return (
    <section id="timeline" className="scroll-mt-32 overflow-hidden bg-[#111522] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold md:text-5xl">{t('title')}</h2>
          <p className="mt-5 text-lg text-white/55">{t('lead')}</p>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-0">
          <div aria-hidden className="absolute left-0 right-0 top-4 hidden h-px bg-white/10 md:block" />
          {phases.map((phase, index) => (
            <article key={phase.phase} className="relative border-l border-white/10 pl-6 md:border-l-0 md:border-r md:px-5 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <div className="relative z-10 mb-8 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-[#111522] text-xs font-semibold text-primary md:mb-10">
                {index + 1}
              </div>
              <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-primary">{phase.phase}</p>
              <h3 className="mt-2 text-xl font-semibold">{phase.title}</h3>
              {phase.participants && <p className="mt-2 text-xs font-medium text-white/45">{phase.participants}</p>}
              <p className="mt-4 text-sm leading-6 text-white/50">{phase.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EligibilitySection() {
  const { tweaks } = useTweaks();
  const t = useTranslations('trial.eligibility');
  const essential = t.raw('essential') as string[];
  const review = t.raw('review') as string[];

  return (
    <section id="eligibility" className="scroll-mt-32 bg-[#fafafa] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">{t('eyebrow')}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">{t('title')}</h2>
            <span className="rounded-full bg-primary px-3.5 py-2 text-sm font-semibold text-white">25+</span>
          </div>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">{t('lead')}</p>
        </div>

        {tweaks.eligibility_layout === 'snapshot' && (
          <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#10233f] p-6 text-white shadow-[0_2rem_5rem_rgba(16,35,63,.14)] sm:p-8 lg:p-10">
            <div className="grid gap-9 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
              <div>
                <span className="inline-flex rounded-full bg-primary px-3.5 py-2 text-sm font-semibold">25+</span>
                <h3 className="mt-6 font-heading text-3xl font-medium leading-tight sm:text-4xl">
                  {t('eligibleLabel')}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">{t('clinicianNote')}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="#sites" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] transition-colors hover:bg-primary hover:text-white">
                    {t('findSite')}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/contact" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/[.06]">
                    {t('askQuestion')}
                  </Link>
                </div>
              </div>

              <div className="space-y-3">
                {essential.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[.07] px-4 py-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-6 text-white/85">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-xs font-semibold uppercase tracking-[.15em] text-white/40">{t('reviewLabel')}</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {review.map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/[.07] px-3.5 py-2 text-xs text-white/70">
                    <X className="h-3.5 w-3.5 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {tweaks.eligibility_layout === 'split' && (
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-primary p-7 text-white shadow-[0_1.5rem_4rem_rgba(255,45,99,.16)] md:p-9">
              <div className="flex items-center justify-between gap-4">
                <h3 className="max-w-sm font-heading text-3xl font-medium leading-tight">{t('eligibleLabel')}</h3>
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary">
                  <Check className="h-5 w-5" />
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {essential.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/[.12] px-4 py-4">
                    <span className="text-xs font-semibold text-white/55">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm leading-6 text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[2rem] bg-[#10233f] p-7 text-white shadow-[0_1.5rem_4rem_rgba(16,35,63,.12)] md:p-9">
              <div className="flex items-center justify-between gap-4">
                <h3 className="max-w-sm font-heading text-3xl font-medium leading-tight">{t('reviewLabel')}</h3>
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white/[.08] text-primary">
                  <X className="h-5 w-5" />
                </span>
              </div>
              <ul className="mt-8 space-y-3">
                {review.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/[.07] px-4 py-4">
                    <span className="text-xs font-semibold text-white/35">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-sm leading-6 text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <div className="flex flex-col justify-between gap-5 rounded-[1.5rem] bg-white p-5 shadow-sm sm:flex-row sm:items-center lg:col-span-2">
              <p className="max-w-2xl text-sm leading-6 text-gray-600">{t('clinicianNote')}</p>
              <div className="flex flex-wrap gap-3">
                <a href="#sites" className="inline-flex items-center gap-2 rounded-full bg-[#10233f] px-5 py-3 text-sm font-semibold text-white hover:bg-primary">
                  {t('findSite')}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/contact" className="inline-flex items-center rounded-full bg-primary/[.08] px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-white">
                  {t('askQuestion')}
                </Link>
              </div>
            </div>
          </div>
        )}

        {tweaks.eligibility_layout === 'steps' && (
          <div className="mt-12">
            <div className="grid gap-4 md:grid-cols-3">
              {essential.map((item, index) => (
                <article key={item} className="flex min-h-56 flex-col justify-between rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_1rem_3rem_rgba(16,35,63,.05)] md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[.16em] text-gray-300">{String(index + 1).padStart(2, '0')}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/[.08] text-primary">
                      <Check className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-10 font-heading text-2xl font-medium leading-snug text-[#10233f]">{item}</p>
                </article>
              ))}
            </div>

            <div className="mt-5 rounded-[2rem] bg-[#10233f] p-6 text-white md:p-8">
              <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                <div>
                  <h3 className="font-heading text-2xl font-medium">{t('reviewLabel')}</h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {review.map((item) => (
                      <span key={item} className="inline-flex items-center gap-2 rounded-full bg-white/[.07] px-3.5 py-2 text-xs text-white/70">
                        <X className="h-3.5 w-3.5 text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a href="#sites" className="inline-flex w-fit flex-shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#10233f] hover:bg-primary hover:text-white">
                  {t('findSite')}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-white/50">{t('clinicianNote')}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SitesSection() {
  const { tweaks } = useTweaks();
  const t = useTranslations('trial.sites');
  const regionNames = t.raw('regionNames') as Record<string, string>;
  const totalSites = sitesByRegion.reduce((total, item) => total + item.hospitals.length, 0);

  return (
    <section id="sites" className="scroll-mt-32 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-.035em] text-[#10233f] md:text-5xl">
              {t('coverageTitle')}
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">{t('coverageLead')}</p>
          </div>
        </div>

        {tweaks.sites_layout === 'coverage' && (
          <div className="mt-12 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
            {sitesByRegion.map(({ region, hospitals }, index) => (
              <details key={region} className="group overflow-hidden rounded-[1.75rem] border border-gray-200 bg-[#fafafa] transition-colors open:border-primary/25 open:bg-white" open={index === 0}>
                <summary className="flex min-h-28 cursor-pointer list-none items-center gap-4 p-5 sm:p-6">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-[#10233f]">{regionNames[region] ?? region}</span>
                    <span className="mt-1 block text-xs text-gray-400">{t('siteCount', { count: hospitals.length })}</span>
                  </span>
                  <ChevronDown className="ml-auto h-4 w-4 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="space-y-3 border-t border-gray-100 bg-white px-5 py-5 sm:px-6">
                  {hospitals.map((hospital) => (
                    <li key={hospital.name} className="rounded-2xl bg-[#f6f7f9] px-4 py-3">
                      <span className="block text-sm font-medium leading-5 text-[#10233f]">{hospital.name}</span>
                      <span className="mt-1 block text-xs text-gray-400">{hospital.city}</span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        )}

        {tweaks.sites_layout === 'network' && (
          <div className="mt-12 overflow-hidden rounded-[2rem] bg-[#10233f] p-6 text-white shadow-[0_2rem_5rem_rgba(16,35,63,.14)] sm:p-8 lg:p-10">
            <div className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-primary">{t('allSitesLabel')}</p>
                <h3 className="mt-3 font-heading text-3xl font-medium sm:text-4xl">{t('title')}</h3>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/50">{t('lead')}</p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {sitesByRegion.map(({ region, hospitals }, index) => (
                <article key={region} className="rounded-[1.5rem] bg-white/[.06] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="font-semibold text-white">{regionNames[region] ?? region}</h3>
                    <span className="ml-auto text-xs text-white/35">{t('siteCount', { count: hospitals.length })}</span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {hospitals.map((hospital) => (
                      <li key={hospital.name} className="flex items-start gap-3 text-sm leading-5 text-white/65">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                        <span>
                          {hospital.name}
                          <span className="mt-0.5 block text-xs text-white/30">{hospital.city}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        )}

        {tweaks.sites_layout === 'directory' && (
          <div className="mt-12 grid gap-5 lg:grid-cols-[.38fr_.62fr]">
            <aside className="flex min-h-80 flex-col justify-between rounded-[2rem] bg-primary p-7 text-white shadow-[0_1.75rem_4rem_rgba(255,45,99,.18)] md:p-9">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-white/60">{t('eyebrow')}</p>
                <p className="mt-6 font-heading text-6xl font-medium">{totalSites}</p>
                <p className="mt-2 text-sm text-white/75">{t('hospitalsLabel')}</p>
              </div>
              <div className="mt-12 rounded-[1.5rem] bg-white/[.12] p-5">
                <p className="font-heading text-4xl font-medium">{sitesByRegion.length}</p>
                <p className="mt-1 text-sm text-white/70">{t('regionsLabel')}</p>
              </div>
            </aside>

            <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white">
              {sitesByRegion.map(({ region, hospitals }, index) => (
                <details key={region} className={cn('group px-5 py-5 sm:px-7', index > 0 && 'border-t border-gray-100')} open={index === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-4">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/[.08] text-primary">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-[#10233f]">{regionNames[region] ?? region}</span>
                    <span className="text-xs text-gray-400">{t('siteCount', { count: hospitals.length })}</span>
                    <ChevronDown className="ml-auto h-4 w-4 text-gray-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {hospitals.map((hospital) => (
                      <li key={hospital.name} className="rounded-2xl bg-[#f6f7f9] px-4 py-3 text-sm leading-5 text-gray-600">
                        {hospital.name}
                        <span className="mt-1 block text-xs text-gray-400">{hospital.city}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TeamSection() {
  const t = useTranslations('trial.team');
  const researchers = t.raw('researchers') as { name: string; role: string; affiliation: string; slug?: string }[];

  return (
    <section id="team" className="scroll-mt-32 bg-[#fafafa] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <h2 className="text-4xl font-semibold text-gray-950 md:text-5xl">{t('title')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{t('lead')}</p>
          </div>
          <div className="min-w-0 border-t border-gray-200">
            {researchers.map((member) => (
              <article key={member.name} className="grid min-w-0 gap-3 border-b border-gray-200 py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold text-gray-950">
                    {member.slug ? (
                      <Link
                        href={`/team/${member.slug}`}
                        className="transition-colors hover:text-primary hover:underline hover:decoration-primary/40 hover:underline-offset-4"
                      >
                        {member.name}
                      </Link>
                    ) : member.name}
                  </h3>
                  <p className="mt-1 break-words text-sm text-gray-500">{member.affiliation}</p>
                </div>
                <span className="text-sm font-medium text-primary">{member.role}</span>
              </article>
            ))}
            <p className="mb-5 mt-9 text-[.65rem] font-semibold uppercase tracking-[.16em] text-gray-400">{t('sponsorsLabel')}</p>
            <LogoMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  const { tweaks } = useTweaks();
  const tDocs = useTranslations('trial.documents');
  const tReg = useTranslations('trial.registry');
  const names = tDocs.raw('items') as Record<string, string>;
  const audienceLabels = tDocs.raw('audience') as Record<AudienceKey, string>;
  const registryRows = tReg.raw('rows') as { label: string; value: string }[];
  const links = [
    { label: tReg('links.dataAccess'), href: 'mailto:abdoul.azis@abcrf.org?subject=Data Access Request', external: false },
    { label: tReg('links.pactr'), href: 'https://pactr.samrc.ac.za', external: true },
    { label: tReg('links.clinicalTrials'), href: 'https://clinicaltrials.gov', external: true },
  ];

  if (tweaks.registry === 'hidden') return null;

  return (
    <section id="documents" className="scroll-mt-32 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <details className="group rounded-[2rem] border border-gray-200 bg-white" open>
            <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-6">
              <span className="text-xl font-semibold text-gray-950">{tDocs('title')}</span>
              <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-open:rotate-180" />
            </summary>
            <div className="space-y-7 border-t border-gray-100 px-7 py-7">
              {audienceOrder.map((audienceKey) => {
                const items = documents.filter((document) => document.audienceKey === audienceKey);
                return (
                  <div key={audienceKey}>
                    <p className="mb-3 text-[.65rem] font-semibold uppercase tracking-[.15em] text-gray-400">{audienceLabels[audienceKey]}</p>
                    <ul className="space-y-3">
                      {items.map((document) => (
                        <li key={document.id} className="flex items-center gap-3">
                          <FileText className="h-4 w-4 flex-shrink-0 text-gray-300" />
                          <span className="flex-1 text-sm text-gray-700">{names[document.id]}</span>
                          <span className={cn('text-xs font-medium', document.status === 'pending' ? 'text-amber-600' : 'text-gray-400')}>
                            {document.status === 'pending' ? tDocs('pending') : tDocs('upcoming')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </details>

          <details className="group rounded-[2rem] border border-gray-200 bg-[#111522] text-white" open>
            <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-6">
              <span className="text-xl font-semibold">{tReg('title')}</span>
              <ChevronDown className="h-5 w-5 text-white/40 transition-transform group-open:rotate-180" />
            </summary>
            <dl className="space-y-5 border-t border-white/10 px-7 py-7">
              {registryRows.map((row) => (
                <div key={row.label} className="grid gap-1 sm:grid-cols-[9rem_1fr]">
                  <dt className="text-[.65rem] font-semibold uppercase tracking-[.12em] text-white/35">{row.label}</dt>
                  <dd className="text-sm leading-6 text-white/70">{row.value}</dd>
                </div>
              ))}
              <div className="flex flex-wrap gap-5 border-t border-white/10 pt-5">
                {links.map((link) => (
                  <a key={link.label} href={link.href} {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-white">
                    {link.label}
                    {link.external && <ExternalLink className="h-3.5 w-3.5" />}
                  </a>
                ))}
              </div>
            </dl>
          </details>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const t = useTranslations('trial.contact');

  return (
    <section id="contact" className="bg-primary py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold">{t('title')}</h2>
          <p className="mt-2 max-w-xl text-white/75">{t('lead')}</p>
        </div>
        <Button asChild size="xl" className="bg-white text-primary hover:bg-gray-950 hover:text-white">
          <Link href="/contact">
            {t('dataAccessCta')}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default function TrialPage() {
  return (
    <div>
      <HeroSection />
      <SectionNavigation />
      <AboutSection />
      <TimelineSection />
      <EligibilitySection />
      <SitesSection />
      <TeamSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
}
