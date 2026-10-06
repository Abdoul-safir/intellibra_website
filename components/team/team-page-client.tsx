'use client';

import Image from 'next/image';
import {
  AtSign,
  ArrowRight,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MoveUpRight,
  PlayCircle,
} from 'lucide-react';
import { useLocale } from 'next-intl';
import { Link } from '../../i18n/navigation';
import {
  initials,
  localize,
  teamMembers,
  type TeamLink,
  type TeamLinkKind,
  type TeamMember,
} from '../../lib/team-content';
import { useTweaks } from '../../lib/tweaks-context';

const copy = {
  en: {
    eyebrow: 'Our team',
    title: 'People at IntelliBra',
    mosaicTitle: 'Built by many kinds of expertise',
    lead: 'Founders, advisers, clinicians, and volunteers working together to make earlier breast-cancer detection more accessible.',
    location: 'Building from Yaoundé, with collaborators across Cameroon and beyond',
    directoryEyebrow: 'People directory',
    directoryTitle: 'One mission. Different ways to move it forward.',
    directoryBody: 'Meet the people shaping the technology, clinical evidence, responsible growth, and community work behind IntelliBra.',
    founders: 'Core founders',
    foundersLead: 'The original team shaping IntelliBra’s product, hardware, AI, and technical direction.',
    core: 'Core team',
    coreLead: 'Engineers and specialists building IntelliBra alongside the founders.',
    advisers: 'Advisors',
    advisersLead: 'Independent expertise strengthening public health, security, partnerships, and long-term delivery.',
    clinicians: 'Clinical experts',
    cliniciansLead: 'Medical guidance that keeps patient safety, evidence, and regulatory readiness at the centre of the work.',
    volunteers: 'Volunteer network',
    volunteersLead: 'People contributing time, skills, and community reach to awareness, research support, and access.',
    profile: 'View profile',
    links: 'Profile links',
    volunteersTitle: 'There is more than one way to help.',
    volunteersBody: 'Our volunteer network supports awareness, events, research operations, translation, design, and community engagement. Individual volunteer profiles will join this directory as the programme grows.',
    volunteersCta: 'Volunteer with IntelliBra',
    ctaTitle: 'Want to build better access with us?',
    ctaBody: 'We welcome research partners, clinicians, technical experts, and community organisations who share our commitment to responsible innovation.',
    cta: 'Start a conversation',
  },
  fr: {
    eyebrow: 'Notre équipe',
    title: 'Les personnes d’IntelliBra',
    mosaicTitle: 'Construire grâce à plusieurs expertises',
    lead: "Fondateurs, conseillers, cliniciens et bénévoles travaillent ensemble pour rendre la détection précoce du cancer du sein plus accessible.",
    location: 'Construit à Yaoundé, avec des collaborateurs au Cameroun et au-delà',
    directoryEyebrow: 'Annuaire',
    directoryTitle: 'Une mission. Plusieurs façons de la faire avancer.',
    directoryBody: "Découvrez les personnes qui façonnent la technologie, les preuves cliniques, la croissance responsable et le travail communautaire d'IntelliBra.",
    founders: 'Cofondateurs',
    foundersLead: "L'équipe d'origine qui façonne le produit, le matériel, l'IA et la direction technique d'IntelliBra.",
    core: 'Équipe principale',
    coreLead: "Les ingénieurs et spécialistes qui construisent IntelliBra aux côtés des fondateurs.",
    advisers: 'Conseillers',
    advisersLead: "Des expertises indépendantes qui renforcent la santé publique, la sécurité, les partenariats et la mise en œuvre à long terme.",
    clinicians: 'Experts cliniques',
    cliniciansLead: "Une orientation médicale qui place la sécurité des patientes, les preuves et la préparation réglementaire au centre du travail.",
    volunteers: 'Réseau de bénévoles',
    volunteersLead: "Des personnes qui apportent leur temps, leurs compétences et leur ancrage communautaire à la sensibilisation, la recherche et l'accès.",
    profile: 'Voir le profil',
    links: 'Liens du profil',
    volunteersTitle: "Il existe plus d'une façon d'aider.",
    volunteersBody: "Notre réseau de bénévoles soutient la sensibilisation, les événements, les opérations de recherche, la traduction, le design et l'engagement communautaire. Les profils individuels rejoindront cet annuaire au fur et à mesure du développement du programme.",
    volunteersCta: 'Devenir bénévole',
    ctaTitle: 'Envie de construire un meilleur accès avec nous ?',
    ctaBody: "Nous accueillons les partenaires de recherche, cliniciens, experts techniques et organisations communautaires qui partagent notre engagement pour une innovation responsable.",
    cta: 'Ouvrir la conversation',
  },
};

const linkIcons: Record<TeamLinkKind, typeof Globe2> = {
  linkedin: Linkedin,
  website: Globe2,
  x: AtSign,
  github: Github,
  scholar: GraduationCap,
  portfolio: Globe2,
  video: PlayCircle,
  email: Mail,
};

function MemberLinks({ links, compact = false }: { links?: TeamLink[]; compact?: boolean }) {
  const locale = useLocale();

  if (!links?.length) return null;

  return (
    <div className="flex flex-wrap gap-2" aria-label={locale === 'fr' ? copy.fr.links : copy.en.links}>
      {links.map((link) => {
        const Icon = linkIcons[link.kind];
        const external = Boolean(link.href && !link.href.startsWith('mailto:'));
        const className = compact
          ? 'inline-grid h-11 w-11 place-items-center rounded-full border border-current/15 transition hover:border-primary hover:bg-primary hover:text-white'
          : 'inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 transition hover:border-primary hover:text-primary';

        if (!link.href) {
          return (
            <span
              key={link.kind}
              aria-label={`${localize(link.label, locale)} — ${locale === 'fr' ? 'lien à ajouter' : 'link to be added'}`}
              title={locale === 'fr' ? 'Lien à ajouter' : 'Link to be added'}
              className={`${className} cursor-default opacity-40`}
            >
              <Icon className="h-3.5 w-3.5" aria-hidden />
              {compact ? <span className="sr-only">{localize(link.label, locale)}</span> : localize(link.label, locale)}
            </span>
          );
        }

        return (
          <a
            key={`${link.kind}-${link.href}`}
            href={link.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className={className}
          >
            <Icon className="h-3.5 w-3.5" />
            {compact ? <span className="sr-only">{localize(link.label, locale)}</span> : localize(link.label, locale)}
          </a>
        );
      })}
    </div>
  );
}

function PortraitFallback({ name, dark = false }: { name: string; dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute inset-0 grid place-items-center font-heading text-3xl font-medium tracking-[-.02em] ${
        dark ? 'text-white/45' : 'text-[#10233f]/35'
      }`}
    >
      {initials(name)}
    </span>
  );
}

function FounderCard({ member }: { member: TeamMember }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-black/[.07] bg-white p-5 text-[#10233f] transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_1.5rem_4rem_rgba(16,35,63,.09)] sm:p-6">
      <div className="grid grid-cols-[minmax(0,1fr)_7.5rem] gap-5 sm:grid-cols-[minmax(0,1fr)_10rem]">
        <div className="flex min-w-0 flex-col justify-between py-1">
          <p className="text-[.63rem] font-semibold uppercase leading-5 tracking-[.16em] text-primary">
            {localize(member.role, locale)}
          </p>
          <Link href={`/team/${member.slug}`} className="mt-8 block">
            <h3 className="text-[1.75rem] font-medium leading-[1.02] tracking-[-.035em] sm:text-[2.15rem]">
              {member.name}
            </h3>
          </Link>
        </div>

        <Link
          href={`/team/${member.slug}`}
          className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-[#eee8e7]"
        >
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 7.5rem, (max-width: 1024px) 10rem, 13vw"
              className="object-cover transition duration-500 group-hover:scale-[1.035]"
              style={{ objectPosition: member.imagePosition }}
            />
          ) : null}
          <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow-[0_.5rem_1.5rem_rgba(16,35,63,.14)] transition group-hover:bg-primary group-hover:text-white">
            <MoveUpRight className="h-4 w-4" />
            <span className="sr-only">{text.profile}</span>
          </span>
        </Link>
      </div>

      <Link href={`/team/${member.slug}`} className="mt-7 block">
        <p className="text-sm leading-6 text-gray-500">
          {localize(member.summary, locale)}
        </p>
      </Link>

      <div className="mt-auto border-t border-gray-100 pt-5 text-gray-600">
        <MemberLinks links={member.links} compact />
      </div>
    </article>
  );
}

function ProfileCard({ member, tone = 'light' }: { member: TeamMember; tone?: 'light' | 'dark' | 'soft' }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;
  const dark = tone === 'dark';

  return (
    <article
      className={`group flex h-full flex-col rounded-[1.75rem] p-5 transition duration-300 sm:p-6 ${
        dark
          ? 'bg-[#111522] text-white hover:-translate-y-1 hover:shadow-[0_1.5rem_4rem_rgba(16,35,63,.18)]'
          : tone === 'soft'
            ? 'border border-black/[.06] bg-[#f7f4f4] text-[#10233f] hover:-translate-y-1 hover:border-primary/20'
            : 'border border-black/[.07] bg-white text-[#10233f] hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_1.5rem_4rem_rgba(16,35,63,.09)]'
      }`}
    >
      <div className="grid grid-cols-[minmax(0,1fr)_6.75rem] gap-4 sm:grid-cols-[minmax(0,1fr)_8rem] sm:gap-5">
        <div className="flex min-w-0 flex-col justify-between py-1">
          <p className="text-[.63rem] font-semibold uppercase leading-5 tracking-[.16em] text-primary">
            {localize(member.role, locale)}
          </p>
          <Link href={`/team/${member.slug}`} className="mt-7 block">
            <h3 className="text-[1.65rem] font-medium leading-[1.02] tracking-[-.035em] sm:text-[1.9rem]">
              {member.name}
            </h3>
          </Link>
        </div>

        <Link
          href={`/team/${member.slug}`}
          className={`relative aspect-[4/5] overflow-hidden rounded-[1.2rem] ${dark ? 'bg-white/[.08]' : 'bg-[#eee8e7]'}`}
        >
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 6.75rem, (max-width: 1024px) 8rem, 11vw"
              className="object-cover transition duration-500 group-hover:scale-[1.035]"
              style={{ objectPosition: member.imagePosition }}
            />
          ) : (
            <PortraitFallback name={member.name} dark={dark} />
          )}
          <span className="absolute bottom-2.5 right-2.5 grid h-8 w-8 place-items-center rounded-full bg-white text-gray-800 shadow-[0_.5rem_1.5rem_rgba(16,35,63,.14)] transition group-hover:bg-primary group-hover:text-white">
            <MoveUpRight className="h-3.5 w-3.5" />
            <span className="sr-only">{text.profile}</span>
          </span>
        </Link>
      </div>

      <Link href={`/team/${member.slug}`} className="mt-6 block">
        <p className={`text-sm leading-6 ${dark ? 'text-white/64' : 'text-gray-500'}`}>
          {localize(member.summary, locale)}
        </p>
      </Link>

      {member.expertise.length || member.links?.length ? (
      <div className={`mt-8 flex flex-1 flex-col justify-end border-t pt-5 ${dark ? 'border-white/10' : 'border-gray-100'}`}>
        <div className="flex flex-wrap items-center gap-2">
          {member.expertise.slice(0, 2).map((item) => (
            <span
              key={item.en}
              className={`rounded-full px-3 py-1.5 text-[.68rem] font-medium ${
                dark ? 'bg-white/[.07] text-white/65' : 'bg-gray-50 text-gray-500'
              }`}
            >
              {localize(item, locale)}
            </span>
          ))}
          {member.links?.length ? (
            <div className={`ml-1 ${dark ? 'text-white/75' : 'text-gray-600'}`}>
              <MemberLinks links={member.links} compact />
            </div>
          ) : null}
        </div>
      </div>
      ) : null}
    </article>
  );
}

function ClinicianCard({ member }: { member: TeamMember }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;

  return (
    <article className="group flex min-h-[10rem] flex-col rounded-[1.5rem] bg-white p-5 text-[#10233f] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_1.25rem_3rem_rgba(0,0,0,.18)] sm:p-6">
      <div className="flex items-start justify-between gap-5">
        <div className="min-w-0">
          <p className="text-sm font-semibold leading-5 text-primary">
            {localize(member.role, locale)}
          </p>
          <Link href={`/team/${member.slug}`} className="mt-3 block">
            <h3 className="text-2xl font-medium leading-[1.04] tracking-[-.025em] sm:text-[1.7rem]">
              {member.name}
            </h3>
          </Link>
        </div>
        <Link
          href={`/team/${member.slug}`}
          className="relative aspect-[4/5] w-[5.25rem] shrink-0 overflow-hidden rounded-[1rem] bg-[#eee8e7] sm:w-24"
        >
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="6rem"
              className="object-cover transition duration-500 group-hover:scale-[1.035]"
              style={{ objectPosition: member.imagePosition }}
            />
          ) : (
            <PortraitFallback name={member.name} />
          )}
          <span className="absolute bottom-1.5 right-1.5 grid h-7 w-7 place-items-center rounded-full bg-white text-gray-800 shadow-[0_.5rem_1.5rem_rgba(16,35,63,.14)] transition group-hover:bg-primary group-hover:text-white">
            <MoveUpRight className="h-3.5 w-3.5" />
            <span className="sr-only">{text.profile}</span>
          </span>
        </Link>
      </div>

      <Link href={`/team/${member.slug}`} className="mt-4 block">
        <p className="text-sm leading-6 text-gray-500">{localize(member.summary, locale)}</p>
      </Link>

      <div className="mt-auto flex flex-wrap gap-2 pt-5 empty:hidden">
        {member.expertise.slice(0, 2).map((item) => (
          <span key={item.en} className="rounded-full bg-gray-50 px-3 py-1.5 text-[.68rem] font-medium text-gray-500">
            {localize(item, locale)}
          </span>
        ))}
      </div>
    </article>
  );
}

function HeroCollective() {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;

  return (
    <section className="bg-white px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32 lg:px-8">
      <div className="relative mx-auto min-h-[37rem] max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#111522]">
        <Image
          src="/images/team/gala/pink-gala-group.jpg"
          alt="The IntelliBra team and guests at the IntelliBra Pink Gala 2025"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
          style={{ objectPosition: '50% 55%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071426]/95 via-[#071426]/50 to-transparent" />
        <div className="relative flex min-h-[37rem] max-w-2xl flex-col justify-end px-7 py-10 text-white sm:px-10 md:px-14 md:py-14">
          <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-primary">{text.eyebrow}</p>
          <h1 className="mt-5 text-5xl font-medium leading-[.94] tracking-[-.045em] sm:text-6xl lg:text-[5.15rem]">
            {text.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/75 md:text-lg">{text.lead}</p>
          <p className="mt-8 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/70 backdrop-blur-xl">
            {text.location}
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroMosaic() {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;

  return (
    <section className="overflow-hidden bg-[#f7f4f4] px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-primary">{text.eyebrow}</p>
          <h1 className="mt-6 text-5xl font-medium leading-[.94] tracking-[-.05em] text-[#10233f] sm:text-6xl lg:text-[5rem]">
            {text.mosaicTitle}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">{text.lead}</p>
        </div>
        <div className="grid h-[34rem] grid-cols-[1.2fr_.8fr] grid-rows-2 gap-4">
          <div className="relative row-span-2 overflow-hidden rounded-[2rem]">
            <Image src="/images/team/gala/pink-gala-group.jpg" alt="The IntelliBra team and guests at the IntelliBra Pink Gala 2025" fill priority sizes="(max-width: 1024px) 60vw, 32vw" className="object-cover" style={{ objectPosition: '48% 50%' }} />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white">
            <Image src="/images/team/gala/pink-gala-speaker.jpg" alt="A speaker addressing guests at the IntelliBra Pink Gala 2025" fill sizes="(max-width: 1024px) 40vw, 22vw" className="object-cover" style={{ objectPosition: '50% 30%' }} />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-white">
            <Image src="/images/team/gala/pink-gala-volunteers.jpg" alt="IntelliBra volunteers celebrating at the Pink Gala 2025" fill sizes="(max-width: 1024px) 40vw, 22vw" className="object-cover" style={{ objectPosition: '50% 40%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamDirectory() {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;
  const founders = teamMembers.filter((member) => member.section === 'founders');
  const core = teamMembers.filter((member) => member.section === 'core');
  const advisers = teamMembers.filter((member) => member.section === 'advisers');
  const clinicians = teamMembers.filter((member) => member.section === 'clinicians');
  const groups = [
    { id: 'founders', label: text.founders, count: founders.length },
    ...(core.length ? [{ id: 'core-team', label: text.core, count: core.length }] : []),
    { id: 'advisers', label: text.advisers, count: advisers.length },
    { id: 'clinicians', label: text.clinicians, count: clinicians.length },
    { id: 'volunteers', label: text.volunteers, count: null },
  ];

  return (
    <>
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[.88fr_1.12fr] md:items-end md:py-20 lg:px-8">
          <div>
            <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-primary">{text.directoryEyebrow}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-.035em] text-[#10233f] md:text-5xl">
              {text.directoryTitle}
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-lg leading-8 text-gray-500">{text.directoryBody}</p>
            <nav className="mt-7 flex flex-wrap gap-2" aria-label={text.directoryEyebrow}>
              {groups.map((group) => (
                <a
                  key={group.id}
                  href={`#${group.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-[#faf8f8] px-4 py-2 text-xs font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
                >
                  {group.label}
                  {group.count !== null ? <span className="text-gray-400">{group.count}</span> : null}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section id="founders" className="scroll-mt-28 bg-[#faf8f8] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <h2 className="text-4xl font-medium leading-tight text-[#10233f] md:text-5xl">{text.founders}</h2>
            <p className="max-w-2xl text-base leading-7 text-gray-500 lg:justify-self-end">{text.foundersLead}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {founders.map((member) => <FounderCard key={member.slug} member={member} />)}
          </div>

          {core.length ? (
            <div id="core-team" className="scroll-mt-28 pt-16 md:pt-20">
              <div className="grid gap-5 border-t border-black/[.07] pt-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
                <h2 className="text-3xl font-medium leading-tight text-[#10233f] md:text-4xl">{text.core}</h2>
                <p className="max-w-2xl text-base leading-7 text-gray-500 lg:justify-self-end">{text.coreLead}</p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {core.map((member) => <ProfileCard key={member.slug} member={member} />)}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section id="advisers" className="scroll-mt-28 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 border-b border-gray-200 pb-9 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <h2 className="text-4xl font-medium leading-tight text-[#10233f] md:text-5xl">{text.advisers}</h2>
            <p className="max-w-2xl text-base leading-7 text-gray-500 lg:justify-self-end">{text.advisersLead}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {advisers.map((member) => <ProfileCard key={member.slug} member={member} />)}
          </div>
        </div>
      </section>

      <section id="clinicians" className="scroll-mt-28 bg-[#111522] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-primary">{text.clinicians}</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">{text.clinicians}</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/60 lg:justify-self-end">{text.cliniciansLead}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <div className="grid content-start gap-4" aria-label={text.clinicians}>
              {clinicians.map((member) => <ClinicianCard key={member.slug} member={member} />)}
            </div>
            <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] lg:min-h-[32rem]">
              <Image
                src="/images/contact-clinician.webp"
                alt="A clinician reviewing a patient record"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111522]/35 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="volunteers" className="scroll-mt-28 bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] bg-primary lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
            <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-white/70">{text.volunteers}</p>
            <h2 className="mt-5 max-w-lg text-4xl font-medium leading-tight text-white md:text-5xl">{text.volunteersTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80">{text.volunteersBody}</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition hover:bg-[#111522] hover:text-white"
            >
              {text.volunteersCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[25rem] lg:min-h-[34rem]">
            <Image
              src="/images/team/gala/pink-gala-volunteers.jpg"
              alt="IntelliBra volunteers in Pink Gala shirts at the IntelliBra Pink Gala 2025"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
              style={{ objectPosition: '35% 45%' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export function TeamPageClient() {
  const { tweaks } = useTweaks();
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;

  return (
    <div className="bg-white">
      {tweaks.team_layout === 'mosaic' ? <HeroMosaic /> : <HeroCollective />}
      <TeamDirectory />
      <section className="bg-[#111522] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-medium md:text-4xl">{text.ctaTitle}</h2>
            <p className="mt-3 max-w-2xl text-white/60">{text.ctaBody}</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#111522]">
            {text.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
