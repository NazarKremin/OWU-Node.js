const userData = require('../dataBase/models/User');
const userTokenData = require('../dataBase/models/Tokens');

module.exports = {
    authUser: (email) => userData.findOne(email),

    authTokenCreate: (token, user) => userTokenData.create({ ...token, _user_id: user._id }),

    authFindTokenUser: (access_token) => userTokenData.findOne({ access_token }).populate('_user_id'),

    authTokenDelete: (tokens) => userTokenData.findByIdAndRemove(tokens._id),
};
