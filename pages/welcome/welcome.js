app.controller("ctrl_welcome", ['$scope', 'svcApi',  function ($scope, svcApi) {
    $scope.users_vm = [
        {id: '1', customer_id: '408 555 1212'},
        {id: '2', customer_id: 'john.smith@example.org'}
    ];

    $("#selectUsers").dxButton({
        stylingMode: "contained",
        text: "Get users",
        type: "normal",
        width: 120,
        onClick: function() {
            svcApi.selectQuery_REPO().then(success, error);

            function success (response) {
                $scope.users_vm = response.data;
            }
            function error(err) {
                console.log(err);
            }
        }
    });
}]);


