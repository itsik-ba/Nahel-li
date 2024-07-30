import express from "express";
const router = express.Router();


import { createCustomer } from "../controlls/customer/createCustomer";




router
.post('/createCustomer', createCustomer)








export default router