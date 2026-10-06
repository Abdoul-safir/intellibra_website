import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { Navigation } from '../../components/navigation';
import { Footer } from '../../components/footer';
import NextTopLoader from 'nextjs-toploader';
import { ScrollToTop } from '../../components/scroll-to-top';
import { TweaksProvider } from '../../lib/tweaks-context';
import { absoluteUrl, siteDescription, siteName, siteUrl } from '../../lib/site';

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'IntelliBra - Revolutionizing Breast Cancer Detection in Africa',
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: 'IntelliBra', url: siteUrl }],
  creator: 'IntelliBra',
  publisher: 'IntelliBra',
  category: 'health technology',
  keywords: [
    'IntelliBra',
    'breast cancer screening',
    'early detection',
    'women’s health',
    'Cameroon',
    'Africa',
    'clinical research',
    'health technology',
  ],
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    siteName,
    title: 'IntelliBra · Earlier detection, closer to every woman',
    description: siteDescription,
    url: siteUrl,
    images: [{
      url: absoluteUrl('/images/contact-clinician.webp'),
      width: 1280,
      height: 720,
      alt: 'A clinician using IntelliBra-supported workflows in a care setting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelliBra · Earlier detection, closer to every woman',
    description: siteDescription,
    images: [absoluteUrl('/images/contact-clinician.webp')],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${dmSans.variable} ${fraunces.variable} ${dmSans.className} antialiased`} suppressHydrationWarning>
        <NextTopLoader
          color="#FF2C62"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FF2C62,0 0 5px #FF2C62"
        />
        <NextIntlClientProvider>
          <TweaksProvider>
            <Navigation />
            <main className="relative">{children}</main>
            <ScrollToTop />
            <Footer />
          </TweaksProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
