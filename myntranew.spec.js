import { test } from '@playwright/test';

test('Find minimum price product from first 50 products', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  const products = page.locator('//li[@class="product-base"]/descendant::div[@class="product-price"]');
  const total = Math.min(await products.count(), 50);

  let minPrice = Number.MAX_SAFE_INTEGER;
  let minProductName = '';

  for (let i = 0; i < total; i++) {
    const priceBlock = products.nth(i);

    const priceText = await priceBlock
      .locator('
        ')
      .first()
      .textContent()
      .catch(() => '');

    const price = Number((priceText || '').replace(/[^0-9]/g, ''));

    if (Number.isNaN(price) || price <= 0) continue;

    const productCard = priceBlock.locator('ancestor::li[@class="product-base"]');
    const nameText = await productCard
      .locator('.//h3[contains(@class, "product-brand")]')
      .first()
      .textContent()
      .catch(() => '');

    const name = (nameText || '').trim();

    if (price < minPrice) {
      minPrice = price;
      minProductName = name;
    }
  }

  console.log('Minimum price among first 50 products:', minPrice);
  console.log('Product name for minimum price:', minProductName);
});