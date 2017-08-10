(function() {
  'use strict';

  angular.module('angularSeed.shared')
    .directive('colorfulText', ColorfulTextDirective);

  ColorfulTextDirective.$inject = [
    '$compile',
    '$parse',
    'randomNumbers'
  ];

  function ColorfulTextDirective($compile, $parse, randomNumbers) {
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
          return $parse(interpolated)($scope);
        }, function() {

          var newValue = $parse(interpolated)($scope);

          compileTemplate(element, $scope, colorizeContent(newValue));
        });


      } else {

        element.ready(function() {
          compileTemplate(element, $scope, colorizeContent(element.html()));
        });
      }
    }

    function compileTemplate(element, $scope, template) {
      element.html(template);

      $compile(element.contents())($scope);
    }

    function colorizeContent(str) {
      if (!str) {
        return;
      }

      var contentChars = str.split('');
      var template = '';

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
      return randomNumbers.randomInt(0,255);
    }
  }

})();
