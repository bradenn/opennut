let mongoose = require('mongoose');

let SubtopicSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic'
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: String,
    date: String
});

let Subtopic = mongoose.model('Subtopic', SubtopicSchema);

module.exports = Subtopic;
