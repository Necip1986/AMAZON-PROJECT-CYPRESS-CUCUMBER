/// <reference types="cypress" />

import LandingPage from "../pages/LandingPage";
var landingPage = new LandingPage();

Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})

Given('go to amazon url', function () {
    cy.visit(this.data.amazon_url)
    cy.wait(1000)
})

Given('Scroll down to the bottom of the home page', function () {
    landingPage.getButtomLinksTableElements().first().scrollIntoView({force:true})
        cy.wait(3000)
})

Given('Click the links in the second column and verifies page name', function () {
    cy.get('tbody tr').then($rowNum => {
        const index = Cypress.$($rowNum).length
        cy.log(index)
        for (let i = 0; i < index; i += 2) {
            cy.get('tbody tr').eq(i).find('td').eq(2).find('a').then($text => {
                cy.log($text.text())
                const linkText = $text.text().substring(0, 6);
                cy.get('tbody tr').eq(i).find('td').eq(2).find('a').click({ force: true })
                cy.title().should('contain', linkText)
                cy.wait(2000)
                
            })
            cy.go('back', { force: true }).wait(2000)
            landingPage.getButtomLinksTableElements().first().scrollIntoView().wait(3000)
            
        }

    })
})