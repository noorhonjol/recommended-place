const postController=require("../controller/postController")
const authMiddleware=require("../middleware/authMiddleware")

var express = require('express');

var router = express.Router();



const{createPost,getAllPosts,addCommentToPost,getPostById}=postController;

router.post('/add',authMiddleware, createPost)
.get("/", getAllPosts).
post("/:id/comment",authMiddleware,addCommentToPost).
get("/:id",getPostById);

module.exports=router