angular.module('myApp.controllers')
    .controller('LoginCtrl', ['$scope', '$location', 'User', function ($scope, $location, User) {
        $scope.formData = {};

        $scope.login = function () {
            User.login($scope.formData,
                function (err) {
                    $scope.err = err;
                }, function () {
                    $location.path('/');
                });
        };

        $scope.logout = function () {
            User.logout(function () {
                $scope.formData = {};
            });
        };

    }]);