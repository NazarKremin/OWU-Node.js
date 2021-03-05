const { authService } = require('../service');
const { passwordHasher, tokenizer } = require('../helper');

module.exports = {
    getAuthUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await authService.authUser({ email });

            await passwordHasher.compare(password, user.password);

            const tokens = tokenizer();

            await authService.authTokenCreate(tokens, user);

            res.json(tokens);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    CreateNewToken: async (req, res) => {
        const { tokens } = req;
        try {
            await authService.authTokenDelete(tokens);

            const newTokens = tokenizer();

            await authService.authTokenCreate(newTokens, tokens);

            res.json(newTokens);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
};
