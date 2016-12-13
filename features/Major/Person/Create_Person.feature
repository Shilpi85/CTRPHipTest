Feature: Create Person


  @major @JIRA-CTRP-19
  Scenario: PO- Check for Duplicate Person (uid:c7495433-94ac-44ff-875f-d5fc34c82843)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Person Exist "William" "Gates" "Active"
    And Person Name "William" "Gates"
    Then Warning Message "Warning: Person exists in the database. Please verify and create a new Person record."

  @major @JIRA-CTRP-21
  Scenario: PO- Request New Person (uid:07034e4e-44c4-4c3e-8b77-c80b67d8303e)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Person

  @major
  Scenario: Reg- Request New Person (uid:27e181cc-5919-46fc-a9a9-10c4e516c5c5)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    Then Request New Person