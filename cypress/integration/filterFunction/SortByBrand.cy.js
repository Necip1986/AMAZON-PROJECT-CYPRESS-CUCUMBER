import SearchResultPage from "../pages/SearchResultPage";

const searchResultPage = new SearchResultPage();


Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})

Given('search {string} in amazon', function (product) {
    cy.SearchProduct(this.data.amazon_url, product)
})

Given('select {string} brand from Featured Brands section', function (brandName) {
    searchResultPage.getSonyFromSortByBrand().click()
})

Given('verify all products contain {string}', function (brandName) {
    searchResultPage.getSearchedProductList().then((item) => {
        const itemCount = Cypress.$(item).length;
        cy.log(itemCount)
        for (var i = 0; i < itemCount; i++) {
            searchResultPage.getSearchedProductList().eq(i).should(productText => expect(productText.text().toLowerCase()).to.contain('sony'));
        }
    })
})
