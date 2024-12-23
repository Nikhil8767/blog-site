import express from "express"

const router=express.Router();



export const login=async(req,res)=>{
    res.send("login page");
}
