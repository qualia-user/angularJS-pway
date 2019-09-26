app.service('svcApi', ['$http', function ($http) {
        this.selectQuery_REPO = function () {
            console.log('selecting users');
            return $http.get("api/select_users.php").success(function (data) {
                console.log('users selected');
            });
        };
    }]);
