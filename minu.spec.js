import { test } from '@playwright/test';
test('Find minimum price', async ({ page }) => {
  await page.goto("https://www.myntra.com/boy-tshirts");

  //Function to find Minimum price
  async function MinimumPrice() {
    const allPrices = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]/descendant::span[@class="product-discountedPrice" or (text() and not(@class))]');
    const priceList = await allPrices.allTextContents();
    const prices = priceList.map(p => Number(p.replace(/\D/g, '')));
    const minimum_price = Math.min(...prices);
    const product_name = await productBrand(minimum_price);
    console.log("Product Brand:", product_name);
    return minimum_price;
  }

  //Function to find ProductBrand Name
  async function productBrand(minimumPrice) {
    const brand = page.locator(`//span[(@class="product-discountedPrice" or (text() and not(@class))) and text()="${minimumPrice}"]/ancestor::li[@class="product-base"]//h3[@class="product-brand"]`).first();
    return await brand.textContent();
  }

  console.log("Minimum Price:", await MinimumPrice());
});