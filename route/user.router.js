const router = require('express').Router();

const userController = require('../controller/user.controller');
const { userMiddleware } = require('../middleware');

router.get('/', userMiddleware.isUserTrue, userController.getAllUsers);

router.get('/:userId', userMiddleware.isUserTrue, userController.getUserById);

router.post('/', userMiddleware.isUserTrue, userController.createUser);

router.delete('/:userId', userMiddleware.userCheckId, userController.deleteUser);

router.post('/', userController.getUserByOptions);

module.exports = router;
