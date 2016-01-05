var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "app.html",
    controller: "AppCtrl"
  });
}]);

app.controller('AppCtrl', ['$scope', '$q', function($scope, $q){
	var defer = $q.defer();
	defer.promise
		.then(function(weapon){
			console.log("You can have my " + weapon);
			return 'bow';
		})
		.then(function(weapon){
			console.log("You can have my " + weapon);
			return 'arrow';
		})
		.then(function(weapon){
			console.log("You can have my " + weapon);
		});

	defer.resolve('sword');

  $scope.model = {
    message: "This is awesome app!! "
  }
}]);


/**
 * Note: 
 */