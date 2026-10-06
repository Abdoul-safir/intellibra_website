'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

export function HeroCentered() {
  const t = useTranslations('home.heroCentered');
  return (
    <section className="relative isolate overflow-hidden bg-white pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Background pattern */}
      <div className="absolute inset-x-0 bottom-0 -z-10 w-full opacity-90">
        <Image
          src="/images/hero_bg.png"
          alt=""
          width={1440}
          height={659}
          priority
          className="w-full h-auto"
        />
      </div>
      <div className="absolute -z-10 top-16 right-[8%] w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-0 left-[4%] w-96 h-96 bg-primary/[.08] rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1
            className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-4 md:mb-6 leading-[1.08] font-medium"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('headline1')} <br />
            {t('headline2')}
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('lead')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button variant="pink" size="xl">
              {t('discover')}
            </Button>
            <Button variant="outline" size="xl">
              {t('partner')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
