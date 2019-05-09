const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    desc: {
        type: String,
        required: true
    },
});

module.exports = Post = mongoose.model('post', PostSchema);


