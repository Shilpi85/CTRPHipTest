Feature: Create Family


  @minor
  Scenario: PO- Check for Duplicate Family (uid:d82d2afe-3508-4238-9550-15ec55504bb0)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Family Exist "Washington Cancer Center" "Active"
    And Family Name "Washington Cancer Center"
    Then Warning Message "Warning: Family exists in the database. Please verify and create a new Family record."
