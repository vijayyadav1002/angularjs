var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "app.html",
    controller: "AppCtrl"
  })
  .when('/pizza/:crust/:topping', {
    redirectTo: function(routeParams, path, search) {
			console.log(routeParams);
			console.log(path);
			console.log(search);
			return "/" + routeParams.crust;
    }
  })
  .when('/deep', {
  	template: 'deep dish'
  })
  .otherwise({
  	redirectTo: '/app'
  });

}]);

app.controller('AppCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  $scope.model = {
    message: "This is awesome app!! "
  }
}]);


/**
 * Note: 
 */