
import {browser} from "protractor";
import {Given,When,Then} from "cucumber";
import { async } from "q";
import {Calculator} from "../PageObjects/Calculator";
import {angularHomePageObjects} from "../PageObjects/angularHomePageObjects";
let calc = new Calculator();
let angular = new angularHomePageObjects();

         Given('I will navigate to Calc Site', async()=> {
            await browser.get('https://juliemr.github.io/protractor-demo/');
         });
       

         Given('I will navigate to {string} Site', async(string)=> {
           if(string=="calc")
           {
            await browser.get('https://juliemr.github.io/protractor-demo/');
           }
           else if(string=="AngularJs")
           {
           await browser.get("https://angularjs.org");
           }
          });



         When('I add two numbers {string} and {string}', async(string, string2)=> {
            
            await calc.firstEditBox.sendKeys(string);
            await calc.secondEditBox.sendKeys(string2);
          
            
         });


         



         Then('the output displayed should be {string}', async(string)=> {
            await calc.go.click();
		    await calc.getResult.getText().then(function(text)
		{
		console.log(text);
		
        })
        

         });
       
  

    
  

         When('I click on header link', async()=>  {
           
           
           await  angular.headerText.click();
		
         });
       
   

         When('you will navigate to angular page', function () {
          console.log("navigated to new page");
         });
       
  

         Then('you will enter {string} in search box', async(string)=> {
           
           await angular.search.sendKeys(string);
         });