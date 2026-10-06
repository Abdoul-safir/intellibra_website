'use client';

import * as React from 'react';
import {
  NEWS_STUDIO_STORAGE_KEY,
  NEWS_STUDIO_UPDATED_EVENT,
  readNewsStudioArticles,
  studioArticleToNewsArticle,
} from '../../lib/news-studio';

export function usePublishedStudioArticles() {
  const [articles, setArticles] = React.useState(() => [] as ReturnType<typeof studioArticleToNewsArticle>[]);

  React.useEffect(() => {
    const sync = () => {
      setArticles(
        readNewsStudioArticles()
          .filter((article) => article.status === 'published')
          .sort((a, b) => b.date.localeCompare(a.date))
          .map(studioArticleToNewsArticle),
      );
    };

    const onStorage = (event: StorageEvent) => {
      if (event.key === NEWS_STUDIO_STORAGE_KEY) sync();
    };

    sync();
    window.addEventListener('storage', onStorage);
    window.addEventListener(NEWS_STUDIO_UPDATED_EVENT, sync);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener(NEWS_STUDIO_UPDATED_EVENT, sync);
    };
  }, []);

  return articles;
}
