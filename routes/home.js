let express = require('express');
let Category = require('../models/category');
let Post = require('../models/post');
let router = express.Router();


router.get('/', async (req, res) => {
    let categories = await Category.find({}).limit(30).exec();
    let sexuality = (req.session.gay)?{gay: true}:{};
    let posts = await Post.find(sexuality).populate('owner', 'username').populate('category', 'name').limit(30).exec();
    return res.render("home", {categories: categories, posts: posts});
});
module.exports = router;
