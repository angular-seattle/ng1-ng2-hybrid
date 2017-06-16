(function() {
  'use strict';
  //https://api.github.com/repos/angular/angular/tags
  angular
    .module('angularSeed.github')
    .factory('githubApi', GithubApi);

  GithubApi.$inject = [
    '$http'
  ];

  function GithubApi(
    $http
  ) {
    // var _apiBaseUrlRoot = 'https://api.github.com/repos';
    var _apiBaseUrlRoot = '/api/github/repos';
    var _apiBaseUrl = '';

    var service = {
      setBaseUrl: setBaseUrl,
      getTags: getTags,
      compareCommits: compareCommits
    };

    return service;

    //////////////////////////

    function setBaseUrl(repoPath) {
      _apiBaseUrl = _apiBaseUrlRoot + '/' + repoPath;
      return service;
    }

    function compareCommits(base, head) {
      return $http.get(_apiBaseUrl + '/compare/' + base + '...' + head);
    }

    function getTags() {
      return $http.get(_apiBaseUrl + '/tags');
    }
  }
})();
