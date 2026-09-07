/* The web app manifest spec mandates snake_case keys. */
/* eslint-disable camelcase */
import type { MetadataRoute } from 'next';

import {
  AUTHOR_HEADLINE,
  META_DESCRIPTION,
  SITE_NAME,
  THEME_COLOR,
} from '@shared/constants/meta.constants';

const manifest = (): MetadataRoute.Manifest => ({
  name: AUTHOR_HEADLINE,
  short_name: SITE_NAME,
  description: META_DESCRIPTION,
  start_url: '/',
  display: 'standalone',
  background_color: THEME_COLOR,
  theme_color: THEME_COLOR,
  icons: [
    {
      src: '/icon-192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icon-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icon-maskable-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
});

export default manifest;
