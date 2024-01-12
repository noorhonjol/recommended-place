const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const authUtils = {
    
    async validatePassword(inputPassword, userPassword) {
        return await bcrypt.compare(inputPassword, userPassword);
    },

    generateToken(user, secret, expiresIn) {
        return jwt.sign({ user }, secret, { expiresIn });
    },
    
    
};

module.exports = authUtils;
