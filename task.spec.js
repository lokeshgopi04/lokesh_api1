// @ts-check
import { chromium, test } from '@playwright/test';

test('Browser', async () => {
  test.setTimeout(90000);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: './video/' },
  });

  const page = await context.newPage();
  await page.goto('https://www.facebook.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const page2 = await context.newPage();
  await page.screenshot({
    path: 'screenshots/homepage.png',
  });

  await page2.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const page3 = await context.newPage();
  await page3.goto('https://www.instagram.com/accounts/login/?hl=en', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const context2 = await browser.newContext();
  const page4 = await context2.newPage();
  await page4.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await context2.close();
  await context.close();
  await browser.close();
});