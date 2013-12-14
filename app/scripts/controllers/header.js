'use strict';

angular.module('yeoMeanApp').controller('HeaderCtrl', ['$scope', 'Global', function($scope, Global) {
  $scope.global = Global;

  $scope.menu = [{
    'title': 'Articles',
    'link': 'articles'
  }, {
    'title': 'Create New Article',
    'link': 'articles/create'
  }];

  $scope.toggleHeader =  function() {
    // close dropdown
    angular.element(".navbar-collapse").removeClass("in").addClass("collapse");
  };

}]);