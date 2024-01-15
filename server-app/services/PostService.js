const Post = require("../models/Post");

class PostService {
    static async createPost(title, content, imageUrl, userId) {
        try {
            const newPost = await Post.create({
                title: title,
                imageUrl: imageUrl,
                content: content,
                user: userId,
            });
            return newPost;
        } catch (error) {
            throw new Error("Error creating a post: " + error.message);
        }
    }
    static async getAllPosts() {
        return await Post.find().select("imageUrl title content metaData").populate({
            path: 'user',
            select: 'userName'
        });
    }
    static async addCommentToPost(postId, text, rating, userId) {
        try {
            const searchPost = await Post.findById(postId);
            if (!searchPost) {
                throw new Error("Post not found.");
            }
            const newComment = {
                user: userId,
                text: text,
                rating: rating
            };
            searchPost.comments.push(newComment);

            const { metaData } = searchPost;

            metaData.totalRatingSum += rating;

            metaData.commentsCount += 1;
            
            metaData.avgRating = metaData.totalRatingSum / metaData.commentsCount;
    
            await searchPost.save();
            return "Comment added to the post.";
        } catch (error) {
            throw new Error("Error adding comment: " + error.message);
        }
    }

    static async getPostById(postId) {
        const searchPost = await Post.findById(postId);

        if (!searchPost) {
            throw new Error("Post not found.");
        }
        await searchPost.populate([
            {
                path: 'user',
                select: 'userName',
            },
            {
                path: 'comments.user',
                select: 'userName',
            },
        ]);
        return searchPost;
    }
}

module.exports = PostService;