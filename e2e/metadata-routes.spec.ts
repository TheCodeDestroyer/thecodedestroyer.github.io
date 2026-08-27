import { expect, test } from '@playwright/test';

/**
 * The three machine-readable routes. They are prerendered at build time, so a
 * regression here is invisible in the UI and only shows up in a crawler log.
 */
const METADATA_ROUTES = [
  {
    path: '/llms.txt',
    contentType: /^text\/plain\b/u,
    contains: '# Nace Logar',
  },
  { path: '/robots.txt', contentType: /^text\/plain\b/u, contains: 'Sitemap:' },
  {
    path: '/sitemap.xml',
    contentType: /^application\/xml\b/u,
    contains: '<loc>',
  },
] as const;

test.describe('metadata routes', () => {
  for (const route of METADATA_ROUTES) {
    test(`${route.path} responds 200 with the expected content type`, async ({
      request,
    }) => {
      const response = await request.get(route.path);

      expect(response.status()).toBe(200);
      expect(response.headers()['content-type']).toMatch(route.contentType);
      /* Status and content type alone would still pass for an empty body: an
         empty sitemap generator still emits a well-formed `<urlset></urlset>`.
         Each `contains` is a per-entry marker, so it is absent when empty. */
      expect(await response.text()).toContain(route.contains);
    });
  }
});
