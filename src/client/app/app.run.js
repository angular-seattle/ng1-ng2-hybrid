(function() {
  'use strict';

  angular
    .module('angularSeed')
    .run(bindEventsToParentZone);

  bindEventsToParentZone.$inject = ['$window'];

  function bindEventsToParentZone($window) {
    // grab a copy of existing events in this zone
    var existingEventsObj = angular.copy(angular.element._data(angular.element(document)[0])['events']);

    angular.element(document).off();

    angular.forEach(existingEventsObj, function(eventsForEventName, eventName) {
      angular.forEach(eventsForEventName, function(event) {
        if (_isEventToRunoutsideZone(event)) {
          $window.Zone.current.parent.run(function() {
            angular.element(document).on(eventName, event);
          });
        }
        else {
          // bind all other events back to current zone (where they were)
          $window.Zone.current.run(function() {
            angular.element(document).on(eventName, event);
          });
        }
      });
    });
  }

  function _isEventToRunoutsideZone(event) {
    var handlerFunctionName = event.name;

    var handlerFunctionNamesToRunOutsideZone = [
      'gestureStart',
      'gestureMove',
      'gestureEnd',
      'gestureClearCache'
    ];

    return (
      handlerFunctionNamesToRunOutsideZone.indexOf(handlerFunctionName) !== -1
    );
  }
})();
