angular.module('myApp.services')
    .factory('User', ['$http', '$rootScope', function ($http, $rootScope) {

        var User = {};
        User.user = '';

        User.get = function (callback) {
            $http.get('/api/user').success(function (data) {
                User.user = data;
                if (data !== '') {
                    $rootScope.loggedIn = true;
                }
                if (typeof callback === 'function') {
                    callback(data);
                }
            }).error(function (err) {
                console.log(err);
            });
        };

        User.register = function (formData, errorCallback, successCallback) {
            $http.post('/api/user/register', formData).success(function (data) {
                User.user = data;
                if (data !== '') {
                    $rootScope.loggedIn = true;
                }
                if (typeof successCallback === 'function') {
                    successCallback();
                }
            }).error(function (data, status) {
                if (status == '400') {
                    errorCallback('Email is in the wrong format');
                } else if (status == '401') {
                    errorCallback('Email already exists');
                }
            });
        };

        User.login = function (formData, errorCallback, successCallback) {
            $http.post('/api/user/login', formData).success(function (data) {
                User.user = data;
                if (data !== '') {
                    $rootScope.loggedIn = true;
                }
                if (typeof successCallback === 'function') {
                    successCallback(data);
                }
            }).error(function (data, status) {
                if (status == '400') {
                    errorCallback('Email is in the wrong format');
                } else if (status == '401') {
                    errorCallback('Wrong email or password');
                }
            });
        };

        User.logout = function (callback) {
            $http.get('/api/user/logout').success(function () {
                User.user = '';
                $rootScope.loggedIn = false;
                if (typeof callback === 'function') {
                    callback();
                }
            });
        };


        //check if user is logged in
        if (typeof $rootScope.loggedIn === 'undefined') {
            User.get();
            console.log('checking if user is logged in');
        }


        return User;
    }]);