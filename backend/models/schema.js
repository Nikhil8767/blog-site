import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    Firstname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    conform_password:{
        type:String,
        required:true,
    }
})

const User=mongoose.model("user",userSchema);
export default User;