import { expect, test } from '@playwright/test';

test('Interact with embedded iFrame with frameLocator', async ({ browser }) => {
  const context = await browser.newContext({
    recordVideo: {
      dir: "./e2e/recordings"
    },
    // viewport: null
  });
  
  const page = await context.newPage();
  await page.goto('https://www.echopark.com/car/3N1CP5DVXNL481092');
    const accept = page.getByText("Accept All");
    await accept.click();
    const baseFrame = page.frameLocator('#iframe-360-view').first();
    const innerFrame = baseFrame.frameLocator('//html/body/iframe');
    const view360 = innerFrame.locator('#change-view-btn');
    expect(await view360.isVisible()).toBeTruthy();
    await view360.click();
    page.waitForTimeout(5000);
});

