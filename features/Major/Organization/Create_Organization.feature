Feature: Create Organization


  @major @JIRA-CTRP-19
  Scenario: PO- Check for Duplicate Organization (uid:60710759-d455-4b2c-98ad-72826d64b3bf)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    * Organization Exist "Henry Ford Health System" "Active"
    And Organization name "Henry Ford Health System"
    Then Warning Message "Warning: Organization exists in the database. Please verify and create a new Organization record."

  @major @JIRA-CTRP-22
  Scenario: PO- Request New Organization (uid:7ec49470-467d-4066-833f-07779f8946e7)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Organization

  @major
  Scenario: Reg- Request New Organization (uid:12a11002-ed39-424c-bb27-3cf5f355ee82)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    Then Request New Organization