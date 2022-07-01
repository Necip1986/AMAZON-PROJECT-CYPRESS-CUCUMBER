import SearchResultPage from "../pages/SearchResultPage";

const searchResultPage=new SearchResultPage();

Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})

Given('search {string} in amazon', function (product) {
    cy.SearchProduct(this.data.amazon_url,product)
})

Given('verify that all the products listed includes {string}', function (product) {
    searchResultPage.getSearchedProductList().then((item) => { 
        const itemCount = Cypress.$(item).length;
       cy.log(itemCount)
       for(var i=0; i<itemCount; i++){
           searchResultPage.getSearchedProductList().eq(i).should('contain.text',product)
           
       }
   })
})
