'use client';

import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import {
  AppSection,
  MissionSection,
  JourneySection,
  // PartnersSection,
  CTASection,
} from '../components/homepage-sections';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <div className="absolute bottom-[4%] left-[0%] w-full h-full">
        <Image
          src="/images/hero_bg.png"
          alt="IntelliBra"
          width={2000}
          height={2000}
        />
      </div>
      <section
        className="pt-2 md:pt-30 bg-white overflow-hidden bg-cover bg-center"
        // style={{
        //   backgroundImage: 'url(/images/hero_bg.png)',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        // }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-[#FF2C62] to-[#C32BFF] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#C32BFF] to-[#FF2C62] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 mb-4 md:mb-6 leading-tight font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionizing Breast <br />
              Cancer Detection in Africa
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-600 mb-6 md:mb-8 max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Breast cancer is the most common cancer among women in Sub-Saharan
              Africa, yet most cases are diagnosed too late.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button variant="pink" size="xl" className="group">
                Discover IntelliBra
                {/* <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="border-primary text-primary hover:bg-white"
              >
                Become a Partner
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Silent Crisis Section */}
      <section className="py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <motion.div
            className="relative mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="relative h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: 'url(/images/medecin.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'multiply',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-start justify-start">
                  <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      The Silent Crisis Facing Millions
                    </h2>
                    <p className="text-xl text-white max-w-4xl">
                      Breast cancer is the most common cancer among women in
                      Sub-Saharan Africa, yet for many, it&apos;s detected far too
                      late. Rural clinics lack the tools. Trained specialists
                      are few. And treatment often comes too late.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Card 1 - Solid pink with white text */}
            <div className="relative rounded-2xl">
              <div className="relative bg-[#FF2C62] rounded-2xl p-8 text-left border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6">
                  <Image
                    src="/icons/User Group.png"
                    alt="Heart"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-4xl font-extrabold text-white mb-2">
                    1 in 8
                  </p>
                  <p className="text-white/90 font-medium">
                    women will develop breast cancer during their lifetime.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl">
              <div className="relative bg-white rounded-2xl p-8 text-left border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-[#FF2C62] text-[#FF2C62] flex items-center justify-center mb-6">
                  <Image
                    src="/icons/Hospital.png"
                    alt="Hospital"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#FF2C62] mb-2">
                    {'<25%'}
                  </p>
                  <p className="text-gray-900 ">
                    of clinics in Sub-Saharan Africa offer breast cancer
                    screening.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl">
              <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
              <div className="relative bg-white rounded-2xl p-8 text-left border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-[#FF2C62] text-[#FF2C62] flex items-center justify-center mb-6">
                  <Image
                    src="/icons/Clock.png"
                    alt="Clock"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#FF2C62] mb-2">
                    60%
                  </p>
                  <p className="text-gray-900 ">
                    of breast cancer cases are diagnosed too late.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative rounded-2xl">
              <div className="relative bg-white rounded-2xl p-8 text-left border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-[#FF2C62] text-[#FF2C62] flex items-center justify-center mb-6">
                  <Image
                    src="/icons/Pay.png"
                    alt="Pay"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-[#FF2C62] mb-2">
                    80%
                  </p>
                  <p className="text-gray-900 ">
                    of patients must pay out-of-pocket for treatment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introducing IntelliBra Section */}
      <section className=" bg-gray-900 text-white relative py-20 overflow-hidden mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center  ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="z-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing{' '}
                <span className="bg-gradient-to-r from-[#FF2C62] to-[#C32BFF] bg-clip-text text-transparent">
                  IntelliBra
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                IntelliBra is a portable, AI-assisted breast cancer screening
                system built for frontline clinics. With device-based imaging,
                offline functionality, and intelligent diagnostics, it brings
                affordable and accessible screening to underserved communities.
              </p>
              <Button variant="pink" size="lg">
                Learn More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute right-[50%] bottom-0 -z-0"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/light.svg"
                  alt="IntelliBra"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute left-[60%]"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/introducing.svg"
                  alt="IntelliBra"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <JourneySection />
      <MissionSection />
      {/* <ProductSection /> */}
      <AppSection />
      {/* <PartnersSection /> */}
      <CTASection />
    </div>
  );
}
