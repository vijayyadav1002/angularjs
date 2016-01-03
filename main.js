var app = angular.module('drinkApp', []);

app.controller('drinkCtrl', ['$scope', function($scope){
}]);

app.directive('drink', [function(){
  return {
    scope: {
      flavour: '@', //this @ represent that flavour attribute in the directive is a string
    },
    template: '<div>{{flavour}}</div>'
  };
}]);