Feature: Search Person


  @critical @JIRA-CTRP-27
  Scenario: PO- Search Person  (uid:867c37b9-700e-4445-8859-8fed0540784c)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Person"
    And PO Search Person "William" "Gates" "Henry Ford Health System" "CTRP" "" "Active" "ctrpaum@gmail.com" "240-276-6978" "Complete" "Create" "05-Dec-2016" "05-Dec-2017" "ctrpcurator" "On"

  @critical @JIRA-CTRP-24
  Scenario: Reg- Search Person (uid:0b955b5f-d35c-423d-b7ef-5da5608b046b)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Person"
    And Reg Search Person "William" "Gates" "Henry Ford Health System" "1234" "ctrpaum@gmail.com" "240-276-6978" "On"
