let express = require('express');
let Category = require('../models/category');
let Post = require('../models/post');
let router = express.Router();

router.get('/post', async (req, res) => {
    let categories = await Category.find({}).exec();
    return res.render("newpost", {categories: categories});
});

router.post('/post', async (req, res) => {
    let postData = {
        owner: req.session.userId,
        name: req.body.name,
        category: req.body.category,
        private: !!(req.body.private),
        gay: !!(req.session.gay),
        link: req.body.link,
        date: new Date()
    };
    Post.create(postData, (err, text) => {
        if (err) {
            res.render("newpost", {error: err});
        } else if(text) {
            res.redirect(`/post/${text._id}`);
        } else{
            res.render("newpost", {error: "Cock-Banana"});
        }
    });
});

router.get('/category', async (req, res) => {
    res.render("newcategory");
});

router.post('/category', async (req, res) => {
    let categoryData = {
        name: req.body.title.toLowerCase().replace(/ /g, '-'),
        description: req.body.description,
        date: new Date()
    };
    Category.create(categoryData, (err, category) => {
        if (err) {
            res.render("newcategory", {error: err});
        } else if(category) {
            res.redirect(`/category/${category.name}`);
        } else{
            res.render("newcategory", {error: "Cock-Banana"});
        }
    });
});

module.exports = router;
