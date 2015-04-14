'use strict';

angular.module('studentTableApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('students', {
        url: '/students',
        templateUrl: 'app/students/students.html',
        controller: 'StudentsCtrl'
      });
  });