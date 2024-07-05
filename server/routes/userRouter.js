
const userController = require('../controllers/userController.js')
// router
const userRouter = require('express').Router()


// user router
userRouter.post('/udata',  userController.addUser)
userRouter.get('/allUser',  userController.getAllUsers)
userRouter.post('/login',userController.login)


module.exports = userRouter