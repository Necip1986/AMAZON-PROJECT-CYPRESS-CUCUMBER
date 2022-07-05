class CreateListPage{

    getCreateListButton(){
        return cy.get('.a-button-input')
    }

    getShoppingListNameBar(){
        return cy.get('#list-name')
    }

    getCreateListSubmitButton(){
        return cy.get('#wl-redesigned-create-list')
    }

    getCreatedListName(){
        return cy.get('#profile-list-name')
    }

    getMoreOption(){
        return cy.get('#overflow-menu-popover-trigger > :nth-child(2)')
    }

    getManageList(){
        return cy.contains('Manage list')
    }

    getDeleteShoppingList(){
        return cy.contains('Delete list')
    }

    getDeleteListConfirm(){
        return cy.get('#list-delete-confirm-announce')
    }

    getConfirmDeletedHeaderSign(){
        return cy.get('.al-intro-banner-header')
    }

    getProductInTheList(){
        return cy.get("h2 a[class='a-link-normal']")
    }

    getDeleteFromList(){
        return cy.contains('Delete')
    }

    getDeletedListProductConfirmation(){
        return cy.contains('Deleted')
    }
}

export default CreateListPage;