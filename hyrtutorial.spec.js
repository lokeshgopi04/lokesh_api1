import { test, expect } from '@playwright/test';

test('HYR tutorials', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
  
  const frame1 = page.frameLocator('[src="https://www.hyrtutorials.com/p/basic-controls.html"]');
  
  await frame1.locator('#firstName').fill('Lokesh');
  await frame1.locator('#lastName').fill('G');
  await frame1.locator('#femalerb').check();
  await frame1.locator('#englishchbx').check();
  await frame1.locator('[placeholder="Enter Email"]').fill('lokesh04@gmail.com');
});