import { expect, test } from "@playwright/test";

const modifier = process.env.NODE_ENV;

test.describe("test copy paste shortcuts", () => {
  test("basic test", async ({ baseURL, context }) => {
    expect(baseURL).toBeDefined();
    const page = await context.newPage();
    if (baseURL) {
      await page.goto(baseURL);
      await page.waitForSelector("[data-test=initial-content]");
      await page.keyboard.press(`${modifier}+KeyC`);
      await page.keyboard.press(`${modifier}+KeyV`);
      await page.waitForSelector("[data-test=pasted-text]");
      await expect(page.locator("[data-test=pasted-text]")).toBeVisible();
      await page.close();
    }
  });
});
