Feature: Search Family


  @mediumPriority
  Scenario: PO- Search Family (uid:18d72f4e-cc51-4f6f-a530-38b32480728a)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Family"
    And PO Search Family "Washington Cancer Center" "Active" "NIH" "on"
