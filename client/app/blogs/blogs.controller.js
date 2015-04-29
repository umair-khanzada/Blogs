'use strict';

angular.module('studentTableApp')
  .controller('BlogsCtrl', function ($scope, $http, Auth, $filter,  socket) {
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

        $scope.addPost = function() {
            if($scope.description === '') {
                return;
            }
            $http.post('/api/blogs/', { description: $scope.description });
            $scope.description = '';
            $scope.showBlog();
            $scope.today = $filter('date')(new Date(),'yyyy-MM-dd HH:mm');
            console.log($scope.today)
        };

        $scope.addComment = function(itemBlog){
            $http.get('/api/blogs/'+ itemBlog._id);
            $scope.editPost = true;
            console.log(itemBlog._id);
        };

        $scope.postComment = function(itemBlog) {
            if($scope.commentName === ''|| $scope.comment === '') {
                return;
            }
            $http.put('/api/blogs/'+ itemBlog._id, { commentName: $scope.commentName, comment: $scope.comment });
            console.log(itemBlog._id);
            $scope.editPost = false;
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
