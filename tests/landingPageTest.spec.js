// @ts-check
import { test, expect } from '@playwright/test';

/*
 * LANDING PAGE TESTS
 * ------------------
 * Keep VS Code Live Server running at http://127.0.0.1:5501.
 * The baseURL is stored once in playwright.config.js, so tests only need paths.
 */

test.describe('Evergreen Outdoor Living website', () => {
  // Start each test from a fresh copy of the home page.
  test.beforeEach(async ({ page }) => {
    await page.goto('/index.html');
  });

  test('loads the home page with its main business message', async ({ page }) => {
    // The browser title supports usability, bookmarks, and search results.
    await expect(page).toHaveTitle(/Evergreen Outdoor Living/);

    // There should be one visible main heading that explains the offer.
    const mainHeading = page.getByRole('heading', {
      level: 1,
      name: 'Outdoor spaces designed for the way you live.',
    });

    await expect(mainHeading).toBeVisible();

    // This is the primary conversion action visitors should see immediately.
    await expect(
      page.getByRole('link', { name: 'Request a Free Estimate' })
    ).toHaveAttribute('href', 'contact.html');
  });

  test('opens the Services page from the main navigation', async ({ page }) => {
    // Use accessible roles/text instead of CSS selectors whenever possible.
    await page.getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Services' })
      .click();

    await expect(page).toHaveURL(/\/services\.html$/);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Complete care for your outdoor space',
      })
    ).toBeVisible();
  });

  test('opens and closes the navigation menu on mobile', async ({ page }) => {
    // 390px represents a common modern phone width.
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();

    const menuButton = page.getByRole('button', { name: 'Menu' });
    const navigationMenu = page.locator('#navigation-menu');

    // Mobile navigation begins closed.
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(navigationMenu).toBeHidden();

    // Clicking opens the menu and updates the accessibility state.
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(navigationMenu).toBeVisible();

    // Escape should close the menu and return focus to its button.
    await page.keyboard.press('Escape');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    await expect(navigationMenu).toBeHidden();
    await expect(menuButton).toBeFocused();
  });
});
