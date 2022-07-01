
class ProductInfoPage{

    getAddToCartButton(){
        return cy.get('#add-to-cart-button')
    }

    getGoCartButton(){
        return cy.get('#sw-gtc > .a-button-inner > .a-button-text')
    }

    getProductsAtTheCart(){
        return cy.get('.a-truncate-cut')
    }

    getProductTitle(){
        return cy.get('#productTitle')
    }

    getProductPrice(){
        return cy.get("#corePrice_feature_div span[class='a-offscreen']")
    }

    getSubTitle(){
        return cy.get("#sc-subtotal-amount-buybox span");
    }

    getSideSheet(){
        return cy.get('#attach-close_sideSheet-link')
    }

    getSideSheetCartButton(){
        return cy.get('#attach-sidesheet-view-cart-button-announce')
    }

    


}

export default ProductInfoPage;