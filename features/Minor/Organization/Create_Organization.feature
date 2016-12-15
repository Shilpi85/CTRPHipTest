Feature: Create Organization


  @minor @JIRA-CTRP-15
  Scenario: PO- Organization Field lengths (uid:59de267e-c311-4776-a911-1140756596bd)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Organization field lengths "165" "165" "255" "255" "165" "10" "55" "10" "4"
