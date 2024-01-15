const { schema } = require("../validationSchema/authSchema");
const authService = require('../services/authService');

module.exports = {
    async login(req, res) {
        try {
            const { error } = schema.validate(req.body);
            
            if (error) return res.status(400).json({ error: error.details[0].message });

            const { username, password } = req.body;
            
            const {token,refreshToken} = await authService.loginUser(username, password);

            res.cookie('refreshToken', refreshToken, { httpOnly: true, secure: true });

            res.json({ msg: 'Login successful',accessToken: token});
        
        } catch (error) {
            res.status(401).json({ msg: error.message });
        }
    },

    async register(req, res) {
        try {            
            
            const { error } = schema.validate(req.body);

            if (error) {
                return res.status(400).json({ error: error.details[0].message });
            }

            const { username, password } = req.body;

            authService.registerUser(username, password );

            res.status(201).send();
        
        } catch (error) {
            res.status(400).json({ msg: error.message });
        }
    },
    
    async refresh(req, res){
        
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) return res.sendStatus(401);
        
        const newAccessToken=await authService.checkAndCreateRefreshToken(refreshToken);
        
        if(!newAccessToken){
            return res.sendStatus(403);
        }
        
        res.json({accessToken:newAccessToken})
    },
    async logout(req,res){
        res.cookie('refreshToken', '', { httpOnly: true, secure: true });
        res.status(201).send();
    }

};