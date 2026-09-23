import { test } from '@playwright/test';

test('Launch Flipkart', async ({ page }) => {
  test.setTimeout(90000);

  await page.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.goto('https://www.facebook.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await page.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  console.log(await page.title());
  console.log(await page.url());
  await page.goBack();
  console.log(await page.title());
  await page.goForward();
  await page.reload();
});
