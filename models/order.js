const mongoose = require('mongoose')


const orderSchema= new mongoose.Schema({

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
  




})
const order=mongoose.model('Order',orderSchema)
module.exports = order