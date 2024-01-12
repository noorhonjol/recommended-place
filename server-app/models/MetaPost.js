const mongoose =require("mongoose");

const MetaPostSchema = new mongoose.Schema({
    totalRatingSum :Number,
    commentsCount: Number,
    avgRating: Number,
});

module.exports = MetaPostSchema;