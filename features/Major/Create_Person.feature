Feature: Create Person


  @major @JIRA-CTRP-19
  Scenario: PO- Check for Duplicate Person (uid:8d9b3941-df7f-402c-a7ea-86219ee44220)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Person Exist "Henry" "ford" "Active"
    And Person Name "henry" "ford"
    Then Warning Message "Warning: Person exists in the database. Please verify and create a new Person record."

  @major @JIRA-CTRP-21
  Scenario: PO- Request New Person (uid:dc54bc10-075d-4a85-824d-235bec76831e)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Person

  @major
  Scenario: Reg- Request New Person (uid:0f6c98f4-abd1-4e69-860c-7d2788d3bcc3)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    Then Request New Organization
