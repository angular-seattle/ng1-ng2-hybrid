(function() {
  angular
    .module('angularSeed.angularRootWrapper', []);

  angular.module('angularSeed.angularRootWrapper')
    .component('angularRootWrapper', {
      template: [
        '<aseed-root></aseed-root>',
        '<div class="angular-seed-main" ui-view="angularSeedMain"></div>'
      ].join('\n')
    });
})();
