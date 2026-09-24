import { test } from '@playwright/test';

test('File handling', async ({ page }) => {
    await page.goto('https://uploadnow.io/');
    await page.locator('input[type="file"]').setInputFiles('screenshots/demoqa.png');
    await page.getByRole('button', { name: 'Validate and upload' }).click();
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/filehandling.png' });
    console.log("git");
});