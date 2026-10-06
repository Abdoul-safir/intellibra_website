import type { Metadata } from 'next';
import { NewsStudio } from '../../../../components/news/news-studio';

export const metadata: Metadata = {
  title: 'News Studio · IntelliBra',
  description: 'Local editorial workspace for IntelliBra website stories.',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default async function NewsStudioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NewsStudio locale={locale} />;
}
