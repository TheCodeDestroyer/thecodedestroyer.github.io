import { expect, test } from '@playwright/test';

import {
  featuredTechnologyOrder,
  technologies,
} from '@shared/constants/technology.constants';

/**
 * The three renderers over the technologies list used to disagree — the
 * JSON-LD named 5, the llms.txt skills section ~40 and the icon grid 12, with
 * Convex, Supabase, Claude Code and Docker missing from the JSON-LD entirely.
 * These assert the three now agree with the list, and so with each other.
 */
test.describe('profile consistency', () => {
  test('JSON-LD knowsAbout names every technology', async ({ page }) => {
    await page.goto('/');

    const raw = await page
      .locator('script[type="application/ld+json"]')
      .textContent();

    const knowsAbout = (JSON.parse(raw ?? '{}') as { knowsAbout?: string[] })
      .knowsAbout;

    for (const { name } of technologies) {
      expect(knowsAbout).toContain(name);
    }
  });

  test('the llms.txt skills section lists every technology', async ({
    request,
  }) => {
    const document = await (await request.get('/llms.txt')).text();

    for (const { name } of technologies) {
      expect(document).toContain(name);
    }
  });

  test('the icon grid draws every featured technology and nothing else', async ({
    page,
  }) => {
    await page.goto('/');

    /* Each technology icon renders as a link out to its own site. */
    await expect(page.locator('#technologies a')).toHaveCount(
      featuredTechnologyOrder.length,
    );
  });
});
