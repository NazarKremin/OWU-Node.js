module.exports = class ErrorHandler extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;

        Error.captureStackTrace(this, this.constructor); // стек виклику, показує весь шлях де впала помилка
    }
};
