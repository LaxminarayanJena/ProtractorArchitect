
import {browser} from "protractor";
import {Given,When,Then} from "cucumber";
import { async } from "q";
import {Calculator} from "../PageObjects/Calculator";
let calc = new Calculator();

         Given('I will navigate to Calc Site', async()=> {
            await browser.get('https://juliemr.github.io/protractor-demo/');
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
       
  

         Given('I will navigate to Angular js page', function () {
           
         });
       
  

         When('I click on header link', function () {
           
         });
       
   

         When('you will navigate to angular page', function () {
          
         });
       
  

         Then('you will enter {string} in search box', function (string) {
           
         });