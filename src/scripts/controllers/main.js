angular.module('myApp.controllers')
    .controller('MainViewCtrl', ['$scope', 'User', function ($scope, User) {

        $scope.$on("$routeChangeSuccess", function () {
            User.get();
        });

    }]);