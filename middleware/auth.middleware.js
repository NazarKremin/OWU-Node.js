const jwt = require('jsonwebtoken');

const ErrorHandler = require('../constans/errorHandler');
const { JWT_SECRET, JWT_REFRESH_SECRET } = require('../config/config');
const { AUTHORIZATION } = require('../constans/constanta');

const { authService } = require('../service');

module.exports = {
    isUserFind: async (req, res, next) => {
        try {
            const { email } = req.body;

            const user = await authService.authUser({ email });

            if (!user) {
                throw new Error('NO USER');
            }
            next();
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get(AUTHORIZATION);

            if (!access_token) {
                throw new Error('Token is required');
            }
            jwt.verify(access_token, JWT_SECRET, (err) => {
                if (err) {
                    throw new Error('Not Valid token');
                }
            });
            const tokens = await authService.authFindTokenUser(access_token);
            if (!tokens) {
                throw new ErrorHandler('Not valid token', 418);
            }
            req.user = tokens._user_id;
            console.log(tokens);
            next();
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    checkRefreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHandler('Token is required', 418);
            }
            jwt.verify(refresh_token, JWT_REFRESH_SECRET, (err) => {
                if (err) {
                    throw new ErrorHandler('Not Valid token', 418);
                }
            });
            const tokens_refresh = await authService.authFindTokenUser(refresh_token);
            if (!tokens_refresh) {
                throw new ErrorHandler('Not valid token', 418);
            }
            req.tokens = tokens_refresh._user_id;
            next();
        } catch (e) {
            res.status(418).json(e.message);
        }
    }
};
