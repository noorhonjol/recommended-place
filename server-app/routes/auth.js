var express = require('express');
var router = express.Router();

const authenticateToken=require("../middleware/authMiddleware")

router.get('/protected',authenticateToken,(req,res)=>{
    res.send(req.user)
})
const {login,register}=require("../controller/authController")

router.post('/register', register).post("/login", login);

module.exports=router