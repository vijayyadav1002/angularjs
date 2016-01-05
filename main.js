var app = angular.module('app', ['ngRoute']);

app.factory("game", function() {
	return {
		game: "I am game"
	}
});

angular.injector(['app']).invoke(['game', function(game) {
	console.log("injector", game);
}]);



var viewCtrl = app.controller('AppCtrl', ['$scope', '$injector', function($scope, injector){
	injector.invoke(['game', function(game){
		  $scope.model = {
        message: game.game
      }
	}]);
}]);


