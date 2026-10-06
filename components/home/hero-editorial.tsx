'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import { Button } from '../ui/button';

export function HeroEditorial() {
  const t = useTranslations('home.heroSplit');

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <h1 className="font-heading text-[clamp(3.25rem,7.2vw,7rem)] font-medium leading-[.92] tracking-[-.055em] text-gray-950 lg:col-span-8">
            {t('headline1')} <span className="text-primary">{t('headline2')}</span>
          </h1>

          <div className="pb-1 lg:col-span-4 lg:pb-3">
            <p className="max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
              {t('lead')}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild variant="pink" size="lg">
                <Link href="/about">{t('discover')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">{t('partner')}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#181818] px-5 pt-8 shadow-[0_2rem_5rem_rgba(20,20,20,.16)] sm:px-10 sm:pt-10 md:mt-16 md:px-16 md:pt-14">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(255,44,98,.32),transparent_34%)]" />
          <Image
            src="/images/Frame313.png"
            alt="IntelliBra AI screening dashboard showing a patient diagnosis summary"
            width={685}
            height={344}
            priority
            sizes="(min-width: 1280px) 1100px, calc(100vw - 4rem)"
            className="relative mx-auto w-full max-w-5xl rounded-t-2xl shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
