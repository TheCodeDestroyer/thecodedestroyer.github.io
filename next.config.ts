import type { NextConfig } from 'next';

/**
 * Content Security Policy.
 *
 * Shipped as `Content-Security-Policy-Report-Only` — it is NOT enforcing yet.
 * A CSP cannot be verified from source alone, and there is no `report-to`
 * endpoint here, so "report-only" means a manual DevTools pass on a deployed
 * Vercel preview, not a collected report stream. Confirm all five before
 * renaming the header to `Content-Security-Policy`:
 *   1. No violations on first paint or while scrolling/animating (motion).
 *   2. Vercel Analytics fires: `/_vercel/insights/script.js` loads and
 *      `/_vercel/insights/view` + `/_vercel/insights/event` beacons succeed.
 *   3. Speed Insights fires: `/_vercel/speed-insights/script.js` loads and
 *      `/_vercel/speed-insights/vitals` beacons succeed.
 *   4. `next/image` responses from `/_next/image` render (avif/webp).
 *   5. The `application/ld+json` block still parses in Google's Rich Results Test.
 *
 * The two decisions worth keeping:
 *
 * - script-src `'unsafe-inline'` is deliberate, not an oversight. The prerendered
 *   HTML carries inline RSC flight-payload scripts that change every build, so
 *   hashes would rot immediately; nonces require middleware, which would turn
 *   this statically prerendered page into a dynamically rendered one. For a
 *   static portfolio that is a bad trade. Note CSP3 makes `'unsafe-inline'`
 *   inert as soon as any hash or nonce is present, so this is all-or-nothing.
 * - style-src `'unsafe-inline'` is required because motion writes `style="..."`
 *   attributes into the SSR markup. next/font needs nothing extra: it self-hosts
 *   woff2 and ships an external stylesheet rather than a `<style>` tag, so
 *   `'self'` covers both font-src and the stylesheet — do not add a font CDN.
 */
/** Dev/debug-only fallback host; production loads from same-origin `/_vercel/*`. */
const VERCEL_ANALYTICS_HOST = 'https://va.vercel-scripts.com';

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${VERCEL_ANALYTICS_HOST}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self' ${VERCEL_ANALYTICS_HOST}`,
  "manifest-src 'self'",
  "worker-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [70],
  },
  // Not `async`: the ESLint preset's `require-await` rejects an async
  // function with nothing to await.
  headers: () =>
    Promise.resolve([
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value: contentSecurityPolicy,
          },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Redundant with `frame-ancestors 'none'` for modern browsers, but
          // that directive is report-only for now, so this is the only
          // enforcing clickjacking defence until the CSP is flipped.
          { key: 'X-Frame-Options', value: 'DENY' },
          // 2 years. No `preload`: submitting the apex domain to the HSTS
          // preload list is baked into browser binaries and is slow and
          // painful to undo.
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains',
          },
        ],
      },
    ]),
};

export default nextConfig;
