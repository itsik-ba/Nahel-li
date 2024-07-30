import express from "express";
const router = express.Router();

import { firstTimeLogin } from "../controlls/user/userfirstlogin"



router
.post("/firstTimeLogin", firstTimeLogin)











export default router