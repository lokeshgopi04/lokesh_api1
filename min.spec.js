import { test } from '@playwright/test';

test('Find min price and product name from first 50 products', async ({ page }) => {
  test.setTimeout(90000);

  await page.goto('https://www.myntra.com/boy-tshirts', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const products = page.locator('li.product-base');
  const totalProducts = await products.count();
  const total = Math.min(totalProducts, 50);

  const productList = [];

  for (let i = 0; i < total; i++) {
    const product = products.nth(i);

    let productName = '';
    const nameCount = await product.locator('h3.product-brand, h4.product-product, .product-product').count();
    if (nameCount > 0) {
      productName = (await product.locator('h3.product-brand, h4.product-product, .product-product').first().textContent().catch(() => ''))?.trim() || '';
    }

    let priceText = '';
    const priceCount = await product.locator('span.product-discountedPrice, span.product-price').count();
    if (priceCount > 0) {
      priceText = (await product.locator('span.product-discountedPrice, span.product-price').first().textContent().catch(() => ''))?.trim() || '';
    }

    const price = Number((priceText || '').replace(/[^\d]/g, ''));

    if (productName && !Number.isNaN(price) && price > 0) {
      productList.push({ productName, price });
    }
  }

  if (productList.length === 0) {
    throw new Error('No valid product data found on the page.');
  }

  const minProduct = productList.reduce((min, current) =>
    current.price < min.price ? current : min
  );

  console.log('Minimum price among first 50 products:', minProduct.price);
  console.log('Product name for minimum price:', minProduct.productName);
});