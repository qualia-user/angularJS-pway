app.directive("customList", ['$filter', function ($filter) {
    return {
        templateUrl: 'framework/custom-list/custom-list.html',
        restrict: 'E',
        scope: {
            'tableHead': '=',
            'tableBody': '=',
            'tableButtons': '=',
            'whenSelect': '&'
        },
        link: function ($scope, $element, $attrs) {console.log('asdasd')
            $scope.visiblePopup = false;
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
                text: "Edit",
                type: "normal",
                width: 120,
                onClick: function(e) {
                    var editObject = $filter('filter')($scope.tableBody, {id:e.model.data.id})[0];
                    $scope.visiblePopup = true;
                    $scope.formParts = $scope.tableHead;
                    $scope.editObj = editObject;
                    DevExpress.ui.notify("Edit button request!");

                }
            };

            $scope.popupOptions = {
                width: 300,
                height: 250,
                contentTemplate: "info",
                showTitle: true,
                title: "Edit form",
                dragEnabled: false,
                closeOnOutsideClick: true,
                bindingOptions: {
                    visible: "visiblePopup",
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
}]);







