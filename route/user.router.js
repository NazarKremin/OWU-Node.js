const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');
const { authMiddleware } = require('../middleware');

router.get('/', userMiddleware.isUserTrue, userController.getAllUsers);

router.get('/:userId', userMiddleware.isUserTrue, userController.getUserById);

router.post('/', userMiddleware.isUserTrue, userController.createUser);

router.delete('/:userId', authMiddleware.checkAccessToken, userController.deleteUser);

router.post('/', userController.getUserByOptions);

module.exports = router;
