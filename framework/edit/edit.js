app.directive("edit", function() {
    return {
        templateUrl: 'framework/edit/edit.html',
        restrict: 'E',
        scope: {
            'formLabels': '=',
            'editObject': '='
        },
        link: function ($scope, $element, $attrs) {
            console.log('edit direktiva');
            // console.log($scope.form, 'form', $scope.editObject, 'editObcject');
        }
    }
});