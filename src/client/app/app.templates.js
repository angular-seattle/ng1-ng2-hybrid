angular.module('angularSeed').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/client/app/github/github.component.html',
    "<md-content class=\"github-main\" layout-gt-sm=\"row\" layout-padding> <div layout=\"column\" layout-fill> <md-input-container class=\"md-block\"> <label>Github Repository URL</label> <input class=\"github-repo-url\" ng-model=\"vm.repoUrl\" ng-change=\"vm.parseAndSetRepoPath()\"> </md-input-container> <div layout=\"row\" class=\"tag-selections-container\"> <div layout=\"column\" layout-align=\"start center\"> <md-input-container class=\"tag-selection\"> <md-select ng-model=\"vm.baseTag\" md-on-close=\"vm.determineShowListFilesButton()\" placeholder=\"Select BASE tag\"> <md-option ng-value=\"opt\" ng-repeat=\"opt in vm.availableTags\">{{ opt.name }}</md-option> </md-select> </md-input-container> <md-button ng-if=\"vm.baseTag\" ng-disabled=\"true\" class=\"md-raised md-primary tag-type-label\"> BASE </md-button> </div> <div class=\"selection-spacer\"></div> <div layout=\"column\" layout-align=\"start center\"> <md-input-container class=\"tag-selection\"> <md-select ng-model=\"vm.headTag\" md-on-close=\"vm.determineShowListFilesButton()\" placeholder=\"Select HEAD tag\"> <md-option ng-value=\"opt\" ng-repeat=\"opt in vm.availableTags\">{{ opt.name }}</md-option> </md-select> </md-input-container> <md-button ng-if=\"vm.headTag\" ng-disabled=\"true\" class=\"md-raised md-primary tag-type-label\"> HEAD </md-button> </div> </div> <md-input-container> <md-button ng-if=\"vm.showListFilesButton\" ng-click=\"vm.compareBetweenTags()\" class=\"md-raised\"> <md-tooltip md-direction=\"bottom\">No matter what you select we are only mocking 4.0.1...4.0.2</md-tooltip> LIST FILES </md-button> </md-input-container> <md-input-container ng-if=\"vm.comparisonData.files.length > 0\"> <md-select ng-model=\"vm.fileTargetObj\" placeholder=\"Select file to compare\" type=\"search\"> <md-option ng-value=\"opt\" ng-repeat=\"opt in vm.comparisonData.files\">{{ opt.filename }}</md-option> </md-select> </md-input-container> <md-input-container> <md-button ng-if=\"vm.fileTargetObj.filename\" ng-click=\"vm.compareFileBetweenTags()\" class=\"md-raised\"> COMPARE </md-button> </md-input-container> <github-file-info-card ng-if=\"vm.haveFileInfo\" file-info=\"vm.fileInfo\"> </github-file-info-card> </div> </md-content> "
  );


  $templateCache.put('src/client/app/github/github.fileInfoCard.component.html',
    "<md-card> <div ng-repeat=\"(key, value) in vm.fileInfo\"> <span class=\"key-value\">{{ key }}:</span> {{ value }} </div> <pre>{{vm.patchInfo}}</pre> </md-card> "
  );


  $templateCache.put('src/client/app/layout/header.component.html',
    "<md-toolbar layout=\"row\"> <angular-seed-left-nav></angular-seed-left-nav> <h2 class=\"md-toolbar-tools\"> <span>Upgrading AngularJS to Angular using UpgradeAdapter</span> </h2> </md-toolbar> "
  );


  $templateCache.put('src/client/app/layout/leftNav.component.html',
    "<md-button aria-label=\"menu\" class=\"md-fab md-primary\" ng-click=\"vm.onOpenMenu()\"> <md-icon md-font-library=\"material-icons\">reorder</md-icon> </md-button> "
  );


  $templateCache.put('src/client/app/layout/main.component.html',
    "<md-sidenav class=\"md-sidenav-left\" md-component-id=\"main-sidenav\" md-whiteframe=\"4\"> <md-toolbar class=\"md-theme-indigo left-nav-toolbar\"> <h1 class=\"md-toolbar-tools\">MENU</h1> </md-toolbar> <md-content layout-padding> <a ng-href=\"/\" ng-click=\"vm.closeSidenav()\"><md-button class=\"md-raised md-primary\">HOME</md-button></a> <a ng-href=\"/pure-angularjs\" ng-click=\"vm.closeSidenav()\"><md-button class=\"md-raised md-primary\">Pure AngularJS Page</md-button></a> </md-content> </md-sidenav> <angular-seed-header></angular-seed-header> <div class=\"main-container\"> <div ui-view=\"angularSeedContent\"></div> </div> "
  );


  $templateCache.put('src/client/app/pureAngularjs/pureAngularjs.component.html',
    "This is an example of a page that still exists which was written with angular.js <br/> <br/> <div colorful-text>{{vm.ucEveryOther(vm.angularjsTwoWay)}}</div> <br/> <div colorful-text>{{::vm.angularjsOneWay}}</div> <br/> <div colorful-text>This is just a string of text without interpolation</div> "
  );

}]);
