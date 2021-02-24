const fs = require('fs-extra');
const path = require('path');

const userData = path.join(process.cwd(), 'dataBase', 'user.json');

const errorCodes = require('../constans/errorCodes.enum');
const errorMessage = require('../constans/errorMassege.enum');

module.exports = {

    isUserTrue: (req, res, next) => {
        try {

            const {name, email, preferL = 'en'} = req.body;

            if (email.length < 8) {
                throw new Error(errorMessage.EMAIL_IS_WRONG[preferL]);
            }

            if (!name || email) {
                throw new Error(errorMessage.HERE_NOTHING[preferL]);
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

                throw new Error(errorMessage.WRONG_ID["en"]);
            }

            next();

        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    userFindIsTrue: async (req, res, next) => {
        try {

            const {email, name, preferL = 'en'} = req.body;

            const check = await fs.readJson(userData);

            const isTrue = check.find(value => value.email === email || value.name === name);

            if (isTrue === undefined) {

                throw new Error(errorMessage.WRONG_NAME[preferL] && errorMessage.EMAIL_IS_WRONG[preferL]);
            }
            next();

        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};