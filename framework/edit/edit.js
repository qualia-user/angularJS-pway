app.directive("edit", function() {
    return {
        templateUrl: 'framework/edit/edit.html',
        restrict: 'E',
        scope: {
            'formLabels': '=',
            'editObject': '='
        },
        link: function ($scope, $element, $attrs) {
        }
    }
});