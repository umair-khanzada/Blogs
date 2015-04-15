'use strict';

angular.module('studentTableApp')
  .directive('sideBar', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          element.on('click', function(){
              var $body = $('body');
              var container = $body.find('.container').width();
              var parentWidth = $body.find('.sideMenu').width() >= 147 ? "0px" : "15%";
              $body.find('.sideMenu').animate({ width: parentWidth });
              var myrow = $body.find('.myRow').width() < container ? "100%" : "86%";
              $body.find('.myRow').animate({ width: myrow});
              element.children('i').toggleClass('glyphicon-chevron-right')
          })
      }
    };
  });