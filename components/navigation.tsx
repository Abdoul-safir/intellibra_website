'use client';

import * as React from 'react';
import { Link } from '../i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from './ui/button';
import { LanguageSwitcher } from './language-switcher';
import { cn } from '../lib/utils';
import Image from 'next/image';

// Every page now opens with a white/light hero, so the nav can stay in its
// dark-on-white treatment at all times — no per-route light/dark switching.
export function Navigation() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  const navItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('trial'), href: '/trial' },
    { name: t('team'), href: '/team' },
    { name: t('news'), href: '/news' },
    { name: t('contact'), href: '/contact' },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex justify-center">
      <nav
        aria-label="Primary navigation"
        className={cn(
          'w-full max-w-6xl rounded-full border transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[420ms] ease-[cubic-bezier(.22,1,.36,1)]',
          isScrolled
            ? 'border-black/[.07] bg-white/95 shadow-[0_.625rem_2rem_rgba(28,17,21,.09)] backdrop-blur-xl'
            : 'border-transparent bg-white/80 shadow-none backdrop-blur-xl',
        )}
      >
        <div className="px-3 sm:px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 pl-1">
              <Image
                src="/logo/logo.svg"
                alt="IntelliBra"
                width={151}
                height={42}
                priority
                className="h-auto w-[140px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-800 transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Language switcher + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Button asChild variant="pink" size="lg">
                <Link href="/trial">{t('getStarted')}</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[4.5rem] left-0 right-0 md:hidden rounded-3xl border border-black/[.07] bg-white/97 shadow-[0_1.5rem_4rem_rgba(28,17,21,.16)] backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-gray-800 font-medium transition-colors hover:bg-primary/[.06] hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <LanguageSwitcher />
              </div>
              <Button asChild variant="pink" size="lg" className="w-full mt-2">
                <Link href="/trial" onClick={() => setIsOpen(false)}>
                  {t('getStarted')}
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
