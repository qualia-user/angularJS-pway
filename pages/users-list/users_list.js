app.directive("usersList", usersList);

function usersList() {
    var directive = {
        controller: controller,
        templateUrl: 'pages/users-list/users_list.html',
        restrict: 'E',
        scope: {
            data: '='
        }
    }
    return directive;

    function controller($scope) {
        $scope.data = {
            headList: [{ title: 'Ime' }, { title: 'Prezime' }, { title: 'E-mail' }, { title: '' }, { title: '' }],
            rowList: [{ name: 'Tomislav', surname: 'Smetko', email: 'tomislav.smetko@qualia.hr',  edit: '', delete: ''},
                      { name: 'Domagoj', surname: 'Žugec', email: 'domagoj.zugec@qualia.hr', edit: '', delete: '' }]
        }
    }
};

