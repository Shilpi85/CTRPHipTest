Feature: Create Organization


  @critical
  Scenario: PO- Create Organization (uid:3287a0a8-41b8-489f-a504-4d409cd8cf24)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Organization"
    And PO Create Organization "Henry Ford Health System" "Henry Ford" "2799 W. Grand Blvd." "Building 5" "United States" "Michigan" "Detroit" "48202" "henryford@hfs.com" "(313) 916-1666" "01"