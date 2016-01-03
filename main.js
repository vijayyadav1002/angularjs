var app = angular.module('phoneApp', []);

app.controller('phoneCtrl', ['$scope', function($scope){
  $scope.leaveVoiceMessage = function(number, message) {
    console.log("calling at " + number + ":" +message + " |->network:" + $scope.network);
  };
}]);

app.directive('phone', [function(){
  return {
    restrict: 'E',
    scope: {
      number: '@',
      network: "=",
      makeCall: '&'
    },
    template: '<div class="panel">' + 
      '<div>Numbe is {{number}}</div>' + 
      '<select ng-model="network"><option ng-repeat="nt in networks">{{nt}}</option></select>' +
      '<input type="text" ng-model="message"/>' +
      '<div class="button" ng-click="makeCall({number:number, message:message})">Call Home</div>'
    ,
    link: function(scope) {
      scope.networks = ['Airtel', 'IDEA', 'Vodafone'];
      scope.network = scope.networks[0];
    }
  };
}]);
