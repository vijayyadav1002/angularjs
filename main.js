var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "app.html",
    controller: "viewCtrl",
    resolve: {
    	loadData: viewCtrl.loadData
    }
  });
}]);

app.controller('AppCtrl', ['$rootScope', function(rootScope){
	rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
		console.log("!!" + rejection);
	});
}]);

app.directive('error', ['$rootScope', function(rootScope) {
	return {
		restrict: 'E',
		template: '<div class="alert-box alert" ng-show="isError">Error loading!!</div>',
		link: function(scope) {
			rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
				scope.isError = true;
			});
		}
	}

}]);


var viewCtrl = app.controller('ViewCtrl', ['$scope', '$route',  function($scope, $route){
	console.log($route);
  $scope.model = {
    message: "This is awesome app!! "
  }
}]);

viewCtrl.loadData = ['$q', '$timeout',  function(q, timeout) {
	var defer = q.defer();
	timeout(function(){
		defer.reject("failed loading data");
	}, 1000);

	return defer.promise;
}];


/**
 * Note:
 * 1. $routeChangeError is called when promise failed or rejected
 * 2. Root Controller should handle the error using rootScope
 */
