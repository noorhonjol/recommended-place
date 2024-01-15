const Post=require('../models/Post');

module.exports={
    async createPost(title,content,imageUrl,userId){
        return await Post.create({title,content,imageUrl,userId});
    },
    async getAllPosts(){
        return await Post.find().populate('userId').populate('comments.userId');
    },
    async addCommentToPost(postId,text,rating,userId){
        const post=await Post.findById(postId);
        post.comments.push({text,rating,userId});
        await post.save();
        return "Comment added successfully"
    },
    async getPostById(postId){
        return await Post.findById(postId).populate('userId').populate('comments.userId');
    }
    



    
}

