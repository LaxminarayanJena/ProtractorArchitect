import {After,Before, Status} from "cucumber";
import {browser} from "protractor";




Before({tags: "@CalculatorTesting"}, function () {
  
    browser.manage().window().maximize();
});

After({tags: "@CalculatorTesting"}, function () {
  
    console.log("Test is completed");
});


Before({tags: "@AngularTesting"}, function () {
  
    console.log("i need to execute first");
});


After(async function(scenario) {
    
    if(scenario.result.status=== Status.FAILED)
    {
       const screenshot= await browser.takeScreenshot();
       this.attach(screenshot,"image/png");

    }
});

