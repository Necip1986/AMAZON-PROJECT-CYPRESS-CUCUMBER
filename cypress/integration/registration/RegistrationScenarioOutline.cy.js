/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('user navigates to registration page', () => {
    cy.visit('https://medunna.com/account/register')

})

Given('user provides ssn id {string}', (ssn) => {
    cy.get("input[name='ssn']").type(ssn, { force: true })
})

Given('user provides firstname and lastname {string} and {string}', (firstname, lastname) => {

    cy.get('#firstName').type(firstname, { force: true })
    cy.get('#lastName').type(lastname, { force: true })


})

Given('user creates username {string}', (username) => {
    cy.get('#username').type(username, { force: true })
})

Given('user provides also email {string}', (email) => {
    cy.get('#email').type(email, { force: true })
})

Given('user generates the password {string}', (password) => {
    cy.get('#firstPassword').type(password, { force: true })
    cy.get('#secondPassword').type(password, { force: true })
})

Given('user clicks the register button and validate login is succesfully', () => {
    //cy.get('#register-submit > span').click({force:true})
})

Given('user provides below information for registration', (dataTable) => {
    dataTable.hashes().forEach(row => {
        //cy.log(row.ssn)
        cy.get("input[name='ssn']").type(row.ssn,{force:true})
        cy.get('#firstName').type(row.firstname,{force:true})
        cy.get('#lastName').type(row.lastname,{force:true})
        cy.get('#username').type(row.username,{force:true})
        cy.get('#email').type(row.email,{force:true})
        cy.get('#firstPassword').type(row.password,{force:true})
        cy.get('#secondPassword').type(row.password,{force:true})
    });


})