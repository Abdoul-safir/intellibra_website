'use client';

import Image from 'next/image';
import { ArrowLeft, Clock3 } from 'lucide-react';
import * as React from 'react';
import { Link } from '../../i18n/navigation';
import { newsCategoryLabels } from '../../lib/news-content';
import {
  NEWS_STUDIO_UPDATED_EVENT,
  readNewsStudioArticles,
  studioArticleToNewsArticle,
} from '../../lib/news-studio';
import { localize } from '../../lib/team-content';

export function LocalNewsArticle({ locale, slug }: { locale: string; slug: string }) {
  const [ready, setReady] = React.useState(false);
  const [article, setArticle] = React.useState<ReturnType<typeof studioArticleToNewsArticle> | null>(null);

  React.useEffect(() => {
    const sync = () => {
      const stored = readNewsStudioArticles().find(
        (candidate) => candidate.slug === slug && candidate.status === 'published',
      );
      setArticle(stored ? studioArticleToNewsArticle(stored) : null);
      setReady(true);
    };
    sync();
    window.addEventListener(NEWS_STUDIO_UPDATED_EVENT, sync);
    return () => window.removeEventListener(NEWS_STUDIO_UPDATED_EVENT, sync);
  }, [slug]);

  if (!ready) {
    return (
      <div className="min-h-screen bg-white px-4 pb-24 pt-40">
        <div className="mx-auto max-w-5xl animate-pulse">
          <div className="h-4 w-32 rounded bg-gray-100" />
          <div className="mt-14 h-16 max-w-3xl rounded bg-gray-100" />
          <div className="mt-6 h-7 max-w-2xl rounded bg-gray-100" />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <section className="min-h-[72vh] bg-white px-4 pb-24 pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-medium text-[#10233f]">
            {locale === 'fr' ? 'Article introuvable' : 'Story not found'}
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-500">
            {locale === 'fr'
              ? "Cet article local n'existe plus ou n'est pas publié dans ce navigateur."
              : 'This local story no longer exists or is not published in this browser.'}
          </p>
          <Link href="/news" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">
            <ArrowLeft className="h-4 w-4" />
            {locale === 'fr' ? 'Retour aux actualités' : 'Back to news'}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="bg-white pb-24 pt-36 md:pt-40">
      <header className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            {locale === 'fr' ? 'Retour aux actualités' : 'Back to news'}
          </Link>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-[.68rem] font-semibold uppercase tracking-[.15em] text-gray-400">
            <span className="text-primary">{localize(newsCategoryLabels[article.category], locale)}</span>
            <span aria-hidden>•</span>
            <time dateTime={article.date}>{article.date}</time>
            <span aria-hidden>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-3.5 w-3.5" />
              {localize(article.readTime, locale)}
            </span>
          </div>
          <h1 className="mt-8 max-w-5xl text-5xl font-medium leading-[.98] tracking-[-.045em] text-[#10233f] sm:text-6xl lg:text-7xl">
            {localize(article.title, locale)}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            {localize(article.excerpt, locale)}
          </p>
        </div>
      </header>

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-gray-100">
          <Image
            src={article.image}
            alt={localize(article.imageAlt, locale)}
            fill
            unoptimized={article.image.startsWith('data:')}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6">
        <div className="space-y-7">
          {article.body.map((paragraph, index) => (
            <p key={index} className="text-lg leading-8 text-gray-700">
              {localize(paragraph, locale)}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
