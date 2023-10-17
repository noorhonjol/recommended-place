const Post=require("../models/Post")

module.exports={
    createPost:async(req,res)=>{
        const {user}=req.user;
        const {title,content}=req.body
        
        await Post.create({title:title,content:content,user:user._id,});
    
        res.status(201).json({msg:"done create a post"});
    },
    getAllPosts:async(req,res)=>{
        const posts=await Post.find().select(["title","content","user"]).populate({path:"user",select:"userName"});
        res.json(posts);
    },
    addCommentToPost:async(req,res)=>{
        const{text,rating} =req.body;
        
        const {user}=req.user;
        
        const {id:postId}=req.params;
        
        const searchPost=await Post.findById(postId);

        if(!searchPost){
            return res.status(404).json(msg,"this post not exist");
        }
        searchPost.comments.push({user:user._id,text:text,rating:rating});
        await searchPost.save();
        res.json({msg:"comment submit successfully"})
        
    },
    getPostById:async(req,res)=>{
        const {id:postId}=req.params;
        const searchPost=await Post.findById(postId);

        if(!searchPost){
            return res.status(404).json(msg,"this post not exist");
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
        res.status(200).json(searchPost);
    }
}