angular.module('myApp.controllers', []);
angular.module('myApp.directives', []);
angular.module('myApp.filters', []);
angular.module('myApp.services', []);

var app = angular.module('myApp', [
    'ngRoute',
    'ui.gravatar',
    'myApp.controllers',
    'myApp.directives',
    'myApp.filters',
    'myApp.services'
]);


app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'MainViewCtrl'
        })
        .when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        }).when('/register', {
            templateUrl: 'partials/register.html',
            controller: 'RegisterCtrl'
        }).when('/profile', {
            templateUrl: 'partials/profile.html',
            controller: 'ProfileCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    var interceptor = ['$rootScope', '$q',function ($rootScope, $q) {
        function success(response) {
            return response;
        }

        function error(response) {
            var status = response.status;
            if (status == 401) {
                if (window.location.hash !== "#/login" && window.location.hash != "#/register") {
                    $rootScope.loggedIn = false;
                    window.location = "/#/login";
                    return({});
                }
            }
            // otherwise
            return $q.reject(response);
        }

        return function (promise) {
            return promise.then(success, error);
        };
    }];
    $httpProvider.responseInterceptors.push(interceptor);
}]);