Feature:I am going to validate my website functionalities

Scenario: Calculator Add functionality testing
Given I will navigate to Calc Site
When I add two numbers "3" and "5"
Then the output displayed should be "8"

Scenario: Calculator Add functionality testing
Given I will navigate to "Calc" Site
When I add two numbers "2" and "7"
Then the output displayed should be "9"


Scenario Outline: Navigate to angular website
Given I will navigate to "AngularJs" Site
When I click on header link
And you will navigate to angular page
Then you will enter "<key>" in search box

Examples:
| key|
|hello|
|hey|



