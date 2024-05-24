import { test } from "@playwright/test"
import { ProductPage } from "../page-objects/product.page"

test.only("New user full e2e test journey", async ({ page }) => {

    // ProductPage.visit()
    const productsPage = new ProductPage(page)
    await productsPage.visit()
    // await page.pause()
})