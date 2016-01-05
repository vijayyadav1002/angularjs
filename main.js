var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/app', {
    templateUrl: "view/app.html",
    controller: "ViewCtrl",
    resolve: {
    	loadData: viewCtrl.loadData
    }
  })
  .when('/new', {
  	templateUrl:'view/new.html',
  	controller: 'NewCtrl',
    resolve: {
    	loadData: viewCtrl.loadData
    }
  });
}]);

app.controller('AppCtrl', ['$rootScope', function(rootScope){
	rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
		console.log("!!" + rejection);
	});
	rootScope.$on('$routeChangeStart', function(event, current, previous, rejection){
		console.log("!! change start");
	});
	rootScope.$on('$routeChangeSuccess', function(event, current, previous, rejection){
		console.log("!!chnage success");
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


var viewCtrl = app.controller('ViewCtrl', ['$scope', '$location',  function($scope, $location){
	console.log($location);
  $scope.model = {
    message: "This is awesome app!! "
  }

  $scope.changeView = function() {
  	$location.path('/new');
  };
}]);

app.controller('NewCtrl', ['loadData', function(loadData) {
	console.log("NewCtrl :" + loadData);
}]);


viewCtrl.loadData = ['$q', '$timeout',  function(q, timeout) {
	var defer = q.defer();
	timeout(function(){
		defer.resolve("loaded data");
	}, 1000);

	return defer.promise;
}];


/**
 * Note:
 * 1. $routeChangeError is called when promise failed or rejected
 * 2. Root Controller should handle the error using rootScope
 */
