import { test } from '@playwright/test';
test('Alert test', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    
    page.on('dialog', async (Dialog) => {
        console.log(Dialog.message());
        console.log(Dialog.type());
        await page.waitForTimeout(2000);
        
        if (Dialog.type() === 'prompt') {
            await Dialog.accept('Proceed');
        } else if (Dialog.type() === 'confirm') {
            await Dialog.dismiss();
        } else {
            await Dialog.accept();
        }
    });

    await page.locator('#alertButton').click();
    await page.locator('#confirmButton').click();
    await page.locator('#promtButton').click();
});