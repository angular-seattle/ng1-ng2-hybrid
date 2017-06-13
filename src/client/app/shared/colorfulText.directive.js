(function() {
  angular.module('angularSeed.shared')
    .directive('colorfulText', ColorfulTextDirective);

  ColorfulTextDirective.$inject = [
    '$compile',
    '$parse'
  ];

  function ColorfulTextDirective($compile, $parse) {
    return {
      restrict: 'A',
      link: postLink
    }

    function postLink($scope, element, attrs) {
      var innerHtml;

      if (!element.html()) {
        return;
      }

      innerHtml = element.html().trim();

      if (innerHtml.charAt(0) === '{' && innerHtml.charAt(1) === '{' && !innerHtml.includes('::')) {
        var interpolated = innerHtml.replace(/[{}]/g, '');

        $scope.$watch(function() {
          return $scope.vm.angularjsTwoWay;
        }, function() {

          var newValue = $parse(interpolated)($scope);

          compileTemplate($compile, element, $scope, colorizeContent(newValue));
        });


      } else {

        element.ready(function() {
          compileTemplate($compile, element, $scope, colorizeContent(element.html()));
        });
      }
    }
  }

  function compileTemplate($compile, element, $scope, template) {
    element.html(template);

    $compile(element.contents())($scope);
  }

  function colorizeContent(str) {
    contentChars = str.split('');
    template = '';

    angular.forEach(contentChars, function(char) {
      var r = randomPixel();
      var g = randomPixel();
      var b = randomPixel();

      template += '<span style="' +
        'color: rgb(' + [r,g,b].join(',') + ');' +
        '">' + char + '</span>';
    });

    return template;
  }


  function randomPixel() {
    return randomInt(0,255);
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



})();
