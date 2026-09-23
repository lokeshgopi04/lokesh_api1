import { test } from "@playwright/test";

test('js alerts', async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  // 1. Alert appears after 5 seconds
  page.once('dialog', async dialog => {
    console.log('Delayed alert:', dialog.type(), dialog.message());
    await dialog.accept();
  });
  await page.getByText('On button click, alert will appear after 5 seconds').click();
  await page.waitForTimeout(6000);

  // 2. Confirm box appears
  page.once('dialog', async dialog => {
    console.log('Confirm box:', dialog.type(), dialog.message());
    await dialog.accept();
  });
  await page.getByText('On button click, confirm box will appear').click();

  // 3. Prompt box appears
  page.once('dialog', async dialog => {
    console.log('Prompt box:', dialog.type(), dialog.message());
    await dialog.accept('John Doe');
  });
  await page.getByText('On button click, prompt box will appear').click();

  await page.waitForTimeout(2000);
});