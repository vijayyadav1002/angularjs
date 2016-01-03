var app = angular.module('choreApp', []);

app.controller('choreCtrl', ['$scope', function($scope){
    $scope.logCtrl = function (chore) {
      console.log(chore + " is done!");
    }
}]);


app.directive('kid', [function(){

  return {
    scope: {
      done: '&', //this & represent that done attribute in the directive is an expression
    }, // {} = isolate, true = child, false/undefined = no change
    restrict: 'E',
    template: '<input type="text" ng-model="chore"/> <div>{{chore}}</div> <div class="button" ng-click="done({chore:chore})">Click ME</div>'  // we need to pass parameter to function logCtrl using object notation {chore:chore}
  };
}]);