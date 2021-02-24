const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddleware.userCheckId, userController.getUserById);

router.post('/', userMiddleware.isUserTrue, userController.createUser);

router.delete('/:userId', userMiddleware.userCheckId, userController.deleteUser);

router.post('/searchUser/:name', userMiddleware.userFindIsTrue, userController.searchUser);

module.exports = router;