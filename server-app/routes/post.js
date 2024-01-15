const postController=require("../controller/postController")
const authMiddleware=require("../middleware/authMiddleware")
const express = require('express');
const router = express.Router();
const path=require('path')
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Generate a unique filename and retain the original extension
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
const{createPost,getAllPosts,addCommentToPost,getPostById}=postController;

router.get("/", getAllPosts).get("/:id",getPostById);

router.use(authMiddleware);

router.post('/add',upload.single("file"), createPost).post("/:id/comment",addCommentToPost);

module.exports=router