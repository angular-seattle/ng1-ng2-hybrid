// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  var paths = {
    base: '',
    coverage: './coverage',
    ng1: './src/client/app',
    ng2: './src/client/ngsrc',
    test: './test'
  };

  var dependencies = [
    // bower:js
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-aria/angular-aria.js',
    'bower_components/angular-messages/angular-messages.js',
    'bower_components/angular-material/angular-material.js',
    'bower_components/angular-mocks/angular-mocks.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    // endbower
  ];

  config.set({
    basePath: paths.base,
    files: []
      .concat(dependencies)
      .concat(paths.test + '/mocks/**/*.mock.js')
      .concat([
        paths.ng1 + '/app.module.js',
        paths.ng1 + '/app.config.js',
        paths.ng1 + '/app.run.js',
        paths.ng1 + '/**/*.module.js',
        paths.ng1 + '/**/!(*module).js'
      ]
    ),

    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-spec-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-coverage-istanbul-es5-preprocessor'),
      require('@angular/cli/plugins/karma')
    ],
    preprocessors: {
      [paths.ng1 + '/**/!(*spec).js']: ['coverage-istanbul-es5']
    },
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: paths.coverage,
      reports: [ 'html', 'text-summary' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: [
      'progress',
      'coverage-istanbul',
      'kjhtml'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
