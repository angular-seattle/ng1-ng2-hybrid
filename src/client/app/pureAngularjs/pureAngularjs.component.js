(function() {
  'use strict';

  angular
    .module('angularSeed.pureAngularjs')
    .component('pureAngularjs', {
      controller: PureAngularjsController,
      controllerAs: 'vm',
      templateUrl: '/app/pureAngularjs/pureAngularjs.component.html'
    });

  PureAngularjsController.$inject = [
  ];

  function PureAngularjsController() {
    var vm = this;
  }

})();
