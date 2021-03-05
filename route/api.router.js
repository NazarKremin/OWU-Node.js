const router = require('express').Router();

const userRouter = require('./user.router');
const carRouter = require('./car.router');
const authRouter = require('./auth.router');

router.use('/auth', authRouter);
router.use('/cars', carRouter);
router.use('/users', userRouter);

module.exports = router;
