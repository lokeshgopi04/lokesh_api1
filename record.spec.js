
const { test } = require('@playwright/test');

test('launch multiple sites with video recording', async ({ browser }) => {
  test.setTimeout(90000);

  const context = await browser.newContext({
    recordVideo: { dir: './videos/' },
  });

  const page = await context.newPage();
  await page.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const page1 = await context.newPage();
  await page1.goto('https://www.facebook.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const page2 = await context.newPage();
  await page2.goto('https://www.amazon.in/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  await context.close();
});
