const { emailAction } = require('../constans');

module.exports = {
    [emailAction.WELCOME]: {
        templateName: 'welcome',
        subject: 'Вітаю в команді'
    },
    [emailAction.USER_BLOCKED]: {
        templateName: 'user-blocked',
        subject: 'Твій аккаунт заблокований'
    },
    [emailAction.PASSWORD_CHANGE]: {
        templateName: 'null', // імя теплейту яке треба відмалювати
        subject: 'Пароль зміненний' // тема листа
    }
};
// Цей файл, для того щоб мейл сервіс знав яку змінну брати
