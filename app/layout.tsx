import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import NextTopLoader from 'nextjs-toploader';
import { ScrollToTop } from '../components/scroll-to-top';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'IntelliBra - Revolutionizing Breast Cancer Detection in Africa',
  description:
    'Advanced breast cancer screening technology making early detection accessible and affordable for African women.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      <body className={`${outfit.className} antialiased`} suppressHydrationWarning>
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
        <Navigation />
        <main className="pt-16 relative">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
