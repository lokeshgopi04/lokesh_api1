import { test, expect } from '@playwright/test';

test('Select multiple options from dropdown', async ({ page }) => {
  await page.goto('https://www.testautomationcentral.com/demo/dropdown.html');

  const multiSelect = page.locator('select[multiple]').first();

  await multiSelect.evaluate((select) => {
    const values = ['option1', 'option2', 'option3'];
    Array.from(select.options).forEach((option) => {
      option.selected = values.includes(option.value);
    });
    select.dispatchEvent(new Event('change', { bubbles: true }));
  });

  await expect(multiSelect).toHaveValues(['option1', 'option2', 'option3']);
  const values = await multiSelect.evaluate((select) =>
    Array.from(select.selectedOptions).map((o) => o.value)
  );
  console.log('Selected values:', values);
});