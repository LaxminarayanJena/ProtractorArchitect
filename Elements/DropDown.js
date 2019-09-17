describe('Protractor Element Demo', function() {
	
	
	function Cal(a,b,c)
	{
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element.all(by.tagName("option")).each(function(item)
				{
					item.getAttribute("value").then(function(values)
					{
						if(values==c)
							{
							item.click();
							}
					})
				})
				element(by.id("gobutton")).click();
	}

	it('Locators', function() {

		browser.get('https://juliemr.github.io/protractor-demo/');
		

		Cal(3,7,"MULTIPLICATION");
		Cal(7,7,"SUBTRACTION");
		
		element(by.model("operator")).element(by.css("option:nth-child(4)")).click().then(function(){
			
			
			browser.sleep(3000);
			console.log("clicked dropdown");
			})
			
			
			
				
				
				})				
				})
