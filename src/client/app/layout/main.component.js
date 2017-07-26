(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedMain', {
      controller: MainController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/main.component.html'
    });

  MainController.$inject = [];

  function MainController() {
  }

})();
