(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedLeftNav', {
      controller: LeftNavController,
      controllerAs: 'vm',
      templateUrl: '/app/layout/leftNav.component.html'
    });

  LeftNavController.$inject = [
    '$mdSidenav'
  ];

  function LeftNavController($mdSidenav) {
    var vm = this;

    vm.onOpenMenu = onOpenMenu;

    function onOpenMenu() {
      $mdSidenav('main-sidenav').open();
    }
  }

})();
