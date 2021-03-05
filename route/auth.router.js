const router = require('express').Router();

const { authMiddleware } = require('../middleware');
const { authController } = require('../controller');

router.post('/', authMiddleware.isUserFind, authController.getAuthUser);
router.post('/ref', authMiddleware.checkRefreshToken, authController.CreateNewToken);

module.exports = router;
