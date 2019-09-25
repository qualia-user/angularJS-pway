app.controller("ctrl_welcome", ['$scope', 'svcApi', function ($scope, svcApi) {

                var vm = this;
                vm.users_vm = [
                    {id: '1', customer_id: '408 555 1212'},
                    {id: '2', customer_id: 'john.smith@example.org'}
                ];

                $scope.selectUsers = function () {
                    svcApi.selectQuery_REPO().success(function(result) {
                        if (result.length > 0) {
                            console.log(result);
                            $scope.users_vm = result;
                        }
                    })
                };
            }]);


