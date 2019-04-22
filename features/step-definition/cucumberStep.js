//var cucumberStep = function () {
  var cucumber = require("cucumber");
    Given = cucumber.Given;
    When =  cucumber.When,
    Then = cucumber.Then;
   
    var keywordCheck = require("./keyword");
    
    keywordCheck();
    console.log('wait calling',keywordCheck);

//var chai = require('chai'),
    //expect = chai.expect,
    //chaiAsPromised = require('chai-as-promised');
    //chai.use(chaiAsPromised);

    Given(/^I am on the login page$/, function (callback) {    
      // Write code here that turns the phrase above into concrete actions
    
    browser.ignoreSynchronization=true; // To be added if the application is non-angular
    browser.driver.manage().window().maximize(); // To maximize the window
    browser.get("https://www.facebook.com").then(function(){      
        callback(); // To tell the cucumber that we are done with this step
       })
    
    });
    
    When(/^I enter username$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
    element(by.id("email")).sendKeys("abc@gmail.com").then(function(){
      callback();
     });
    });
    
    When(/^I enter password$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions
      element(by.id("pass")).sendKeys("*****").then(function(){
      callback();
     });
    });
    
    When(/^I click on login button$/, function (callback) {
      // Write code here that turns the phrase above into concrete actions 
      element(by.id("u_0_l")).click().then(function(){
      callback();
     });
    });

    Then('I should see Homepage', function () {
      // Write code here that turns the phrase above into concrete actions
      console.log("here is the game god is almighty");
     // return 'pending';
    });
    
    //};
    //module.exports = cucumberStep;
    