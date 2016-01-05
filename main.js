var app = angular.module('app', []);

app.provider("superhero", function() {
	return {
		$get: function() {
			return {
				superhero: "Shaktiman"
			}
		}
	}
});


app.factory("game", function() {
	return {
		game: "I am game"
	}
});

app.provider("play", function() {
	var type;
	return {
		setType: function(value) {
			type = value;
		},
		$get: function() {
			return {
				title: type + "Craft"
			}
		}
	}
});

app.config(['$provide', 'playProvider', function(provide, playProvider) {
	provide.factory("gem", function() {
		return {
			gem: 'Ruby'
		}
	});

	playProvider.setType("War");
}]);



var viewCtrl = app.controller('AppCtrl', ['$scope', 'game', 'gem', 'superhero', 'play',
 function($scope, game, gem, superhero, play){
	console.log(game);
	console.log(gem);
	console.log(superhero);
  $scope.model = {
    message: play.title
  }
}]);


