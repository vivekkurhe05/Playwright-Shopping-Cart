import { expect } from "@playwright/test"

export class ProductPage {

    constructor(page) {
        this.page = page
        this.addButtons = page.locator('[data-qa="product-button"]')
        this.basketCounter = page.locator('[data-qa="header-basket-count"]')
    }

    visit = async () => {
        await this.page.goto("/")
    }

    getBasketCount = async () => {
        await this.basketCounter.waitFor()
        const text = await this.basketCounter.innerText()
        return parseInt(text)
    }

    addProductToBasket = async (index) => {
        const specificAddButton = this.addButtons.nth(index)
        await specificAddButton.waitFor()
        await expect(specificAddButton).toHaveText("Add to Basket")
        const basketCountBeforeAdding = await this.getBasketCount()
        await specificAddButton.click()
        await expect(specificAddButton).toHaveText("Remove from Basket")
        const basketCountAfterAdding = await this.getBasketCount()
        expect(basketCountAfterAdding).toBeGreaterThan(basketCountBeforeAdding)
    }
}