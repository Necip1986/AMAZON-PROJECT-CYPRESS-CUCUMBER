Feature: User should be able to make filtering and sorting in product list process

    Background: set up data
        Given setup data
    Scenario: User should see the products are sorted by brand name
        Given search "HeadPhones" in amazon
        And select "Sony" brand from Featured Brands section
        Then verify all products contain "Sony"
