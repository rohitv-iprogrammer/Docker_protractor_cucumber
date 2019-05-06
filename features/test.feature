Feature: Testing Application

  @onlyRunThis
  Scenario: Testing Login page 

    Given I am on the login page
    When I enter username
    And I enter password
    And I click on login button
    Then I should see Homepage

    #@onlyRunThis
    Scenario: Testing Aditya birla native app POC  

    Given I am on the self page
    When I click on salaried
    And I enter Email
    And I click on submit
    And I enter mobile number
    And I click on request OTP
    Then I should see ENTER OTP MSG