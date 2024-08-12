import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from "../../../models/userModel";
import { decryptData } from '../../../utils/decryptutils';

const secret = process.env.ENCRYPTION_SECRET;

if (!secret) {
    throw new Error('ENCRYPTION_SECRET is not defined');
  }
  

export const userLogin = async (req: Request, res: Response) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.status(400).json({ message: 'אימייל או סיסמה חסרים' });
    }

   try {
    const allUsers = await UserModel.find({});
   
    const user = allUsers.find(u => {
        const decryptedEmail = decryptData(u.email, secret);
        
        return decryptedEmail === email;
    });

    if (!user) {
      return res.status(400).json({ message: "משתמש לא נמצא" });
    }

    const isMatch = await bcrypt.compare(newPassword, user.newPassword);


    if (!isMatch) {
      return res.status(400).json({ message: "סיסמה שגויה" });
    }


    return res.status(200).json({ message: "משתמש התחבר בהצלחה" });
    
   } catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
   }
    

}
