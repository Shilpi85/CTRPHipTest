Feature: Create Family


  @critical @JIRA-CTRP-28
  Scenario: PO- Create Family (uid:01430f6b-bd7f-4051-85b4-b8ff688ab343)
    Given Login in to CTRP app "http://ctrp-qa.ncifcrf.gov/" "ctrpcurator" "Welcome01"
    And Select page "Add Family"
    And PO Create Family "Washington Cancer Center" "Active" "NIH" "Henry Ford Health System"
