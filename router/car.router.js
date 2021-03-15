const router = require('express').Router();

const { carController } = require('../controller');
const { carMiddleware } = require('../middleware');

router.get('/', carController.getAllCars);

router.post('/', carController.createCar);

router.get('/:carId', carController.getCarById);

router.delete('/:carId', carController.deleteCarById);

module.exports = router;
