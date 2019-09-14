describe('Protractor baby steps',function()

{
	it('Open angular js website',function()
	{
		browser.get("https://angularjs.org");
		browser.get("http://juliemr.github.io/protractor-demo/").then(function(){
			
		
		browser.sleep(9000);
		console.log("last step");
		})
		
		
	}
	)
	
	
	it('close browser',function()
	{
		
	})
	
	
}


)

//first parameter-testsuitename,function