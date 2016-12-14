Feature: Create Person


  @minor @JIRA-CTRP-20
  Scenario: PO- Person Field lengths (uid:dadb6374-6977-4dfb-b061-465d8f914b8a)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Person field lengths "10" "165" "40" "165" "10" "55" "10" "4"
