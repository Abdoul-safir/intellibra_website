export const siteName = 'IntelliBra';

export const siteDescription =
  'IntelliBra is advancing accessible, AI-assisted breast cancer screening for women across Africa.';

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://intellibra.org').replace(/\/$/, '');

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteUrl}/`).toString();
}

export function articleUrl(locale: string, slug: string) {
  return absoluteUrl(`/${locale}/news/${slug}`);
}
