var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "app.html",
    controller: "AppCtrl",
    resolve: {
    	loadData: appCtrl.loadData,
    	prepareData: appCtrl.prepareData
    }
  });
}]);

var appCtrl = app.controller('AppCtrl', ['$scope', '$route',  function($scope, $route){
	console.log($route);
  $scope.model = {
    message: "This is awesome app!! "
  }
}]);

appCtrl.loadData = ['$q', '$timeout',  function(q, timeout) {
	var defer = q.defer();
	timeout(function(){
		defer.resolve("loadedData");
	}, 1000);

	return defer.promise;
}];

appCtrl.prepareData = ['$q', '$timeout',  function(q, timeout) {
	var defer = q.defer();
	timeout(function(){
		defer.resolve("preparedData");
	}, 1000);

	return defer.promise;
}];

/**
 * Note:
 * 1. $route will contain the loaddata and preparedata string under its current locals object
 * 2. verify it by checking logs
 */
