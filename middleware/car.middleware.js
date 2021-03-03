const errorCodes = require('../constans/errorCodes.enum');
const errorMessage = require('../constans/errorMassege.enum');
const { carValidators } = require('../validator');

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
            const { error } = carValidators.createCarValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
