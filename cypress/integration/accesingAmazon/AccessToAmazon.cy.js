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
})

Given('verify Amazon logo is visible', function () {
    landingPage.getLogo().should('be.visible')
})

Given('verify title contains {string}', function (title) {
    cy.title().should('contain', title)
})

