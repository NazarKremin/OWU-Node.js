const errorCodes = require('../constans/errorCodes.enum');
const errorMessage = require('../constans/errorMassege.enum');

module.exports = {
    carCheckId: (req, res, next) => {
        try {
            const { carId } = req.params;

            if (carId.length !== 24) {
                throw new Error(errorMessage.WRONG_ID.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    isCarTrue: (req, res, next) => {
        try {
            const { model, price } = req.body;

            if (!model) {
                throw new Error(errorMessage.NOT_VALID_MODEL.en);
            }

            if (price < 0 || !Number.isInteger(price)) {
                throw new Error(errorMessage.NOT_VALID_PRICE.en);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
