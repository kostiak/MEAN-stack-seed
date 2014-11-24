angular.module('myApp.directives')
    .directive('appVersion', ['version', function (version) {
        return function (scope, elem) {
            elem.text(version);
        };
    }]);