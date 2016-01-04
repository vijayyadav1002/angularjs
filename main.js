var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/map/:country/:state/:city', {
    templateUrl: "app.html",
    controller: "AppCtrl"
  });
}]);

app.controller('AppCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.model = {
    message: "Address: " + $routeParams.country +
    ", " + $routeParams.state + ", " + $routeParams.city
  }
}]);


/**
 * Note: 
 */