Feature: Accesing Amozon

    Background: set up data
        Given setup data

    Scenario: User should be able to go to Amazon website
        Given go to amazon url
        Then verify Amazon logo is visible
        Then verify title contains "Amazon"



