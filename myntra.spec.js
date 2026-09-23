import { test } from '@playwright/test';

test('Myntra kids boys t-shirt summary', async ({ page }) => {
  await page.goto('https://www.myntra.com/kids-boys-tshirts', {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForTimeout(4000);

  const cards = page.locator('li.product-base');
  const total = await cards.count();

  if (total === 0) {
    throw new Error('No products found on the page.');
  }

  const products = [];

  for (let i = 0; i < total; i++) {
    const card = cards.nth(i);

    const name =
      (await card
        .locator('h3.product-brand, h4.product-product, .product-product')
        .first()
        .textContent())?.trim() ?? '';

    const priceText =
      (await card.locator('.product-discountedPrice, .product-price').first().textContent())?.trim() ?? '';

    const price = Number(priceText.replace(/[^\d]/g, ''));

    if (name && !Number.isNaN(price)) {
      products.push({ name, price });
    }
  }

  if (products.length === 0) {
    throw new Error('No valid product data was parsed from the page.');
  }

  const minProduct = products.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  console.log(`Total number of product: ${products.length}`);
  console.log(`Min price: ${minProduct.price}`);
  console.log(`Product Name of min price: ${minProduct.name}`);
});