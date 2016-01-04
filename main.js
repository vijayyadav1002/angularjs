var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
}]);

app.directive('phone', [function(){
  return {
    restrict: 'E',
    transclude: true,
    template: '<div class="panel" ng-transclude></div>'
  };
}]);
