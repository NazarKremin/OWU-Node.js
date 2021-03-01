const userService = require('../service/user.service');

module.exports = {
    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);

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
            const { carId } = req.params;

            await userService.deleteUserById(carId);

            res.json('User removed');
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
