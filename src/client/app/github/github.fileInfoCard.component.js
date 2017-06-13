(function() {
  'use strict';

  angular
    .module('angularSeed.github')
    .component('githubFileInfoCard', {
      bindings: {
        fileInfo: '<'
      },
      controller: GithubFileInfoCardController,
      controllerAs: 'vm',
      templateUrl: '/app/github/github.fileInfoCard.component.html'
    });

  function GithubFileInfoCardController(githubApi) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;

    function $onInit() {
    }

    function $onChanges(changesObj) {
     if (changesObj.fileInfo) {
        vm.fileInfo = angular.copy(changesObj.fileInfo.currentValue);
      }
    }
  }
})();
