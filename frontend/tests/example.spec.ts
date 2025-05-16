import { test, expect } from '@playwright/test';

test('landing page loads and renders main UI', async ({ page }) => {
  await page.goto('http://localhost:3007/');
  await expect(page.getByRole('heading', { name: /see your software at every level/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /watch product demo/i })).toBeVisible();
});