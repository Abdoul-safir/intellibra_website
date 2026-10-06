import type { MetadataRoute } from 'next';
import { newsArticles } from '../lib/news-content';
import { absoluteUrl } from '../lib/site';

const locales = ['en', 'fr'] as const;
const publicRoutes = [
  { path: '', priority: 1, frequency: 'weekly' as const },
  { path: '/about', priority: 0.8, frequency: 'monthly' as const },
  { path: '/trial', priority: 0.9, frequency: 'weekly' as const },
  { path: '/team', priority: 0.7, frequency: 'monthly' as const },
  { path: '/news', priority: 0.9, frequency: 'weekly' as const },
  { path: '/contact', priority: 0.6, frequency: 'yearly' as const },
];

function languageAlternates(path: string) {
  return {
    languages: {
      en: absoluteUrl(`/en${path}`),
      fr: absoluteUrl(`/fr${path}`),
      'x-default': absoluteUrl(`/en${path}`),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = publicRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}${route.path}`),
      lastModified: new Date(),
      changeFrequency: route.frequency,
      priority: route.priority,
      alternates: languageAlternates(route.path),
    })),
  );

  const articles: MetadataRoute.Sitemap = newsArticles.flatMap((article) =>
    locales.map((locale) => ({
      url: absoluteUrl(`/${locale}/news/${article.slug}`),
      lastModified: new Date(`${article.date}T12:00:00Z`),
      changeFrequency: 'monthly' as const,
      priority: article.featured ? 0.85 : 0.75,
      images: [absoluteUrl(article.image)],
      alternates: languageAlternates(`/news/${article.slug}`),
    })),
  );

  return [...pages, ...articles];
}
