exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Alerts.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};