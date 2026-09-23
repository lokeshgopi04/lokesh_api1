import { test,chromium} from '@playwright/test';

test('Amazon search test', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone 17');
    const suggestions = page.locator('//div[contains(@class,"s-suggestion-container")]').first();
    await suggestions.click();
    await page.waitForTimeout(5000); 
    // const allsuggestions = await suggestions.allInnerTexts();
    // console.log(allsuggestions);
    const productsWithRating = page.locator('//div[@role="listitem"][ .//div[@data-cy="reviews-block"]//span[normalize-space()="4.6"]     and     .//div[@data-cy="title-recipe"][contains(., "iPhone 17")] ]');//title-recipe
    const productname = await productsWithRating.locator('//div[@data-cy="title-recipe"]').first().textContent();
    console.log(productname);
    const productCount = await productsWithRating.count();
    console.log(productCount);
});