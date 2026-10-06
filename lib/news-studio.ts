import type { LocalizedText } from './team-content';
import type { NewsArticle, NewsCategory } from './news-content';

export type NewsStudioStatus = 'draft' | 'review' | 'published';

export interface NewsStudioArticle {
  id: string;
  slug: string;
  status: NewsStudioStatus;
  category: NewsCategory;
  date: string;
  readMinutes: number;
  updatedAt: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
  image: string;
  imageName: string;
  imageAlt: LocalizedText;
}

export const NEWS_STUDIO_STORAGE_KEY = 'intellibra.website.news-studio.v1';
export const NEWS_STUDIO_UPDATED_EVENT = 'intellibra:news-studio-updated';

function today() {
  return new Date().toISOString().slice(0, 10);
}

export function createNewsStudioArticle(): NewsStudioArticle {
  const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `story-${Date.now()}`;

  return {
    id,
    slug: '',
    status: 'draft',
    category: 'field-notes',
    date: today(),
    readMinutes: 4,
    updatedAt: new Date().toISOString(),
    title: { en: '', fr: '' },
    excerpt: { en: '', fr: '' },
    body: { en: '', fr: '' },
    image: '',
    imageName: '',
    imageAlt: { en: '', fr: '' },
  };
}

export function readNewsStudioArticles(): NewsStudioArticle[] {
  if (typeof window === 'undefined') return [];
  try {
    const value = window.localStorage.getItem(NEWS_STUDIO_STORAGE_KEY);
    if (!value) return [];
    const parsed = JSON.parse(value) as NewsStudioArticle[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeNewsStudioArticles(articles: NewsStudioArticle[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(NEWS_STUDIO_STORAGE_KEY, JSON.stringify(articles));
  window.dispatchEvent(new CustomEvent(NEWS_STUDIO_UPDATED_EVENT));
}

export function cloneNewsStudioArticle(article: NewsStudioArticle): NewsStudioArticle {
  return JSON.parse(JSON.stringify(article)) as NewsStudioArticle;
}

function bodyParagraphs(body: LocalizedText): LocalizedText[] {
  const en = body.en.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const fr = body.fr.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
  const length = Math.max(en.length, fr.length);

  return Array.from({ length }, (_, index) => ({
    en: en[index] ?? '',
    fr: fr[index] ?? '',
  }));
}

export function studioArticleToNewsArticle(article: NewsStudioArticle): NewsArticle {
  return {
    slug: article.slug,
    category: article.category,
    date: article.date,
    readTime: {
      en: `${article.readMinutes} min read`,
      fr: `${article.readMinutes} min de lecture`,
    },
    title: article.title,
    excerpt: article.excerpt,
    image: article.image || '/images/contact-clinician.webp',
    imageAlt: article.imageAlt.en || article.imageAlt.fr
      ? article.imageAlt
      : article.title,
    body: bodyParagraphs(article.body),
  };
}
