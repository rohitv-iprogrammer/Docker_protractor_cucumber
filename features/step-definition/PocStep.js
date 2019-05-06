var cucumber = require("cucumber");
    Given = cucumber.Given;
    When =  cucumber.When,
    Then = cucumber.Then;
    And = cucumber.And;
   
    var keywordCheck = require("./keyword");
    var assert = require('assert');
    
    keywordCheck();
    console.log('wait calling',keywordCheck);


Given(/^I am on the self page$/, function (callback) {    
    // Write code here that turns the phrase above into concrete actions
  browser.ignoreSynchronization=true; // To be added if the application is non-angular
  browser.driver.manage().window().maximize(); // To maximize the window
  browser.get("https://ssguat.serviceurl.in/sme/abmu/selfserve/#/").then(function(){      
      callback(); // To tell the cucumber that we are done with this step
     })
  });


  When(/^I click on salaried$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions 
    element(by.xpath("//p[contains(text(),'Salaried')]")).click().then(function(){
      callback();
   });
  });

  When(/^I enter Email$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    element(by.xpath("//input[@id='formBasicEmail']")).sendKeys("testing@gmail.com").then(function(){
    callback();
   });
  });


  When(/^I click on submit$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions 
    element(by.xpath("//button[@class='emailSubmitBtn btn btn-danger']")).click().then(function(){
    callback();
   });
  });

  When(/^I enter mobile number$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    
    var ChangeNumber = element(by.xpath("//a[contains(text(),'Change number?')]"));
    if(ChangeNumber.isDisplayed())
    {
      ChangeNumber.click();
    }
      //keywordCheck();
      console.log("inside function else***** 3..")
      element(by.xpath("//input[@id='formBasicMobile']")).click();
      element(by.xpath("//input[@id='formBasicMobile']")).sendKeys("9975718716").then(function(){
        callback();
      });
     //element(by.xpath("//input[@id='formBasicMobile']")).sendKeys("7057021963");
  });

   
  When(/^I click on request OTP$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions 
    element(by.xpath("//button[@class='btnotpSubmit btn btn-danger']")).click().then(function(){
    callback();
   });
  });

  
  Then('I should see ENTER OTP MSG', function () {
    // Write code here that turns the phrase above into concrete actions
   var otp = element(by.xpath("//label[text()='Enter OTP']")).getText();
    
    console.log("here is the game god is almighty");
   // return 'pending';
  });