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
          <github-comparer></github-comparer>
        </div>
    `;
  }

  function MainController() {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';
  }

})();
