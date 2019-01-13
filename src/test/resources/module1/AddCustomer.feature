#Author: your.email@your.domain.com
@abcd
Feature: To test add customer functionality

  @abcd1 @test1
  Scenario: to test submit button 1
    Given The user is in gurutelecom cust home page
    And The user navigates to add customer page
    When The user fill in the details
      | fname   | lname | email            | adress  | phnum     |
      | balaji  | kumar | kumar1@gmail.com | chennai | 123456789 |
      | balaji1 | test  | kumar2@gmail.com | chennai | 123456781 |
      | test    | kumar | kumar3@gmail.com | chennai | 123456782 |
    And The user clicks the submit button
    Then The user should see the customer id generated

  @abcd2 @test2
  Scenario: to test submit button 2
    Given The user is in gurutelecom cust home page
    And The user navigates to add customer page
    When The user fill in the details
      | fname   | lname | email            | adress  | phnum     |
      | balaji  | kumar | kumar1@gmail.com | chennai | 123456789 |
      | balaji1 | test  | kumar2@gmail.com | chennai | 123456781 |
      | test    | kumar | kumar3@gmail.com | chennai | 123456782 |
    And The user clicks the submit button
    Then The user should see the customer id generated

  @abcd3
  Scenario: to test submit button 3
    Given The user is in gurutelecom cust home page
    And The user navigates to add customer page
    When The user fill in the details
      | fname   | lname | email            | adress  | phnum     |
      | balaji  | kumar | kumar1@gmail.com | chennai | 123456789 |
      | balaji1 | test  | kumar2@gmail.com | chennai | 123456781 |
      | test    | kumar | kumar3@gmail.com | chennai | 123456782 |
    And The user clicks the submit button
    Then The user should see the customer id generated
