const mongoose = require('mongoose')


const messageSchema= new mongoose.Schema({

   message:{type:String},
  name:String




})
const message= mongoose.model('Message', messageSchema)
module.exports =message;

