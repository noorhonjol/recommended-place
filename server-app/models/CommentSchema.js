const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    text: {
    type: String,
    required: true,
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
    required: true,
    },
    rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true,
    },
});

module.exports = commentSchema;
