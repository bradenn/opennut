let express = require('express');
let User = require('../models/user');
let router = express.Router();

router.get('/', async (req, res) => {
    if (req.user) res.redirect('/');
    res.render("register");
});

router.post('/', async (req, res) => {
    if (req.user) res.redirect('/');
    if (req.body.password !== req.body.cPassword) {
        let err = new Error('Passwords do not match.');
        err.status = 400;
        res.render("register", {error: err});
    }
    if (req.body.email && req.body.username &&
        req.body.password && req.body.cPassword) {
        let userNameString = req.body.username;
        if (!userNameString.includes(" ")) {
            let userData = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                date: new Date()
            };
            User.create(userData, function (error, user) {
                if (error) {
                    res.render("register", {
                        error: error
                    });
                } else {
                    req.session.userId = user._id;
                    res.redirect('/');
                }
            });
        } else {
            return res.render("register", {
                error: "Why would you think its okay to put a space in your username?!"
            });
        }
    } else {
        return res.render("register", {
            error: "All fields must be complete."
        });
    }
});

module.exports = router;
