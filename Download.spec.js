import { test } from '@playwright/test';

test('Downloads File', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#downloadButton').click(),
  ]);

  await download.saveAs(`test-results/${download.suggestedFilename()}`);
});