const EmailTemplates = require('email-templates');
const mailer = require('nodemailer');
const path = require('path');

const ErrorHandler = require('../constans/errorHandler');
const { ROOT_EMAIL, ROOT_EMAIL_PASSWORD } = require('../config/config');
const templateInfo = require('../email-templates');

const tempParser = new EmailTemplates({
    views: {
        root: path.join(process.cwd(), 'email-templates'),
    }
});

console.log(ROOT_EMAIL);
console.log(ROOT_EMAIL_PASSWORD);

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: ROOT_EMAIL,
        pass: ROOT_EMAIL_PASSWORD
    }
}); // Займається відправкою емейлів

const sendMail = async (userMail, action, context) => { // Функція яка займається віпрввкою емейлів
    try {
        const currentTemplateInfo = templateInfo[action];

        if (!currentTemplateInfo) {
            throw new ErrorHandler('Wrong mail action', 418);
        }

        const html = await tempParser.render(currentTemplateInfo.templateName, context);

        return transporter.sendMail({
            from: 'NOT REPLY',
            to: userMail,
            subject: currentTemplateInfo.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    sendMail
};
