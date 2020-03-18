let mongoose = require('mongoose');
let Post = require('./post');

let CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        default: "New Category"
    },
    description: {
        type: String,
        default: ""
    },
    gay: Boolean,
    date: String
});

CategorySchema.methods.getPosts = async () => {
    return await Post.find({category: this._id}).exec();
};

let Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
