const jwt = require('jsonwebtoken');
const { errorMessages } = require('../messages');
const { passwordHash } = require('../helpers');

const Auth = require('../dataBase/model/Auth');
const {authService, userService } = require('../service');
const { JWT_SECRET, JWT_REFRESH } = require('../config/config');
const { AUTHORIZATION } = require('../constans/constans');

module.exports = {

    isUserPresent: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await authService.findOneUser({ email });

            if (!user) {
                throw new Error(errorMessages.NOT_PRESENT_USER.en);
            }

            await passwordHash.compare(password, user.password);

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new Error(errorMessages.TOKEN_IS_REQUIRED.ua);
            }

            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error(errorMessages.THIS_TOKEN_IS_NOT_VALID.ua);
                }
            });

            const tokens = await Auth.findOne({ access_token }).populate('_user_id');

            if (!tokens) {
                throw new Error(errorMessages.TOKEN_IS_REQUIRED.ua);
            }

            req.user = tokens._user_id;

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkRefreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            if (!refresh_token) {
                throw new Error(errorMessages.THIS_TOKEN_IS_NOT_VALID.ua);
            }

            jwt.verify(refresh_token, JWT_REFRESH, (err) => {
                if (err) {
                    throw new Error(errorMessages.THIS_TOKEN_IS_NOT_VALID.ua);
                }
            });

            const tokens = await Auth.findOne({ refresh_token });

            if (!tokens) {
                throw new Error(errorMessages.TOKEN_IS_REQUIRED.ua);
            }

            req.refresh_token = tokens.refresh_token;

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};