import { test, expect } from '@playwright/test';

test('Dropdown test', async ({ page }) => {
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');

  const simpleDropdown = page.locator('select').first();
  await simpleDropdown.selectOption({ label: 'Option 2' });

  await expect(simpleDropdown).toHaveValue('option2');
  console.log('Simple dropdown selected: Option 2');
});