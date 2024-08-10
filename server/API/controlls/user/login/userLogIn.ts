import { Request, Response } from 'express';
import { decryptEmail } from '../../../utils/decryptutils';
import bcrypt from 'bcrypt';
import UserModel from "../../../models/userModel";

const SECRET_KEY = process.env.ENCRYPTION_SECRET as string;


export const userLogin = async (req: Request, res: Response) => {
   
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        throw new Error('no email or password entered');
    }
   
    try {
         const user = await UserModel.findOne({});

        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
         
        const decryptedEmail = decryptEmail(user.email, SECRET_KEY);
        if (decryptedEmail !== email) {
            return res.status(400).json({ message: 'Email does not match' });
        }

        const isMatch = await bcrypt.compare(newPassword, user.newPassword);

        if (!isMatch) {
            return res.status(400).json({ message: " הסיסמה שלך שגויה  " });
          }

          return res.status(200).json({ message: 'Login successful' });

    } catch (error) {
      console.error(error);  
      return res.status(500).json({ message: 'Internal server error' });
    }
   


}