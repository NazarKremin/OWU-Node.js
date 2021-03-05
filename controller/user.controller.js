const { userService } = require('../service');
const { passwordHasher } = require('../helper');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { password } = req.body;

            const hashPassword = await passwordHasher.hash(password);

            await userService.createUser({ ...req.body, password: hashPassword });

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

            await userService.deleteUserById(userId);

            res.json('User removed');

            if (userId !== req.user._id.toString()) {
                throw new Error('АВТОРИЗУЙСЯ');
            }
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    getUserByOptions: async (req, res) => {
        try {
            const lookOnThisUser = await userService.findByOption(req.query);

            res.json(lookOnThisUser);
        } catch (e) {
            res.status(418).json(e.message);
        }
    }
};
