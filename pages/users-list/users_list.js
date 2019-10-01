app.directive("usersList", function () {
    return {
        templateUrl: 'pages/users-list/users_list.html',
        restrict: 'E',
        scope: {
            'tableHead': '=',
            'tableBody': '=',
            'tableButtons': '=',
            'whenSelect': '&'
        },
        link: function ($scope, $element, $attrs) {
            if ($scope.tableHead === undefined) {
                if (angular.isDefined($scope.tableBody)) {
                    $scope.tableHead = [];
                    for (var x in $scope.tableBody[0]) {
                        if ($scope.tableBody[0].hasOwnProperty(x)) {
                            $scope.tableHead.push({'property_name':x, 'title':x});
                        }
                    }
                }
            }

            $scope.editButton = {
                stylingMode: "contained",
                text: "Show buttons",
                type: "normal",
                width: 120,
                onClick: function() {
                    DevExpress.ui.notify("Edit buttons request!");
                    $scope.whenSelect({

                    });
                }
            };

            $scope.deleteButton = {
                stylingMode: "contained",
                text: "Hide buttons",
                type: "normal",
                width: 120,
                onClick: function() {
                    DevExpress.ui.notify("Hide buttons request");
                }
            };
        }
    }
});







