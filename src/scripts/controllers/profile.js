angular.module('myApp.controllers')
    .controller('ProfileCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
        if (!$scope.loggedIn) {
            $location.path('/login');
        }

        User.get(function (data) {
            $scope.user = data;
        });

    }]);