let express = require('express');
let User = require('../models/user');
let router = express.Router();

router.get('/', async (req, res) => {
    if(req.user) res.redirect('/');
    res.render("login");
});

router.post('/', async (req, res) => {
    console.log("COCK");
    if (req.body.username && req.body.password) {
    console.log("COCK2");
        await User.authenticate(req.body.username, req.body.password).then((user) => {
            req.session.userId = user._id;
            res.redirect('/');
        }).catch((error) => {
            console.log("COCK3");
            res.render("login", {error: error});
        });
    }
    console.log("COCK4");
});

module.exports = router;
