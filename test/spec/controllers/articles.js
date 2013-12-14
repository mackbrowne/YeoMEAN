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
      $location: {
        path: function(location){

        }
      },
      Global: null,
      Articles: function(){
        return {
          $save: function(){

          }
        }
      }
    });
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

  it('should handle removing a new article', function(){
    scope.title = 'sampleTitle';
    expect(scope.title).toBe('sampleTitle');
    scope.content = 'this is a body';
    expect(scope.content).toBe('this is a body');

    scope.create();

    expect(scope.title).toBe('');
    expect(scope.content).toBe('');
  });

      // $scope.remove = function(article) {
      //   article.$remove();
      //   for (var i in $scope.articles) {
      //     if ($scope.articles[i] === article) {
      //       $scope.articles.splice(i, 1);
      //     }
      //   }
      // };

      // $scope.update = function() {
      //   var article = $scope.article;
      //   if (!article.updated) {
      //     article.updated = [];
      //   }
      //   article.updated.push(new Date().getTime());

      //   article.$update(function() {
      //     $location.path('articles/' + article._id);
      //   });
      // };

      // $scope.find = function() {
      //   Articles.query(function(articles) {
      //     $scope.articles = articles;
      //   });
      // };

      // $scope.findOne = function() {
      //   Articles.get({
      //     articleId: $routeParams.articleId
      //   }, function(article) {
      //     $scope.article = article;
      //   });
      // };
  
});
