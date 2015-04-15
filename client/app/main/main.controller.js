'use strict';

angular.module('studentTableApp')
  .controller('MainCtrl', function ($scope, $http, Auth, socket) {
    $scope.awesomeThings = [];
    $scope.userName = Auth.getCurrentUser().name;
    $scope.editPost = false;
        $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.name === ''|| $scope.comment === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.name, comment: $scope.comment });
      $scope.name = '';
      $scope.comment = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

        $scope.editData = function(thing){
            $http.get('/api/things/'+ thing._id);
            $scope.editPost = true;
            $scope.thing = thing;

        };
        $scope.updatePost = function(thing){
            console.log(thing);
            $http.put('/api/things/'+ thing._id, {name:thing.name, comment: thing.comment});
            $scope.editPost = false;
        }
  });
