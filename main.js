var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
  $scope.callHome = function(message) {
    console.log(message);
  };
}]);

app.directive('phone', [function(){
  return {
    scope: {
      dial: '&',
    },
    template: '<input type="text" ng-model="value"/>' + 
    '<div class="button" ng-click="dial({message: value})">Call home</div>'
  };
}]);

/**
 *  Note: The message property should have the same name as passed from the html callHome function
 * to get passed.
 */