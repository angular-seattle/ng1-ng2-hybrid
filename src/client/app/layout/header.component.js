(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedHeader', {
      controller: HeaderController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/header.component.html'
    });

  function HeaderController() {
    var vm = this;
  }

})();
