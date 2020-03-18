let express = require('express');
let Post = require('../models/post');
let router = express.Router();

router.get('/:id', async (req, res) => {
    let target = await Post.findOne({_id: req.params.id}).populate('owner', 'username').populate('category', 'name').exec();
    res.render("post", {target: target});
});

module.exports = router;
