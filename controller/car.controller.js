const { carService } = require('../service');

module.exports = {
    createCar: async (req, res) => {
        try {
            await carService.createCar(req.body);

            res.status(201).json('Car done');
        } catch (e) {
            res.status(418).json(e.message);
        }
    },

    getAllCars: async (req, res) => {
        try {
            const cars = await carService.allCars();

            res.json(cars);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },

    getCarById: async (req, res) => {
        try {
            const { carId } = req.params;

            const user = await carService.carById(carId);

            res.json(user);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    deleteCar: async (req, res) => {
        try {
            const { carId } = req.params;

            await carService.deleteCarById(carId);

            res.json('Car removed');
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
    updateCar: async (req, res) => {
        try {
            const { carId } = req.params;
            const { body } = req;

            const car = await carService.updateCar(carId, body);

            res.json(car);
        } catch (e) {
            res.status(418).json(e.message);
        }
    },
};
