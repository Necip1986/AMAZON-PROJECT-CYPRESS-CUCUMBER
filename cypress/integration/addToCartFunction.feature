Feature: User should be able to select a random product and add to basket. Confirm that sum of the price of added product should be same as in the basket

    Background: set up Environment
        Given setup data

    Scenario: User should see the total price of all added products appear same as in the basket
        Given search "HeadPhones" in amazon
        And Add first two products to the Basket
        Then Verify the products are added successfully
        Then Verify the subtotal is correct
