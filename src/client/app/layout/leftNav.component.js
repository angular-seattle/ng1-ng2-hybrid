(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedLeftNav', {
      controller: LeftNavController,
      controllerAs: 'vm',
      template: getTemplate()
    });

  function getTemplate() {
    return `
      <md-button aria-label="menu" class="md-fab md-primary" ng-click="vm.onOpenMenu()">
        <md-icon md-font-library="material-icons">reorder</md-icon>
      </md-button>
    `;
  }

  function LeftNavController() {
    var vm = this;

    vm.onOpenMenu = onOpenMenu;

    function onOpenMenu() {
      console.log('Menu click action');
    }
  }

})();
