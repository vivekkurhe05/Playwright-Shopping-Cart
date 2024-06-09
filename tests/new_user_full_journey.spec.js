import { expect, test } from "@playwright/test"
import { ProductPage } from "../page-objects/product.page"
import { Navigation } from "../page-objects/navigation.page"
import { Checkout } from "../page-objects/checkout.page"
import { LoginPage } from "../page-objects/login.page"

test.only("New user full e2e test journey", async ({ page }) => {

    const productsPage = new ProductPage(page)
    await productsPage.visit()
    await productsPage.sortByCheapest()
    await productsPage.addProductToBasket(0)
    await productsPage.addProductToBasket(1)
    await productsPage.addProductToBasket(2)
    const navigation = new Navigation(page)
    await navigation.goToCheckout()

    const checkout = new Checkout(page)
    await checkout.removeCheapestProduct()
    await checkout.continueToCheckout()

    const login = new LoginPage(page)
    await login.moveToSignup()

})