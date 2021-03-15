const { errorCodesEnum } = require('../constans');
const { userValidator } = require('../validators');
const { User } = require('../dataBase/model');
const { errorHandler } = require('../messages');
const { NOT_VALID_USER, RECORD_NOT_FOUND } = require('../messages');

module.exports = {
    checkIsUserIdValid: (req, res, next) => {
        try {
            const { userId } = req.params;
            const { error } = userValidator.idUserValidator.validate(userId);

            if (error) {
                throw new errorHandler(errorCodesEnum.BAD_REQUEST, NOT_VALID_USER.customCode, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidator.createUserValidator.validate(req.body);

            if (error) {
                throw new errorHandler(errorCodesEnum.BAD_REQUEST, NOT_VALID_USER.customCode, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserExist: async (req, res, next) => {
        try {
            const { email } = req.body;

            const userByEmail = await User.findOne({ email });

            if (userByEmail) {
                throw new errorHandler(errorCodesEnum.BAD_REQUEST, RECORD_NOT_FOUND.customCode);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isUserUpdate: (req, res, next) => {
        try {
            const { error } = userValidator.updateUserValidator.validate(req.body);

            if (error) {
                throw new errorHandler(errorCodesEnum.BAD_REQUEST, NOT_VALID_USER.customCode, error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
