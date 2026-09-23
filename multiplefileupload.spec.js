import { test } from '@playwright/test';

test('File Handling - Multiple File Upload', async ({ page }) => {
    await page.goto('https://uploadnow.io/');

    await page.locator('input[type="file"]').setInputFiles([
        'screenshots/facebook.png',
        'screenshots/google.png',
        'screenshots/homepage.png',
    ]);

    await page.getByRole('button', { name: 'Validate and upload' }).click();
    await page.locator('h1', { hasText: 'All done!' }).waitFor();
    await page.screenshot({ path: 'screenshots/multiplefileupload.png' });
});