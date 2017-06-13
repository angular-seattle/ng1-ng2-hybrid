(function() {
  angular.module('angularSeed.shared')
    .factory('textTools', TextTools);

  TextTools.$inject = [
  ];

  function TextTools() {
    var service = {
      ucEveryOther: ucEveryOther
    };

    return service;

    ///////////////////////////

    function ucEveryOther(str) {
      var arr = str.toLowerCase().split('');
      var i, len;

      for (i = 0, len = arr.length; i < len; i+=2) {
        arr[i] = arr[i].toUpperCase();
      }

      return arr.join('');
    }

  }
})();
