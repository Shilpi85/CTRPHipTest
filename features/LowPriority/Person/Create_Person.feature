Feature: Create Person


  @lowPriority
  Scenario: PO- Person Field lengths (uid:078b2b36-d4aa-4425-8805-02a889577777)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Person field lengths "10" "165" "40" "165" "10" "55" "10" "4"
