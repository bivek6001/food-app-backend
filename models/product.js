const mongoose = require('mongoose');

const productSchema= new mongoose.Schema({
    url:{
        type:String
    },
    restaurant:String   ,
    rating:Number,
    region:String






})

const product= mongoose.model('Product',productSchema);

module.exports = product;