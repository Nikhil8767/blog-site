import express from "express"
// import router from "./router/sign.js";
//
import { login } from "./router/sign.js";
import { signup } from "./router/signup.js";
const router=express.Router()
router.post("/login",login)
router.post("/signup",signup)
export default router;