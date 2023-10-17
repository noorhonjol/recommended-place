const Joi = require('joi');

exports.schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(5),
});

