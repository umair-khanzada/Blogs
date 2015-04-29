'use strict';

angular.module('studentTableApp')
  .controller('StudentsCtrl', function ($scope, $http) {
    $scope.message = 'Hello';
    $scope.editForm = false;
    $scope.showButton = true;
        $scope.studentRecord = [];
        $scope.showTable = function(){
            $http.get('/api/students/').success(function (studentList) {
                $scope.studentRecord = studentList;
                $scope.showButton = false;
                //socket.syncUpdates('student', $scope.studentRecord);
            });
        };
        $scope.add = function() {
            if($scope.name === '' || $scope.class === '' || $scope.age === '') {
                return;
            }
            $http.post('/api/students/', { name: $scope.name, class: $scope.class, age: $scope.age});
            $scope.name = '';
            $scope.class = '';
            $scope.age = '';
            $scope.showTable();
        };

        $scope.remove = function(zzz){
            $http.delete('/api/students/' + zzz._id);
            $scope.showTable();
        };
        $scope.edit = function(zzz){
            $http.get('/api/students/'+ zzz._id);
            console.log(zzz._id);
            $scope.editForm = true;
            $scope.student = zzz;
        };
        $scope.xyz = function(zzz){
            console.log(zzz);
            $http.put('/api/students/'+ zzz._id,{name:zzz.name, class: zzz.class, age: zzz.age});
            $scope.editForm = false;
        }


});
