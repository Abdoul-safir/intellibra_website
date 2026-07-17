'use client';

import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { CTASection } from '../../components/homepage-sections';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="relative pt-20 md:pt-24 pb-0 mb-0 bg-[#0f0f10] text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/about/hero-bg-circle.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: 'contain',
        }}
      >
        {/* Decorative BG */}
        <div className="absolute -right-32 top-16 w-96 h-96 bg-gradient-to-br from-primary to-[#C32BFF] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -left-32 -bottom-24 w-[28rem] h-[28rem] bg-gradient-to-br from-[#C32BFF] to-primary rounded-full opacity-10 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 items-center justify-center">
            {/* Copy */}
            <div className="text-center">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                From Scan to Diagnosis,Instantly
                <br /> and Ethically
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                The combination of smart hardware, a guided tablet app and AI
                trained on Cameroonian patient data.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="pink" size="xl">
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Visual */}
            <div className="relative mx-auto lg:mx-0">
              <div className="relative ">
                <div className="relative w-full">
                  <Image
                    src="/images/about/dashboard_hero.svg"
                    alt="IntelliBra Tablet"
                    width={1000}
                    height={1000}
                    className="w-full max-h-[55vh] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                A Portable, Dual-Tech
                <br /> Screening Device
              </motion.h2>
              <motion.p
                className="text-gray-600 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                The IntelliBra device combines ultrasound and thermography to
                capture breast tissue data without radiation, pain, or invasive
                procedures. Designed for frontline use, it’s handheld,
                lightweight, battery-powered, and functional in both hospital
                and outreach settings.
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
                className="w-full h-auto rounded-xl "
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section
        className="relative py-20 bg-[#0f0f10] text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/about/bg_tablet.svg')",
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '0px ',
          backgroundSize: 'cover',
        }}
      >
        <div className="relative z-10  mx-auto px-4 sm:px-6 lg:px-8">
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
                <Image
                  src="/images/about/tablet_about.svg"
                  alt="IntelliBra Tablet App"
                  width={1100}
                  height={800}
                  className="w-full h-auto rounded-2xl shadow-2xl"
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
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  Private Clinics & Hospitals
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-medium leading-tight mb-4">
                Tablet App That Guides and Records
              </h3>
              <p className="text-white/80 mb-6 max-w-xl text-lg">
                The IntelliBra tablet interface walks clinicians through
                screening step-by-step.
              </p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>Input patient data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>View scan results in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>Get AI-based diagnostic assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>Store and sync records securely (even offline)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span>
                    Designed with feedback from nurses and doctors in
                    Sub‑Saharan Africa
                  </span>
                </li>
              </ul>
              <p className="text-white/80 mb-6 max-w-xl mt-4 text-lg">
                It’s simple, intuitive, and designed with feedback from nurses
                and doctors in Sub-Saharan Africa.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section
        className="relative py-20 bg-[#0f0f10] text-white overflow-hidden"
        style={{
          backgroundImage: "url('/images/about/brain.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '65% top',
          backgroundSize: '600px auto',
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                AI Built for Sub‑Saharan African Women
              </motion.div>
              <motion.h3
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI Built for Sub‑Saharan
                <br /> African Women
              </motion.h3>
              <motion.p
                className="text-white/80 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                IntelliBra’s diagnostic engine uses a deep‑learning model
                trained on real patient data from Sub‑Saharan Africa ensuring
                culturally and clinically relevant accuracy. The AI provides
                immediate classification during the scan and improves over time
                through ethical data feedback.
              </motion.p>
            </div>
            <div className="relative min-h-[620px] md:min-h-[1000px] lg:min-h-[800px]">
              <motion.div
                className="absolute top-2 right-0 md:right-0 lg:right-0"
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
                  className="w-[280px] md:w-[340px] lg:w-[360px] h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute top-40 left-0 md:left-6 lg:left-10"
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
                  className="w-[340px] md:w-[420px] lg:w-[460px] h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-0 md:right-2 lg:right-8"
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
                  className="w-[300px] md:w-[360px] lg:w-[380px] h-auto rounded-2xl shadow-2xl ring-1 ring-white/10 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-12">
            <h3 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">
              Privacy‑Protected, Ethically Trained AI
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              All IntelliBra data is anonymized, encrypted, and never used
              without consent. Our data pipeline supports continuous AI training
              while maintaining full compliance with patient privacy standards.
              We work with medical ethics boards to ensure every scan
              contributes to improved diagnostics — responsibly.
            </p>
          </div>

          <div className="">
            <div className="absolute left-0 right-0 top-[70%] -translate-y-1/2 h-8 bg-gradient-to-r from-primary via-[#C32BFF] to-[#C32BFF] opacity-90"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 text-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Image
                          src="/icons/Stethoscope.png"
                          alt="Frontline"
                          width={28}
                          height={28}
                        />
                      </div>
                      Frontline Screening Begins Here
                    </h4>
                    <p className="text-gray-600 text-md mt-2">
                      A trained clinician performs the screening using
                      IntelliBra. Both ultrasound and thermography data are
                      captured directly on the tablet alongside basic patient
                      details. This is the only stage where patient identifiers
                      exist.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 text-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Image
                          src="/icons/SecurityShield.png"
                          alt="Protected"
                          width={28}
                          height={28}
                        />
                      </div>
                      Protected, Even Offline
                    </h4>
                    <p className="text-gray-600 text-md mt-2">
                      Scan data is encrypted and saved securely on the device.
                      Access requires authentication, and no external connection
                      is needed. Devices operate offline and sync securely when
                      internet access is available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2 text-xl">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                        <Image
                          src="/icons/Bot.png"
                          alt="Consent"
                          width={28}
                          height={28}
                        />
                      </div>
                      Only With Your Consent
                    </h4>
                    <p className="text-gray-600 text-md mt-2">
                      If the patient consents, de‑identified scan data (no
                      names, no IDs) may be used to improve IntelliBra’s
                      diagnostic engine. Our AI learns and gets smarter —
                      without compromising privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
