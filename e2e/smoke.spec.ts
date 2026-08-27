import { expect, test } from '@playwright/test';

import { AUTHOR_NAME } from '@shared/constants/meta.constants';
import { Sections } from '@shared/types/section.types';

test.describe('home page', () => {
  test('renders and contains every section anchor', async ({ page }) => {
    const response = await page.goto('/');

    expect(response?.status()).toBe(200);

    await expect(
      page.getByRole('heading', { level: 1, name: AUTHOR_NAME }),
    ).toBeVisible();

    /*
     * Sourced from the enum rather than a hardcoded list, so a renamed or
     * dropped section breaks this test instead of silently breaking every
     * `/#section` deep link.
     */
    for (const section of Object.values(Sections)) {
      await expect(page.locator(`#${section}`)).toBeAttached();
    }

    await expect(page.locator('main section[id]')).toHaveCount(
      Object.values(Sections).length,
    );
  });
});
