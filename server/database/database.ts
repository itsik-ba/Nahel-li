import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const uri = process.env.MONGODB_URI

if(uri){
 mongoose
 .connect(uri)
 .then(() =>{
    console.log("DB Connect")
 })
 .catch((err)=>console.log(err))   
} else{
 console.log('Db connection not established')
}

