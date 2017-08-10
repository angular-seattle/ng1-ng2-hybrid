(function() {
  'use strict';

  angular.module('angularSeed')
    .config(AngularSeedConfig);

  AngularSeedConfig.$inject = [
    '$locationProvider',
    '$mdThemingProvider'
  ];

  function AngularSeedConfig(
    $locationProvider,
    $mdThemingProvider
  ) {

    $locationProvider.html5Mode(false);

    $locationProvider.hashPrefix('');

    $mdThemingProvider.theme('default').dark();
  }

})();
