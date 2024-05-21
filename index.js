const express= require("express");
const connect= require("./db.js");
const app = express();
const cors=require("cors");
const authRoute= require("./routers/auth.js")
const productRoute= require("./routers/product.js");
app.use(express.json());
app.use(cors());
app.use("/user",authRoute);
app.use("/product",productRoute);
connect();
app.listen(8000,()=>{

console.log("listening")


})