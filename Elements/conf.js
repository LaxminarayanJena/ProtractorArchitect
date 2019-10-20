var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
		directConnect: true,
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['DataTest.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  },


onPrepare: function() {
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'target/screenshots'
        })
      );
},
suites :
{
	smoke:['ChainLocators.js','DropDown.js'],
	Regression:'FirstTest.js'
	//npm run start to update the driver and run the smoke test only
},

jasmineNodeOpts: {   
  showColors: true,
  }


};