Feature: Create Person


  @mediumPriority
  Scenario: PO- Check for Duplicate Person (uid:c7495433-94ac-44ff-875f-d5fc34c82843)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Person Exist "Henry" "ford" "Active"
    And Person Name "henry" "ford"
    Then Warning Message "Warning: Person exists in the database. Please verify and create a new Person record."
