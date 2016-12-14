module.exports = function () {
    this.Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^Login in to CTRP app "(.*)" "(.*)" "(.*)"$/, function (url, username, password, callback) {
        this.actionwords.loginInToCTRPApp(url, username, password);
        callback();
    });



    this.Given(/^Click button "(.*)"$/, function (button, callback) {
        this.actionwords.clickButton(button);
        callback();
    });










    this.Then(/^Warning Message "(.*)"$/, function (warning_message, callback) {
        this.actionwords.warningMessage(warning_message);
        callback();
    });



    this.Given(/^Family Exist "(.*)" "(.*)"$/, function (family_name, status, callback) {
        this.actionwords.familyExist(family_name, status);
        callback();
    });

    this.Given(/^Family Name "(.*)"$/, function (name, callback) {
        this.actionwords.familyName(name);
        callback();
    });

    this.Given(/^Family field lengths "(.*)"$/, function (family_name, callback) {
        this.actionwords.familyFieldLengths(family_name);
        callback();
    });

    this.Given(/^Organization field lengths "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, address1, address2, city, postal_code, email, phone, phone_ext, callback) {
        this.actionwords.organizationFieldLengths(name, alias, address1, address2, city, postal_code, email, phone, phone_ext);
        callback();
    });

    this.Given(/^Person field lengths "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (prefix, f_name, m_name, l_name, suffix, email, phone, phone_ext, callback) {
        this.actionwords.personFieldLengths(prefix, f_name, m_name, l_name, suffix, email, phone, phone_ext);
        callback();
    });
}
