let express = require('express');
let Topic = require('../models/topic');
let Subtopic = require('../models/subtopic');
let Text = require('../models/text');
let router = express.Router();


router.get('/:id', async (req, res) => {
    let target = await Topic.findOne({name: req.params.id}).exec();
    let subtopics = await Subtopic.find({topic: target._id}).exec();
    let texts = await Text.find({subtopic: {$in: subtopics.map(subtopic => subtopic._id)}}).exec();
    res.render("topic", {target: target, subtopics: subtopics, texts: texts});
});

module.exports = router;
