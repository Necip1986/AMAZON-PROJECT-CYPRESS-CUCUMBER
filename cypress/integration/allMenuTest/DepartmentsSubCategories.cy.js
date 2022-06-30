/// <reference types="cypress" />
import LandingPage from "../pages/LandingPage";
const landingPage = new LandingPage();
Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})

Given('go to amazon url', function () {
    cy.visit(this.data.amazon_url)
})

Given('Select All menu', function () {
    landingPage.getAllMenu().click({ force: true }).wait(2000)
})

Given('Select Smart Home department', function () {
    landingPage.getSmartHome().click({ force: true })
})

Given('Verify the sub-categories of the department are {string}', function (number) {
    landingPage.getSubCategories().should('have.length', number)
})