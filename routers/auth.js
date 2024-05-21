const express= require('express');
const {signUp, loginUser}=require('../controllers/user.js');
const router= express.Router();
const fetchUser= require("../middlewares/fetchUser")
router.post('/signup',signUp)
router.post("/signin",loginUser)
router.post("/test",fetchUser)
module.exports=router;