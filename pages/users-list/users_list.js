app.directive("usersList", function () {
    return {
        controller: function($scope) {
            $scope.data = {
                headList: [{ title: 'Ime' }, { title: 'Prezime' }, { title: 'E-mail' }, { title: '' }, { title: '' }],
                rowList: [{ name: 'Tomislav', surname: 'Smetko', email: 'tomislav.smetko@qualia.hr',  edit: '<div id="editUser"></div>', delete: '<div id="deleteUser"></div>'},
                    { name: 'Domagoj', surname: 'Žugec', email: 'domagoj.zugec@qualia.hr', edit: '<div id="editUser"></div>', delete: '<div id="deleteUser"></div>' }]
            }
        },
        templateUrl: 'pages/users-list/users_list.html',
        restrict: 'E',
        scope: {
            'table': '='
        },
        link: function ($scope, $element, $attrs) {
            // $scope.showButtons =

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







