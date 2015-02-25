'use strict';

describe('Controller: Backend1Ctrl', function () {

  // load the controller's module
  beforeEach(module('dockerUiApp'));

  var Backend1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Backend1Ctrl = $controller('Backend1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
