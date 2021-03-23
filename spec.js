let data=require('./testdata/data.json')
const {element,by,browser} = require("protractor");
describe('Test Trivago Website',function (){

it('Registration',function ()  {
    console.log(data.url)
     browser.waitForAngularEnabled(false)
     browser.get(data.url);
    let expectedConditions;
    let loginBtnMainPg;
    let registrationBtn;
    let emailAddressRegisterPg;
    let registerpasswordRegisterPg;
    let registerEmailSubmit;
    let heroTitle;
     expectedConditions = protractor.ExpectedConditions;
     loginBtnMainPg = element(by.xpath('//span[contains(text(),\'Log in\')]'));
        browser.wait(expectedConditions.visibilityOf(loginBtnMainPg));
        loginBtnMainPg.click();

        registrationBtn=element(by.id('login_signup_link'));
        browser.wait(expectedConditions.visibilityOf(registrationBtn));
        registrationBtn.click();

    emailAddressRegisterPg=element(by.id('register_email'));
    browser.wait(expectedConditions.visibilityOf(emailAddressRegisterPg));
    emailAddressRegisterPg.sendKeys(data.password)

    registerpasswordRegisterPg=element(by.id('register_password'));
    browser.wait(expectedConditions.visibilityOf(registerpasswordRegisterPg));
    registerpasswordRegisterPg.sendKeys(data.password)

    registerEmailSubmit=element(by.id('register_email_submit'));
    registerEmailSubmit.click();

    // heroTitle=element(by.xpath('//h1[@class=\'hero__title\']'));
    // browser.wait(expectedConditions.visibilityOf(heroTitle));
    // heroTitle.getText();
});
});

describe('Sign Out From Trivago', function (){

   it('Sign Out',function (location, opt_offset) {
       browser.waitForAngularEnabled(false)
       browser.get('https://www.trivago.com/');
       let expectedConditions;
       let loginBtnMainPg;
       let checkEmailLoginPg;
       let loginCheckEmailSubmitLoginPg;
       let enterPasswordLoginPg;
       let loginSubmitBtn;
       let mouseHoverToLoggedUser;
       let signOutBtn;

       expectedConditions = protractor.ExpectedConditions;
       loginBtnMainPg = element(by.xpath('//span[contains(text(),\'Log in\')]'));
       browser.wait(expectedConditions.visibilityOf(loginBtnMainPg));
       loginBtnMainPg.click();

       checkEmailLoginPg=element(by.id('check_email'));
       browser.wait(expectedConditions.visibilityOf(checkEmailLoginPg));
       checkEmailLoginPg.clear();
       checkEmailLoginPg.sendKeys(data.username);

       loginCheckEmailSubmitLoginPg=element(by.id('login_email_submit'));
       loginCheckEmailSubmitLoginPg.click();

       enterPasswordLoginPg = element(by.id('login_password'));
       browser.wait(expectedConditions.visibilityOf(enterPasswordLoginPg));
       enterPasswordLoginPg.sendKeys(data.password);

       loginSubmitBtn = element(by.id('login_submit'));
       browser.wait(expectedConditions.visibilityOf(loginSubmitBtn));
       loginSubmitBtn.click();

       mouseHoverToLoggedUser=element(by.xpath('//span[@data-di-mask=\'true\']'));
       browser.wait(expectedConditions.visibilityOf(mouseHoverToLoggedUser));
       browser.actions().mouseMove( mouseHoverToLoggedUser.getWebElement())
           .perform();

       signOutBtn=element(by.xpath('//button[contains(text(),\'Log out\')]'));
       browser.wait(expectedConditions.visibilityOf(signOutBtn));
       signOutBtn.click();
   })
});