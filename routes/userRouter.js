const { Router } = require('express');
const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('hello')
})

module.exports = userRouter;