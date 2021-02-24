const fs = require('fs-extra');

const userService = require('../service/user.service');

module.exports = {

    createUser: async (req, res) => {
        try {
            const userObj = req.body;

            const userCreated = await userService.createUser(userObj);

            res.json(userCreated);

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
            const {userId} = req.params;

            const user = await userService.userById(userId);

            res.json(user);

        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const {userId} = req.params;

            await userService.deleteUserById(userId);

            res.json('User removed');

        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    searchUser: async (req, res) => {
        try {
            const {name} = req.params;

            const searchUser = await userService.searchUser(name);

            res.json(searchUser);

        } catch (e) {
            res.status(418).json(e.message);
        }
    }
};
