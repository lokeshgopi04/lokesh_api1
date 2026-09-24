# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Filehandling.spec.js >> File handling
- Location: Filehandling.spec.js:3:5

# Error details

```
Error: ENOENT: no such file or directory, stat 'C:\Users\ADMIN\Desktop\New folder\lokesh_api1\screenshots\demoqa.png'
```

# Page snapshot

```yaml
- generic [active]:
  - generic:
    - region "Notifications Alt+T"
  - alert [ref=e6]
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | 
  3  | test('File handling', async ({ page }) => {
  4  |     await page.goto('https://uploadnow.io/');
> 5  |     await page.locator('input[type="file"]').setInputFiles('screenshots/demoqa.png');
     |     ^ Error: ENOENT: no such file or directory, stat 'C:\Users\ADMIN\Desktop\New folder\lokesh_api1\screenshots\demoqa.png'
  6  |     await page.getByRole('button', { name: 'Validate and upload' }).click();
  7  |     await page.waitForTimeout(5000);
  8  |     await page.screenshot({ path: 'screenshots/filehandling.png' });
  9  |     console.log("git");
  10 | });
```