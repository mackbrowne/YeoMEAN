/**
 * Module dependencies.
 */
 var mongoose = require('mongoose'),
 User = mongoose.model('User');

/**
 * Auth callback
 */
 exports.authCallback = function(req, res, next) {
    res.redirect('/');
};

/**
 * Show login form
 */
 exports.signin = function(req, res) {
    return res.redirect('/#/signin');
};

/**
 * Show sign up form
 */
 exports.signup = function(req, res) {
    return res.redirect('/#/signup');
};

/**
 * Logout
 */
 exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * Session
 */
 exports.session = function(req, res) {
    res.redirect('/');
};

/**
 * Create user
 */
 exports.create = function(req, res) {
    var user = new User(req.body);

    user.provider = 'local';
    user.save(function(err) {
        if (err) {
            req.flash('error', 'problem with signup');
            return res.redirect('/#/signup');
        }
        req.logIn(user, function(err) {
            if (err) return next(err);
            return res.redirect('/');
        });
    });
};

/**
 *  Show profile
 */
 exports.show = function(req, res) {
    var user = req.profile;
    user.errors = req.flash('error');
    res.jsonp(user);  
};

/**
 * Send User
 */
 exports.me = function(req, res) {
    var errors = req.flash('error');
    var user = {authenticated: false, errors:errors};
    if(req.user){
        user = {user: {name: req.user.name, email: req.user.email, _id: req.user._id}, authenticated:true}
        authenticated: true;
    }
    res.jsonp(user);  
};

/**
 * Find user by id
 */
 exports.user = function(req, res, next, id) {
    User
    .findOne({
        _id: id
    })
    .exec(function(err, user) {
        if (err) return next(err);
        if (!user) return next(new Error('Failed to load User ' + id));
        req.profile = user;
        next();
    });
};