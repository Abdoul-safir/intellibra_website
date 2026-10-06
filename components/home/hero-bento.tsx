'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';

export function HeroBento() {
  const t = useTranslations('home.heroBento');
  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Headline tile */}
          <div className="md:col-span-2 rounded-3xl bg-gray-50 p-8 md:p-10 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4 leading-[1.12] font-medium">
              {t('headline1')}{' '}
              <span className="text-primary">{t('headline2')}</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl">
              {t('lead')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="pink" size="lg">
                {t('discover')}
              </Button>
              <Button variant="outline" size="lg">
                {t('partner')}
              </Button>
            </div>
          </div>

          {/* Photo tile */}
          <div className="relative rounded-3xl overflow-hidden min-h-[16rem] md:min-h-0">
            <Image
              src="/images/medecin.png"
              alt="Clinician using IntelliBra to screen a patient"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
          </div>

          {/* Stat tile — pink */}
          <div className="rounded-3xl bg-primary p-7 flex flex-col justify-center text-white">
            <p className="text-4xl font-semibold mb-1">20</p>
            <p className="text-white/90 text-sm">{t('hospitalSites')}</p>
          </div>

          {/* Stat tile — dark */}
          <div className="rounded-3xl bg-gray-900 p-7 flex flex-col justify-center text-white">
            <p className="text-4xl font-semibold mb-1">10</p>
            <p className="text-white/70 text-sm">{t('regionsCovered')}</p>
          </div>

          {/* App preview tile */}
          <div className="relative rounded-3xl bg-gray-50 overflow-hidden flex items-end justify-center min-h-[14rem] md:min-h-0">
            <Image
              src="/images/mobile.png"
              alt="IntelliBra Pink Alert mobile app"
              width={843}
              height={453}
              className="w-full h-auto max-h-40 object-contain object-bottom mt-4"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
