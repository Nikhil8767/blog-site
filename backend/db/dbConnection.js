import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connectDB=()=>{
    mongoose.connect(process.env.MONGODB_URL,{

    }).then(()=>{
        console.log("mongodb connect to database");
        
    }).catch((err)=>{
        console.log("error in connecting:",err);
        
    })
    
}   

export default connectDB;