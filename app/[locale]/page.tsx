'use client';

import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import {
  AppSection,
  MissionSection,
  JourneySection,
  CTASection,
} from '../../components/homepage-sections';
import dynamic from 'next/dynamic';
import { CrisisSection } from '../../components/home/crisis-section';
import { PartnersStrip } from '../../components/home/partners';
import { useTweaks } from '../../lib/tweaks-context';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '../../i18n/navigation';

const heroLoading = () => <div className="min-h-[46rem] bg-white" aria-hidden />;

const HeroCentered = dynamic(
  () => import('../../components/home/hero-centered').then((module) => module.HeroCentered),
  { loading: heroLoading },
);
const HeroSplit = dynamic(
  () => import('../../components/home/hero-split').then((module) => module.HeroSplit),
  { loading: heroLoading },
);
const HeroBento = dynamic(
  () => import('../../components/home/hero-bento').then((module) => module.HeroBento),
  { loading: heroLoading },
);
const HeroEditorial = dynamic(
  () => import('../../components/home/hero-editorial').then((module) => module.HeroEditorial),
  { loading: heroLoading },
);
const HeroClinical = dynamic(
  () => import('../../components/home/hero-clinical').then((module) => module.HeroClinical),
  { loading: heroLoading },
);
const HeroStory = dynamic(
  () => import('../../components/home/hero-story').then((module) => module.HeroStory),
  { loading: heroLoading },
);

const heroComponents = {
  centered: HeroCentered,
  split: HeroSplit,
  bento: HeroBento,
  editorial: HeroEditorial,
  clinical: HeroClinical,
  story: HeroStory,
} as const;

export default function HomePage() {
  const { tweaks } = useTweaks();
  const Hero = heroComponents[tweaks.hero];
  const t = useTranslations('home');

  return (
    <div>
      <Hero />

      <CrisisSection />

      {/* Introducing IntelliBra Section */}
      <section className="bg-gray-900 text-white relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                {t('intro.titlePrefix')} <span className="text-primary">{t('intro.titleHighlight')}</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {t('intro.body')}
              </p>
              <Button asChild variant="pink" size="lg">
                <Link href="/about">{t('intro.learnMore')}</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-primary/15 rounded-full blur-3xl" />
              <Image
                src="/images/Frame313.png"
                alt="IntelliBra AI screening dashboard showing a patient diagnosis summary"
                width={685}
                height={344}
                priority
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <JourneySection />
      <MissionSection />
      <AppSection />
      <PartnersStrip />
      <CTASection />
    </div>
  );
}
