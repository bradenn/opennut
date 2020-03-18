let mongoose = require('mongoose');

let ItemSchema = new mongoose.Schema({
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    },
    date: String
});

let Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
