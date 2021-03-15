const Joi = require('joi');

const { regexpEnum } = require('../../constans');

module.exports = Joi.object({
    name: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50)
        .required(),

    lastName: Joi
        .string()
        .alphanum()
        .min(2)
        .max(50),

    email: Joi
        .string()
        .regex(regexpEnum.EMAIL_REGEXP)
        .required(),

    password: Joi
        .string()
        .min(6)
        .max(16)
        .regex(regexpEnum.PASSWORD_REGEXP)
        .required()
});
