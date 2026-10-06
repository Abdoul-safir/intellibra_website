import { ImageResponse } from 'next/og';
import { headers } from 'next/headers';
import { getNewsArticle, newsCategoryLabels } from '../../../../lib/news-content';
import { siteUrl } from '../../../../lib/site';
import { localize } from '../../../../lib/team-content';

export const alt = 'IntelliBra newsroom article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const articleImages: Record<string, string> = {
  'from-prototype-to-clinical-validation': '/images/medecin.png',
  'preparing-frontline-clinics-for-the-study': '/images/social/site-readiness.jpg',
  'why-offline-first-screening-matters': '/images/sante-girl.jpg',
  'clinicians-shape-the-next-prototype': '/images/about/person2.png',
  'building-with-transparency': '/images/about/person3.png',
};

interface ImageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export default async function OpenGraphImage({ params }: ImageProps) {
  const { locale, slug } = await params;
  const article = getNewsArticle(slug);
  const fr = locale === 'fr';
  const title = article
    ? localize(article.title, locale)
    : (fr ? 'Actualités IntelliBra' : 'IntelliBra newsroom');
  const category = article
    ? localize(newsCategoryLabels[article.category], locale)
    : (fr ? 'Actualités' : 'Newsroom');
  const visual = articleImages[slug] ?? '/images/social/site-readiness.jpg';
  const requestHeaders = await headers();
  const host = requestHeaders.get('host');
  const forwardedProtocol = requestHeaders.get('x-forwarded-proto');
  const protocol = forwardedProtocol ?? (host?.startsWith('127.0.0.1') || host?.startsWith('localhost') ? 'http' : 'https');
  const assetOrigin = host ? `${protocol}://${host}` : siteUrl;
  const visualUrl = new URL(visual, `${assetOrigin}/`).toString();
  const logoUrl = new URL('/logo/logo.png', `${assetOrigin}/`).toString();

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          background: '#10233f',
          color: 'white',
        }}
      >
        <img
          src={visualUrl}
          alt=""
          width="1200"
          height="630"
          style={{ position: 'absolute', left: 0, top: 0, width: '1200px', height: '630px', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '920px',
            height: '630px',
            display: 'flex',
            background: 'linear-gradient(90deg, rgba(8,22,42,.98) 0%, rgba(8,22,42,.94) 72%, rgba(8,22,42,0) 100%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '760px',
            padding: '56px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '216px',
              height: '60px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '30px',
              background: 'rgba(255,255,255,.96)',
            }}
          >
            <img src={logoUrl} alt="IntelliBra" width="172" height="48" style={{ objectFit: 'contain' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#ff4b79',
                fontSize: '18px',
                fontWeight: 700,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
              }}
            >
              {category}
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: '20px',
                fontFamily: 'Georgia, serif',
                fontSize: title.length > 54 ? '55px' : '64px',
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-.035em',
              }}
            >
              {title}
            </div>
            <div style={{ display: 'flex', marginTop: '24px', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,.72)', fontSize: '19px' }}>
              {fr ? 'Histoires du travail en cours' : 'Stories from the work in progress'}
              <span style={{ color: '#ff4b79' }}>•</span>
              intellibra.org
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
