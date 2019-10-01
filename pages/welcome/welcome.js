app.controller("ctrl_welcome", ['$scope', 'svcApi',  function ($scope, svcApi) {
    $scope.users_vm = [
        {id: '1', customer_id: '408 555 1212'},
        {id: '2', customer_id: 'john.smith@example.org'}
    ];

    $scope.headList = [{property: 'name', name: 'Ime'}, {property: 'surname', surname: 'Prezime'}, {property: 'email', email: 'E-mail'}, {property: 'button', button: 'Button1'}, {property: 'button', button: 'Button2'}];
    $scope.rowList = {
        propertyMap: [{property_name:'name'}, {property_name:'surname'}, {property_name:'email'}],
        data: [
            {name: 'Tomislav', surname: 'Smetko', email: 'tomislav.smetko@qualia.hr'},
            {name: 'Domagoj', surname: 'Žugec', email: 'domagoj.zugec@qualia.hr'}
        ]
    };
    $scope.boolean = false;

    $scope.selectUsers = {
        stylingMode: "contained",
        text: "Get users",
        type: "normal",
        width: 120,
        onClick: function() {
            svcApi.selectQuery_REPO().then(success, error);

            function success (response) {
                console.log(response);
                $scope.users_vm = response.data;
            }
            function error(err) {
                console.log(err);
            }
        }
    };
}]);


