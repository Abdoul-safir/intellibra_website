import type { Metadata } from 'next';
import Image from 'next/image';
import {
  AtSign,
  ArrowLeft,
  ArrowRight,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  PlayCircle,
  Quote,
} from 'lucide-react';
import { notFound } from 'next/navigation';
import { Link } from '../../../../i18n/navigation';
import {
  getTeamMember,
  localize,
  teamMembers,
  type TeamLinkKind,
  type TeamSection,
} from '../../../../lib/team-content';
import { absoluteUrl } from '../../../../lib/site';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

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

const sectionLabels: Record<Exclude<TeamSection, 'volunteers'>, { en: string; fr: string }> = {
  founders: { en: 'Core founders', fr: 'Cofondateurs' },
  core: { en: 'Core team', fr: 'Équipe principale' },
  advisers: { en: 'Advisors', fr: 'Conseillers' },
  clinicians: { en: 'Clinical experts', fr: 'Experts cliniques' },
};

export function generateStaticParams() {
  return teamMembers.flatMap((member) => [
    { locale: 'en', slug: member.slug },
    { locale: 'fr', slug: member.slug },
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  const description = localize(member.summary, locale);
  const canonical = absoluteUrl(`/${locale}/team/${member.slug}`);
  const publicProfileImage = member.image && !member.imageIsPlaceholder ? member.image : undefined;

  return {
    title: `${member.name} · IntelliBra`,
    description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(`/en/team/${member.slug}`),
        fr: absoluteUrl(`/fr/team/${member.slug}`),
      },
    },
    openGraph: {
      type: 'profile',
      title: `${member.name} · IntelliBra`,
      description,
      url: canonical,
      siteName: 'IntelliBra',
      ...(publicProfileImage ? { images: [{ url: absoluteUrl(publicProfileImage), alt: member.name }] } : {}),
    },
    twitter: {
      card: publicProfileImage ? 'summary_large_image' : 'summary',
      title: `${member.name} · IntelliBra`,
      description,
      ...(publicProfileImage ? { images: [absoluteUrl(publicProfileImage)] } : {}),
    },
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  const fr = locale === 'fr';
  const related = teamMembers
    .filter((candidate) => candidate.slug !== member.slug)
    .sort((a, b) => Number(b.section === member.section) - Number(a.section === member.section))
    .slice(0, 3);
  const publicLinks = member.links
    ?.filter((link) => link.href && !link.href.startsWith('mailto:'))
    .map((link) => link.href as string) ?? [];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: localize(member.role, locale),
    description: localize(member.summary, locale),
    url: absoluteUrl(`/${locale}/team/${member.slug}`),
    worksFor: {
      '@type': 'Organization',
      name: 'IntelliBra',
      url: absoluteUrl(`/${locale}`),
    },
    ...(member.image && !member.imageIsPlaceholder ? { image: absoluteUrl(member.image) } : {}),
    ...(publicLinks.length ? { sameAs: publicLinks } : {}),
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-36 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/team" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            {fr ? "Retour à l'équipe" : 'Back to the team'}
          </Link>

          <div className="mt-10 overflow-hidden rounded-[2.25rem] bg-[#f7f4f4] p-6 sm:p-8 md:p-10 lg:p-14">
            <div className={member.image ? 'grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-14' : ''}>
              <div className="min-w-0">
                <p className="text-[.68rem] font-semibold uppercase tracking-[.18em] text-primary">
                  {localize(sectionLabels[member.section], locale)}
                </p>
                <h1 className="mt-7 max-w-[12ch] text-5xl font-medium leading-[.94] tracking-[-.045em] text-[#10233f] sm:text-6xl lg:text-[4.75rem]">
                  {member.name}
                </h1>
                <p className="mt-5 text-lg font-medium text-primary">{localize(member.role, locale)}</p>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">{localize(member.summary, locale)}</p>

                {member.links?.length ? (
                  <div className="mt-8 flex flex-wrap gap-2" aria-label={fr ? 'Liens du profil' : 'Profile links'}>
                    {member.links.map((link) => {
                      const Icon = linkIcons[link.kind];
                      const external = Boolean(link.href && !link.href.startsWith('mailto:'));

                      if (!link.href) {
                        return (
                          <span
                            key={link.kind}
                            aria-label={`${localize(link.label, locale)} — ${fr ? 'lien à ajouter' : 'link to be added'}`}
                            title={fr ? 'Lien à ajouter' : 'Link to be added'}
                            className="inline-flex cursor-default items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-400"
                          >
                            <Icon className="h-4 w-4" aria-hidden />
                            {localize(link.label, locale)}
                          </span>
                        );
                      }

                      return (
                        <a
                          key={`${link.kind}-${link.href}`}
                          href={link.href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noreferrer' : undefined}
                          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
                        >
                          <Icon className="h-4 w-4" />
                          {localize(link.label, locale)}
                        </a>
                      );
                    })}
                  </div>
                ) : null}

                {member.quote ? (
                  <blockquote className="mt-10 max-w-2xl rounded-[1.75rem] bg-[#111522] p-7 text-white sm:p-8">
                    <div className="flex items-center justify-between gap-5">
                      <p className="text-[.65rem] font-semibold uppercase tracking-[.18em] text-primary">
                        {fr ? 'Point de vue' : 'Founder perspective'}
                      </p>
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-primary" aria-hidden>
                        <Quote className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-7 max-w-[32ch] font-heading text-2xl leading-[1.22] sm:text-[1.75rem]">
                      “{localize(member.quote, locale)}”
                    </p>
                    <footer className="mt-7 border-t border-white/10 pt-5">
                      <p className="text-sm font-semibold text-white">{member.name}</p>
                      <p className="mt-1 text-xs text-white/45">{localize(member.role, locale)}</p>
                    </footer>
                  </blockquote>
                ) : member.section !== 'founders' && member.expertise.length ? (
                  <div className="mt-10 border-t border-gray-200 pt-7">
                    <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-gray-400">
                      {fr ? "Domaines d'expertise" : 'Areas of expertise'}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.expertise.map((item) => (
                        <span key={item.en} className="rounded-full border border-gray-200 bg-white px-3.5 py-2 text-xs font-medium text-gray-700">
                          {localize(item, locale)}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {member.image ? (
                <div className="relative order-first aspect-[4/5] w-full max-w-sm justify-self-center overflow-hidden rounded-[1.75rem] bg-[#eee8e7] lg:order-last lg:max-w-none lg:justify-self-end">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 24rem, 20rem"
                    className="object-cover"
                    style={{ objectPosition: member.imagePosition }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {member.biography.length || member.featuredVideo ? (
      <section className="border-y border-gray-100 bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-[.68rem] font-semibold uppercase tracking-[.18em] text-primary">
              {fr ? 'Parcours' : 'Biography'}
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight text-[#10233f]">
              {fr ? 'Le travail derrière la mission' : 'The work behind the mission'}
            </h2>
          </div>
          <div>
            <div className="space-y-6">
              {member.biography.map((paragraph) => (
                <p key={paragraph.en} className="text-lg leading-8 text-gray-600">{localize(paragraph, locale)}</p>
              ))}
            </div>

            {member.featuredVideo ? (
              <a
                href={member.featuredVideo.href}
                target="_blank"
                rel="noreferrer"
                className="group mt-12 grid overflow-hidden rounded-[2rem] bg-[#111522] text-white sm:grid-cols-[.8fr_1.2fr]"
              >
                <div className="relative min-h-[15rem] bg-[#242a36]">
                  {member.featuredVideo.poster ? (
                    <Image src={member.featuredVideo.poster} alt="" fill sizes="40vw" className="object-cover" />
                  ) : null}
                  <span className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                    <PlayCircle className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-primary">{fr ? 'Regarder' : 'Watch'}</p>
                  <h3 className="mt-4 text-2xl font-medium sm:text-3xl">{localize(member.featuredVideo.title, locale)}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">{localize(member.featuredVideo.description, locale)}</p>
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </section>
      ) : null}

      <section className="bg-[#faf8f8] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-medium text-[#10233f] sm:text-4xl">{fr ? "Rencontrer le reste de l'équipe" : 'Meet more of the team'}</h2>
            <Link href="/team" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex">
              {fr ? 'Voir toute l’équipe' : 'View everyone'} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((candidate) => (
              <Link key={candidate.slug} href={`/team/${candidate.slug}`} className="group flex min-h-[18rem] flex-col justify-between rounded-[1.5rem] border border-black/[.06] bg-white p-6 transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-sm sm:p-7">
                <div>
                  <p className="text-[.63rem] font-semibold uppercase tracking-[.16em] text-primary">{localize(sectionLabels[candidate.section], locale)}</p>
                  <h3 className="mt-6 max-w-[12ch] text-2xl font-medium leading-tight text-[#10233f]">{candidate.name}</h3>
                  <p className="mt-3 text-xs leading-5 text-gray-500">{localize(candidate.role, locale)}</p>
                </div>
                <span className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 text-sm font-semibold text-gray-700 transition group-hover:text-primary">
                  {fr ? 'Voir le profil' : 'View profile'}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
