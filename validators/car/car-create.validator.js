const Joi = require('joi');

module.exports = Joi.object({
    model: Joi
        .string()
        .trim()
        .min(1)
        .max(50)
        .required(),
    price: Joi
        .number()
        .integer()
        .min(1)
});
