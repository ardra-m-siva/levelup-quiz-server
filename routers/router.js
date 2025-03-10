const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const router = express.Router()

router.post('/register', userController.registerUserController)

router.post('/login', userController.loginUserController)

//  jwt middleware is not used anywhere now 
router.put('/update', jwtMiddleware,multerMiddleware.single("profilePic"), userController.updateUserController)

module.exports = router