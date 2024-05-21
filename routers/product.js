const express= require('express');
const {getAll, getById}=require("../controllers/product.js")
const router= express.Router();

router.get('/all',getAll)
router.get("/:id",getById)
// router.post("/signin",loginUser)
module.exports=router;