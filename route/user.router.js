const router = require('express').Router();

const { authMiddleware } = require('../middleware');
const { userController } = require('../controller');
const { userMiddleware } = require('../middleware');

router.get('/', userMiddleware.isUserTrue, userController.getAllUsers);

router.get('/:userId', userMiddleware.isUserTrue, userController.getUserById);

router.post('/', userMiddleware.isUserExist, userController.createUser);

router.delete('/:userId', authMiddleware.checkAccessToken, userMiddleware.isUserExist, userController.deleteUser);

// router.post('/', userController.getUserByOptions);

module.exports = router;
