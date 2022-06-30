Feature: Login Function

    Background: set up environment
        Given setup data
        And go to amazon url
        And Navigate to sign in page
@focus 
    Scenario: User should be able to sign in with valid credentials
        Then Enter "valid_email" address to the email box
        And Click continue button
        And Enter valid_password to the password box
        #And Click sign-in button
        #Then Verify sign in is successful
  
    Scenario: User should not be able to sign in with invalid credentials
        Then Enter "invalid_email" address to the email box
        And Click continue button
        And Verify sign in is not successful
        
