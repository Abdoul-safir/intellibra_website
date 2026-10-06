'use client';

import Image from 'next/image';
import { ArrowRight, MoveUpRight, PenLine, Quote } from 'lucide-react';
import { useLocale } from 'next-intl';
import * as React from 'react';
import { Link } from '../../../i18n/navigation';
import { usePublishedStudioArticles } from '../../../components/news/use-studio-articles';
import { newsArticles, newsCategoryLabels, type NewsArticle, type NewsCategory } from '../../../lib/news-content';
import { localize } from '../../../lib/team-content';
import { useTweaks } from '../../../lib/tweaks-context';

type Filter = 'all' | NewsCategory;

const copy = {
  en: {
    eyebrow: 'Newsroom',
    title: 'Stories from the work in progress',
    journalTitle: 'Notes from the field. Progress from the lab.',
    lead: 'Milestones, lessons, and perspectives from the people working to make earlier breast-cancer detection more accessible.',
    latest: 'Latest dispatch',
    read: 'Read story',
    all: 'All stories',
    archive: 'The journal',
    archiveLead: 'Reporting the decisions, evidence, and human work behind IntelliBra.',
    fieldNote: 'Field note',
    fieldQuote: 'We are designing with clinics, not only for them. Every observation from the field becomes a sharper question for the lab.',
  },
  fr: {
    eyebrow: 'Actualités',
    title: 'Les histoires d’un travail en mouvement',
    journalTitle: 'Notes du terrain. Progrès du laboratoire.',
    lead: "Étapes, enseignements et perspectives des personnes qui œuvrent pour rendre la détection précoce du cancer du sein plus accessible.",
    latest: 'Dernière actualité',
    read: "Lire l'article",
    all: 'Tous les articles',
    archive: 'Le journal',
    archiveLead: "Les décisions, les preuves et le travail humain derrière IntelliBra.",
    fieldNote: 'Note de terrain',
    fieldQuote: "Nous concevons avec les structures de soins, pas seulement pour elles. Chaque observation du terrain devient une question plus précise pour le laboratoire.",
  },
};

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CM' : 'en-CM', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

function ArticleMeta({ article, light = false }: { article: NewsArticle; light?: boolean }) {
  const locale = useLocale();
  return (
    <div className={`flex flex-wrap items-center gap-2 text-[.65rem] font-semibold uppercase tracking-[.13em] ${light ? 'text-white/55' : 'text-gray-400'}`}>
      <span className={light ? 'text-primary' : 'text-primary'}>{localize(newsCategoryLabels[article.category], locale)}</span>
      <span aria-hidden>•</span>
      <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
      <span aria-hidden>•</span>
      <span>{localize(article.readTime, locale)}</span>
    </div>
  );
}

function FilterBar({ active, onChange }: { active: Filter; onChange: (filter: Filter) => void }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;
  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: text.all },
    ...(['milestone', 'field-notes', 'perspective', 'media'] as NewsCategory[]).map((category) => ({
      value: category,
      label: localize(newsCategoryLabels[category], locale),
    })),
  ];

  return (
    <div className="flex flex-wrap gap-2" aria-label={locale === 'fr' ? "Filtrer les articles" : 'Filter articles'}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          aria-pressed={active === filter.value}
          className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
            active === filter.value
              ? 'bg-primary text-white'
              : 'border border-gray-200 bg-white text-gray-600 hover:border-primary/30 hover:text-primary'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}

function EditorialCard({ article, wide = false }: { article: NewsArticle; wide?: boolean }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;

  return (
    <article className={wide ? 'md:col-span-2' : ''}>
      <Link href={`/news/${article.slug}`} className="group block h-full overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_1.5rem_4rem_rgba(16,35,63,.10)]">
        <div className={`relative overflow-hidden bg-gray-100 ${wide ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
          <Image
            src={article.image}
            alt={localize(article.imageAlt, locale)}
            fill
            unoptimized={article.image.startsWith('data:')}
            sizes={wide ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
          />
          <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-gray-900 backdrop-blur-md transition group-hover:bg-primary group-hover:text-white">
            <MoveUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="p-6 md:p-7">
          <ArticleMeta article={article} />
          <h3 className={`mt-4 font-medium leading-tight text-[#10233f] ${wide ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
            {localize(article.title, locale)}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">{localize(article.excerpt, locale)}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            {text.read}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

function EditorialDispatch({ filter, setFilter, articles }: { filter: Filter; setFilter: (filter: Filter) => void; articles: NewsArticle[] }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;
  const featured = (articles.find((article) => article.featured) ?? articles[0])!;
  const visible = articles.filter((article) => article.slug !== featured.slug && (filter === 'all' || article.category === filter));

  return (
    <>
      <section className="bg-white px-4 pb-14 pt-32 sm:px-6 md:pb-20 md:pt-40 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-primary">{text.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[.94] tracking-[-.05em] text-[#10233f] sm:text-6xl lg:text-[5.4rem]">
              {text.title}
            </h1>
          </div>
          <div className="border-l border-gray-200 pl-6 lg:mb-2 lg:pl-8">
            <p className="text-lg leading-8 text-gray-600">{text.lead}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
        <Link href={`/news/${featured.slug}`} className="group mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#111522] text-white lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative min-h-[25rem] lg:min-h-[36rem]">
            <Image src={featured.image} alt={localize(featured.imageAlt, locale)} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
          </div>
          <div className="flex flex-col justify-between px-7 py-9 sm:px-10 md:px-12 md:py-12">
            <div>
              <p className="text-[.65rem] font-semibold uppercase tracking-[.16em] text-primary">{text.latest}</p>
              <ArticleMeta article={featured} light />
              <h2 className="mt-6 text-4xl font-medium leading-[1.05] sm:text-5xl">{localize(featured.title, locale)}</h2>
              <p className="mt-6 text-base leading-7 text-white/65">{localize(featured.excerpt, locale)}</p>
            </div>
            <span className="mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">
              {text.read}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </section>

      <section className="border-t border-gray-100 bg-[#faf8f8] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-medium text-[#10233f] md:text-5xl">{text.archive}</h2>
              <p className="mt-3 max-w-2xl text-gray-500">{text.archiveLead}</p>
            </div>
            <FilterBar active={filter} onChange={setFilter} />
          </div>
          {visible.length ? (
            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((article, index) => <EditorialCard key={article.slug} article={article} wide={filter === 'all' && index === 0} />)}
              {filter === 'all' && (
                <blockquote className="flex min-h-[23rem] flex-col justify-between rounded-[1.75rem] bg-primary p-7 text-white">
                  <Quote className="h-8 w-8 text-white/55" />
                  <p className="font-heading text-3xl leading-tight">“{text.fieldQuote}”</p>
                  <footer className="text-xs font-semibold uppercase tracking-[.14em] text-white/65">{text.fieldNote} · Yaoundé</footer>
                </blockquote>
              )}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}

function JournalStory({ article }: { article: NewsArticle }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;
  return (
    <article className="group border-t border-gray-300 pt-5">
      <Link href={`/news/${article.slug}`}>
        <ArticleMeta article={article} />
        <h3 className="mt-4 text-3xl font-medium leading-tight text-[#10233f]">{localize(article.title, locale)}</h3>
        <p className="mt-4 text-sm leading-6 text-gray-500">{localize(article.excerpt, locale)}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">{text.read}<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </Link>
    </article>
  );
}

function FieldJournal({ filter, setFilter, articles }: { filter: Filter; setFilter: (filter: Filter) => void; articles: NewsArticle[] }) {
  const locale = useLocale();
  const text = locale === 'fr' ? copy.fr : copy.en;
  const featured = (articles.find((article) => article.featured) ?? articles[0])!;
  const visible = articles.filter((article) => article.slug !== featured.slug && (filter === 'all' || article.category === filter));

  return (
    <>
      <section className="bg-[#f7f4f4] px-4 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-36 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.25rem] bg-white shadow-[0_2rem_6rem_rgba(16,35,63,.08)] lg:grid-cols-[1.08fr_.92fr]">
          <div className="relative min-h-[32rem] lg:min-h-[42rem]">
            <Image src={featured.image} alt={localize(featured.imageAlt, locale)} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
            <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-[.65rem] font-semibold uppercase tracking-[.14em] text-primary backdrop-blur-xl">{text.latest}</div>
          </div>
          <div className="flex flex-col justify-between bg-[#10233f] px-7 py-10 text-white sm:px-10 md:px-12 md:py-14">
            <div>
              <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-primary">{text.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-medium leading-[1.02] sm:text-5xl">{text.journalTitle}</h1>
              <div className="mt-8"><ArticleMeta article={featured} light /></div>
              <h2 className="mt-5 text-3xl font-medium leading-tight">{localize(featured.title, locale)}</h2>
              <p className="mt-5 text-base leading-7 text-white/60">{localize(featured.excerpt, locale)}</p>
            </div>
            <Link href={`/news/${featured.slug}`} className="mt-10 inline-flex w-fit items-center gap-2 border-b border-primary pb-2 text-sm font-semibold text-white">
              {text.read}<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 border-b border-gray-200 pb-10 md:grid-cols-[.65fr_1.35fr] md:items-end">
            <div>
              <p className="text-[.68rem] font-semibold uppercase tracking-[.18em] text-primary">{text.archive}</p>
              <h2 className="mt-4 text-4xl font-medium text-[#10233f] md:text-5xl">{text.archiveLead}</h2>
            </div>
            <div className="md:justify-self-end"><FilterBar active={filter} onChange={setFilter} /></div>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((article) => <JournalStory key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="bg-primary px-4 py-14 text-white sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.35fr_1.65fr] md:items-center">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/65">{text.fieldNote}<br />Yaoundé · 07:30</p>
          <blockquote className="font-heading text-3xl leading-tight sm:text-4xl md:text-5xl">“{text.fieldQuote}”</blockquote>
        </div>
      </section>
    </>
  );
}

export default function NewsPage() {
  const { tweaks } = useTweaks();
  const [filter, setFilter] = React.useState<Filter>('all');
  const [showStudioShortcut, setShowStudioShortcut] = React.useState(false);
  const studioArticles = usePublishedStudioArticles();
  const articles = React.useMemo(() => [...studioArticles, ...newsArticles], [studioArticles]);

  React.useEffect(() => {
    setShowStudioShortcut(['127.0.0.1', 'localhost'].includes(window.location.hostname));
  }, []);

  return (
    <div className="relative bg-white">
      {showStudioShortcut && (
        <Link
          href="/news/studio"
          className="fixed bottom-5 left-5 z-[60] inline-flex items-center gap-2 rounded-full border border-black/[.06] bg-white px-4 py-3 text-xs font-semibold text-[#10233f] shadow-[0_1rem_3rem_rgba(16,35,63,.14)] transition hover:-translate-y-0.5 hover:text-primary"
        >
          <PenLine className="h-4 w-4 text-primary" />
          {studioArticles.length ? 'Manage news' : 'Add news'}
        </Link>
      )}
      {tweaks.news_layout === 'journal'
        ? <FieldJournal filter={filter} setFilter={setFilter} articles={articles} />
        : <EditorialDispatch filter={filter} setFilter={setFilter} articles={articles} />}
    </div>
  );
}
