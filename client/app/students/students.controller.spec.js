'use strict';

describe('Controller: StudentsCtrl', function () {

  // load the controller's module
  beforeEach(module('studentTableApp'));

  var StudentsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StudentsCtrl = $controller('StudentsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
