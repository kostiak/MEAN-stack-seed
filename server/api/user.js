/**
 * Created by kost on 14/09/14.
 */
var User = require('../model/user');

module.exports = function (app, passport) {

    app.post('/api/user/login',
        passport.authenticate('local-login'),
        function (req, res) {
            res.json({
                email: req.user.email
            });
        });
    app.post('/api/user/register',
        passport.authenticate('local-signup'),
        function (req, res) {
            res.json({
                email: req.user.email
            });
        });

    app.get('/api/user', function (req, res) {
        if (req.isAuthenticated()) {
            res.json({
                email: req.user.email
            });
        }
        else {
            res.json();
        }
    });

    app.get('/api/user/logout', function (req, res) {
        req.logout();
        res.end();
    });

};