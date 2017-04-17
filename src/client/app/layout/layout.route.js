(function () {
  'use strict';

  angular
    .module('angularSeed.layout')
    .config(LayoutConfig);

    LayoutConfig.$inject = [
      '$stateProvider',
      '$urlRouterProvider'
    ];

    function LayoutConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('angularSeed', {
          url: '/',
          views: {
            'angularSeedMain': {
              component: 'angularSeedMain'
            }
          }
        });

      // all unknown routes go to homepage
      $urlRouterProvider.otherwise('/');
    }
})();
