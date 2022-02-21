import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as loginData from '../../fixtures/data';

const login = loginData.login;
const homepage =  new Homepage();
const baseAction = new BaseAction();

When("Login on GoContact UI", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    homepage.goContactHome();
    homepage.loginWith(login.username, login.password);
});