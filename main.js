var app = angular.module('behaviour', []);

app.directive('enter', [function(){

  return {
    restrict: 'A',
    link: function($scope, iElm, attr) {
        iElm.bind("mouseenter", function () {
          console.log("I am entering into");
            iElm.addClass(attr.enter);
        });
    }
  };
}]);