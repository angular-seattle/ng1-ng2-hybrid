(function () {
  'use strict';

  angular
    .module('angularSeed.github')
    .config(GithubConfig);

    GithubConfig.$inject = [
      '$stateProvider'
    ];

    function GithubConfig($stateProvider) {
      $stateProvider
        .state('angularSeed.github', {
          url: '/',
          views: {
            'angularSeedContent': {
              component: 'githubComparer'
            }
          }
        });
    }
})();
