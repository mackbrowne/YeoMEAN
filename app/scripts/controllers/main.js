'use strict';

angular.module('yeoMeanApp')
  .controller('MainCtrl', ['$scope', 'Global',
    function($scope, Global) {
      console.log("GLOBAL - " + JSON.stringify(Global));
      $scope.global = Global;

      $scope.dismissError = function(error){
        Global.errors.splice(error, 1);
      }
    }
  ]);