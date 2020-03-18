let express = require('express');
let Topic = require('../models/topic');
let List = require('../models/list');
let router = express.Router();


router.get('/', async (req, res) => {
    let lists = await List.find({owner: req.user._id}).exec();
    return res.render("home", {lists: lists});
});
module.exports = router;
