(function() {
  'use strict';

  angular.module('angularSeed')
    .config(AngularSeedConfig);

  AngularSeedConfig.$inject = [
    '$mdThemingProvider'
  ];

  function AngularSeedConfig(
    $mdThemingProvider
  ) {

    $mdThemingProvider.theme('default').dark();
  }

})();
