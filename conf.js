
exports.config = {
   
   // seleniumAddress: 'http://192.168.151.209:4444/wd/hub',
   // baseUrl: 'https://ssguat.serviceurl.in/sme/abmu/selfserve/#/',
   //directConnect: true,
   angular: false,
    capabilities: {
        browserName:'chrome',
        shardTestFiles: true,
        maxInstances: 5,
        host:'chrome'
    },

    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
    specs: [
        'features/test.feature' // Specs here are the cucumber feature files
    ],
    // cucumber command line options
    cucumberOpts: {
        'no-colors': true,
        require: ['features/step-definition/*.steps.js'],  // require step definition files before executing features
        tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        strict: true,                  // <boolean> fail if there are any undefined or pending steps
        format: [],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        dryRun: false,                 // <boolean> invoke formatters without executing steps
        compiler: [],                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        failFast: true
    },
    onPrepare: function () {
        browser.manage().window().maximize(); // maximize the browser before executing the feature files
        browser.manage().timeouts().implicitlyWait(5000);
    },
    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    plugins: []    
};










