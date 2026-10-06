'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Activity, ShieldCheck, WifiOff } from 'lucide-react';
import { Link } from '../../i18n/navigation';
import { Button } from '../ui/button';

export function HeroClinical() {
  const t = useTranslations('home.heroSplit');

  const signals = [
    { icon: Activity, value: '20', label: t('hospitalSites') },
    { icon: ShieldCheck, value: '10', label: t('regionsCovered') },
    { icon: WifiOff, value: 'AI', label: t('offlineReady') },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#111522] pb-20 pt-36 text-white md:pb-28 md:pt-44">
      <div aria-hidden className="absolute -right-32 top-10 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h1 className="font-heading text-5xl font-medium leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-7xl">
              {t('headline1')} <span className="text-primary">{t('headline2')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl">
              {t('lead')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="pink" size="xl">
                <Link href="/about">{t('discover')}</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-gray-950">
                <Link href="/contact">{t('partner')}</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] p-3 shadow-[0_2rem_6rem_rgba(0,0,0,.32)] backdrop-blur">
              <Image
                src="/images/Frame313.png"
                alt="IntelliBra AI screening dashboard showing a patient diagnosis summary"
                width={685}
                height={344}
                priority
                sizes="(min-width: 1024px) 620px, calc(100vw - 3rem)"
                className="w-full rounded-[1.35rem]"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[.04]">
              {signals.map(({ icon: Icon, value, label }, index) => (
                <div key={label} className={`px-4 py-4 ${index > 0 ? 'border-l border-white/10' : ''}`}>
                  <Icon className="mb-3 h-4 w-4 text-primary" />
                  <span className="block text-xl font-semibold text-white">{value}</span>
                  <span className="mt-0.5 block text-[.68rem] leading-tight text-white/45">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
