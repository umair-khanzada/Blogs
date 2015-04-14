'use strict';

angular.module('studentTableApp')
  .controller('BlogsCtrl', function ($scope, $http, Auth, socket) {
        $scope.blogsItem = [];
        $scope.userName = Auth.getCurrentUser().name;
        $scope.editPost = false;
        $http.get('/api/blogs/').success(function (blogList) {
            $scope.blogsItem = blogList;
        });

        $scope.showBlog = function() {
            $http.get('/api/blogs/').success(function (blogList) {
                $scope.blogsItem = blogList;
            });
        };
        $scope.addThing = function() {
            if($scope.name === ''|| $scope.comment === '') {
                return;
            }
            $http.post('/api/blogs/', { name: $scope.name, comment: $scope.comment });
            $scope.name = '';
            $scope.comment = '';
            $scope.showBlog();
        };

        $scope.deleteItem = function(itemBlog) {
            $http.delete('/api/blogs/' + itemBlog._id);
            $scope.showBlog();
        };

        $scope.editData = function(itemBlog){
            $http.get('/api/blogs/'+ itemBlog._id);
            $scope.editPost = true;
            $scope.itemBlog = itemBlog;
            console.log(itemBlog._id);
        };

        $scope.updatePost = function(itemBlog){
            console.log(itemBlog);
            $http.put('/api/blogs/'+ itemBlog._id, {name:itemBlog.name, comment: itemBlog.comment});
            $scope.editPost = false;
        }


  });
