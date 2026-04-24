const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log("Launching App...");

  await page.goto('https://example.com');

  // Simulated AI navigation
  console.log("Exploring UI...");

  const links = await page.$$('a');

  for (let i = 0; i < Math.min(links.length, 5); i++) {
    try {
      await links[i].click();
      await page.waitForTimeout(1000);
      await page.goBack();
    } catch (err) {
      console.log("Navigation error:", err.message);
    }
  }

  await page.screenshot({ path: 'reports/home.png' });

  console.log("Testing Completed");

  await browser.close();
})();
