import type { MetadataRoute } from 'next';

import {
  CONTENT_LAST_MODIFIED,
  SITE_URL,
} from '@shared/constants/meta.constants';

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: SITE_URL,
    lastModified: CONTENT_LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 1,
  },
];

export default sitemap;
