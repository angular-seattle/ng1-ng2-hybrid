(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedMain', {
      controller: MainController,
      controllerAs: 'vm',
      templateUrl: 'app/layout/main.component.html'
    });

  MainController.$inject = [
    '$mdSidenav'
  ];

  function MainController($mdSidenav) {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';

    vm.closeSidenav = closeSidenav;

    function closeSidenav() {
      $mdSidenav('main-sidenav').close();
    }
  }

})();
