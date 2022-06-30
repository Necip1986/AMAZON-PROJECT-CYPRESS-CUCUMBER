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
}

export default LandingPage;