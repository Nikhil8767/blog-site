import express from "express"
// import router from "./router/sign.js";
//
import { login } from "./router/sign.js";
import { signup } from "./router/signup.js";
const router=express.Router()
router.get("/login",login)
router.get("/signup",signup)
export default router;