var express = require('express');

var router = express.Router();

const authMiddleware=require("../middleware/authMiddleware")

const {createPost,getAllPosts,addCommentToPost,getPostById}=require("../controller/postController")

router.post('/add',authMiddleware, createPost).get("/", getAllPosts).post("/:id/comment",authMiddleware,addCommentToPost).get("/:id",getPostById);


module.exports=router