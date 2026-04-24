const { test, expect } = require('@playwright/test');
const { compareImages } = require('../utils/visualCheck');

test('Homepage Test', async ({ page }) => {
  await page.goto('https://example.com');

  // Functional Test
  const title = await page.title();
  expect(title).toContain("Example");

  // Visual Test
  await page.screenshot({ path: 'reports/current.png' });

  const diff = await compareImages(
    'baseline.png',
    'reports/current.png',
    'reports/diff.png'
  );

  console.log("Visual Difference:", diff);

  expect(diff).toBeLessThan(1000);
});
