angular.module('myApp.controllers')
    .controller('AppCtrl', ['$scope', 'User', '$location', function ($scope, User, $location) {

        $scope.$watch(function () {
            return User.user;
        }, function (data) {
            $scope.user = data;
        });

        $scope.logout = function () {
            User.logout(function () {
                $location.path('/');
            });
        };

    }]);