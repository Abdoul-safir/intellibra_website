'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTweaks } from '../../lib/tweaks-context';
import { CrisisStats } from './crisis-stats';

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, margin: '-80px' },
};

function CrisisImage({ className }: { className?: string }) {
  return (
    <Image
      src="/images/medecin.png"
      alt="Clinicians caring for a patient"
      fill
      sizes="(min-width: 1280px) 1216px, (min-width: 1024px) 60vw, calc(100vw - 2rem)"
      className={className ?? 'object-cover object-[75%_center]'}
    />
  );
}

function CinematicStory({ title, body }: { title: string; body: string }) {
  return (
    <motion.div className="relative mb-12 overflow-hidden rounded-[1.75rem] md:mb-16" {...reveal}>
      <div className="relative h-[24rem] md:h-[28rem]">
        <CrisisImage />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-xl px-7 sm:px-10 md:px-14">
            <h2 className="mb-4 text-4xl font-semibold leading-[1.04] text-white md:text-5xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-white/90 md:text-xl">{body}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EditorialStory({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      className="mb-12 grid items-stretch gap-8 border-y border-gray-200 py-8 md:mb-16 md:grid-cols-12 md:gap-10 md:py-10 lg:gap-14"
      {...reveal}
    >
      <div className="flex flex-col justify-between md:col-span-5 md:py-5">
        <span aria-hidden className="mb-12 block h-1 w-16 bg-primary md:mb-16" />
        <div>
          <h2 className="text-5xl font-semibold leading-[0.98] text-gray-900 sm:text-6xl lg:text-7xl">
            {title}
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-gray-600">{body}</p>
        </div>
      </div>
      <div className="relative min-h-[25rem] overflow-hidden rounded-[1.75rem] md:col-span-7 md:min-h-[34rem]">
        <CrisisImage className="object-cover object-[68%_center]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/25 to-transparent" />
      </div>
    </motion.div>
  );
}

function EvidenceStory({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      className="relative mb-12 overflow-hidden rounded-[2rem] bg-[#101725] text-white md:mb-16"
      {...reveal}
    >
      <div className="grid min-h-[32rem] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative z-10 flex flex-col justify-end p-8 sm:p-10 lg:p-14">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">{body}</p>
          </div>
        </div>
        <div className="relative min-h-[24rem] overflow-hidden lg:min-h-full">
          <CrisisImage className="object-cover object-[68%_center]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#101725]/80 via-transparent to-transparent lg:block" />
          <div className="absolute inset-y-8 right-0 w-1 rounded-l-full bg-primary sm:inset-y-12" aria-hidden />
        </div>
      </div>
    </motion.div>
  );
}

function MosaicStory({ title, body }: { title: string; body: string }) {
  return (
    <motion.div className="mb-12 grid gap-5 md:mb-16 lg:grid-cols-12" {...reveal}>
      <div className="relative min-h-[27rem] overflow-hidden rounded-[2rem] lg:col-span-7 lg:min-h-[35rem]">
        <CrisisImage className="object-cover object-[70%_center]" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
        <div className="flex min-h-[15rem] flex-col justify-end rounded-[2rem] bg-primary p-8 text-white sm:min-h-[19rem] sm:p-10">
          <h2 className="text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-6xl">{title}</h2>
        </div>
        <div className="flex min-h-[15rem] items-end rounded-[2rem] border border-gray-200 bg-gray-50 p-8 sm:p-10">
          <p className="text-lg leading-relaxed text-gray-600">{body}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function CrisisSection() {
  const { tweaks } = useTweaks();
  const t = useTranslations('home.crisis');
  const copy = { title: t('title'), body: t('body') };

  return (
    <section
      className={`py-16 transition-colors duration-500 md:py-20 ${
        tweaks.crisis_layout === 'mosaic' ? 'bg-gray-50' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {tweaks.crisis_layout === 'editorial' ? <EditorialStory {...copy} /> : null}
        {tweaks.crisis_layout === 'evidence' ? <EvidenceStory {...copy} /> : null}
        {tweaks.crisis_layout === 'mosaic' ? <MosaicStory {...copy} /> : null}
        {tweaks.crisis_layout === 'cinematic' ? <CinematicStory {...copy} /> : null}
        <CrisisStats />
      </div>
    </section>
  );
}
