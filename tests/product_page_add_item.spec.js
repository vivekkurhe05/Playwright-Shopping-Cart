import {expect, test} from "@playwright/test"

test.skip("Product page add to basket", async ({page}) => {
    await page.goto("/")

    // we don't need await keyword becasue getByRole returns locator not promise
    const addToBasketButton = page.getByRole('button', {name: 'Add to Basket'}).first()

    // Always use waitFor() to be indicative of the real problem, otherwise error message will not be very indicative.
    await addToBasketButton.waitFor()
    await addToBasketButton.click()

    const removeFromBasket = page.getByRole('button', {name: 'Remove from Basket'})
    await expect(removeFromBasket).toHaveText("Remove from Basket")
})

test("Product page add to basket 2", async ({page}) => {
    await page.goto("/")

    // we don't need await keyword becasue getByRole returns locator not promise
    const addToBasketButton = page.locator('[data-qa="product-button"]').first()
    const basketCounter = page.locator('[data-qa="header-basket-count"]')

    // Always use waitFor() to be indicative of the real problem, otherwise error message will not be very indicative.
    await addToBasketButton.waitFor()
    await expect(addToBasketButton).toHaveText("Add to Basket")
    await expect(basketCounter).toHaveText("0")
    await addToBasketButton.click()

    await expect(addToBasketButton).toHaveText("Remove from Basket")
    await expect(basketCounter).toHaveText("1")

    const checkoutLink = page.getByRole('link', {name: 'Checkout'})
    await checkoutLink.waitFor()
    await checkoutLink.click()

    await page.waitForURL('/basket')
})