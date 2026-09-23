import {test} from '@playwright/test';

test('Mouse Actions', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#doubleClickBtn').dblclick();
    await page.locator('#rightClickBtn').click({button:'right'});
    await page.locator('//button[text()="Click Me"]').click();

})

