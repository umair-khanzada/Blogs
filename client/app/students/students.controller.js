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
        $scope.remove = function(student){
            $http.delete('/api/students/' + student._id);
            $scope.showTable();
        };
        $scope.edit = function(student){
            $http.get('/api/students/'+ student._id);
            console.log(student._id);
            $scope.editForm = true;
            $scope.student = student;

        };
        $scope.xyz = function(student){
            console.log(student);
            $http.put('/api/students/'+ student._id,{name:student.name, class: student.class, age: student.age});
            $scope.editForm = false;
        }


});
