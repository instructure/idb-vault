import { test, expect } from "@playwright/test";

test("20mb size item", async ({ page }) => {
  await page.goto("http://localhost:3000/#size=20480");
  await page.getByTestId("reset-cacheBuster").click();
  await page.getByTestId("clear-button").click();
  await page.getByTestId("set-item-button").click();
  await expect(page.getByText("6ftozm")).toBeVisible();
  await page.getByTestId("get-item-button").click();
  await expect(page.getByTestId("hash2").getByText("6ftozm")).toBeVisible();
  // Ensures enough time for IDB to take effect
  await page.getByTestId("count-button").click();
  await page.getByTestId("count-button").click();
  await page.getByTestId("count-button").click();
  await expect(page.getByText("820")).toBeVisible();
});
