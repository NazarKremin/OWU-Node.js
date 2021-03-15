const router = require('express').Router();

const { userController } = require('../controller');
const { authMiddleware, fileMiddleware, userMiddleware } = require('../middleware');

router.post('/', fileMiddleware.isAvatarValid,
    fileMiddleware.isFileValid,
    userMiddleware.isUserValid,
    userMiddleware.isUserExist,
    userController.createUser);

router.put('/:userId', userMiddleware.isUserUpdate, userController.updateUser);

router.delete('/:userId', authMiddleware.checkAccessToken, userController.deleteUserById);

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddleware.checkIsUserIdValid, userController.getUserById);

module.exports = router;
