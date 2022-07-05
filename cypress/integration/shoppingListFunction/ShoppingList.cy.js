import CreateShoppingListPage from "../pages/CreateShoppingListPage";
import LandingPage from "../pages/LandingPage"
import ProductInfoPage from "../pages/ProductInfoPage";
import SearchResultPage from "../pages/SearchResultPage"

var landingPage = new LandingPage();
const createShoppingListPage = new CreateShoppingListPage();
const search = new SearchResultPage();
const productInfo = new ProductInfoPage();


Given('setup data', function () {
    cy.fixture('basicData').then(
        function (data) {
            this.data = data;
        })
})


Given('go to amazon url', function () {
    cy.visit(this.data.amazon_url)

})

Given('Sign in with valid credentials', function () {
    cy.Sign_In(this.data.email, this.data.password).wait(2000)


})

Given('Hover over Account&Lists and click on Create a List', function () {
    landingPage.getHelloMenu().trigger('mouseover').wait(1000)
    landingPage.getCreatListLink().click()

})

Given('Verify the Lists page appears.', function () {
    cy.title().should('contain', "Your List")

})

Given('Click on the Create a List button, type shopping list name on the pop-up and accept', function () {
    createShoppingListPage.getCreateListButton().click({ force: true })
        .wait(1000)
    createShoppingListPage.getShoppingListNameBar().clear().wait(1000)
        .type(this.data.shoppingListName)
    createShoppingListPage.getCreateListSubmitButton().click({ force: true })
        .wait(1000)
})

Given('Verify the name appears', function () {
    createShoppingListPage.getCreatedListName().invoke('text').then(el => {
        expect(el).to.equal(this.data.shoppingListName)
    })

})

Given('And  Hover over MoreOption menu on the current page and click on Manage List', function () {
    createShoppingListPage.getMoreOption().trigger('mouseover')
    createShoppingListPage.getManageList().click({ force: true })

})

Given('Scroll down on the pop-up and click on Delete List button.', function () {
    createShoppingListPage.getDeleteShoppingList().click({ force: true })
        .wait(1000)

})

Given('Verify Confirm Delete pop-up by clicking on yes button.', function () {
    createShoppingListPage.getDeleteListConfirm().click({ force: true })
    createShoppingListPage.getConfirmDeletedHeaderSign().should('be.visible')

})