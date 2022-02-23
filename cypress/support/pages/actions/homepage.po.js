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
        SignIn_Btn: '//button[@onclick="logIn()"]',
        title: '//a[@id="nameofuser"]',
        logout: '//a[@id="logout2"]',


        goContactHome: '//img[@id="reseller-login_img"]',

        search: '//input[@id="search2"]',
        searchClick: '//button[@id="learntocode_searchbtn"]',
        searchFound: '//a[@title="HTML Tutorial"]',
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

    shouldSeePage() {
        this.shouldVisible(this.elements.title);
        
    }

    logout() {
        this.click(this.elements.logout)
    }

    search() {
        this.type(this.elements.search, "html")
        this.click(this.elements.searchClick)
    }

    searchFound() {
        this.shouldVisible(this.elements.searchFound)
    }

}