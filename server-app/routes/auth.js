var express = require('express');
var router = express.Router();

const authenticateToken=require("../middleware/authMiddleware")

router.get('/userinfo',authenticateToken,(req,res)=>{
    res.send(req.user)
})
const {login,register,refresh}=require("../controller/authController")

router.post('/register', register).post("/login", login).post('/refresh',refresh);

module.exports=router