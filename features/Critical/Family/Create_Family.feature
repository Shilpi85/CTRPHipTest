Feature: Create Family


  @critical
  Scenario: PO- Create Family (uid:8630ba46-b84d-4e15-ada0-3fa178d567b6)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Family"
    And PO Create Family "Washington Cancer Center" "Active" "NIH" "Henry Ford Health System"
