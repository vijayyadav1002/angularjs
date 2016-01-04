var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
}]);

app.run(['$templateCache', function(cache){
  cache.put("zippy.html", '<div class="pannel"><div ng-click="toggleContent()">{{title}}</div><div ng-show="isContentVisible" ng-transclude></div></div>');
}])

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
 * 1. you can manually put the template into tempateCache using run method
 */

