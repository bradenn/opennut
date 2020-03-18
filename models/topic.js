let mongoose = require('mongoose');

let TopicSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    description: String,
    creator: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'User'
    },
    date: String
});

let Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;
