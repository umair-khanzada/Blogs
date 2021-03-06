'use strict';

describe('Directive: like', function () {

  // load the directive's module
  beforeEach(module('studentTableApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<like></like>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the like directive');
  }));
});