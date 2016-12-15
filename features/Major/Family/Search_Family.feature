Feature: Search Family


  @major @JIRA-CTRP-31
  Scenario: PO- Search Family (uid:c158b4ab-6e3b-4e50-a060-79364a5ec030)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Family"
    And PO Search Family "Washington Cancer Center" "Active" "NIH" "on"
