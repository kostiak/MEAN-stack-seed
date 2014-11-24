var User = require('./model/user');

module.exports = function (app, passport) {

    require('./api/user')(app, passport);

    // ### for anything that's not static or api, redirect ###
    app.get('*', function(req, res){
        res.redirect('/');
    });
};