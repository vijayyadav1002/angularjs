var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
  this.clickMe = function() {
    console.log("how r u doing");
  }
  return $scope.phoneCtrl = this;
}]);

