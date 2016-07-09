angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  // typical use case: Links.then 

  $scope.data = {};
  
  $scope.getAll = Links.getAll;

  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

  $scope.signOut = Auth.signout;

});
