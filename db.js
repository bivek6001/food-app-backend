const mongoose = require('mongoose');

const connect= async()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/foodapp");
        console.log("connected");

    }catch(e){
        console.log(e.message)


    }


}

module.exports=connect;