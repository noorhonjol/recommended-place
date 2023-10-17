const mongoose = require('mongoose');
const commentSchema=require('./CommentSchema')
const postSchema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
    },
    content: {
    type: String,
    required: true,
    },
    comments: [commentSchema],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
