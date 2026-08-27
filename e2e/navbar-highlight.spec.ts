import { expect, test } from '@playwright/test';
import type { Locator, Page } from '@playwright/test';

import { Sections } from '@shared/types/section.types';

const navLink = (page: Page, name: string): Locator =>
  page.getByRole('navigation').getByRole('link', { name, exact: true });

/**
 * `behavior: 'instant'` is the load-bearing part: `<main>` carries
 * `scroll-smooth`, so without it the assertions race the animation.
 * `scrollIntoView` walks to the nearest scrollable ancestor itself, so this
 * needs no knowledge of which element actually scrolls.
 */
const scrollToSection = async (
  page: Page,
  section: Sections,
): Promise<void> => {
  await page.evaluate((sectionId) => {
    const target = document.getElementById(sectionId);

    if (!target) throw new Error(`No #${sectionId} section`);

    target.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, section);
};

test.describe('navbar highlight', () => {
  test('follows the section currently in view', async ({ page }) => {
    await page.goto('/');

    const me = navLink(page, 'Me');
    const technologies = navLink(page, 'Technologies');

    /* The first section is in view on load, so it owns the highlight. */
    await expect(me).toHaveAttribute('aria-current', 'page');
    await expect(technologies).not.toHaveAttribute('aria-current', 'page');

    await scrollToSection(page, Sections.Technologies);

    /* The highlight moved with the scroll, and left the old link behind. */
    await expect(technologies).toHaveAttribute('aria-current', 'page');
    await expect(me).not.toHaveAttribute('aria-current', 'page');
  });
});
