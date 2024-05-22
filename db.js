const mongoose = require('mongoose');

const connect= async()=>{

    try{
        await mongoose.connect("mongodb+srv://bivekwangkhem6001:6001971918@cluster0.d7rwkcp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("connected");

    }catch(e){
        console.log(e.message)


    }


}

module.exports=connect;