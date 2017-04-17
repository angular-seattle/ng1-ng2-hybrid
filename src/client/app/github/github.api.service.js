(function() {
  'use strict';
  //https://api.github.com/repos/angular/angular/tags
  angular
    .module('angularSeed.github')
    .factory('githubApi', GithubApi);

  GithubApi.$inject = [
    '$http',
    'githubMocks'
  ];

  function GithubApi(
    $http,
    githubMocks
  ) {
    var _githubApiBaseUrlRoot = 'https://api.github.com/repos';
    var _githubApiBaseUrl = '';
    var _useMocks = true;

    var service = {
      enableMocks: enableMocks,
      disableMocks: disableMocks,
      setBaseUrl: setBaseUrl,
      getTags: getTags,
      compareCommits: compareCommits
    };

    return service;

    //////////////////////////

    function enableMocks() {
      _useMocks = true;
    }

    function disableMocks() {
      _useMocks = false;
    }

    function setBaseUrl(repoPath) {
      _githubApiBaseUrl = _githubApiBaseUrlRoot + '/' + repoPath;
      return service;
    }

    function compareCommits(base, head) {
      if (_useMocks) {
        return githubMocks.compareCommitsMock();
      }

      return $http.get(_githubApiBaseUrl + '/compare/' + base + '...' + head);
    }

    function getTags() {
      if (_useMocks) {
        return githubMocks.getTagsMock();
      }

      return $http.get(_githubApiBaseUrl + '/tags');
    }
  }
})(this);
