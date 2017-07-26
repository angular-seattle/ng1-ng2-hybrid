(function() {
  angular
    .module('angularSeed.angularRoutes')
    .config(AngularRoutesConfig);

  AngularRoutesConfig.$inject = [
    '$stateProvider'
  ];

  function AngularRoutesConfig($stateProvider) {
    $stateProvider
      .state('helloWorld', {
        url: '/hello-world',
        // use empty template because ui-router needs something to show
        // Angular component will take over though
        template: ''
      })
      .state('undefinedAngularRoute', {
        url: '/undefined-angular-route',
        template: ''
      })
      ;
  }
})();
