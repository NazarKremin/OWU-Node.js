const { carService } = require('../service');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const car = await carService.allCar();

            res.json(car);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    createCar: async (req, res) => {
        try {
            await carService.createCar(req.body);

            res.json('Car created');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    getCarById: async (req, res) => {
        try {
            const { carId } = req.params;

            const car = await carService.carId(carId);

            res.json(car);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    deleteCarById: async (req, res) => {
        try {
            const { carId } = req.params;

            await carService.deleteCar(carId);

            res.json('Car deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
};
