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
        <angular-seed-header></angular-seed-header>
        <div class="main-container">
          <angular-seed-github></angular-seed-github>
        </div>
    `;
  }

  function MainController() {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';
  }

})();
