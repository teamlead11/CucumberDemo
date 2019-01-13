#Author: your.email@your.domain.com
@smoke
Feature: Add Tariff plan

  @test @us123
  Scenario Outline: To Add tariff plan
    Given The user is in gurutelecom home page
      |  |  |
    And The user navigates to add tariff plan page
    When The user fill in the plan details "<MonthRent>", "<FreeLoc>","<FreeInt>","<Freesms>", "<LocCharge>","<intCharge>","<SMSCharge>"
    And Clicks the submit button
    Then The user should see the success message

    Examples: 
      | MonthRent | FreeLoc | FreeInt | Freesms | LocCharge | intCharge | SMSCharge |
      |       500 |     100 |     200 |     300 |       400 |       500 |       600 |
