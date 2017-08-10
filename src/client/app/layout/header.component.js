(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedHeader', {
      controller: HeaderController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/header.component.html'
    });

  HeaderController.$inject = [
    '$mdSidenav'
  ];

  function HeaderController($mdSidenav) {
    var vm = this;

    vm.pageTitle = 'Dynamic Page Title';

    vm.closeSidenav = closeSidenav;

    function closeSidenav() {
      $mdSidenav('main-sidenav').close();
    }
  }

})();
