/**
 * Created by miha on 03.04.2015 10:11.
 */

app.service('svcApi', ['$http', function ($http) {
        this.selectQuery_REPO = function () {
            console.log('selecting users');
            return $http.get("api/select_users.php").success(function (data) {
                console.log('users selected');
            });
        };
    }]);
