Feature: Create Organization


  @critical @JIRA-CTRP-26 @JIRA-CTRP-13
  Scenario: PO- Create Organization (uid:09beb92b-5b0d-445f-8a3d-4ef58ada1052)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Organization"
    And PO Create Organization "Henry Ford Health System" "Henry Ford" "2799 W. Grand Blvd." "Building 5" "United States" "Michigan" "Detroit" "48202" "henryford@hfs.com" "(313) 916-1666" "01"