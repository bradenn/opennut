let mongoose = require('mongoose');

let TextSchema = new mongoose.Schema({
    title: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subtopic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subtopic'
    },
    link: String,
    body: String,
    date: String
});

let Text = mongoose.model('Text', TextSchema);

module.exports = Text;
