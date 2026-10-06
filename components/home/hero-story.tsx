'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import { Button } from '../ui/button';

export function HeroStory() {
  const t = useTranslations('home.heroSplit');

  return (
    <section className="relative min-h-[48rem] overflow-hidden bg-gray-950 pt-32 text-white md:min-h-[52rem] md:pt-36">
      <Image
        src="/images/medecin.png"
        alt="Clinicians caring for a patient"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/15" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[37rem] max-w-7xl items-center px-4 pb-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl font-medium leading-[.98] tracking-[-.045em] sm:text-6xl md:text-7xl">
            {t('headline1')} <span className="text-primary">{t('headline2')}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            {t('lead')}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="pink" size="xl">
              <Link href="/about">{t('discover')}</Link>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-white/30 bg-black/15 text-white hover:bg-white hover:text-gray-950">
              <Link href="/contact">{t('partner')}</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-black/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-10 px-4 py-6 sm:px-6 lg:px-8">
          <div>
            <span className="text-3xl font-semibold">20</span>
            <span className="ml-2 text-sm text-white/60">{t('hospitalSites')}</span>
          </div>
          <div className="h-9 w-px bg-white/15" />
          <div>
            <span className="text-3xl font-semibold">10</span>
            <span className="ml-2 text-sm text-white/60">{t('regionsCovered')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
