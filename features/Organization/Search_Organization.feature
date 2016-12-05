Feature: Search Organization


  Scenario: PO- Search Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Search Organization"
    And PO Search Organization "Henry Ford Health System" "true" "" "CTRP" "" "Active" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "Complete" "ctrpcurator" "" "" "" "true"

  Scenario: Reg- Search Organization
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrptrialsubmitter" "Welcome01"
    And Select page "Search Organization"
    And Reg Search Organization "Henry Ford Health System" "true" "" "" "Detroit" "48202" "United States" "(313) 916-1666" "henryford@hfs.com" "Michigan" "ctrpcurator" "true"
