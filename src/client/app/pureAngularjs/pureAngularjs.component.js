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
    'textTools'
  ];

  function PureAngularjsController($interval, textTools) {
    var vm = this;
    var i = 0; // for showing two-way binding working
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
        vm.angularjsTwoWay += String.fromCharCode(i++ + 97);
      }, 1000, 5);
    }

    function $onDestroy() {
      _interval();
    }
  }

})();
