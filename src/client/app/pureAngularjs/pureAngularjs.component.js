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
    '$interval',
    'randomNumbers',
    'textTools'
  ];

  function PureAngularjsController($interval, randomNumbers, textTools) {
    var vm = this;
    var _interval;

    // lifecyle
    vm.$onInit = $onInit;
    vm.$onDestroy = $onDestroy;

    // scope vars
    vm.angularjsTwoWay = 'This will be bound with two-way binding';
    vm.angularjsOneWay = 'This will be bound with one-way binding';

    // scope functions
    vm.ucEveryOther = textTools.ucEveryOther;

    function $onInit() {
      _interval = $interval(function() {
        vm.angularjsTwoWay += String.fromCharCode(randomNumbers.randomInt('a'.charCodeAt(0), 'z'.charCodeAt(0)));
      }, 1000);
    }

    function $onDestroy() {
      $interval.cancel();
    }
  }

})();
