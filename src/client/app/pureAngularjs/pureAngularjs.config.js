(function () {
  'use strict';

  angular
    .module('angularSeed.pureAngularjs')
    .config(PureAngularjsConfig);

    PureAngularjsConfig.$inject = [
      '$stateProvider'
    ];

    function PureAngularjsConfig($stateProvider) {
      $stateProvider
        .state('angularSeed.pureAngularjs', {
          url: '/pure-angularjs',
          views: {
            'angularSeedContent': {
              component: 'pureAngularjs'
            }
          }
        });
    }
})();
