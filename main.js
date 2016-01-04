var app = angular.module('phoneApp', []);

app.directive('dummyPassword', [function(){
  var validElement = angular.element("<div>{{title}}</div>");
  var link = function(scope) {
    scope.$watch("title", function(value) {
      if (value == 'password') {
        validElement.toggleClass('alert-box alert');
      };
    });
  };
  return {
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    replace: true, //this will replace the directive name with the actual html 
    template: '<div class="pannel"><input type="text" ng-model="title"/></div>',
    compile: function(tElem) {
      tElem.append(validElement);
      return link;
    }
  };
}]);

/**
 * note:
 * 1. camelCased directive are written in html with hyphen separated
 * 2. if compile is used than link function is manually triggered
 * 3. Element can be referenced by creating angular element first
 * this way you don't have to find the element and using the big expression 
 */

