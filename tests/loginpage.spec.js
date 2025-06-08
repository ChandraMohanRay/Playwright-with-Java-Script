import { expect } from "@playwright/test";
import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";
import loginPage from "../pages/loginpage";
import credentials from "../Constants/credentials"; 
import {urls} from "../Constants/urls";

test.describe("Login Page", () => {
    const LoginURL = urls.HOME_PAGE;
    const data =  require('../Constants/credentials.json');
    

}