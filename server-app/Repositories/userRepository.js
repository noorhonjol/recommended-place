
const User = require('../models/User');

module.exports = {
    async findUser (username)  {
        return await User.findOne({ userName: username });
    },
    async createUser (username, password){

        return await User.create({ userName: username, password: password });    
    }


};