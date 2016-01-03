var app = angular.module('drinkApp', []);

app.controller('drinkCtrl', ['$scope', function($scope){
}]);

app.directive('drink', [function(){
  return {
    scope: {
      flavour: '=', //this = represent that flavour attribute in the directive is a binds to another model and they both are two way binded
    },
    template: '<input type="text" ng-model="flavour"/><div>{{flavour}}</div>'
  };
}]);