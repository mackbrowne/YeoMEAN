// Karma configuration
// Generated on Mon Dec 02 2013 14:44:30 GMT-0500 (EST)
module.exports = function(config) {
  config.set({
      // your config
      frameworks: ["jasmine", "mocha"],

      // base path, that will be used to resolve files and exclude
      basePath : '',

      // list of files / patterns to load in the browser
      files : [
      'app/bower_components/jquery/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js',
      'app/scripts/app.js',
      'app/scripts/init.js',
      'app/scripts/services/*.js',
      'app/scripts/controllers/*.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'test/spec/**/*.js'
      // 'test/spec/services/*.js'
      ],

      // coverage reporter generates the coverage
      reporters: ['progress', 'coverage'],

      preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        'app/scripts/app.js': ['coverage'],
        'app/scripts/init.js': ['coverage'],
        'app/scripts/services/*.js': ['coverage'],
        'app/scripts/controllers/*.js': ['coverage'],
        'app/scripts/**/*.js': ['coverage']
      },

      // optionally, configure the reporter
      coverageReporter: {
        type : 'html',
        dir : 'coverage/'
      },

      // list of files to exclude
      exclude : [

      ],

      // test results reporter to use
      // possible values: 'dots', 'progress', 'junit'
      reporters : ['progress'],

      // web server port
      port : 9876,

      // cli runner port
      runnerPort : 9100,

      // enable / disable colors in the output (reporters and logs)
      colors : true,

      // level of logging
      // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
      logLevel : LOG_INFO,

      // enable / disable watching file and executing tests whenever any file changes
      autoWatch : true,

      // Start these browsers, currently available:
      // - Chrome
      // - ChromeCanary
      // - Firefox
      // - Opera
      // - Safari (only Mac)
      // - PhantomJS
      // - IE (only Windows)
      browsers :['Chrome', 'Firefox'],


      // If browser does not capture in given timeout [ms], kill it
      captureTimeout: 6000,


      // Continuous Integration mode
      // if true, it capture browsers, run tests and exit
      singleRun: false

    });
};

// // base path, that will be used to resolve files and exclude
// basePath = '';

// frameworks: ["mocha"]

// // list of files / patterns to load in the browser
// files = [
// JASMINE,
// JASMINE_ADAPTER,
// 'app/bower_components/angular/angular.js',
// 'app/bower_components/angular-route/angular-route.js',
// 'app/bower_components/angular-resource/angular-resource.js',
// 'app/bower_components/angular-cookies/angular-cookies.js',
// 'app/bower_components/angular-sanitize/angular-sanitize.js',
// 'app/scripts/app.js',
// 'app/scripts/init.js',
// 'app/scripts/services/*.js',
// 'app/scripts/controllers/*.js',
// 'app/bower_components/angular-mocks/angular-mocks.js',
// 'test/spec/controllers/articles.js'
//  // 'test/spec/services/*.js'
//  ];


// // list of files to exclude
// exclude = [

// ];


// // test results reporter to use
// // possible values: 'dots', 'progress', 'junit'
// reporters = ['progress'];


// // web server port
// port = 9876;


// // cli runner port
// runnerPort = 9100;


// // enable / disable colors in the output (reporters and logs)
// colors = true;


// // level of logging
// // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
// logLevel = LOG_INFO;


// // enable / disable watching file and executing tests whenever any file changes
// autoWatch = true;


// // Start these browsers, currently available:
// // - Chrome
// // - ChromeCanary
// // - Firefox
// // - Opera
// // - Safari (only Mac)
// // - PhantomJS
// // - IE (only Windows)
// browsers = ['Chrome'];


// // If browser does not capture in given timeout [ms], kill it
// captureTimeout = 60000;


// // Continuous Integration mode
// // if true, it capture browsers, run tests and exit
// singleRun = false;
