exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ChildWindows.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};