const sample="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQ4YWViNTU3MWZhNzc2NmVjMDdlZTgiLCJpYXQiOjE3MTYxMjg1MDJ9.ixii5cEvpzNDAt7J9icOanydQdi8qBXR_X4wPk_WTr4"
const jwt= require("jsonwebtoken")
const fetchUser= async (req, res) => {
        const token= req.headers.authToken
        const decoded= await jwt.verify(sample,"secretkey")
        
        req.user= decoded._id
        console.log(typeof decoded._id)

        


    res.send(decoded._id)
try{

}catch(error){
return res.status(200).json({message:error.message});



}




}
module.exports = fetchUser