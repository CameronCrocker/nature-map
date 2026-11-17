import { expect, test } from "@playwright/test";

test("loads the application", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Sightings Map" }),
  ).toBeVisible();
});
