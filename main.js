var app = angular.module('behaviour', []);

app.controller('TwitterCtrl', ["$scope", function($scope){
  
  $scope.fireMe = function() {
    console.log("Firing AK");
    console.log($scope.message);
  }
}]);

app.directive('enter', [function(){
  return {
    restrict: 'A',
    link: function($scope, iElm, attr) {
        iElm.bind("mouseenter", function () {
          $scope.$apply(attr.enter);
        });
    }
  };
}]);