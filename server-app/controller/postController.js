const PostService = require('../services/PostService');

module.exports={
    createPost : async (req, res)=> {
        try {
            const { user } = req.user;
            const { title, content, imageUrl } = req.body;

            if (!title || !content || !imageUrl) {
                return res.status(400).json({ error: "Title, content, and imageUrl are required." });
            }
            
            const newPost = await PostService.createPost(title, content, imageUrl, user._id);

            res.status(201).json({ message: "Post created successfully", post: newPost });
        } catch (error) {
            console.error("Error creating a post:", error);
            res.status(500).json({ error: error.message });
        }
    },
    getAllPosts :async (req, res) =>{
        const posts = await PostService.getAllPosts();
        res.json(posts);
    },

    addCommentToPost :async (req, res) =>{
        try {
            const { text, rating } = req.body;
            const { user } = req.user;
            const { id:postId } = req.params;

            const message = await PostService.addCommentToPost(postId, text, rating, user._id);
            res.status(200).json({ message });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getPostById :async (req, res)=> {
        const { id: postId } = req.params;
        try {
            const searchPost = await PostService.getPostById(postId);
            res.status(200).json(searchPost);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },
}