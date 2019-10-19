describe('Protractor Element Demo',function(){
var obj= require("./Page.js");


beforeEach(function()
		{
			obj.getURL();
		});
		


	it('Testing calculator',function(){
		
		
		obj.firstinput.sendKeys("3");
		obj.secondinput.sendKeys("5");
		
		obj.goButton.click();
		
		
		
		expect(obj.result.getText()).toBe("8");
		obj.result.getText().then(function(text)
		{
		console.log(text);
		
		})
		
		
		
	})
	
	
	afterEach(function()
	{
		console.log("Test is completed");
	})
	
	
	
})


