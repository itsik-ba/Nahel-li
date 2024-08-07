import { Request, Response } from 'express';
import { decryptEmail } from '../../../utils/decryptutils';
import bcrypt from 'bcrypt';
import UserModel from "../../../models/userModel";


export const userLogin = async (req: Request, res: Response) => {
   
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        throw new Error('no email or password entered');
    }
   
    try {
         const user = await UserModel.findOne({newPassword: newPassword});

        if (!user) {

        }
         
        const isMatch = await bcrypt.compare(newPassword, user.newPassword);

        if (!isMatch) {
            return res.status(400).json({ message: " הסיסמה שלך שגויה  " });
          }

    } catch (error) {
      console.error(error);  
    }
   


}