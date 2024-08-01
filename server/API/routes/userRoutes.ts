import express from "express";
const router = express.Router();

import { UserSendEmail } from "../controlls/user/login/userSendEmail";



router
.post("/UserSendEmail", UserSendEmail)











export default router