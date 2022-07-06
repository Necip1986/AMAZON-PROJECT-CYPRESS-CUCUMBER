Feature: Shopping List Function

    Background: set up data
        Given setup data
        And go to amazon url
        And Sign in with valid credentials


    Scenario: User should be able to create a shopping list and delete it
        When Hover over Account&Lists and click on Create a List
        Then Verify the Lists page appears.
        When Click on the Create a List button, type shopping list name on the pop-up and accept
        Then Verify the name appears
        When And  Hover over MoreOption menu on the current page and click on Manage List
        And Scroll down on the pop-up and click on Delete List button.
        Then Verify Confirm Delete pop-up by clicking on yes button.


    Scenario: User should be able to create a shopping list and delete it
        When Hover over Account&Lists and click on Create a List
        When Click on the Create a List button, type shopping list name on the pop-up and accept 
        And Enter "honey" into search box and click on search button
        Then Select first product and add it to created shopping List
        
