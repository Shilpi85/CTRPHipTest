Feature: Create Person


  @critical
  Scenario: PO- Create Person (uid:48416b79-36df-4f50-9f82-ace24d349d27)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Person"
    And PO Create Person "px" "William" "Henry" "Gates" "sx" "Complete" "Active" "ctrpaum@gmail.com" "240-276-6978" "6978" "Henry Ford Health System"
