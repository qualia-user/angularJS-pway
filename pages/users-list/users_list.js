app.directive("usersList", function () {
    return {
        controller: function($scope) {

        },
        templateUrl: 'pages/users-list/users_list.html',
        restrict: 'E',
        scope: {
            'tableHead': '=',
            'tableBody': '=',
            'tableButtons': '@'
        },
        link: function ($scope, $element, $attrs) {
            // table = $scope.data;

            $("#true").dxButton({
                stylingMode: "contained",
                text: "Show buttons",
                type: "normal",
                width: 120,
                onClick: function() {
                    DevExpress.ui.notify("Show buttons request");
                }
            });

            $("#false").dxButton({
                stylingMode: "contained",
                text: "Hide buttons",
                type: "normal",
                width: 120,
                onClick: function() {
                    DevExpress.ui.notify("Hide buttons request");
                }
            });
        }




    }
});







