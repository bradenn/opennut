let mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
    name: String,
    link: String,
    local: Boolean,
    private: Boolean,
    gay: Boolean,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    date: String
});

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;
