const mongoose = require('mongoose');

const commentSchema = require('./CommentSchema')

const MetaPostSchema = require("./MetaPost")

const postSchema = new mongoose.Schema({
    metaData: {
        type: MetaPostSchema, 
        default: {
            commentsCount: 0,
            avgRating: 0,
            totalRatingSum :0
        }
    },
    title: {
        type: String,
        required: true,
    },
    imageUrl: String,
    content: {
        type: String,
        required: true,
    },
    comments: [commentSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;