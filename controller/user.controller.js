const { userService, mailService } = require('../service');
const { passwordHasher } = require('../helper');
const { emailAction } = require('../constans');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { password, email } = req.body;

            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

            await mailService.sendMail(email, emailAction.WELCOME, {
                userName: email,
            });

            res.status(201).json('User done');
        } catch (e) {
            res.status(418).json(e.message);
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userService.allUsers();

            res.json(users);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const { userId } = req.params;

            const user = await userService.userById(userId);

            res.json(user);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const users = await userService.userById(userId);

            if (userId !== req.user._id.toString()) {
                throw new Error('АВТОРИЗУЙСЯ');
            }

            await userService.deleteUserById(userId);

            await mailService.sendMail(users.email, emailAction.USER_BLOCKED, {
                userName: users.email
            });
            console.log('Email Send');
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    // getUserByOptions: async (req, res) => {
    //     try {
    //         const lookOnThisUser = await userService.findByOption(req.query);
    //
    //         res.json(lookOnThisUser);
    //     } catch (e) {
    //         res.status(418).json(e.message);
    //     }
    // }
};
