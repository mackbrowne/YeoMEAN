'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('yeoMeanApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Global: {errors: ["error1", "error2"]}
    });
  }));

  it('should dismiss errors', function(){
    scope.dismissError("error1");
    expect(scope.global.errors.length).toBe(1);
    expect(scope.global.errors[0]).toBe("error2");
    scope.dismissError("error2");
    expect(scope.global.errors.length).toBe(0);
  });

});
