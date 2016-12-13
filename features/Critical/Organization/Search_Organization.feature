Feature: Search Organization


  @critical @JIRA-CTRP-16
  Scenario: PO- Search Organization (uid:08eea178-c817-4ca6-940e-68aa66da650b)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Organization"
    And PO Search Organization "Henry Ford Health System" "true" "" "CTRP" "" "Active" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "Complete" "ctrpcurator" "" "" "" "true"

  @critical @JIRA-CTRP-17
  Scenario: Reg- Search Organization (uid:10fb946b-8c68-4d5b-81ae-9deb7f8b8fb9)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Organization"
    And Reg Search Organization "Henry Ford Health System" "true" "" "" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "ctrpcurator" "true"
