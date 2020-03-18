let mongoose = require('mongoose');
let Item = require('./item');

let ListSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "New List"
    },
    description: {
        type: String,
        default: ""
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    private: Boolean,
    date: String
});

ListSchema.methods.getLists = () => {
    return Item.find({list: this._id}).exec();
};

let List = mongoose.model('List', ListSchema);

module.exports = List;
