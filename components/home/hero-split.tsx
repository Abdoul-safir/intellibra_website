'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { Link } from '../../i18n/navigation';

export function HeroSplit() {
  const t = useTranslations('home.heroSplit');
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="absolute -z-10 top-24 right-[-6rem] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-5 leading-[1.1] font-medium"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('headline1')}{' '}
              <span className="text-primary">{t('headline2')}</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {t('lead')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button asChild variant="pink" size="xl">
                <Link href="/about">{t('discover')}</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact">{t('partner')}</Link>
              </Button>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-6 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
            >
              <div>
                <span className="text-2xl font-semibold text-gray-900">20</span>
                <span className="ml-1.5">{t('hospitalSites')}</span>
              </div>
              <div className="h-6 w-px bg-gray-200" />
              <div>
                <span className="text-2xl font-semibold text-gray-900">10</span>
                <span className="ml-1.5">{t('regionsCovered')}</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-6 bg-primary/10 rounded-[2rem] blur-2xl" />
            <Image
              src="/images/Frame313.png"
              alt="IntelliBra AI screening dashboard showing a patient diagnosis summary"
              width={685}
              height={344}
              priority
              className="relative w-full h-auto rounded-2xl shadow-2xl ring-1 ring-black/5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
