Feature: Create Family


  @minor @JIRA-CTRP-29
  Scenario: PO- Check for Duplicate Family (uid:31c0c75b-266b-4e23-94b3-bd69c45b80d7)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Family Exist "Washington Cancer Center" "Active"
    And Family Name "Washington Cancer Center"
    Then Warning Message "Warning: Family exists in the database. Please verify and create a new Family record."

  @minor @JIRA-CTRP-30
  Scenario: PO- Family Field lengths (uid:0e867fb2-27a8-4061-886a-20e69a331a41)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Family field lengths "165"
