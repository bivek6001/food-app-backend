const bcrypt = require('bcryptjs');
const User=require("../models/user");
const jwt=require("jsonwebtoken");



const signUp = async (req,res) => {

    try {
        const {name,email,password} = req.body
        if(!email && !password) {
            return res.status(200).json({success:false,message: 'email and password are required'});


        }
        if(email){

           const exist= await User.findOne({email: email})
           if(exist){
            return res.status(200).json({success:false,message: 'email already exist'});
           }
           else{
            const salt= await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt)
            const user= await User.create({name,email,password:hashedPassword});
          
            return res.status(200).json({success:true,message: 'user created successfully',data:user});
           }
        }
   







    }
    catch (e) {
        return res.status(500).json({ message: e.message });


    }



}

const loginUser = async (req,res) => {


    try {


        const {email,password} = req.body

        const user= await User.findOne({email: email})
        if(!user){
            return res.status(200).json({success:false,message: 'User does not exist'});
        }
        console.log(user)
        if(!email) {
            return res.status(200).json({success:false,message: 'email and password are required'});


        }
        // const verification= await bcrypt.compare(password, user.password)
     
        const verified= await bcrypt.compare(password,user.password)
        

        if(verified){
            const token= await jwt.sign({_id:user._id},"secretkey")
         
        
            return res.status(200).json({success:true,message: 'user logged in successfully',data:user,token:token});
        }else{
            return res.status(200).json({success:false,message: 'email or password do not match'});
        }
      
           
        



    }
    catch (e) {
        return res.status(200).json({ message: e.message });






    }




}

module.exports = {
    signUp,
    loginUser
}