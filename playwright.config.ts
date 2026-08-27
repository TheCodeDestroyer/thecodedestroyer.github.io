import { defineConfig, devices } from '@playwright/test';

/**
 * End-to-end suite. It always runs against the production build (`next start`),
 * never `next dev` — the section ids, the metadata routes and the prerendered
 * markup are all build-time output, so the dev server would be testing a
 * different artifact than the one that ships.
 */

const isCI = Boolean(process.env.CI);

/** Kept off 3000 so a stray `pnpm dev` is never mistaken for the build. */
const PORT = 3111;
const BASE_URL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 1 : 0,
  /* `html` in CI so the retry trace below is uploadable as an artifact. */
  reporter: isCI ? [['github'], ['html', { open: 'never' }]] : [['list']],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        /*
         * Load-bearing, not cosmetic. The desktop nav links are `lg:flex`, so
         * anything under 64rem hides the very elements navbar-highlight.spec.ts
         * asserts on — it would fail for the wrong reason.
         */
        viewport: { width: 1280, height: 800 },
        /*
         * Pinned so the run exercises the same branch production users get:
         * ENTRANCE_ANIMATION_QUERY in SectionWrapper.tsx
         * (`width >= 48rem` and `prefers-reduced-motion: no-preference`) and
         * its complement, the `static-entrance` variant in globals.css.
         * Chromium's headless default happens to match today; this stops that
         * from being an assumption. Note this belongs under `contextOptions`,
         * not top-level `use`: there it type-errors but is silently ignored at
         * runtime, so the test would quietly assert against the default.
         */
        contextOptions: { reducedMotion: 'no-preference' },
      },
    },
  ],
  webServer: {
    command: `pnpm start --port ${PORT}`,
    url: BASE_URL,
    /* In CI the build step already ran; locally, reuse a server if one is up. */
    reuseExistingServer: !isCI,
    timeout: 120_000,
  },
});
