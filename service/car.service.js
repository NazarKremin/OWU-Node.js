const carData = require('../dataBase/models/Car');

module.exports = {
    allCars: () => carData.find(),

    createCar: (carObj) => carData.create(carObj),

    carById: (carId) => carData.findById(carId),

    deleteCarById: (carId) => carData.findByIdAndDelete(carId),
};
