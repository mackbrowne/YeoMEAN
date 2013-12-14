'use strict';

describe('Controller: UsersSigninCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var UsersSigninCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersSigninCtrl = $controller('UsersSigninCtrl', {
      $scope: scope
    });
  }));


});
