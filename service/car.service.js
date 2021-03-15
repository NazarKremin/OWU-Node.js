const { Car } = require('../dataBase/model');

module.exports = {
    allCar: () => Car.find(),

    createCar: (carObj) => Car.create(carObj),

    carId: (carId) => Car.findById(carId),

    deleteCar: (carId) => Car.findByIdAndDelete(carId)
};
