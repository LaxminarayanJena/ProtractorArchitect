describe('Synchronisation Demo',function(){

	it('open nonangular js alerts',function(){
		
	
		browser.waitForAngularEnabled(false);
		browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
		
		element(by.css("a[href*='Ajax']")).click();
		
		var EC=protractor.ExpectedConditions;
		browser.wait(EC.invisibilityOf(element(by.id("loader"))),5000);
		
		element(by.id("results")).getText().then(function(text)
				{
			console.log(text);
				})
		
		

		
	})
	
	
	
	
	
})
