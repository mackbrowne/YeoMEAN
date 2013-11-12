'use strict';

describe('Controller: UsersSignupCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var UsersSignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersSignupCtrl = $controller('UsersSignupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
