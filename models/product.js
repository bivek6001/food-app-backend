const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    url:{
        type:String
    },
    restaurant:String   ,
    rating:Number,
    region:String,
    item:String,
    price:Number





})

const product= mongoose.model('Product',productSchema);

module.exports = product;