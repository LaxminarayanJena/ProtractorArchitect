describe('Protractor Element Demo',function(){

	it('Locators',function(){
		
		
		
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		browser.sleep(5000);
		element(by.model("first")).sendKeys("3");
		browser.sleep(5000);
	})
	
	
	
	
	
})


