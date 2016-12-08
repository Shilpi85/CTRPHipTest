Feature: Search Organization


  @critical
  Scenario: PO- Search Organization (uid:a3b716a9-44bf-4e8a-bd1c-6bf1b135d1b8)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Organization"
    And PO Search Organization "Henry Ford Health System" "true" "" "CTRP" "" "Active" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "Complete" "ctrpcurator" "" "" "" "true"

  @critical
  Scenario: Reg- Search Organization (uid:da317ed6-a0b0-4887-8acf-49a86c080ffc)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Organization"
    And Reg Search Organization "Henry Ford Health System" "true" "" "" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "ctrpcurator" "true"
