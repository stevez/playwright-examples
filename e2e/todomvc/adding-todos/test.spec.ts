import { test, expect } from '@playwright/test';

test.describe('test', () => {
  test('new test', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.getByPlaceholder('What needs to be done?').fill('reading');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('learning');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByPlaceholder('What needs to be done?').fill('shopping');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByRole('listitem').filter({ hasText: 'reading' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    await page.getByRole('listitem').filter({ hasText: 'learning' }).getByRole('checkbox', { name: 'Toggle Todo' }).check();
    await page.getByText('reading').hover();
    await page.getByRole('button', { name: 'Delete' }).click();

  });
});