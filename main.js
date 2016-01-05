var app = angular.module('app', []);

app.factory("game", function() {
	return {
		game: "I am game"
	}
})


var viewCtrl = app.controller('AppCtrl', ['$scope', 'game',  function($scope, game){
	console.log(game);
  $scope.model = {
    message: "This is awesome app!! "
  }
}]);


