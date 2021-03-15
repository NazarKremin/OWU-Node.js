const { Auth, User } = require('../dataBase/model');

module.exports = {

    createToken: (tokensObj) => Auth.create(tokensObj),

    findAndDelete: (refreshToken) => Auth.findOneAndDelete(refreshToken),

    deleteToken: (userId) => Auth.deleteOne({ _user_id: userId }),

    findOneUser: (email) => User.findOne(email),
};
