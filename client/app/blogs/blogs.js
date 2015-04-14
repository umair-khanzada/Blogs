'use strict';

angular.module('studentTableApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blogs', {
        url: '/blogs',
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsCtrl'
      });
  });