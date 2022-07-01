Feature: User should be able to search for a product and confirm all products contain the same name

    Background: set up data
        Given setup data
        
    Scenario: User should see each search result includes the relative product name
        Given search "Lenovo" in amazon
        Then verify that all the products listed includes "Lenovo"
