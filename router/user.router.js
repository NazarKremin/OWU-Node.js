const router = require('express').Router();

const { userController } = require('../controller');
const { userMiddleware, authMiddleware } = require('../middleware');

router.post('/', userController.createUser);

router.put('/:userId', userMiddleware.isUserUpdateValid, userController.updateUser);

router.delete('/:userId', authMiddleware.checkAccessToken, userController.deleteUserById);

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getUserById);

module.exports = router;
