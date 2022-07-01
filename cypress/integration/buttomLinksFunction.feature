Feature: User should see the links in a row or column presenting at the bottom of the home page and be able to  forward to the correct page

    Background: set up data
        Given setup data

    Scenario: User should see that the second column of the links listed at the bottom of the home page navigate user to right pages.
        Given go to amazon url
        And Scroll down to the bottom of the home page
        Then Click the links in the second column and verifies page name
