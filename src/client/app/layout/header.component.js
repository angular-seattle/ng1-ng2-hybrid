(function() {
  'use strict';

  angular
    .module('angularSeed.layout')
    .component('angularSeedHeader', {
      controller: HeaderController,
      controllerAs: 'vm',
      template: getTemplate()
    });

  function getTemplate() {
    return `
      <md-toolbar layout="row">
        <angular-seed-left-nav></angular-seed-left-nav>
        <h2 class="md-toolbar-tools">
          <span>Upgrading AngularJS to Angular using UpgradeAdapter</span>
        </h2>
      </md-toolbar>
    `;
  }

  function HeaderController() {
    var vm = this;
  }

})();
