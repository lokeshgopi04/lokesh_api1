import { test } from '@playwright/test';

test('Frames handling', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');

  const frame1 = page.frameLocator('[name="globalSqa"]');

  await frame1.locator('//img[contains(@data-src,"JMeter")]').click();
  await frame1.locator('//img[contains(@data-src,"Mobile")]').click();
  await page.locator('//span[text()="Sortable"]').click();
});