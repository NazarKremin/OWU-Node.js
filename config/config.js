module.exports = {
    MONGO_DB: process.env.MONGO_URL || 'mongodb://localhost:27017/my-app',
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'REFRESH SECRET',
    PORT: 5000,

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'owu0test@gmail.com', // Пошта з якої надсилається
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'ok107777777', //
};
