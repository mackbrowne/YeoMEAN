'use strict';

angular.module('yeoMeanApp')
  .controller('IndexCtrl', ['$scope', 'Global',
    function($scope, Global) {
      console.log("GLOBAL - " + JSON.stringify(Global));
      $scope.global = Global;
    }
  ]);