describe('Alerts Demo',function(){

	it('open nonangular js alerts',function(){
		
	
		browser.waitForAngularEnabled(false);
		browser.get('http://qaclickacademy.com/practice.php');
		
		element(by.id("confirmbtn")).click();
		browser.switchTo().alert().accept().then(function()
				
		{
			browser.sleep(5000);
		})
		
		
	})
	
	
	
	
	
})
