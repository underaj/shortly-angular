angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here

  $scope.link = {};
  $scope.addLink = Links.addOne;
  $scope.signOut = Auth.signout;
});
