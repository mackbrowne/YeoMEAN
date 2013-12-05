'use strict';

describe('Controller: ArticlesCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var ArticlesCtrl,
  scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Articles) {
    scope = $rootScope.$new();
    ArticlesCtrl = $controller('ArticlesCtrl', {
      $scope: scope,
      $routeParams: null,
      $location: null,
      Global: null,
      Articles: Articles
    });
  }));

  it('should attach a list of awesomeThings to the scope', function (done) {
    scope.find(done);
  });

  it('should fail', function(){
    scope.find(function(articles, err){
      expect(articles.length).toBe(0);
    });
  });
  
});
