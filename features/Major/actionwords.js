exports.Actionwords = {
    loginInToCTRPApp: function (url, username, password) {
        // TODO: Implement action: "Given URL of CTRP page is " + String(URL)
        // TODO: Implement action: "And I enter the Username as " + String(username)
        // TODO: Implement action: "And I enter the Password as " + String(password)
        // TODO: Implement result: "Then the User should be logged in"
        throw 'Not implemented';
    },
    selectPage: function (page) {
        // TODO: Implement action: "And I want to " + String(page)
        // TODO: Implement result: "Then I should be in " + String(page)
        throw 'Not implemented';
    },
    pOCreateOrganization: function (name, alias, address1, address2, country, state, city, postal_code, email, phone, phone_ext) {
        // TODO: Implement action: "And I enter the Organization Name " + String(name)
        // TODO: Implement action: "And I enter the Organization Alias " + String(alias)
        // TODO: Implement action: "And I enter the Organization Address1 " + String(address1)
        // TODO: Implement action: "And I enter the Organization Address2 " + String(address2)
        // TODO: Implement action: "And I select the Organization Country " + String(country)
        // TODO: Implement action: "And I enter the Organization State " + String(state)
        // TODO: Implement action: "And I enter the Organization City " + String(city)
        // TODO: Implement action: "And I enter the Organization Postal Code " + String(postalCode)
        // TODO: Implement action: "And I enter the Organization Email " + String(email)
        // TODO: Implement action: "And I enter the Organization Phone " + String(phone)
        // TODO: Implement action: "And I enter the Organization Phone Extension " + String(phoneExt)
        this.clickButton("save");
        // TODO: Implement result: "Then Organization should be created"
        throw 'Not implemented';
    },
    clickButton: function (button) {
        // TODO: Implement action: "And I click on " + String(button)
        throw 'Not implemented';
    },
    pOSearchOrganization: function (name, alias, family_name, source_context, source_id, source_status, city, postal_code, country, phone, email, state, processing_status, updated_by, service_request, last_updated_start_date, last_updated_end_date, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Organization search"
        // TODO: Implement action: "and I check the Alias " + String(alias) + " for Organization search"
        // TODO: Implement action: "and I enter the Family Name " + String(familyName) + " for Organization search"
        // TODO: Implement action: "and I select the Source Context " + String(sourceContext) + " for Organization search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Organization search"
        // TODO: Implement action: "and I select the Source Status " + String(sourceStatus) + " for Organization search"
        // TODO: Implement action: "and I enter the City " + String(city) + " for Organization search"
        // TODO: Implement action: "and I enter the Postal Code " + String(postalCode) + " for Organization search"
        // TODO: Implement action: "and I select the Country " + String(country) + " for Organization search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Organization search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Organization search"
        // TODO: Implement action: "and I select the State " + String(state) + " for Organization search"
        // TODO: Implement action: "and I select the processing Status " + String(processingStatus) + " for Organization search"
        // TODO: Implement action: "and I enter the Updated By " + String(updatedBy) + " for Organization search"
        // TODO: Implement action: "and I select the Service Request " + String(serviceRequest) + " for Organization search"
        // TODO: Implement action: "and I select the Last Updated Start Date " + String(lastUpdatedStartDate) + " for Organization search"
        // TODO: Implement action: "and I select the Last Updated End Date " + String(lastUpdatedEndDate) + " for Organization search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Organization search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        throw 'Not implemented';
    },
    regSearchOrganization: function (name, alias, family_name, source_id, city, postal_code, country, phone, email, state, updated_by, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Organization search"
        // TODO: Implement action: "and I check the Alias " + String(alias) + " for Organization search"
        // TODO: Implement action: "and I enter the Family Name " + String(familyName) + " for Organization search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Organization search"
        // TODO: Implement action: "and I enter the City " + String(city) + " for Organization search"
        // TODO: Implement action: "and I enter the Postal Code " + String(postalCode) + " for Organization search"
        // TODO: Implement action: "and I select the Country " + String(country) + " for Organization search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Organization search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Organization search"
        // TODO: Implement action: "and I select the State " + String(state) + " for Organization search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Organization search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Organization"
        throw 'Not implemented';
    },
    pOCreatePerson: function (prefix, f_name, m_name, l_name, suffix, processin_status, source_status, email, phone, phone_ext, affiliated_org) {
        // TODO: Implement action: "And I enter the Person Prefix " + String(prefix)
        // TODO: Implement action: "And I enter the Person First Name " + String(fName)
        // TODO: Implement action: "And I enter the Person Middle Name " + String(mName)
        // TODO: Implement action: "And I enter the Person Last Name " + String(lName)
        // TODO: Implement action: "And I enter the Person Suffix " + String(suffix)
        // TODO: Implement action: "And I enter the Person Email " + String(email)
        // TODO: Implement action: "And I enter the Person Phone " + String(phone)
        // TODO: Implement action: "And I enter the Person Phone Extension " + String(phoneExt)
        // TODO: Implement action: "And I select the Person Affiliated Organization " + String(affiliatedOrg)
        this.clickButton("save");
        // TODO: Implement result: "Then Person should be created"
        throw 'Not implemented';
    },
    pOSearchPerson: function (f_name, l_name, affiliation, source_context, source_id, source_status, email, phone, processing_status, service_request, last_updated_start_date, last_updated_end_date, updated_by, exact_search) {
        // TODO: Implement action: "and I enter the First Name " + String(fName) + " for Person search"
        // TODO: Implement action: "and I enter the Last Name " + String(lName) + " for Person search"
        // TODO: Implement action: "and I enter the affiliation " + String(affiliation) + " for Person search"
        // TODO: Implement action: "and I select the Source Context " + String(sourceContext) + " for Person search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Person search"
        // TODO: Implement action: "and I select the Source Status " + String(sourceStatus) + " for Person search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Person search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Person search"
        // TODO: Implement action: "and I select the processing Status " + String(processingStatus) + " for Person search"
        // TODO: Implement action: "and I enter the Updated By " + String(updatedBy) + " for Person search"
        // TODO: Implement action: "and I select the Service Request " + String(serviceRequest) + " for Person search"
        // TODO: Implement action: "and I select the Last Updated Start Date " + String(lastUpdatedStartDate) + " for Person search"
        // TODO: Implement action: "and I select the Last Updated End Date " + String(lastUpdatedEndDate) + " for Person search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Person search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Person"
        throw 'Not implemented';
    },
    regSearchPerson: function (f_name, l_name, affiliation, source_id, email, phone, exact_search) {
        // TODO: Implement action: "and I enter the First Name " + String(fName) + " for Person search"
        // TODO: Implement action: "and I enter the Last Name " + String(lName) + " for Person search"
        // TODO: Implement action: "and I enter the affiliation " + String(affiliation) + " for Person search"
        // TODO: Implement action: "and I enter the Source ID " + String(sourceID) + " for Person search"
        // TODO: Implement action: "and I enter the Phone " + String(phone) + " for Person search"
        // TODO: Implement action: "and I enter the Email " + String(email) + " for Person search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Person search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Person"
        throw 'Not implemented';
    },
    pOCreateFamily: function (family_name, family_status, family_type, add_family_membership) {
        // TODO: Implement action: "And I enter the Family Name " + String(familyName)
        // TODO: Implement action: "And I select the Family Status " + String(familyStatus)
        // TODO: Implement action: "And I select the Family Type " + String(familyType)
        // TODO: Implement action: "And I select the Family Membership " + String(addFamilyMembership)
        throw 'Not implemented';
    },
    pOSearchFamily: function (name, family_type, family_status, exact_search) {
        // TODO: Implement action: "and I enter the Name " + String(name) + " for Family search"
        // TODO: Implement action: "and I select the Family Type " + String(familyType) + " for Family search"
        // TODO: Implement action: "and I select the Family Status " + String(familyStatus) + " for Family search"
        // TODO: Implement action: "and I check the Exact Search " + String(exactSearch) + " for Family search"
        // And Click button "search"
        this.clickButton("search");
        // TODO: Implement result: "Then Result  should be displayed for Family"
        throw 'Not implemented';
    },
    organizationExist: function (org_name, status) {
        // TODO: Implement action: "and an organization already exist in CTRP with name \"orgName\" and status \"status\""
        throw 'Not implemented';
    },
    organizationName: function (name) {
        // TODO: Implement action: "and I enter the Organization name \"name\""
        throw 'Not implemented';
    },
    warningMessage: function (warning_message) {
        // TODO: Implement action: "and it should give a warning message as \"warningMessage\""
        throw 'Not implemented';
    },
    personName: function (f_name, l_name) {
        // TODO: Implement action: "and I enter the fname as \"fName\" and lname as \"lName\" "
        throw 'Not implemented';
    },
    personExist: function (f_name, l_name, status) {
        // TODO: Implement action: "and a Person exist with fname as \"fName\" and lName \"lName\" and source status as \"status\""
        throw 'Not implemented';
    },
    familyExist: function (family_name, status) {
        // TODO: Implement action: "and Family exist with name as \"familyName\" and status as \"status\""
        throw 'Not implemented';
    },
    familyName: function (name) {
        // TODO: Implement action: "and I enter the Family Name as \"name\""
        throw 'Not implemented';
    },
    familyFieldLengths: function (family_name) {
        // TODO: Implement action: "and length of Family name should be \"familyName\""
        throw 'Not implemented';
    },
    organizationFieldLengths: function (name, alias, address1, address2, city, postal_code, email, phone, phone_ext) {
        // TODO: Implement action: "and Organization name field length is \"name\""
        // TODO: Implement action: "and Organization alias field length is \"alias\""
        // TODO: Implement action: "and Organization address1 field length is \"address1\""
        // TODO: Implement action: "and Organization address2 field length is \"address2\""
        // TODO: Implement action: "and Organization city field length is \"city\""
        // TODO: Implement action: "and Organization postal code field length is \"postalCode\""
        // TODO: Implement action: "and Organization email field length is \"email\""
        // TODO: Implement action: "and Organization phone field length is \"phone\""
        // TODO: Implement action: "and Organization phone Ext field length is \"phoneExt\""
        throw 'Not implemented';
    },
    personFieldLengths: function (prefix, f_name, m_name, l_name, suffix, email, phone, phone_ext) {
        // TODO: Implement action: "and Person prefix field length is \"prefix\""
        // TODO: Implement action: "and Person first name field length is \"fName\""
        // TODO: Implement action: "and Person middle name field length is \"mName\""
        // TODO: Implement action: "and Person last name field length is \"lName\""
        // TODO: Implement action: "and Person suffix field length is \"suffix\""
        // TODO: Implement action: "and Person email field length is \"email\""
        // TODO: Implement action: "and Person phone field length is \"phone\""
        // TODO: Implement action: "and Person phone Ext field length is \"phoneExt\""
        throw 'Not implemented';
    },
    iWantToDoFirstStepTest: function () {

    },
    iAddedSecondStep: function () {

    },
    requestNewOrganization: function () {
        // TODO: Implement action: "and I should be able to request New Organization"
        throw 'Not implemented';
    },
    requestNewPerson: function () {
        // TODO: Implement action: "And I should be able to Request New Person"
        throw 'Not implemented';
    }
};