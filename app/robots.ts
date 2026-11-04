import type { MetadataRoute } from 'next';
import { BASE_PATH, SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    // On project Pages, publish these directives at the host root as well.
    rules: { userAgent: '*', allow: `${BASE_PATH}/` },
    sitemap: `${SITE_URL.replace(/\/+$/, '')}/sitemap.xml`,
  };
}
