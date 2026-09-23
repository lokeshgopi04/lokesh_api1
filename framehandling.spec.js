import { test } from '@playwright/test';

test('Framehandling', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

  const frame1 = page.frameLocator('iframe[src="https://www.hyrtutorials.com/p/basic-controls.html"]');

  await frame1.locator('#firstName').fill('Lokesh');
  await frame1.locator('#lastName').fill('G');
  await frame1.locator('#malerb').check();
  await frame1.locator('#englishchbx').check();
  await frame1.locator('[placeholder="Enter Email"]').fill('lokesh04@gmail.com');
});
