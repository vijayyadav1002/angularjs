var app = angular.module('app', []);

app.config(['$logProvider', function(logProvider) {
	logProvider.debugEnabled(true);//pass false to disbale debug logs
}]);

app.run(['$rootScope', '$log', function(rootScope, log) {
	rootScope.$log = log;
}]);


app.controller('Ctrl1', [function(){
	this.foo = "Ctrl1";
	this.checkMe = function() {
		console.log("Checking done!!");
	}
}]);

app.controller('Ctrl2', [function(){
	this.foo = "Ctrl2";
}]);