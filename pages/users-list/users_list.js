var usersList = function() {
    return {
        restrict: "AE",
        scope: {
            data: '=',
        },
        templateUrl: 'pages/users-list/users_list.html',
    }
};

app.directive("usersList", usersList);