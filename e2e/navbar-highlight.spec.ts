import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';

import { navSections } from '@shared/constants/section.constants';
import { Sections } from '@shared/types/section.types';
import type { Section } from '@shared/types/section.types';

/** Looks the link up by the label the navbar actually renders for that section. */
const navLink = (page: Page, id: Section): Locator => {
  const label = navSections.find((section) => section.id === id)?.label;

  if (!label) throw new Error(`#${id} is not a nav section`);

  return page
    .getByRole('navigation')
    .getByRole('link', { name: label, exact: true });
};

/**
 * `behavior: 'instant'` is the load-bearing part: `<main>` carries
 * `scroll-smooth`, so without it the assertions race the animation.
 * `scrollIntoView` walks to the nearest scrollable ancestor itself, so this
 * needs no knowledge of which element actually scrolls.
 */
const scrollToSection = async (page: Page, section: Section): Promise<void> => {
  await page.evaluate((sectionId) => {
    const target = document.getElementById(sectionId);

    if (!target) throw new Error(`No #${sectionId} section`);

    target.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, section);
};

test.describe('navbar highlight', () => {
  test('follows the section currently in view', async ({ page }) => {
    await page.goto('/');

    const me = navLink(page, Sections.Me);
    const technologies = navLink(page, Sections.Technologies);

    /* The first section is in view on load, so it owns the highlight. */
    await expect(me).toHaveAttribute('aria-current', 'page');
    await expect(technologies).not.toHaveAttribute('aria-current', 'page');

    await scrollToSection(page, Sections.Technologies);

    /* The highlight moved with the scroll, and left the old link behind. */
    await expect(technologies).toHaveAttribute('aria-current', 'page');
    await expect(me).not.toHaveAttribute('aria-current', 'page');
  });

  test('highlights exactly one link, and none for the sections it omits', async ({
    page,
  }) => {
    await page.goto('/');

    const highlighted = page
      .getByRole('navigation')
      .locator('a[aria-current="page"]');

    /* The sections the nav names, and by omission the ones it does not. */
    const inNav: readonly Section[] = navSections.map(({ id }) => id);

    /*
     * The old rule let all six sections write the highlight from their own
     * effect, so two in view at once meant whichever effect ran last won.
     * Walking every section and pinning the count is what rules that out; the
     * single hop above would pass under either rule.
     */
    for (const section of Object.values(Sections)) {
      await scrollToSection(page, section);

      await expect(highlighted).toHaveCount(inNav.includes(section) ? 1 : 0);
    }
  });

  /*
   * The probe band is a `rootMargin` in percentages. Engines resolve the
   * vertical ones against viewport height, but the spec's prose says width, and
   * a wide, short viewport is where the two readings part company: read as
   * width, the band would invert here and no link would ever light up.
   */
  test('survives a wide, short viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 480 });
    await page.goto('/');

    const technologies = navLink(page, Sections.Technologies);

    await expect(navLink(page, Sections.Me)).toHaveAttribute(
      'aria-current',
      'page',
    );

    await scrollToSection(page, Sections.Technologies);

    await expect(technologies).toHaveAttribute('aria-current', 'page');
  });
});
