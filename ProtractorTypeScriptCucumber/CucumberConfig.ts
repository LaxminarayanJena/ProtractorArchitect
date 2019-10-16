import {Config} from "protractor" ;

export let config:Config = {
    
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    capabilities: {
      browserName: 'chrome'
    },
    specs: ['../features/demo.Feature'],
    cucumberOpts:{
      require:[
        './StepDefinations/*.js'
      ]
    }
  
    
  };