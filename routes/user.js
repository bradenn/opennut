let express = require('express');
let User = require('../models/user');
let router = express.Router();


router.post('/add', async (req, res) => {
    let user = {
        username: req.body.username
    };
    User.create();
    return res.render("user", {target: target});
});

router.get('/:username', async (req, res) => {
    let target = await User.findOne({username: req.params.username}).exec();
    return res.render("user", {target: target});
});

module.exports = router;
