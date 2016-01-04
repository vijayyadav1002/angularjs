var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "app.html",
    controller: "AppCtrl"
  })
  .when('/pizza', {
    template: "Yum!!!"
  })
  .otherwise({
    template: "This page doesn't exist"
  })
  ;
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
 * 3. Otherwise will be the default for the case when route doesn't matches
 */