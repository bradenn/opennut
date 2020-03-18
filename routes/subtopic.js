let express = require('express');
let Topic = require('../models/topic');
let Subtopic = require('../models/subtopic');
let router = express.Router();


router.get('/:id', async (req, res) => {
    let target = await Subtopic.findOne({name: req.params.id}).exec();
    res.render("subtopic", {target: target});
});

module.exports = router;
