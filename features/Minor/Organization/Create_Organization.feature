Feature: Create Organization


  @minor
  Scenario: PO- Organization Field lengths (uid:875c47a8-5e7a-431e-bcb4-2023361cc717)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Organization field lengths "165" "165" "255" "255" "165" "10" "55" "10" "4"
