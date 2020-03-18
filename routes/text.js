let express = require('express');
let Text = require('../models/text');
let Topic = require('../models/topic');
let router = express.Router();

router.get('/:id', async (req, res) => {
    let target = await Text.findOne({title: req.params.id}).exec();
    res.render("text", {target: target});
});


module.exports = router;
