import type { Metadata } from 'next';
import { SITE_URL } from './site';

/** Paths are app-relative, without BASE_PATH (for example, /features/). */
export function canonicalUrl(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//') || /[?#\\]/.test(path)) {
    throw new Error('SEO paths must be app-relative paths without a query or fragment.');
  }
  const normalizedPath = path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
  // SITE_URL includes any deployment base path; do not add it again.
  return `${SITE_URL.replace(/\/+$/, '')}${normalizedPath}`;
}

/** Export this from a Server Component page; the root layout owns global metadata. */
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = canonicalUrl(path);
  const brandedTitle = /\bPhoneGPT\b/i.test(title) ? title : `${title} | PhoneGPT`;
  const image = `${SITE_URL.replace(/\/+$/, '')}/social-card.png`;

  return {
    // Absolute avoids repeating the brand through a parent title template.
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: url },
    keywords: ['PhoneGPT', 'on-device AI', 'Android AI chat'],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'PhoneGPT',
      title: brandedTitle,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: 'PhoneGPT — Your phone. Your models. Your space.' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: 'PhoneGPT — Your phone. Your models. Your space.' }],
    },
  };
}
