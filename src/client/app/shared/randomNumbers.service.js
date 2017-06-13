(function() {
  'use strict';

  angular.module('angularSeed.shared')
    .factory('randomNumbers', RandomNumbers);

  RandomNumbers.$inject = [
  ];

  function RandomNumbers() {
    var service = {
      randomInt: randomInt
    };

    return service;

    ///////////////////////////

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }

})();
