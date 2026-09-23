import { test } from '@playwright/test';

test('Frames handling', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame');

  const frame1 = page.frameLocator('//iframe[@name="globalSqa"]');

  await frame1.locator('//img[@alt="JMeter Training"]').click();
  await frame1.locator('img[alt="Mobile Application Testing Training"]').click();
  await page.locator('(//span[normalize-space()="Sortable"])[1]').click();
});