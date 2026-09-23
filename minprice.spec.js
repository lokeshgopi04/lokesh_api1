import { test } from '@playwright/test';

test('Myntra Task', async ({ page }) => {
  test.setTimeout(90000);

  await page.goto('https://www.myntra.com/boy-tshirts', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  const products = page.locator('li.product-base');
  const count = await products.count();
  console.log('Total Number of Products:', count);

  const productList = [];

  for (let i = 0; i < count; i++) {
    const product = products.nth(i);

    let name = '';
    const nameLocator = product.locator('h3.product-brand, h4.product-product, .product-product');
    if ((await nameLocator.count()) > 0) {
      name = (await nameLocator.first().textContent().catch(() => ''))?.trim() ?? '';
    }

    let priceText = '';
    const priceLocator = product.locator('span.product-discountedPrice, span.product-price');
    if ((await priceLocator.count()) > 0) {
      priceText = (await priceLocator.first().textContent().catch(() => ''))?.trim() ?? '';
    }

    const price = Number((priceText || '').replace(/[^\d]/g, ''));

    if (name && !Number.isNaN(price) && price > 0) {
      productList.push({ name, price });
    }
  }

  if (productList.length === 0) {
    throw new Error('No valid product data found on the page.');
    
  }

  const minProduct = productList.reduce((min, current) => (current.price < min.price ? current : min));

  console.log('Minimum Price among the Products:', minProduct.price);
  console.log('Product Name of Minimum Price:', minProduct.name);
});

