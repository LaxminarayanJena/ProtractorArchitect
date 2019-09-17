exports.config = {
		directConnect: true,
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['DropDown.js'],
  
  
  
  capabilities:
	  {
	  'browserName':'chrome'
	  }
};