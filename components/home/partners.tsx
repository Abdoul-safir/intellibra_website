'use client';

import { useTranslations } from 'next-intl';
import { LogoMarquee } from '../logo-marquee';

export function PartnersStrip() {
  const t = useTranslations('home.partners');
  return (
    <section id="partners" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-wide text-gray-400">
          {t('title')}
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
