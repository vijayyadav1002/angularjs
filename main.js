var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
}]);

app.directive('zippy', ['$templateCache', function(cache){
  return {
    scope: {
      title: '@'
    }, // {} = isolate, true = child, false/undefined = no change
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    template: cache.get('zippy.html'),
    transclude: true,
    link: function($scope) {
      $scope.isContentVisible = false;
      $scope.toggleContent = function() {
        $scope.isContentVisible = !$scope.isContentVisible;
      };
    }
  };
}]);

/**
 * note:
 * 1. all the script templates are loaded into templateCache 
 * 2. one can retreive them using the key
 */

