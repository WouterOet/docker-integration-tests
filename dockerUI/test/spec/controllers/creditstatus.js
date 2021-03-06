'use strict';

describe('Controller: CreditstatusCtrl', function () {

  // load the controller's module
  beforeEach(module('dockerUiApp'));

  var CreditstatusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CreditstatusCtrl = $controller('CreditstatusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
