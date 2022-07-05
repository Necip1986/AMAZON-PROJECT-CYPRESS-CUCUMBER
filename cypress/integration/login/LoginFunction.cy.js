/// <reference types="cypress" />
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

var landingPage = new LandingPage();
var loginPage = new LoginPage();

Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})


Given('go to amazon url', function () {
    cy.visit(this.data.amazon_url)
    
})

Given('Navigate to sign in page', function () {
    landingPage.getHelloMenu().trigger('mouseover').wait(2000)
    landingPage.getSignInLink().click()

})

Given('Enter {string} address to the email box', function (email) {
    
    if(email==="valid_email"){
        loginPage.getEmailTextBox().type(this.data.valid_email)
    }else if(email==="invalid_email"){
        loginPage.getEmailTextBox().type(this.data.invalid_email)
    }
    
})

Given('Click continue button', function () {
    loginPage.getContinueButton().click().wait(1000)

})

Given('Enter valid_password to the password box', function () {
    loginPage.getPasswordTextBox().type(this.data.valid_password)

})

Given('Click sign-in button', function () {
    loginPage.getSignInButton().click();

})

Given('Verify sign in is successful', function () {
    landingPage.getHelloMenu().should('contain.text', 'Yunus')
})

Given('Verify sign in is not successful', function () {
    loginPage.getProblemMessage().should('be.visible')
})

