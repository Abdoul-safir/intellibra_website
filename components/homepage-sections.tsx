'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Heart, Smartphone, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const stats = [
  {
    number: '1 in 8',
    label: 'women will develop breast cancer',
    color: 'text-[#FF2C62]',
  },
  {
    number: '<25%',
    label: 'of cases are detected early in Sub-Saharan Africa',
    color: 'text-[#C32BFF]',
  },
  {
    number: '60%',
    label: 'of breast cancer cases are diagnosed too late',
    color: 'text-blue-600',
  },
  {
    number: '80%',
    label: 'of patients have no access to early detection',
    color: 'text-orange-600',
  },
];

const features = [
  {
    icon: <Heart className="w-8 h-8 text-[#FF2C62]" />,
    title: 'Early Detection Saves Lives',
    description:
      'Our AI-powered screening detects abnormalities in the earliest stages, significantly improving treatment outcomes.',
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: 'Portable & Accessible',
    description:
      "Compact device design makes screening available in remote areas where traditional mammography isn't accessible.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: 'Privacy-Protected',
    description:
      'Advanced encryption and ethical AI training ensure your health data remains completely private and secure.',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: 'Instant Results',
    description:
      'Get immediate screening results with our real-time analysis, eliminating long wait times for peace of mind.',
  },
];

const journeySteps = [
  {
    number: '1',
    title: 'Prototype',
    description:
      'Initial concept and device development with focus on accessibility.',
    status: 'completed',
  },
  {
    number: '2',
    title: 'Clinical Trials',
    description:
      'Rigorous testing in clinical settings to ensure accuracy and safety.',
    status: 'completed',
  },
  {
    number: '3',
    title: 'Pilot',
    description: 'Real-world testing in communities across Sub-Saharan Africa.',
    status: 'in-progress',
  },
  {
    number: '4',
    title: 'Market Launch',
    description:
      'Full deployment of IntelliBra devices and mobile app ecosystem.',
    status: 'upcoming',
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Silent Crisis Facing Millions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Breast cancer is the most common cancer among women in Sub-Saharan
            Africa, yet most cases are diagnosed too late.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              variants={fadeInUp}
            >
              <div
                className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}
              >
                {stat.number}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Portable, Dual-Tech Screening Device
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              The IntelliBra device combines advanced thermal imaging and
              bioimpedance technology in a portable, easy-to-use format designed
              for real-world healthcare settings.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-lg mb-4">
                  Device Specifications
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Detection Method</span>
                    <span className="font-medium">Thermal + Bioimpedance</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scan Time</span>
                    <span className="font-medium">{'< 2 minutes'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Accuracy</span>
                    <span className="font-medium">95%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Power</span>
                    <span className="font-medium">Battery operated</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#FF2C62] rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-1">2min</div>
                  <div className="text-sm opacity-90">Scan Duration</div>
                </div>
                <div className="bg-[#C32BFF] rounded-xl p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-1">95%</div>
                  <div className="text-sm opacity-90">Accuracy Rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function AppSection() {
  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <div className="bg-gradient-to-r from-[#FF2C62] to-[#C32BFF] text-white px-4 py-2 rounded-full inline-block mb-4">
              For Patients
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Health, In Your Hands
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              With the IntelliBra Pink Alert app, patients can easily register,
              receive screening results, and manage follow-up care—all from
              their phone. It's secure, bilingual (English & French), and
              designed for ease of use, even with limited internet.
            </p>

            <div className="flex gap-4 mb-8">
              <Link href="https://play.google.com/store/apps/details?id=com.intellibra.app">
                <Image
                  src="/images/playstore.png"
                  alt="Google Play"
                  width={200}
                  height={200}
                />
              </Link>
              <Link href="https://apps.apple.com/us/app/intellibra-pink-alert/id6746444080">
                <Image
                  src="/images/appstore.png"
                  alt="App Store"
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <div className="md:absolute md:-translate-y-[40%] md:right-0 relative w-full h-full">
              <Image
                src="/images/mobile.png"
                alt="IntelliBra"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey: Transforming Lives, Saving Futures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IntelliBra empowers early breast cancer detection in even the most
            underserved communities by putting AI-assisted diagnostics in the
            hands of frontline clinicians.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Left Card */}
          <motion.div
            className="bg-gray-900 text-white rounded-2xl p-8 relative  lg:col-span-2 min-h-[18rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Background (replace '/images/mission/top-left.jpg') */}
            <div
              className="absolute inset-0 bg-scroll bg-cover bg-right bg-no-repeat"
              style={{
                backgroundImage: "url('/images/Group35.svg')",
              }}
            ></div>
            <div className="absolute bottom-0 right-0 w-[80%] h-[80%]">
              <Image
                src="/images/light.svg"
                alt="IntelliBra"
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF2C62] to-[#C32BFF] rounded-full opacity-20 blur-2xl"></div> */}
            <div className="relative z-10 max-w-md">
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Early Detection Saves Lives
              </h3>
              <p className="text-gray-300 mb-6 relative z-10">
                By identifying breast cancer at its earliest stages, IntelliBra
                dramatically improves treatment outcomes and long-term survival
                chances for women.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-[80%] h-[80%]">
              <Image
                src="/images/jouneyTransformed.svg"
                alt="IntelliBra"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
          {/* Grid Container */}
        </div>
        <div className="w-full mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[40rem]">
            {/* Colonne de gauche - Device Image (40%) */}
            <div
              className="rounded-2xl p-8 flex items-end justify-center relative overflow-hidden lg:col-span-2 "
              style={{
                backgroundImage: "url('/images/groupfull.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                // backgroundBlendMode: 'multiply',
              }}
            >
              <div className="relative z-10">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Designed for Real-World Impact
                  </h2>
                  <p className="text-gray-600 text-lg max-w-md">
                    Every element of the IntelliBra device is purpose-built—
                    from its portable hardware and integrated AI core to its
                    seamless Bluetooth connectivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne de droite - Split en deux sections (60%) */}
            <div className="grid grid-rows-2 gap-6 lg:col-span-3">
              {/* Section du haut - Empowering Frontline Clinicians */}
              <div
                className="bg-gradient-to-r from-black to-transparent rounded-2xl p-8 text-white relative overflow-hidden flex items-center justify-end"
                style={{
                  backgroundImage: "url('/images/sante-girl.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  // backgroundBlendMode: 'multiply',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40  to-black/70 z-0"></div>
                <div className="relative z-10 w-full sm:w-3/4 md:w-2/3 lg:w-[45%]">
                  <h3 className="text-2xl md:text-2xl font-bold mb-4">
                    Empowering Frontline Clinicians
                  </h3>
                  <p className="text-white text-md leading-relaxed">
                    IntelliBra equips nurses and general practitioners with
                    intuitive, AI-assisted breast health screening tools to
                    reduce reliance on specialists, and enable confident
                    decision-making at the point of care.
                  </p>
                </div>
              </div>

              {/* Section du bas - 80% of screenings */}
              <div className="grid grid-cols-1 h-full">
                {/* Partie gauche - Statistique */}
                <div
                  className="bg-gray-800 rounded-2xl p-6 text-white relative "
                  style={{
                    backgroundImage: "url('/images/Frame313.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    // backgroundBlendMode: 'multiply',
                  }}
                >
                  <div className=" h-full flex flex-col justify-start">
                    <div className="text-5xl md:text-6xl font-bold mb-2">
                      80%
                    </div>
                    <div className="text-xl font-semibold mb-2">
                      of screenings
                    </div>
                    <p className="text-gray-300 text-md w-1/3">
                      conducted by nurses and general practitioners using
                      IntelliBra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section className="py-20 bg-white" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a bold idea to a real-world clinical tool, IntelliBra has gone
            through years of iterative development, field validation, and
            refinement — all rooted in the needs of frontline African
            healthcare.
          </p>
        </motion.div>

        {/* Horizontal Timeline */}
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
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FF2C62] flex items-center justify-center text-white font-bold text-lg md:text-xl mb-3 md:mb-4">
                  {step.number}
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-md max-w-xs md:max-w-48">
                  {step.description}
                </p>
                {index < journeySteps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-7 md:top-8 left-full ml-2 md:ml-4 border-t-4 border-dashed border-[#FF2C62]"
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

          {/* Connecting Lines */}
          {/* per-step dashed connectors are handled above; no full-width line needed */}
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            In Trusted Hands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're supported by leading organizations committed to advancing
            healthcare accessibility and women's health globally.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-semibold text-sm">
                  {partner}
                </span>
              </div>
            </motion.div>
          ))} */}
          <Image
            src="/images/partners.png"
            alt="Partners"
            width={1000}
            height={1000}
          />
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section
      className="mb-20 py-8 bg-[#151515] text-white relative container mx-auto rounded-2xl"
      style={{
        backgroundImage: "url('/images/ready.png')",
        backgroundSize: 'contain',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore the full IntelliBra ecosystem, see how it's changing lives,
            or contact us to become a deployment or research partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="pink" size="xl">
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
