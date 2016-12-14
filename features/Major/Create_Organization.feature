Feature: Create Organization


  @major @JIRA-CTRP-14
  Scenario: PO- Check for Duplicate Organization (uid:1399b1d1-eef6-4e10-94c2-29524a96fabe)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    * Organization Exist "Henry Ford Health System" "Active"
    And Organization name "Henry Ford Health System"
    Then Warning Message "Warning: Organization exists in the database. Please verify and create a new Organization record."

  @major @JIRA-CTRP-22
  Scenario: PO- Request New Organization (uid:80bace36-b3b8-44c3-83e1-5eed9e5b86db)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Organization

  @major @JIRA-CTRP-32
  Scenario: Reg- Request New Organization (uid:28e0b2bb-8ca3-4e0e-a373-365432aa2b9d)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Organization
