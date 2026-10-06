import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { ArticleMediaCarousel } from '../../../../components/news/article-media-carousel';
import { ArticleShare } from '../../../../components/news/article-share';
import { LocalNewsArticle } from '../../../../components/news/local-news-article';
import { Link } from '../../../../i18n/navigation';
import { getNewsArticle, newsArticles, newsCategoryLabels, type NewsMediaBlock } from '../../../../lib/news-content';
import { absoluteUrl, articleUrl, siteName, siteUrl } from '../../../../lib/site';
import { localize } from '../../../../lib/team-content';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return newsArticles.flatMap((article) => [
    { locale: 'en', slug: article.slug },
    { locale: 'fr', slug: article.slug },
  ]);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) {
    return {
      title: 'IntelliBra story',
      robots: { index: false, follow: false },
    };
  }

  const title = localize(article.title, locale);
  const description = localize(article.excerpt, locale);
  const canonical = articleUrl(locale, slug);
  const socialImage = `${canonical}/opengraph-image`;
  const publishedTime = new Date(`${article.date}T12:00:00Z`).toISOString();
  const articleVideo = article.media?.find((block) => block.type === 'video');

  return {
    title: `${title} · IntelliBra`,
    description,
    keywords: [
      'IntelliBra',
      title,
      localize(newsCategoryLabels[article.category], locale),
      'breast cancer screening',
      'early detection',
      'Cameroon',
      'clinical research',
    ],
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical,
      languages: {
        'en-CM': articleUrl('en', slug),
        'fr-CM': articleUrl('fr', slug),
        'x-default': articleUrl('en', slug),
      },
    },
    openGraph: {
      type: 'article',
      siteName,
      title,
      description,
      url: canonical,
      locale: locale === 'fr' ? 'fr_CM' : 'en_CM',
      alternateLocale: locale === 'fr' ? ['en_CM'] : ['fr_CM'],
      publishedTime,
      modifiedTime: publishedTime,
      section: localize(newsCategoryLabels[article.category], locale),
      tags: ['IntelliBra', 'breast cancer screening', 'early detection', 'Cameroon'],
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        alt: localize(article.imageAlt, locale),
      }],
      videos: articleVideo ? [{
        url: absoluteUrl(articleVideo.src),
        width: 1280,
        height: 720,
        type: 'video/mp4',
      }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

function formatDate(date: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-CM' : 'en-CM', {
    month: 'long', day: 'numeric', year: 'numeric',
  }).format(new Date(`${date}T12:00:00Z`));
}

function ArticleMedia({ block, locale }: { block: NewsMediaBlock; locale: string }) {
  const fr = locale === 'fr';

  if (block.type === 'video') {
    return (
      <figure className="mt-10 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-[#faf9f9] md:mt-12">
        <video
          controls
          playsInline
          preload="metadata"
          poster={block.poster}
          aria-label={localize(block.title, locale)}
          className="aspect-video w-full bg-black object-cover"
        >
          <source src={block.src} type="video/mp4" />
          {fr
            ? "Votre navigateur ne permet pas la lecture de cette vidéo."
            : 'Your browser does not support this video.'}
        </video>
        <figcaption className="px-6 py-5 sm:px-8 sm:py-6">
          <p className="text-sm font-semibold text-[#10233f]">{localize(block.title, locale)}</p>
          <p className="mt-1.5 text-sm italic leading-6 text-gray-500">{localize(block.caption, locale)}</p>
        </figcaption>
      </figure>
    );
  }

  if (block.type === 'gallery') {
    return (
      <figure className="mt-10 md:mt-12">
        <ArticleMediaCarousel images={block.images} locale={locale} />
        {block.caption && (
          <figcaption className="mx-auto mt-4 max-w-2xl text-center text-sm italic leading-6 text-gray-500">
            {localize(block.caption, locale)}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="mt-10 md:mt-12">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-100">
        <Image
          src={block.image.src}
          alt={localize(block.image.alt, locale)}
          fill
          sizes="(max-width: 1024px) 100vw, 820px"
          className="object-cover"
        />
      </div>
      <figcaption className="mx-auto mt-4 max-w-2xl text-center text-sm italic leading-6 text-gray-500">
        {localize(block.image.caption, locale)}
      </figcaption>
    </figure>
  );
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return <LocalNewsArticle locale={locale} slug={slug} />;

  const fr = locale === 'fr';
  const related = newsArticles.filter((candidate) => candidate.slug !== article.slug).slice(0, 3);
  const linkIsExternal = article.link?.href.startsWith('http');
  const canonical = articleUrl(locale, article.slug);
  const title = localize(article.title, locale);
  const description = localize(article.excerpt, locale);
  const articleVideo = article.media?.find((block) => block.type === 'video');
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        '@id': `${canonical}#article`,
        headline: title,
        description,
        image: [
          `${canonical}/opengraph-image`,
          absoluteUrl(article.image),
        ],
        datePublished: new Date(`${article.date}T12:00:00Z`).toISOString(),
        dateModified: new Date(`${article.date}T12:00:00Z`).toISOString(),
        inLanguage: fr ? 'fr-CM' : 'en-CM',
        isAccessibleForFree: true,
        articleSection: localize(newsCategoryLabels[article.category], locale),
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        author: { '@type': 'Organization', name: siteName, url: siteUrl },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/logo/logo.png'),
            width: 151,
            height: 42,
          },
        },
        video: articleVideo ? {
          '@type': 'VideoObject',
          name: localize(articleVideo.title, locale),
          description: localize(articleVideo.caption, locale),
          thumbnailUrl: [absoluteUrl(articleVideo.poster)],
          contentUrl: absoluteUrl(articleVideo.src),
          uploadDate: new Date(`${article.date}T12:00:00Z`).toISOString(),
          duration: 'PT8S',
        } : undefined,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: fr ? 'Accueil' : 'Home',
            item: absoluteUrl(`/${locale}`),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: fr ? 'Actualités' : 'News',
            item: absoluteUrl(`/${locale}/news`),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <article className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c') }}
      />
      <header className="px-4 pb-12 pt-32 sm:px-6 md:pb-16 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-primary">
            <ArrowLeft className="h-4 w-4" />
            {fr ? 'Retour aux actualités' : 'Back to news'}
          </Link>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-[.68rem] font-semibold uppercase tracking-[.14em]">
            <span className="rounded-full bg-primary px-3 py-1.5 text-white">{localize(newsCategoryLabels[article.category], locale)}</span>
            <time className="text-gray-400" dateTime={article.date}>{formatDate(article.date, locale)}</time>
            <span className="text-gray-300" aria-hidden>•</span>
            <span className="text-gray-400">{localize(article.readTime, locale)}</span>
          </div>
          <h1 className="mt-7 max-w-5xl text-5xl font-medium leading-[.98] tracking-[-.045em] text-[#10233f] sm:text-6xl lg:text-[5rem]">
            {localize(article.title, locale)}
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-8 text-gray-600">{localize(article.excerpt, locale)}</p>
          <ArticleShare title={title} url={canonical} locale={locale} />
        </div>
      </header>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto aspect-[16/8] max-w-7xl overflow-hidden rounded-[2.25rem] bg-gray-100">
          <Image src={article.image} alt={localize(article.imageAlt, locale)} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[.42fr_1.58fr] lg:px-8">
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <p className="text-[.68rem] font-semibold uppercase tracking-[.16em] text-primary">{fr ? 'Dans cet article' : 'In this story'}</p>
            <div className="mt-5 border-l border-gray-200 pl-5 text-sm leading-7 text-gray-500">
              <p>{localize(newsCategoryLabels[article.category], locale)}</p>
              <p>{formatDate(article.date, locale)}</p>
              <p>{localize(article.readTime, locale)}</p>
            </div>
          </aside>
          <div>
            <div className="space-y-10">
              {article.body.map((paragraph, index) => (
                <div key={paragraph.en}>
                  <p className="text-lg leading-8 text-gray-700 md:text-xl md:leading-9">{localize(paragraph, locale)}</p>
                  {article.media
                    ?.filter((block) => block.afterParagraph === index)
                    .map((block) => <ArticleMedia key={block.id} block={block} locale={locale} />)}
                </div>
              ))}
            </div>

            {article.quote && (
              <blockquote className="my-12 rounded-[2rem] bg-[#111522] px-7 py-9 text-white sm:px-10 sm:py-11">
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-6 font-heading text-3xl leading-tight sm:text-4xl">“{localize(article.quote, locale)}”</p>
                {article.quoteAttribution && <footer className="mt-6 text-sm text-white/50">— {localize(article.quoteAttribution, locale)}</footer>}
              </blockquote>
            )}

            {article.link && (
              linkIsExternal ? (
                <a href={article.link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[.06] px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
                  {localize(article.link.label, locale)}<ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <Link href={article.link.href} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[.06] px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white">
                  {localize(article.link.label, locale)}<ArrowRight className="h-4 w-4" />
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#faf8f8] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-medium text-[#10233f] sm:text-4xl">{fr ? 'À lire ensuite' : 'Read next'}</h2>
            <Link href="/news" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex">
              {fr ? 'Toutes les actualités' : 'All stories'}<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {related.map((candidate) => (
              <Link key={candidate.slug} href={`/news/${candidate.slug}`} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-sm">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={candidate.image} alt="" fill sizes="33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="text-[.65rem] font-semibold uppercase tracking-[.14em] text-primary">{localize(newsCategoryLabels[candidate.category], locale)}</p>
                  <h3 className="mt-3 text-xl font-semibold leading-tight text-[#10233f]">{localize(candidate.title, locale)}</h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-gray-500 transition group-hover:text-primary">{fr ? 'Lire' : 'Read'}<ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
