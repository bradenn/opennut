let express = require('express');
let Category = require('../models/category');
let Post = require('../models/post');
let router = express.Router();


router.get('/:id', async (req, res) => {
    let target = await Category.findOne({name: req.params.id}).exec();
    let posts = await Post.find({category: target._id}).populate('owner', 'username').populate('category', 'name').exec();
    res.render("category", {target: target, posts: posts});
});

module.exports = router;
