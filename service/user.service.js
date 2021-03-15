const { User } = require('../dataBase/model');
require('../dataBase/model/Car');

module.exports = {
    creatingUser: (userObj) => User.create(userObj),

    updateUser: (userId, body) => User.findOneAndUpdate(userId, body),

    allUser: () => User.find(),

    userById: (userId) => User.findById(userId),

    deleteUser: (userId) => User.findByIdAndDelete(userId)
};
