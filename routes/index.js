let express = require('express');
let router = express.Router();

router.use('/', require('./home'));
router.use('/user', require('./user'));
router.use('/new', require('./new'));
router.use('/post', require('./post'));
router.use('/category', require('./category'));
router.use('/login', require('./login'));
router.use('/register', require('./register'));

router.get('/gay', (req, res) => {
    req.session.gay = true;
    res.redirect('back');
});

router.get('/straight', (req, res) => {
    req.session.gay = false;
    res.redirect('back');
});

router.get('/logout', (req, res, next) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                next(err);
            } else {
                res.redirect('/');
            }
        });
    }
});

module.exports = router;
