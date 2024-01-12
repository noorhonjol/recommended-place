const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userRepository =require('../Repositories/userRepository')
const { validatePassword, generateToken } = require('../utils/authUtils');

const secretKey = "batata";
const secretKey2 = "mooz";


const authService = {
    async loginUser(username, password) {
        const user = await userRepository.findUser(username);

        if (!user) throw new Error('Invalid username or password');

        const isPasswordValid = await validatePassword(password, user.password);

        if (!isPasswordValid) throw new Error('Invalid username or password');

        const token = generateToken(user,secretKey,'15m');

        const refreshToken=generateToken(user,secretKey2,'1d');

        return {token,refreshToken};
    },

    async registerUser(username, password) {

        const userExists = await userRepository.findUser(username);
        
        if (userExists) throw new Error('Username already exists');
        
        const hashedPassword = await bcrypt.hash(password, 10);
        
        await userRepository.createUser({ userName: username, password: hashedPassword });
    },
    
    async checkAndCreateRefreshToken(refreshToken) {
        return new Promise((resolve, reject) => {
            jwt.verify(refreshToken, secretKey2, (err, user) => {
            if (err) {
                reject(err);
            } else {
                const accessToken = generateToken(user, secretKey, '15m');
                resolve(accessToken);
            }
            });
        });
    }
};
module.exports = authService;
