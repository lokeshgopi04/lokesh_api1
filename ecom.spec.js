import { test } from '@playwright/test';

test('Find min price and brand from first 50 products', async ({ page }) => {
  await page.goto('https://www.myntra.com/boy-tshirts');

  const cards = page.locator('//li[@class="product-base"]');
  const limit = Math.min(await cards.count(), 50);

  let minPrice = Number.MAX_SAFE_INTEGER;
  let brandName = '';

  for (let i = 0; i < limit; i++) {
    const card = cards.nth(i);

    const priceText = await card
      .locator('.product-discountedPrice')
      .first()
      .textContent()
      .catch(() => '');

    const priceValue = Number((priceText || '').replace(/[^0-9]/g, ''));

    if (!priceValue) continue;

    if (priceValue < minPrice) {
      minPrice = priceValue;

      brandName = await card
        .locator('.product-brand')
        .first()
        .textContent()
        .catch(() => '');
    }
  }

  console.log('Minimum price:', minPrice);
  console.log('Brand:', brandName);
});