'use strict';

angular.module('yeoMeanApp')
  .controller('MainCtrl', ['$scope', 'Global',
    function($scope, Global) {
      console.log("GLOBAL - " + JSON.stringify(Global));
      $scope.global = Global;
    }
  ]);