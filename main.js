var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "app.html",
    controller: "AppCtrl",
    resolve: {
    	app: ['$q', '$timeout',  function(q, timeout) {
				var defer = q.defer();
				timeout(function(){
					defer.resolve();
				}, 1000);

				return defer.promise;
    	}]
    }
  });
}]);

app.controller('AppCtrl', ['$scope', function($scope){
  $scope.model = {
    message: "This is awesome app!! "
  }
}]);


/**
 * Note: only if promise gets resolved than only controller will execute
 */