'use client';

import { motion } from 'framer-motion';
import { Link } from '../../../i18n/navigation';
import { Button } from '../../../components/ui/button';
import { CTASection } from '../../../components/homepage-sections';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Check, Stethoscope, ShieldCheck, UserCheck } from 'lucide-react';

const privacyIcons = [Stethoscope, ShieldCheck, UserCheck];

export default function AboutPage() {
  const t = useTranslations('about');
  const privacySteps = t.raw('privacy.steps') as { tag: string; title: string; text: string }[];
  const tabletFeatures = t.raw('tabletApp.features') as string[];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white pt-36 pb-20 md:pt-44 md:pb-28">
        {/* Signature backdrop: soft glow + a scatter of the brand hexagon, echoing the logo mark */}
        <div aria-hidden className="absolute -z-10 top-[-10%] right-[-8%] w-[34rem] h-[34rem] rounded-full bg-primary/[.09] blur-3xl" />
        <div aria-hidden className="absolute -z-10 bottom-[-15%] left-[-10%] w-[26rem] h-[26rem] rounded-full bg-primary/[.07] blur-3xl" />
        <svg aria-hidden className="pointer-events-none absolute -z-10 -top-16 right-[6%] h-72 w-72 text-primary/[.06]" viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="currentColor" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute -z-10 top-40 left-[2%] h-40 w-40 -rotate-12 text-primary/[.08]" viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <svg aria-hidden className="pointer-events-none absolute -z-10 bottom-0 right-[18%] h-24 w-24 rotate-6 text-primary/[.1]" viewBox="0 0 100 100">
          <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {t('hero.eyebrow')}
          </motion.span>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl text-gray-900 font-medium leading-tight mb-6"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('hero.headline')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('hero.lead')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact">
              <Button variant="pink" size="xl">
                {t('hero.cta')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('device.title1')}
                <br /> {t('device.title2')}
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {t('device.body')}
              </motion.p>
            </div>

            {/* Right visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src="/images/about/rightImageSIde.svg"
                alt="Dual-Tech device overview"
                width={900}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50 overflow-hidden">
        <div aria-hidden className="absolute top-1/2 -left-24 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/[.08] blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-3xl">
                <div aria-hidden className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
                <Image
                  src="/images/about/tablet_about.svg"
                  alt="IntelliBra Tablet App"
                  width={1100}
                  height={800}
                  className="relative w-full h-auto rounded-2xl shadow-xl ring-1 ring-black/5"
                />
              </div>
            </motion.div>

            {/* Right Copy */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {t('tabletApp.eyebrow')}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-medium leading-tight mb-4 text-gray-900">
                {t('tabletApp.title')}
              </h3>
              <p className="text-gray-600 mb-6 max-w-xl text-lg">
                {t('tabletApp.lead')}
              </p>
              <ul className="space-y-3">
                {tabletFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="text-sm font-semibold uppercase tracking-wider text-primary mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('ai.eyebrow')}
              </motion.div>
              <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {t('ai.title1')}
                <br /> {t('ai.title2')}
              </motion.h3>
              <motion.p
                className="text-white/80 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {t('ai.body')}
              </motion.p>
            </div>
            <div className="relative min-h-[24rem] md:min-h-[28rem]">
              <motion.div
                className="absolute top-0 right-0"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/about/person1.png"
                  alt="Community member"
                  width={420}
                  height={280}
                  className="w-[220px] md:w-[260px] h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute top-28 left-0 md:top-32"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/about/person2.png"
                  alt="Clinician"
                  width={420}
                  height={280}
                  className="w-[260px] md:w-[300px] h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-4 md:right-10"
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/about/person3.png"
                  alt="Market women"
                  width={420}
                  height={280}
                  className="w-[220px] md:w-[260px] h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-16 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              {t('privacy.title')}
            </h3>
            <p className="text-gray-600">
              {t('privacy.lead')}
            </p>
          </div>

          {/* Separate connector segments stop at the edge of the center node. */}
          <div aria-hidden className="absolute left-[calc(16.666%+2.5rem)] right-[calc(50%+2.5rem)] top-[13.5rem] hidden h-px bg-primary/20 md:block" />
          <div aria-hidden className="absolute left-[calc(50%+2.5rem)] right-[calc(16.666%+2.5rem)] top-[13.5rem] hidden h-px bg-primary/20 md:block" />

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {privacySteps.map((step, index) => {
              const Icon = privacyIcons[index]!;
              return (
                <motion.div
                  key={step.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                    <span className="absolute inset-0 rounded-full border border-primary/30" />
                    <span className="absolute inset-2 rounded-full bg-primary/10" />
                    <Icon className="relative h-6 w-6 text-primary" />
                  </div>
                  <p className="mb-3 font-mono text-[.65rem] tracking-[.25em] text-primary">
                    {step.tag}
                  </p>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="mx-auto max-w-xs text-sm leading-relaxed text-gray-500">
                    {step.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
