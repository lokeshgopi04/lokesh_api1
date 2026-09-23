import { test, expect } from '@playwright/test';

test('inspect frames', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/', {
    waitUntil: 'networkidle',
  });

  // List all iframes
  const iframes = await page.locator('iframe').all();
  console.log('Number of iframes:', iframes.length);

  for (let i = 0; i < iframes.length; i++) {
    const iframe = iframes[i];
    const src = await iframe.getAttribute('src');
    console.log(`Iframe ${i} src:`, src);

    const frame = await iframe.contentFrame();
    if (frame) {
      const bodyText = await frame.locator('body').innerText().catch(() => 'N/A');
      console.log(`Iframe ${i} body text (first 500 chars):`, bodyText.substring(0, 500));

      // Check for JMeter
      const jmeter = frame.getByText('JMeter', { exact: false }).first();
      const count = await jmeter.count();
      console.log(`Iframe ${i} JMeter count:`, count);
    } else {
      console.log(`Iframe ${i} has no content frame`);
    }
  }

  // Also check main page for JMeter
  const mainJMeter = page.getByText('JMeter', { exact: false }).first();
  console.log('Main page JMeter count:', await mainJMeter.count());

  // Check for links in the Interaction section
  const interactionLinks = page.locator('.interaction a, .widget a, section a').all();
  for (const link of interactionLinks) {
    const text = await link.innerText().catch(() => 'N/A');
    const href = await link.getAttribute('href');
    console.log('Link:', text, href);
  }
});
