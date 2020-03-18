let express = require('express');
let router = express.Router();

router.use('/', require('./home'));
router.use('/user', require('./user'));
router.use('/text', require('./text'));
router.use('/topic', require('./topic'));
router.use('/list', require('./list'));
router.use('/subtopic', require('./subtopic'));
router.use('/new', require('./new'));
router.use('/login', require('./login'));
router.use('/register', require('./register'));

router.get('/logout', (req, res, next) => {
    if (req.session) {
        req.session.destroy(function(err) {
            if (err) {
                next(err);
            } else {
                res.redirect('/');
            }
        });
    }
});

module.exports = router;
