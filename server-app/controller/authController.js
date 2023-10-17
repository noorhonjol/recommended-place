const User=require('../models/User')
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken');
const {schema}=require("../validationSchema/authSchema")
const secretKey="batata"
module.exports = {

    login:async(req,res)=>{
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { username, password } = req.body;

        const [user] = await User.find({userName:username});

        if (!user) {
            return res.status(401).json({ msg: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ msg: 'Invalid username or password' });
        }

        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.json({ msg: 'Login successful' });
    },

    register:async(req,res)=>{
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { username, password } = req.body;
        
        const userExist= await User.find({userName:username})
        
        if(userExist){
            return res.status(401).json({msg:"this username is exist"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        await User.create({userName:username,password:hashedPassword});
        
        res.status(201).json({msg:"done created user"});
    }
};