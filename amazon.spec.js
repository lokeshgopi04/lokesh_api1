import { test } from '@playwright/test';

test('Amazon Search', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  await page.locator('#twotabsearchtextbox').fill('iphone 17 pro');
  await page.locator('#nav-search-submit-button').click();

  const resultXPath = `//div[@role="listitem"][.//h2[contains(@class,"a-size-medium")]/span[contains(text(),"iPhone 17")]][.//span[@class="a-icon-alt" and text()="4.6 out of 5 stars"]]`;
  const resultItems = page.locator(resultXPath);
  const count = await resultItems.count();

  console.log('Count of iPhone 17 with 4.6 rating:', count);

  for (let i = 0; i < count; i++) {
    const text = await resultItems.nth(i).textContent();
    console.log('Matched result:', text.slice(0, 300));
  }
});