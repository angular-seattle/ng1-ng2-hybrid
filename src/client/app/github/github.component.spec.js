'use strict';

describe('Component: githubComparer', function() {

  var
    $q,
    $scope,
    githubApi,
    githubController;


  function githubApiMock() { }

  githubApiMock.prototype.setBaseUrl = function(str) {}
  githubApiMock.prototype.getTags = function() { return $q.when() }


  beforeEach(module('angularSeed.github', function($provide) {
    $provide.service('githubApi', githubApiMock);
  }));

  beforeEach(inject(function($injector, $componentController) {
    $q = $injector.get('$q');
    $scope = $injector.get('$rootScope').$new();
    githubApi = $injector.get('githubApi');

    githubController = function() {
      return $componentController('githubComparer',
        {$scope: $scope}
      );
    };
  }));

  describe('controllerTest', function() {
    var controller;

    beforeEach(function() {
      controller = githubController();
    });

    it('controller test', function() {
      controller.$onInit();
      expect(controller).toBeDefined();
    });

    describe('$onInit', function() {
      it('sets up controller after init', function() {
        var setBaseUrlSpy = spyOn(githubApiMock.prototype, 'setBaseUrl').and.callThrough();
        var getTagsSpy = spyOn(githubApiMock.prototype, 'getTags').and.callFake(function() {
          return $q.when({data: {tags: ['tagA', 'tagB']}});
        });

        controller.$onInit();

        expect(controller.repoUrl).toEqual('https://github.com/angular/angular');
        expect(setBaseUrlSpy).toHaveBeenCalledWith('angular/angular');

        $scope.$digest();

        expect(controller.availableTags).toEqual({tags: ['tagA', 'tagB']});
      });
    });
  });
});

