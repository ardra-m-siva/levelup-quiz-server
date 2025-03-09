 const express=require('express')
 const userController=require('../controllers/userController')
 const router=express.Router()

 router.post('/register',userController.registerUserController)

 router.post('/login',userController.loginUserController)

module.exports=router