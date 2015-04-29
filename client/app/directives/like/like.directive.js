'use strict';

angular.module('studentTableApp')
  .directive('like', function ($http) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
          var count = 0;
          element.on('click', function(){
              var likeUnlike = element.text()== 'Like' ? 'Unlike' : 'Like';
              element.text(likeUnlike);
              var child =  element.next('a').children('i');
              if(element.text() == 'Like') {
                  count -= 1;
                  element.next('a').children('i').text(count);
                  console.log(count)
              }else{
//                  $http.post('/api/blogs/', { likes: child+=1});
                  count += 1;
                  element.next('a').children('i').text(count);
                  console.log(count)
              }
          })
      }
    };
  });