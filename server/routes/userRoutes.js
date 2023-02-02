// import express from 'express';
// const express=require('express');
import express from 'express'

import { loginController, registerController} from '../controllers/userController.js';

const router=express.Router();




//Create Routers
// POST->LOGIN
router.post('/login',loginController);


// Register Login
router.post('/register',registerController)

// module.exports=router;
export default router;