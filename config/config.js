module.exports = {
    PORT: 5000,
    MONGO_DB: process.env.MONGO_URL || 'mongodb://localhost:27017/home-work-bd',
    JWT_SECRET: process.env.JWT_SECRET || 'SECRET',
    JWT_REFRESH: process.env.JWT_REFRESH || 'REFRESH',

    ROOT_EMAIL: process.env.ROOT_EMAIL || 'owu0test@gmail.com', // Пошта з якої надсилається
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD || 'ok107777777',
};
