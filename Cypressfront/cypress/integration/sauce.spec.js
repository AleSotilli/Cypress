
/// <reference types="cypress"/>


import SauceLogin from "../pages/sauce_login.page"


describe("Realizando o login no saucedemo", () => {

    it("realizar o login"), () => {
        SauceLogin.acessarSauceDemo()
        SauceLogin.home()
        SauceLogin.logar()


    }

    it('deve acessar o carrinho', () => {
        cy.acessarCarrinho()
    })

    

})