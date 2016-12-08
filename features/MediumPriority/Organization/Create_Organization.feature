Feature: Create Organization


  @mediumPriority
  Scenario: PO- Check for Duplicate Organization (uid:60710759-d455-4b2c-98ad-72826d64b3bf)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    * Organization Exist "Henry ford" "Active"
    And Organization name "Henry ford"
    Then Warning Message "Warning: Organization exists in the database. Please verify and create a new Organization record."

  @mediumPriority
  Scenario: PO- Request New Organization (uid:7ec49470-467d-4066-833f-07779f8946e7)
