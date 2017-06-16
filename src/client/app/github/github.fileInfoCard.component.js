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

  GithubFileInfoCardController.$inject = [
    'githubApi'
  ];

  function GithubFileInfoCardController(githubApi) {
    var vm = this;

    vm.$onInit = $onInit;
    vm.$onChanges = $onChanges;

    function $onInit() {
    }

    function $onChanges(changesObj) {
      if (changesObj.fileInfo) {
        var _fileInfo = angular.copy(changesObj.fileInfo.currentValue);

        if (_fileInfo.patch) {
          vm.patchInfo = formatPatch(_fileInfo.patch);
          delete _fileInfo.patch;
        }

        vm.fileInfo = _fileInfo;
      }
    }

    function formatPatch(patch) {
      patch = patch.replace(/\n\+/g, '\n');
      return patch;
    }
  }
})();
