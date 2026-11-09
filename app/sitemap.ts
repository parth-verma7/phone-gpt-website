import type { MetadataRoute } from 'next';
import { canonicalUrl } from '../lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '/',
    '/features/',
    '/models/',
    '/get-started/',
    '/downloads/',
    '/faq/',
    '/privacy/',
    '/terms/',
    '/contact/',
    '/about/',
    '/changelog/',
  ].map((path) => ({ url: canonicalUrl(path) }));
}
