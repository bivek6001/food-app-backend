const product= require("../models/product.js")
const data= require("../data.js")

const getAll= async (req, res) =>{
await product.deleteMany();
const Product = await product.insertMany(data)
return res.json(Product)



    
}

const getById = async (req, res) =>{


try{


    const id= req.params.id
    console.log(id)
// const Product = await product.findById(id);
// console.log(Product)
const Product= await product.find({_id:id});


return res.status(200).json(Product)}



catch(err){
    res.send(err.message)
}




}

module.exports= {
    getAll,getById
}