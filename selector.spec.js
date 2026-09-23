import{ test } from '@playwright/test';
test('Try Catch', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
  try{  
await page.locator('//input[@type="number"])').fill('7010800185');
await page.getByRole('button', { name: 'Continue' }).click();
await page.locator('//span[text()="Edit"]').click();
await page.locator('//input[@type="number"]').fill('7812800195');
await page.getByRole('button', { name: 'Continue' }).click();

   
        }
    
catch (error) {
    console.error('Error occurred:', error);
}
await page.waitForTimeout(5000);
  
})