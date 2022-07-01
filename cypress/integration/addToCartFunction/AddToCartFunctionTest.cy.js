/// <reference types="cypress" />

import ProductInfoPage from "../pages/ProductInfoPage";
import SearchResultPage from "../pages/SearchResultPage";
import LandingPage from "../pages/LandingPage";

const landingPage = new LandingPage();
const productInfoPage = new ProductInfoPage();
const searchResultPage = new SearchResultPage()

Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})

Given('search {string} in amazon', function (product) {
    cy.SearchProduct(this.data.amazon_url, product)
})

Given('Add first two products to the Basket', function () {
    searchResultPage.getSearchedProductList().eq(0).click().wait(1000)

    productInfoPage.getProductTitle().then($productName => {
        const product = $productName.text()
        cy.wrap(product).as('product1')
    })

    productInfoPage.getProductPrice().then($price => {
        const product1Price = Number($price.text().substring(1).replace(',', ''))
        cy.wrap(product1Price).as('product1Price')
    })
    //productInfoPage.getProductTitle().invoke('text').as('product1')

    productInfoPage.getAddToCartButton().click()
    //productInfoPage.getSideSheet().click({ force: true }).wait(2000)
    //cy.get('#nav-search-submit-button').click({ force: true })
    cy.go("back").go("back").wait(1000)

    searchResultPage.getSearchedProductList().eq(1).click().wait(1000)
    productInfoPage.getProductTitle().then($productName => {
        const productName = $productName.text()
        cy.wrap(productName).as('product2')
    })

    productInfoPage.getProductPrice().then($price => {
        const product1Price = Number($price.text().substring(1).replace(',', ''))
        cy.wrap(product1Price).as('product2Price')
    })
    // productInfoPage.getProductPrice().invoke('text').as('product2Price')

    productInfoPage.getAddToCartButton().click()

    productInfoPage.getGoCartButton().click()
    //productInfoPage.getSideSheetCartButton().click({force:true})
})

Given('Verify the products are added successfully', function () {
    productInfoPage.getProductsAtTheCart().eq(1).then($text => {
        const name = $text.text();
        cy.log(name)
        cy.log(this.product1)
        expect(this.product1).to.contain(name.substring(0, 14))
    })

})

Given('Verify the subtotal is correct', function () {

    productInfoPage.getSubTitle().then($price => {
        const subTotal = Number($price.text().substring(1).replace(',', ''))
        const productsPrices = this.product1Price + this.product2Price
        cy.log(this.product1Price)
        cy.log(this.product2Price)
        cy.log(subTotal)
        cy.log(productsPrices)
        expect(productsPrices).to.equal(subTotal)

    })
})
