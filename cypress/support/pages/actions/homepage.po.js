import { BaseAction } from '../../common/baseAction';
import { StringUtilities } from "../utilities/string.utilities";



export class Homepage extends BaseAction {

    constructor() {
        super();
    }

    elements = {
        goLogIn: '//a[@id="login2"]',
        USERNAME_INPUT: '//input[@id="loginusername"]',
        PASSWORD_INPUT: '//input[@id="loginpassword"]',
        SignIn_Btn: '//button[@class="btn btn-primary"]',


        goContactHome: '//img[@id="reseller-login_img"]',
        // USERNAME_INPUT: '//input[@name="email"]',
        // PASSWORD_INPUT: '//input[@name="password"]',
        // SignIn_Btn: '//button[@id="btn-login"]',
    }

    goContactHome() {
        // this.shouldVisible(this.elements.goContactHome);
        this.click(this.elements.goLogIn)
    }

    loginWith(username, password) {
        cy.log('Login With Username and Password');
        this.type(this.elements.USERNAME_INPUT, username);
        this.type(this.elements.PASSWORD_INPUT, password);
        this.click(this.elements.SignIn_Btn);
    }
}