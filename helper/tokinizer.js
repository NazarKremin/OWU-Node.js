const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'JWT_SECRET', { expiresIn: '10m' }); // 1- те що ми хочемо зашифруватти,
    // 3-й скільки живе токен
    const refresh_token = jwt.sign({}, 'JWT_REFRESH', { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    };
};
