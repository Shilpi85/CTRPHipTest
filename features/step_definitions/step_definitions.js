
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = require('chai').expect;
var actionPage = require('../step_definitions/actionwords');

module.exports = function () {
    var actionWords = new actionPage();
    this.setDefaultTimeout(60 * 1000);
    //this.Before(function (scenario) {
    //    //Object.create(require('./actionwords.js').Actionwords);
    //});
    //
    //this.After(function (scenario) {
    //    this.actionwords = null;
    //});


    this.Given(/^Login in to CTRP app "(.*)" "(.*)" "(.*)"$/, function (url, username, password) {
        return  browser.sleep(25).then(function () {
            console.log('******url********');
            console.log(url);
            console.log(username);
            console.log(password);
            actionWords.loginInToCTRPApp(url, username, password);
        });
      //  callback();
    });



    this.Given(/^Select page "(.*)"$/, function (page) {
        return  browser.sleep(25).then(function () {
            actionWords.selectPage(page);
      //  callback();
        });
    });

    this.Given(/^PO Create Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext) {
        return  browser.sleep(25).then(function () {
            actionWords.pOCreateOrganization(name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext);
        });
       // callback();
    });

    this.Given(/^Click button "(.*)"$/, function (button) {
        return  browser.sleep(25).then(function () {
            this.actionwords.clickButton(button);
        });
    });

    this.Given(/^PO Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search) {
        return  browser.sleep(25).then(function () {
            this.actionwords.pOSearchOrganization(name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search);
        });
    });

    this.Given(/^Reg Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search) {
        return  browser.sleep(25).then(function () {
            this.actionwords.regSearchOrganization(name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search);
        });
    });
}
