import { Request, Response } from "express";
import UserModel from "../../../models/userModel";
import { decryptData } from '../../../utils/decryptutils';

const secret = process.env.ENCRYPTION_SECRET;

if (!secret) {
    throw new Error('ENCRYPTION_SECRET is not defined');
  }

export const forgotPassword = async (req: Request, res: Response) => {
       const { email, phone} = req.body;

    try {
        
      






        
       } catch (error:any) {
        console.error(error)
       }
}