Feature: User should be able to select any category from the ALL menu and confirm it's subcategories are listed

    Background: set up data
        Given setup data
        
    Scenario: User should access the "Smart Home" department from all menu and see the correct list of Smart Home sub-categories
        Given go to amazon url
        And Select All menu
        And Select Smart Home department
        Then Verify the sub-categories of the department are "16"
