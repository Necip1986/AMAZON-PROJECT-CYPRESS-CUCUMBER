class LandingPage {
    getLogo() {
        return cy.get('#nav-logo-sprites')
    }
    getHelloMenu() { 
        return cy.get('#nav-link-accountList')

    }

    getSignInLink(){
        return cy.contains('Sign in',{force:true})
    }

    getAllMenu(){
        return cy.get('#nav-hamburger-menu')
    }

    getSmartHome(){
        return cy.get('.hmenu-visible > :nth-child(9) > .hmenu-item > div')
    }

    getSubCategories(){
        return cy.get("ul[class='hmenu hmenu-visible hmenu-translateX'] li a[class='hmenu-item']")
    }

    getSearchBox(){
        return cy.get('#twotabsearchtextbox')
    }

    getSearchButton(){
        return cy.get('#nav-search-submit-button')
    }

    getButtomLinksTableElements(){
        return cy.get(".navFooterMoreOnAmazon tbody td .nav_a");
    }

    getAmazonAdvertisingLink(){
        return cy.get('tbody > :nth-child(1) > :nth-child(3) > .nav_a')
    }

    getAmazonBusinessLink(){
        return cy.get(':nth-child(3) > :nth-child(3) > .nav_a')
    }

    getAmazonBoxOfficeMojoLink(){
        return cy.get(':nth-child(5) > :nth-child(3) > .nav_a')
    }

    getKindleDirectPublishingLink(){
        return cy.get(':nth-child(7) > :nth-child(3) > .nav_a')
    }

    getEeroLink(){
        return cy.get(':nth-child(9) > :nth-child(3) > .nav_a')
    }

    getCreatListLink(){
        return cy.contains('Create a List')
    }

    getWelcomeMenu(){
        return cy.get('#nav-link-accountList > .nav-line-2 > .nav-icon')
    }
}

export default LandingPage;