import {test, expect} from '@playwright/test';
test('demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.locator('#userName').fill('Lokesh G');
  await page.locator('#userEmail').fill('lokeshremon04@gmail.com');
  await page.locator('#currentAddress').fill('Chennai');
  await page.locator('#permanentAddress').fill('Chennai');
  await page.locator('#submit').click();
  await page.screenshot({ path: 'C:\\playwrightclass\\screenshots\\demoqa.png', fullPage: true });
});