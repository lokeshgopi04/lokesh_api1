import {test} from '@playwright/test';
test('File Upload Test', async ({ page }) => {
  await page.goto('https://demoqa.com/upload-download');
  await page.locator('//input[@id="uploadFile"]').setInputFiles('C:/playwrightclass/screenshots/demoqa.png');
  await page.locator('#uploadFile').setInputFiles('C:/playwrightclass/screenshots/facebook.png');
  await page.waitForTimeout(2000);
  await page.locator('#uploadFile').setInputFiles([]);
  await page.waitForTimeout(4000);
})