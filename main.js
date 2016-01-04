var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app', {
    templateUrl: "app.html",
    controller: "AppCtrl"
  });
}]);

app.controller('AppCtrl', ['$scope', function($scope){
  $scope.model = {
    message: "This is my app"
  }
}]);


/**
 * Note: 
 * 1. To include route one must load ngRoute module first
 * 2. Also important than you include angular-route.js in the script tag
 */