(function() {
  'use strict';

  angular
    .module('angularSeed.home')
    .component('angularSeedHomepage', {
      controller: HomeController,
      controllerAs: 'vm',
      templateUrl: 'app/home/home.template.html'
    });

  HomeController.$inject = [
  ];

  function HomeController() {
    var vm = this;
    vm.pageTitle = 'Dynamic Page Title';
    vm.checkbox1 = true;
  }

})();
