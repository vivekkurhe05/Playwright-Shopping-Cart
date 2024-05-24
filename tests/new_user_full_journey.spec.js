import { test } from "@playwright/test"
import { ProductPage } from "../page-objects/product.page"

test.only("New user full e2e test journey", async ({ page }) => {

    const productsPage = new ProductPage(page)
    await productsPage.visit()
    await productsPage.addProductToBasket(0)
    await productsPage.addProductToBasket(1)
    await productsPage.addProductToBasket(2)

    // await page.pause()
})