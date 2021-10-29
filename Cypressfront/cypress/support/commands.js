import cypress from 'cypress';
import Faker from 'faker';


Cypress.Commands.add('contextoprodutoNoCarrinho', (usuario ='locked_out_user') =>{
    const NUM_CART = '.shopping_cart_badge'
    const LIST_PRODUCTS = '.inventory_list'
    const BTN_ADDTOCART = '[data-test=add-to-cart-sauce-labs-backpack]'

    cy.get(LIST_PRODUCTS).first().should('contain', 'Sauce Labs Backpack')
    cy.get(BTN_ADDTOCART).click()
    cy.get(NUM_CART).should('contain', 1)
})

Cypress.Commands.add('acessarCarrinho', () => {
    const BTN_CART = '.shopping_cart_link'

    cy.get(BTN_CART).click()
    cy.url().should('include', '/cart.html')
})

