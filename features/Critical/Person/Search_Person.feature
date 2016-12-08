Feature: Search Person


  @critical
  Scenario: PO- Search Person  (uid:1dd16a2b-1534-47c7-a9d1-158b9d72f64c)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Person"
    And PO Search Person "William" "Gates" "Henry Ford Health System" "CTRP" "" "Active" "ctrpaum@gmail.com" "240-276-6978" "Complete" "Create" "05-Dec-2016" "05-Dec-2017" "ctrpcurator" "On"

  @critical
  Scenario: Reg- Search Person (uid:171a87cf-6e9c-45ba-8576-f76cd5dccbf7)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Person"
    And Reg Search Person "William" "Gates" "Henry Ford Health System" "1234" "ctrpaum@gmail.com" "240-276-6978" "On"
