'use client';

import { Link } from '../i18n/navigation';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  const impactLinks = [
    { name: t('impact.news'), href: '/news' },
    { name: t('impact.recognition'), href: '/news#recognition' },
    { name: t('impact.partners'), href: '/#partners' },
  ];

  const aboutLinks = [
    { name: t('aboutLinks.project'), href: '/about' },
    { name: t('aboutLinks.howItWorks'), href: '/#journey' },
    { name: t('aboutLinks.useCases'), href: '/about' },
    { name: t('aboutLinks.trials'), href: '/trial' },
    { name: t('aboutLinks.team'), href: '/team' },
  ];

  const helpfulLinks = [
    { name: t('helpful.privacy'), href: '/privacy' },
    { name: t('helpful.dataProtection'), href: '/data-protection' },
    { name: t('helpful.terms'), href: '/terms' },
    { name: t('helpful.ethics'), href: '/ethics' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-6">
          {/* Left: Logo + About Page */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo/logo-footer.svg"
                alt="IntelliBra"
                width={281}
                height={84}
                className="h-auto w-[200px]"
              />
            </div>
            <div className="space-y-3 max-w-md">
              <h3 className="text-xl font-semibold">{t('aboutTitle')}</h3>
              <p className="text-gray-300">{t('aboutBody')}</p>
            </div>
          </div>

          {/* Impact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">{t('impactTitle')}</h4>
            <ul className="space-y-3">
              {impactLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">{t('aboutLinksTitle')}</h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">
              {t('helpfulTitle')}
            </h4>
            <ul className="space-y-3">
              {helpfulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">{t('contactTitle')}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+237670629094" className="text-gray-300 transition-colors hover:text-primary">
                  +237 670 629 094
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/mail.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                />
                <a href="mailto:contact@anora.solutions" className="text-gray-300 transition-colors hover:text-primary">
                  contact@anora.solutions
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('poweredBy')} <span className="text-primary font-semibold">ANORA</span>
          </p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} IntelliBra. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
