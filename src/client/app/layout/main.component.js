(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedMain', {
      controller: MainController,
      controllerAs: 'vm',
      template: getTemplate()
    });

  function getTemplate() {
    return `
        <md-sidenav
          class="md-sidenav-left"
          md-component-id="main-sidenav"
          md-whiteframe="4"
          >
          <md-toolbar class="md-theme-indigo left-nav-toolbar">
            <h1 class="md-toolbar-tools">MENU</h1>
          </md-toolbar>
          <md-content layout-padding>
            <a ng-href="/" ng-click="vm.closeSidenav()"><md-button class="md-raised md-primary">HOME</md-button></a>
            <a ng-href="/pure-angularjs" ng-click="vm.closeSidenav()"><md-button class="md-raised md-primary">Pure AngularJS Page</md-button></a>
          </md-content>
        </md-sidenav>
        <angular-seed-header></angular-seed-header>
        <div class="main-container">
          <div ui-view="angularSeedContent"></div>
        </div>
    `;
  }

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
