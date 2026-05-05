'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    submenu: [
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Our Journey', href: '/about#journey' },
      { name: 'Team', href: '/about#team' },
    ],
  },
  {
    name: 'Products',
    href: '/products',
    submenu: [
      { name: 'IntelliBra Device', href: '/products/intellibra' },
      { name: 'Mobile App', href: '/products/app' },
    ],
  },
  {
    name: 'Updates',
    href: '/updates',
    submenu: [
      { name: 'News', href: '/updates/news' },
      { name: 'Blog', href: '/updates/blog' },
    ],
  },
  { name: 'Clinical Trial', href: '/trial' },
  { name: 'Join Us', href: '/join' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(
    null,
  );
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled
          ? 'bg-white backdrop-blur-sm border-b border-gray-100'
          : 'bg-transparent',
      )}
    >
      <div className="container mx-auto px-4 sm:px-2 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo/logo.svg"
              alt="IntelliBra Logo"
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.submenu && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium',
                    item.submenu && 'cursor-pointer',
                  )}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-primary transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="pink" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-2">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block text-sm text-gray-600 hover:text-primary transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button variant="pink" size="lg" className="w-full">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
