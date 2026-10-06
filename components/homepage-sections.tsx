'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import Image from 'next/image';
import { StoreBadges } from './home/store-badges';
import { useTweaks } from '../lib/tweaks-context';
import { Link } from '../i18n/navigation';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function AppSection() {
  const t = useTranslations('home.app');
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t('body')}
            </p>

            <StoreBadges />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/mobile.png"
              alt="IntelliBra Pink Alert app on a phone"
              width={843}
              height={453}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  const t = useTranslations('home.mission');
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('lead')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            className="relative min-h-[18rem] overflow-hidden rounded-2xl bg-gray-900 p-8 text-white lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/25 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-semibold mb-4">
                {t('earlyDetectionTitle')}
              </h3>
              <p className="text-gray-300">
                {t('earlyDetectionBody')}
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div
            className="relative flex min-h-[20rem] items-end overflow-hidden rounded-2xl bg-gray-100 p-8 lg:col-span-2"
            style={{
              backgroundImage: "url('/images/groupfull.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-transparent" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-semibold text-gray-900">
                {t('realWorldTitle')}
              </h3>
              <p className="max-w-md text-lg text-gray-600">
                {t('realWorldBody')}
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:col-span-3">
            <div
              className="relative flex min-h-[12rem] items-center justify-end overflow-hidden rounded-2xl p-8 text-white"
              style={{
                backgroundImage: "url('/images/sante-girl.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/70" />
              <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 lg:w-[55%]">
                <h3 className="text-2xl font-semibold mb-3">
                  {t('cliniciansTitle')}
                </h3>
                <p className="leading-relaxed text-white/90">
                  {t('cliniciansBody')}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-primary p-8 text-white">
              <div className="font-heading text-5xl font-semibold md:text-6xl mb-2">{t('statValue')}</div>
              <div className="font-heading text-[1.875rem] font-medium leading-tight mb-2">{t('statLabel')}</div>
              <p className="max-w-sm text-white/90">
                {t('statBody')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  const t = useTranslations('home.journey');
  return (
    <section className="py-20 bg-white" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('lead')}
          </p>
        </motion.div>

        <JourneyTimeline />
        <JourneyCards />
      </div>
      <JourneyCarousel />
    </section>
  );
}

function JourneyTimeline() {
  const { tweaks } = useTweaks();
  const t = useTranslations('home.journey');
  const journeySteps = t.raw('steps') as { title: string; description: string; status: string }[];
  if (tweaks.journey !== 'timeline') return null;
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-8 md:gap-0">
        {journeySteps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center flex-1 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-lg md:text-xl mb-3 md:mb-4">
              {index + 1}
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-md max-w-xs md:max-w-48">
              {step.description}
            </p>
            {index < journeySteps.length - 1 && (
              <motion.div
                className="hidden md:block absolute top-7 md:top-8 left-full ml-2 md:ml-4 border-t-4 border-dashed border-primary/40"
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: '4rem', opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.2,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function JourneyCards() {
  const { tweaks } = useTweaks();
  const t = useTranslations('home.journey');
  const journeySteps = t.raw('steps') as { title: string; description: string; status: string }[];
  if (tweaks.journey !== 'cards') return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {journeySteps.map((step, index) => {
        const isDone = step.status === 'completed';
        const isActive = step.status === 'in-progress';
        return (
          <motion.div
            key={index}
            className={`rounded-2xl p-6 border ${isActive ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-semibold uppercase tracking-wide ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                Step {index + 1}
              </span>
              {isDone && (
                <span className="text-[.65rem] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {t('done')}
                </span>
              )}
              {isActive && (
                <span className="text-[.65rem] font-medium text-white bg-primary px-2 py-0.5 rounded-full">
                  {t('inProgress')}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function JourneyCarousel() {
  const { tweaks } = useTweaks();
  const t = useTranslations('home.journey');
  const journeySteps = t.raw('steps') as { title: string; description: string; status: string }[];
  if (tweaks.journey !== 'carousel') return null;
  return (
    <div className="mt-2 max-w-7xl mx-auto pl-4 sm:pl-6 lg:pl-8">
      <div className="flex gap-5 overflow-x-auto pb-4 pr-4 sm:pr-6 lg:pr-8 snap-x snap-mandatory [scrollbar-width:thin]">
        {journeySteps.map((step, index) => {
          const isDone = step.status === 'completed';
          const isActive = step.status === 'in-progress';
          return (
            <motion.div
              key={index}
              className="group relative flex min-h-[15rem] w-[17rem] flex-shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 p-7 transition-colors hover:bg-white hover:shadow-lg sm:w-[19rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span
                className={`font-heading text-5xl font-medium leading-none transition-colors ${
                  isDone ? 'text-primary' : isActive ? 'text-gray-900' : 'text-gray-300'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />}
                </div>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function CTASection() {
  const t = useTranslations('home.cta');
  return (
    <section
      className="my-20 py-8 bg-gray-900 text-white relative container mx-auto rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url('/images/ready.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {t('title')}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('body')}
          </p>
          <Button asChild variant="pink" size="xl">
            <Link href="/contact">{t('button')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
