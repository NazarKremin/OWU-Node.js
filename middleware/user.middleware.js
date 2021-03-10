const errorCodes = require('../constans/errorCodes.enum');
const errorMessage = require('../constans/errorMassege.enum');
const userService = require('../service');
const { userValidators } = require('../validator');

module.exports = {

    isUserTrue: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }
            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    userCheckId: (req, res, next) => {
        try {
            const userId = +req.params.userId;

            if (userId < 0 || !Number.isInteger(userId) || Number.isNaN(userId)) {
                throw new Error(errorMessage.WRONG_ID.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isUserExist: async (req, res, next) => {
        try {
            const { email } = req.params;
            const { preferL = 'en' } = req.query;

            const user = await userService.userService.findByOption(email);

            if (!user) {
                throw new Error(errorMessage.EMAIL_IS_WRONG[preferL]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
};
