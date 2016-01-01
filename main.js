var app = angular.module('superheroapp', []);

app.directive('superhero', [function(){
  // Runs during compile
  return {
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    scope: {}, //defined empty to isolate the scope from other directives
    controller: ['$scope', function($scope) {
      $scope.powers = [];
      this.addSpeed = function () {
        $scope.powers.push('speed');
      };
      this.addFlight = function () {
        $scope.powers.push('flight');
      };
      this.addStrength = function () {
        $scope.powers.push('strength');
      };
      $scope.showItems = function () {
        console.log($scope.powers);
      }
    }],
    link: function($scope, iElm, iAttrs, controller) {
      console.log($scope.powers);
      iElm.bind('click', function(){
        $scope.showItems();
      });
    }
  };
}]);

app.directive('strength', function(){
  // Runs during compile
  return {
    restrict: 'A',
    require: 'superhero', // Array = multiple requires, ? = optional, ^ = check parent elements
    link: function($scope, iElm, iAttrs, controller) {
      controller.addStrength();
    }
  };
});

app.directive('flight', function(){
  // Runs during compile
  return {
    restrict: 'A',
    require: 'superhero', // Array = multiple requires, ? = optional, ^ = check parent elements
    link: function($scope, iElm, iAttrs, controller) {
      controller.addFlight();
    }
  };
});

app.directive('speed', function(){
  // Runs during compile
  return {
    restrict: 'A',
    require: 'superhero', // Array = multiple requires, ? = optional, ^ = check parent elements
    link: function($scope, iElm, iAttrs, controller) {
      controller.addSpeed();
    }
  };
});