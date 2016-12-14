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

    this.Given(/^Select page "(.*)"$/, function (page, callback) {
        this.actionwords.selectPage(page);
        callback();
    });


    this.Given(/^Click button "(.*)"$/, function (button, callback) {
        this.actionwords.clickButton(button);
        callback();
    });







    this.Given(/^PO Search Family "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, family_type, family_status, exact_search, callback) {
        this.actionwords.pOSearchFamily(name, family_type, family_status, exact_search);
        callback();
    });

    this.Given(/^Organization Exist "(.*)" "(.*)"$/, function (org_name, status, callback) {
        this.actionwords.organizationExist(org_name, status);
        callback();
    });

    this.Given(/^Organization name "(.*)"$/, function (name, callback) {
        this.actionwords.organizationName(name);
        callback();
    });

    this.Then(/^Warning Message "(.*)"$/, function (warning_message, callback) {
        this.actionwords.warningMessage(warning_message);
        callback();
    });

    this.Given(/^Person Name "(.*)" "(.*)"$/, function (f_name, l_name, callback) {
        this.actionwords.personName(f_name, l_name);
        callback();
    });

    this.Given(/^Person Exist "(.*)" "(.*)" "(.*)"$/, function (f_name, l_name, status, callback) {
        this.actionwords.personExist(f_name, l_name, status);
        callback();
    });








    this.Then(/^Request New Organization$/, function (callback) {
        this.actionwords.requestNewOrganization();
        callback();
    });

    this.Then(/^Request New Person$/, function (callback) {
        this.actionwords.requestNewPerson();
        callback();
    });
}
