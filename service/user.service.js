const fs = require('fs-extra');
const path = require('path');

const userData = path.join(process.cwd(), 'dataBase', 'user.json');

module.exports = {
    allUsers: () => fs.readJson(userData),

    createUser: async (userObj) => {
        const newUser = await fs.readJson(userData);

        newUser.push(userObj);

        return fs.writeJson(userData, newUser);
    },

    userById: async (userId) => {
        const userById = await fs.readJson(userData);
        
        return userById[userId];
    },

    deleteUserById: async (userId) => {
        const removeUserById = await fs.readJson(userData);

        removeUserById.splice(userId, 1);

        return fs.writeJson(userData, removeUserById);
    },
    searchUser: async (name) => {
        const search = await fs.readJson(userData);

        const value = search.find((value) => value.name === name);
        console.log(value);

        return search[value];
    },
};
