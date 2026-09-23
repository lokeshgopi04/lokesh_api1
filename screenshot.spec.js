import { test } from '@playwright/test';

test('launch Facebook', async ({ page }) => {
    test.setTimeout(90000);

    await page.goto('https://www.facebook.com/', {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
    });

    await page.screenshot({ path: './facebook.png' });
});