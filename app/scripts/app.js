'use strict';

angular.module('yeoMeanApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/articles', {
    templateUrl: 'views/articles/list.html',
    controller: 'ArticlesCtrl'
  })
  .when('/articles/create', {
    templateUrl: 'views/articles/create.html',
    controller: 'ArticlesCtrl'
  })
  .when('/articles/edit', {
    templateUrl: 'views/articles/edit.html',
    controller: 'ArticlesCtrl'
  })
  .when('/articles/:articleId', {
    templateUrl: 'views/articles/view.html',
    controller: 'ArticlesCtrl'
  })
  .when('/signin', {
    templateUrl: 'views/users/signin.html'
  })
  .when('/signup', {
    templateUrl: 'views/users/signup.html'
  })
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'IndexCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});

//angular.module('yeoMeanApp.system', []);
//angular.module('yeoMeanApp.articles', []);