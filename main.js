var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
}]);

app.directive('zippy', [function(){
  // Runs during compile
  return {
    scope: {
      title: '@'
    }, // {} = isolate, true = child, false/undefined = no change
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'zippy.html',
    transclude: true,
    link: function($scope) {
      $scope.isContentVisible = false;
      $scope.toggleContent = function() {
        $scope.isContentVisible = !$scope.isContentVisible;
      };
    }
  };
}]);


