class SearchResultPage{

    getSearchedProductList(){
        return cy.get("div[class='sg-col sg-col-4-of-12 sg-col-8-of-16 sg-col-12-of-20 s-list-col-right'] span[class='a-size-medium a-color-base a-text-normal']");
    }

    getSonyFromSortByBrand(){
        return cy.get("div[id='brandsRefinements'] li").contains('Sony')
    }

}

export default SearchResultPage;