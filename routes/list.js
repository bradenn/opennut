let express = require('express');
let List = require('../models/list');
let router = express.Router();


router.get('/:id', async (req, res) => {
    let target = await List.findOne({_id: req.params.id}).exec();
    res.render("list", {target: target});
});

module.exports = router;
