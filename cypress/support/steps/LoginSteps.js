import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const validLogin = data.Login.validLogin;
const invalidPasswordLogin = data.Login.invalidPassword;
const invalidUserNameLogin = data.Login.invalidUserName;
const homepage =  new Homepage();
const baseAction = new BaseAction();

When("Login on DemoBlaze", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    homepage.goContactHome();
    homepage.loginWith(validLogin.username, validLogin.password);
})


When("Login on DemoBlaze with invalid password", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    homepage.goContactHome();
    homepage.loginWith(invalidPasswordLogin.username, invalidPasswordLogin.password);
})


When("Login on DemoBlaze with invalid username", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    homepage.goContactHome();
    homepage.loginWith(invalidUserNameLogin.username, invalidUserNameLogin.password);
})

Then('I should see homepage', () => {
    homepage.shouldSeePage();
})

Then('I should see error message', () => {
    cy.log("Invalid username and password");

})
