'use strict';

describe('Controller: ArticlesCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var ArticlesCtrl,
  scope, location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ArticlesCtrl = $controller('ArticlesCtrl', {
      $scope: scope
    });

    scope.articles = [
      {title: 'initialTitle', content:'initialBody', $remove: function(){ }},
      {title: 'initialTitle1', content:'initialBody1', $update: function(){ }}
    ];
  }));

  it('should handle creating a new article', function(){
    scope.title = 'sampleTitle';
    expect(scope.title).toBe('sampleTitle');
    scope.content = 'this is a body';
    expect(scope.content).toBe('this is a body');

    scope.create();

    expect(scope.title).toBe('');
    expect(scope.content).toBe('');
  });

  it('should handle updating an article', function(){
    scope.article = scope.articles[1];

    scope.update();

    expect(scope.article.updated.length).toBe(1);
  });

  it('should perform a find', function(){
    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ArticlesCtrl = $controller('ArticlesCtrl', {
        $scope: scope,
        Articles: {
          query: function(callback){
            return callback([{title: 'queryTitle', content:'queryBody'}]);
          }
        }
      });
    });

    scope.find();

    expect(scope.articles.length).toBe(1);
    expect(scope.articles[0].title).toBe('queryTitle');
  });

  it('should perform a findOne', function(){
    inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      ArticlesCtrl = $controller('ArticlesCtrl', {
        $scope: scope,
        Articles: {
          get: function(article, callback){
            return callback({title: 'getTitle', content:'getBody'});
          }
        }
      });
    });

    scope.findOne();

    expect(scope.article.title).toBe('getTitle');
  });

});