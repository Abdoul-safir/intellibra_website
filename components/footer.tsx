import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const impactLinks = [
  { name: 'Recognition', href: '#' },
  { name: 'Partners & Investors', href: '#' },
];

const aboutLinks = [
  { name: 'About the Project', href: '#' },
  { name: 'How It Works', href: '#' },
  { name: 'Use Cases', href: '#' },
  { name: 'Clinical Trials', href: '#' },
];

const helpfulLinks = [
  { name: 'Privacy Policy', href: '#' },
  { name: 'Data Protection Policy', href: '#' },
  { name: 'Terms of Use', href: '#' },
  { name: 'Ethical Guidelines for Data Use', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-6">
          {/* Left: Logo + About Us */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo/logo-footer.svg"
                alt="IntelliBra"
                width={200}
                height={200}
              />
            </div>
            <div className="space-y-3 max-w-md">
              <h3 className="text-xl font-semibold">About Us</h3>
              <p className="text-gray-300">
                AI-powered breast cancer screening system enhancing early
                detection and care across Cameroon through smart devices and
                connected tools.
              </p>
            </div>
          </div>

          {/* Impact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-primary">Impact</h4>
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
            <h4 className="font-semibold text-lg mb-4 text-primary">About</h4>
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
              Helpful Links
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
            <h4 className="font-semibold text-lg mb-4 text-primary">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+237 655 555 555</span>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src="/icons/mail.svg"
                  alt="Mail"
                  width={20}
                  height={20}
                />
                <span className="text-gray-300">support@intellibra.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Powered by <span className="text-primary font-semibold">ANORA</span>
          </p>
          <p className="text-gray-400 text-sm">
            2025© company,Ltd All Right reservered
          </p>
        </div>
      </div>
    </footer>
  );
}
