Feature: Registration with scenario outline and data table

    Background: Navigate to registration page
        Given user navigates to registration page

#Scenario Outline: test registration
#    Given user provides ssn id "<SSN>"
#    And  user provides firstname and lastname "<firstname>" and "<lastname>"
#    Then user creates username "<username>"
#    And user provides also email "<email>"
#    And user generates the password "<password>"
#    And user clicks the register button and validate login is succesfully
#
#    Examples: test data
#        | SSN         | firstname | lastname | username   | email            | password   |
#        | 384-37-3427 | Irfan     | Pishkin  | irfanpish  | irfan@gmail.com  | asdfA123.  |
#        | 384-37-3826 | Mehmet    | Hic      | mehmetHic  | mehmet@gmail.com | abgdA123.  |
#        | 484-37-3826 | Metin     | Kilic    | metinkilic | metin@gmail.com  | abkdsA123. |
    
    @focus 
    Scenario: registration data table
        Given user provides below information for registration
            | ssn         | firstname | lastname | username   | email            | password   |
            | 384-37-3427 | Irfan     | Pishkin  | irfanpish  | irfan@gmail.com  | asdfA123.  |
            
        And user clicks the register button and validate login is succesfully