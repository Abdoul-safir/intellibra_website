'use client';

import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { CTASection } from '../../components/homepage-sections';

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

const journeySteps = [
  {
    number: '1',
    title: 'Prototype',
    description: 'Initial concept and device development with focus on accessibility.',
    status: 'completed',
    year: '2021',
  },
  {
    number: '2',
    title: 'Clinical Trials',
    description: 'Rigorous testing in clinical settings to ensure accuracy and safety.',
    status: 'completed',
    year: '2022',
  },
  {
    number: '3',
    title: 'Pilot',
    description: 'Real-world testing in communities across Sub-Saharan Africa.',
    status: 'in-progress',
    year: '2023',
  },
  {
    number: '4',
    title: 'Market Launch',
    description: 'Full deployment of IntelliBra devices and mobile app ecosystem.',
    status: 'upcoming',
    year: '2024',
  },
];

const impactAreas = [
  {
    title: 'Early Detection Saves Lives',
    description: 'Our technology can detect breast cancer up to 2 years earlier than traditional methods, dramatically improving survival rates and treatment outcomes for patients.',
    image: '/api/placeholder/400/300',
    stats: { primary: '95%', secondary: 'Detection Rate' },
  },
  {
    title: 'Empowering Frontline Clinicians',
    description: 'We provide healthcare workers with intuitive tools and comprehensive training, enabling them to deliver world-class breast cancer screening in any setting.',
    image: '/api/placeholder/400/300',
    stats: { primary: '500+', secondary: 'Healthcare Workers Trained' },
  },
  {
    title: 'Designed for Real-World Impact',
    description: 'Our portable, battery-powered device works in any environment, from urban hospitals to remote rural clinics, ensuring no woman is left behind.',
    image: '/api/placeholder/400/300',
    stats: { primary: '50+', secondary: 'Clinics Deployed' },
  },
];

const appFeatures = [
  'Real patient data collection and management',
  'Step-by-step guidance for healthcare workers',
  'Instant results display in real-time',
  'Secure cloud sync and backup functionality',
  'Built-in training modules and support',
  'Comprehensive reporting for healthcare facilities',
];

const partners = [
  'WHO',
  'UNICEF',
  'Acta',
  'Nike',
  'X Foundation',
  'WHV',
  'OLEA',
  'COVA',
  'Gavi',
];

export default function Template() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Revolutionizing Breast Cancer{' '}
              <span className="bg-gradient-to-r from-[#FF2C62] to-[#C32BFF] bg-clip-text text-transparent">
                Detection in Africa
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
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
                Learn About Our Mission
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Silent Crisis Facing Millions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the scope of the problem helps us design better
              solutions.
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

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Introducing{' '}
                <span className="bg-gradient-to-r from-[#FF2C62] to-[#C32BFF] bg-clip-text text-transparent">
                  IntelliBra
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                IntelliBra is an innovative breast cancer screening solution
                designed specifically for Sub-Saharan Africa. Our portable
                device combines advanced technology with cultural sensitivity to
                make early detection accessible to all women.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-300">
                    AI trained on representative African patient data
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-300">
                    Portable design for remote healthcare settings
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-300">
                    Culturally appropriate and privacy-focused
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-300">
                    Comprehensive training and support ecosystem
                  </span>
                </div>
              </div>

              <Button variant="pink" size="lg">
                Explore Our Technology
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#FF2C62] to-[#C32BFF] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 text-gray-900">
                  <h3 className="font-bold text-lg mb-4">Our Impact So Far</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF2C62] mb-2">
                        10,000+
                      </div>
                      <div className="text-sm text-gray-600">
                        Women Screened
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#C32BFF] mb-2">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">
                        Healthcare Workers
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        50+
                      </div>
                      <div className="text-sm text-gray-600">
                        Clinics Deployed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        95%
                      </div>
                      <div className="text-sm text-gray-600">
                        Detection Accuracy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-gray-50" id="journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a bold idea to transforming healthcare across Africa - here's
              how we're making it happen.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 rounded-full"></div>

            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative">
                      <div
                        className={`absolute top-6 ${index % 2 === 0 ? '-right-4' : '-left-4'} w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                          step.status === 'completed'
                            ? 'bg-green-500'
                            : step.status === 'in-progress'
                              ? 'bg-[#FF2C62]'
                              : 'bg-gray-400'
                        }`}
                      >
                        {step.number}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        {step.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          step.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : step.status === 'in-progress'
                              ? 'bg-pink-100 text-[#FF2C62]'
                              : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {step.status === 'completed'
                          ? 'Completed'
                          : step.status === 'in-progress'
                            ? 'In Progress'
                            : 'Upcoming'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey: Transforming Lives, Saving Futures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how IntelliBra is making a real difference in communities
              across Sub-Saharan Africa.
            </p>
          </motion.div>

          <div className="space-y-20">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {area.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[#FF2C62]">
                        {area.stats.primary}
                      </div>
                      <div className="text-sm text-gray-600">
                        {area.stats.secondary}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center">
                    <span className="text-gray-500">Image Placeholder</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Health, In Your Hands
              </h2>
              <p className="text-xl mb-8 opacity-90">
                With our intuitive app, patients can easily navigate their
                screening journey, access results, and take control of their
                health like never before.
              </p>

              <div className="flex space-x-4 mb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#FF2C62]"
                >
                  <span>Download on App Store</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[#FF2C62]"
                >
                  <span>Get it on Google Play</span>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 text-gray-900">
                  <h3 className="font-bold text-lg mb-4">App Features</h3>
                  <div className="space-y-3">
                    {appFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
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
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTASection */}
      <CTASection />
    </div>
  );
}
