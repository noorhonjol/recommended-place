const mongoose=require("mongoose");


const User = mongoose.model('users',{
    name: String,
    password:String,
    birthDate:Date,
    
});


module.exports =User