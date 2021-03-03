const Joi = require('joi');

const { regexpEnum } = require('../../constans');

module.exports = Joi.object({
    email: Joi.string().trim().regex(regexpEnum.EMAIL_REGEXP).required(),
    password: Joi.string()
        .trim().min(6)
        .max(30)
        .regex(regexpEnum.PASSWORD_REGEXP)
        .required(),
    name: Joi.string()
        .trim()
        .alphanum()
        .min(2)
        .max(50)
        .required(),
    age: Joi.number().integer().min(3).max(120),
});
