class LoginPage{
   
    getEmailTextBox(){
        return cy.get('#ap_email')
    }

    getContinueButton(){
        return cy.get('#continue')
    }

    getPasswordTextBox(){
        return cy.get('#ap_password')
    }

    getSignInButton(){
        return cy.get('#signInSubmit')
    }

    getProblemMessage(){
        return cy.get('.a-alert-heading');
    }
}

export default LoginPage;