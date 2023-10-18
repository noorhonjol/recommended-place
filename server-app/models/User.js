const mongoose=require("mongoose");


const User = mongoose.model('users',{
    userName: String,
    password:String,
    birthDate:{
        type:Date,
        default:Date.now()
    },

});


module.exports =User