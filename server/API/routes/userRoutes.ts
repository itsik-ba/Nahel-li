import express from "express";
const router = express.Router();


import { UserSendEmail } from "../controlls/user/login/userSendEmail";
import { userChangePassword } from "../controlls/user/login/userChangePassword";
import { userLogin } from "../controlls/user/login/userLogIn";



router
.post("/UserSendEmail", UserSendEmail)
.post('/userChangePassword', userChangePassword)
.post('/userLogin', userLogin)










export default router