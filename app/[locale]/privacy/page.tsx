import type { Metadata } from 'next';
import { LegalPage } from '../../../components/legal/legal-page';
import { getLegalDocument } from '../../../lib/legal-content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const document = getLegalDocument(locale, 'privacy');
  return { title: `${document.title} · IntelliBra`, description: document.summary, robots: { index: false, follow: false } };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <LegalPage locale={locale} documentKey="privacy" />;
}
