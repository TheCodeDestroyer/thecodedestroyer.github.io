import type { NextConfig } from 'next';

/**
 * Content Security Policy — enforcing.
 *
 * There is no `report-to` sink, on purpose: for a static portfolio a report
 * collector means a third-party service for very little signal. The cost is
 * that a violation only ever shows up in a visitor's DevTools console, so any
 * change to the policy below must be re-verified by hand on a deployed Vercel
 * preview (the `/_vercel/*` routes do not exist off-Vercel):
 *   1. No violations on first paint, while scrolling through every section,
 *      during the motion entrance animations, when hovering the halo cards
 *      (they write `--mouse-x`/`--mouse-y` inline at runtime) and when
 *      toggling the mobile nav.
 *   2. Vercel Analytics: `/_vercel/insights/script.js` loads and the
 *      `/_vercel/insights/view` beacon is accepted.
 *   3. Speed Insights: `/_vercel/speed-insights/script.js` loads and the
 *      `/_vercel/speed-insights/vitals` beacon is accepted.
 *   4. `/_next/image` renders for browsers negotiating avif and for webp.
 *   5. The `application/ld+json` block still parses (Rich Results Test).
 *   6. `manifest.webmanifest` and the icon routes load.
 *
 * `next dev` logs one console.error per load: React's development build
 * probes `eval()` for call-stack reconstruction and complains when the CSP
 * blocks it. Nothing else is affected — the page hydrates, HMR connects and
 * no request is blocked — and React never calls `eval()` in production. Do
 * not add `'unsafe-eval'` to silence that dev-only line.
 *
 * The two decisions worth keeping:
 *
 * - script-src `'unsafe-inline'` is deliberate, not an oversight. The prerendered
 *   HTML carries inline RSC flight-payload scripts that change every build, so
 *   hashes would rot immediately; nonces require middleware, which would turn
 *   this statically prerendered page into a dynamically rendered one. For a
 *   static portfolio that is a bad trade. Note CSP3 makes `'unsafe-inline'`
 *   inert as soon as any hash or nonce is present, so this is all-or-nothing.
 *   The policy's value is therefore object-src/frame-src `'none'`, base-uri and
 *   form-action `'self'`, frame-ancestors `'none'` and the same-origin default —
 *   not XSS mitigation.
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
  // Browsers ignore this in report-only mode, so it only started doing
  // anything once the header became enforcing. The site is HTTPS-only with
  // HSTS, so this is belt-and-braces for an `http://` asset URL that sneaks
  // into content: it gets upgraded instead of blocked as mixed content.
  'upgrade-insecure-requests',
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
          { key: 'Content-Security-Policy', value: contentSecurityPolicy },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Redundant with `frame-ancestors 'none'` in every browser that
          // understands CSP2 (2015+). Kept on purpose as zero-cost
          // belt-and-braces for anything older; drop it deliberately, not
          // as tidy-up.
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
