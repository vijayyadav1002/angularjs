var app = angular.module('app', []);

app.config(['$logProvider', function(logProvider) {
	logProvider.debugEnabled(true);//pass false to disbale debug logs
}]);

app.run(['$rootScope', '$log', function(rootScope, log) {
	rootScope.$log = log;
}]);