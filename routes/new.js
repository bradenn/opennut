let express = require('express');
let Topic = require('../models/topic');
let Subtopic = require('../models/subtopic');
let List = require('../models/list');
let Text = require('../models/text');
let router = express.Router();

router.get('/list', async (req, res) => {
    let topics = await Topic.find({}).exec();
    res.render("newlist", {topics: topics});
});

router.post('/list', async (req, res) => {
    let topicData = {
        name: req.body.title,
        owner: req.user,
        description: req.body.description,
        private: !!(req.body.private),
        date: new Date()
    };
    List.create(topicData, (err, topic) => {
        if (err) {
            res.render("newlist", {error: err});
        } else if(topic) {
            res.redirect(`/list/${topic._id}`);
        } else{
            res.render("newlist", {error: "Cock-Banana"});
        }
    });
});

router.get('/text', async (req, res) => {
    let topics = await Topic.find({}).exec();
    let subtopics = await Subtopic.find({}).exec();
    return res.render("newtext", {topics: topics, subtopics: subtopics});
});

router.post('/text', async (req, res) => {
    let subtopic = await Subtopic.findOne({name: req.body.subtopic}).exec();
    let textData = {
        user: req.session.userId,
        title: req.body.title.toLowerCase().replace(/ /g, '-'),
        subtopic: subtopic._id,
        body: req.body.text,
        date: new Date()
    };
    Text.create(textData, (err, text) => {
        if (err) {
            res.render("newtext", {error: err});
        } else if(text) {
            res.redirect(`/text/${text.title}`);
        } else{
            res.render("newtext", {error: "Cock-Banana"});
        }
    });
});

router.get('/topic', async (req, res) => {
    res.render("newtopic");
});

router.post('/topic', async (req, res) => {
    let topicData = {
        name: req.body.title.toLowerCase().replace(/ /g, '-'),
        description: req.body.description
    };
    Topic.create(topicData, (err, topic) => {
        if (err) {
            res.render("newtopic", {error: err});
        } else if(topic) {
            res.redirect(`/topic/${topic.name.toLowerCase()}`);
        } else{
            res.render("newtopic", {error: "Cock-Banana"});
        }
    });
});

router.get('/subtopic', async (req, res) => {
    let topics = await Topic.find({}).exec();
    res.render("newsubtopic", {topics: topics});
});

router.post('/subtopic', async (req, res) => {
    let subtopicData = {
        name: req.body.title.toLowerCase().replace(/ /g, '-'),
        topic: req.body.topic,
        description: req.body.description
    };
    Subtopic.create(subtopicData, (err, subtopic) => {
        if (err) {
            res.render("newsubtopic", {error: err});
        } else if(subtopic) {
            res.redirect(`/subtopic/${subtopic.name.toLowerCase()}`);
        } else{
            res.render("newsubtopic", {error: "Cock-Banana"});
        }
    });
});

module.exports = router;
