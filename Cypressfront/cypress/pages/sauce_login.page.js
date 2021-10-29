import {LOGIN as LG} from './components/sauce.elements'
import Base from './_base.page'

        
        
const URL ="https://www.saucedemo.com"

export default class SauceLogin extends Base {

    static acessarSauceDemo(){
        cy.visit("https://www.saucedemo.com")
        super.validarUrl(URL)
    }

    static logar(usuario = "locked_out_user"){
        super.typeValue(LG.IMP_USER, usuario)
        super.typeValue(LG.IMP_PASSWORD, `${Cypress.env("password")}`)
        super.clickOnelement(LG.BIN_LOGIN)
        super.validarUrl('/invetory.html')
    }

    static home(){
        super.verifyIfElementExists(element = "login_logo")
    }
}