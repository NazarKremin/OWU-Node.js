const userData = require('../dataBase/models/User');
require('../dataBase/models/Car');

module.exports = {
    allUsers: () => userData.find(),

    createUser: (userObj) => userData.create(userObj),

    userById: (userId) => userData.findById(userId),

    deleteUserById: (userId) => userData.findByIdAndDelete(userId),

    findByOption: (FindThisOptions) => userData.find(FindThisOptions),
};
