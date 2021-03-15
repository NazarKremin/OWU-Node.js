const { tokenizer } = require('../helpers');
const authService = require('../service/auth.service');
const { errorCodesEnum } = require('../constans');

module.exports = {

    authUser: async (req, res) => {
        try {
            const { user } = req.body;

            const tokens = tokenizer();

            await authService.createToken({ ...tokens, user });

            res.json(tokens);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },

    refreshToken: async (req, res) => {
        try {
            const { refresh_token } = req;

            await authService.findAndDelete(refresh_token);

            const newTokens = tokenizer();

            await authService.createToken(newTokens, refresh_token);

            res.json(newTokens);
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    }
};