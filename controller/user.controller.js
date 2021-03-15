const { errorMessages } = require('../messages');
const { errorCodesEnum } = require('../constans');
const { emailActions } = require('../constans');
const { userService, authService, mailService } = require('../service');
const { passwordHash } = require('../helpers');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const hasPassword = await passwordHash.hash(password);

            await userService.creatingUser({ ...req.body, password: hasPassword });

            await mailService.sendMail(email, emailActions.WELCOME, {
                userName: email
            });

            res.status(errorMessages.CREATED.ua).json('User created');
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const { userId } = req.params;
            const { email, password } = req.body;

            const user = await userService.updateUser(userId, password);

            await mailService.sendMail(email, emailActions.PASSWORD_CHANGE, {
                userName: email
            });

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    deleteUserById: async (req, res) => {
        try {
            const { userId } = req.params;

            const { email } = req.body;

            await userService.deleteUser(userId);

            await authService.deleteToken(userId);

            await mailService.sendMail(email, emailActions.USER_BLOCKED, {
                userName: email
            });

            res.json(errorMessages.DELETED.ua);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const user = await userService.allUser();

            res.json(user);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await userService.userById(userId);

            res.json(user);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
};
