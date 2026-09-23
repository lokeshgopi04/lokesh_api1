import { test } from '@playwright/test';

test('TutorialPoint', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/frames.php');

  const frame1 = page.frameLocator('//body//main//iframe[1]');
  await frame1.locator('a[href="https://www.tutorialspoint.com"]').click();
  await page.waitForTimeout(9000);

  const frame2 = page.frameLocator('//body//main//iframe[2]');
  await frame2.locator('[href="https://www.tutorialspoint.com"]').click();
  await page.waitForTimeout(9000);
});