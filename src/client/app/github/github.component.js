(function() {
  'use strict';

  angular
    .module('angularSeed.github')
    .component('githubComparer', {
      controller: GithubController,
      controllerAs: 'vm',
      templateUrl: '/app/github/github.component.html'
    });

  GithubController.$inject = [
    'githubApi'
  ];

  function GithubController(githubApi) {
    var vm = this;
    var _repoPath = '';

    vm.availableTags = [];
    vm.pageTitle = 'Dynamic Page Title';
    vm.baseTag = '';
    vm.headTag = '';
    vm.fileInfo = {};
    vm.fileTargetObj = {};

    vm.$onInit = $onInit;

    vm.haveFileInfo = false;
    vm.showListFilesButton = false;

    vm.compareBetweenTags = compareBetweenTags;
    vm.compareFileBetweenTags = compareFileBetweenTags;
    vm.determineShowListFilesButton = determineShowListFilesButton;
    vm.parseAndSetRepoPath = parseAndSetRepoPath;
    vm.setAvailableTags = setAvailableTags;

    function $onInit() {
      vm.repoUrl = 'https://github.com/angular/angular';

      parseAndSetRepoPath();

      setAvailableTags();
    }

    function compareBetweenTags() {
      githubApi.compareCommits(vm.baseTag.name, vm.headTag.name).then(function(response) {
        vm.comparisonData = response.data;
      });
    }

    function compareFileBetweenTags() {
      githubApi.compareCommits(vm.baseTag.name, vm.headTag.name).then(function(response) {
        vm.haveFileInfo = true;
        vm.comparisonData = response.data;
        vm.fileInfo = _parseComparisonForFileInfo(vm.fileTargetObj.filename);
      });
    }

    function parseAndSetRepoPath() {
      _repoPath = vm.repoUrl.split(/github\.com\/+/)[1];
      githubApi.setBaseUrl(_repoPath);
    }

    function setAvailableTags() {
      githubApi.getTags().then(function(response) {
        vm.availableTags = response.data;
      });
    }

    function determineShowListFilesButton() {
      console.log(vm.repoUrl);
      console.log(vm.baseTag);
      console.log(vm.headTag);

      vm.showListFilesButton = vm.repoUrl && (vm.baseTag !== '') && (vm.headTag !== '');
    }

    function _parseComparisonForFileInfo(filename) {
      var fileInfo = {};

      if (!vm.comparisonData) {
        return console.error('No comparison data found!');
      }

      if (!vm.comparisonData.files) {
        return console.error('No files data found in comparison data!');
      }

      // not using angular.forEach because can't do early returns
      for (var i = 0, len = vm.comparisonData.files.length; i < len; i++) {
        var fileInfo = vm.comparisonData.files[i];

        if (fileInfo.filename === filename) {
          fileInfo = fileInfo;
          break;
        }

      }

      return fileInfo;
    }

  }

})();
