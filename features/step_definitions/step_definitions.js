
module.exports = function () {
    this.setDefaultTimeout(60 * 1000);
    this.Before(function (scenario) {
         this.actionwords = Object.create(require('../actionwords/actionwords.js').Actionwords);
    });

    this.After(function (scenario) {
        this.actionwords = null;
    });


    this.Given(/^Login in to CTRP app "(.*)" "(.*)" "(.*)"$/, function (url, username, password,callback) {
            this.actionwords.loginInToCTRPApp(url, username, password);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Select page "(.*)"$/, function (page,callback) {
            this.actionwords.selectPage(page);
            browser.sleep(25).then(callback);
    });

    this.Given(/^PO Create Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext, callback) {
        this.actionwords.pOCreateOrganization(name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext);
        browser.sleep(25).then(callback);
    });

    this.Given(/^Click button "(.*)"$/, function (button, callback) {
        this.actionwords.clickButton(button);
        callback();
    });

    this.Given(/^PO Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search, callback) {
        this.actionwords.pOSearchOrganization(name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search);
        callback();
    });

    this.Given(/^Reg Search Organization "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search, callback) {
        this.actionwords.regSearchOrganization(name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search);
        callback();
    });

    this.Given(/^PO Create Person "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (prefix, f_name, m_name, l_name, suffix, processin_status, source_status, email, phone, phone_ext, affiliated_org, callback) {
        this.actionwords.pOCreatePerson(prefix, f_name, m_name, l_name, suffix, processin_status, source_status, email, phone, phone_ext, affiliated_org);
        callback();
    });

    this.Given(/^PO Search Person "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (f_name, l_name, affiliation, source_context, source_id, source_status, email, phone, processing_status, service_request, last_updated_start_date, last_updated_end_date, updated_by, exact_search, callback) {
        this.actionwords.pOSearchPerson(f_name, l_name, affiliation, source_context, source_id, source_status, email, phone, processing_status, service_request, last_updated_start_date, last_updated_end_date, updated_by, exact_search);
        callback();
    });

    this.Given(/^Reg Search Person "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)" "(.*)"$/, function (f_name, l_name, affiliation, source_id, email, phone, exact_search, callback) {
        this.actionwords.regSearchPerson(f_name, l_name, affiliation, source_id, email, phone, exact_search);
        callback();
    });

    this.Given(/^PO Create Family "(.*)" "(.*)" "(.*)" "(.*)"$/, function (family_name, family_status, family_type, add_family_membership, callback) {
        this.actionwords.pOCreateFamily(family_name, family_status, family_type, add_family_membership);
        callback();
    });
}
