import express from "express";
const router = express.Router();

import { UserSendEmail } from "../controlls/user/login/userSendEmail";
import { userChangePassword } from "../controlls/user/login/userChangePassword";


router
.post("/UserSendEmail", UserSendEmail)
.post('/userChangePassword', userChangePassword)











export default router