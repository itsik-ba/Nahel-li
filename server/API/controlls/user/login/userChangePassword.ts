import { Request, Response } from "express";
import dotenv from 'dotenv';
import UserModel from "../../../models/userModel";
import { decryptEmail } from '../../../utils/decryptutils';
import bcrypt from 'bcrypt';

dotenv.config();
const secret = process.env.ENCRYPTION_SECRET;

if (!secret) {
  throw new Error('ENCRYPTION_SECRET is not defined');
}

export const userChangePassword = async (req: Request, res: Response) => {
  try {
    const { oneTimePassword, newPassword, phone, email } = req.body;

    if (!oneTimePassword || !phone || !email || !newPassword) {
      return res.status(400).json({ message: "חסרים פרטים נדרשים" });
    }

    const allUsers = await UserModel.find({});


    const user = allUsers.find(u => {
      try {
        const decryptedEmail = decryptEmail(u.email, secret);
        console.log('Decrypted Email:', decryptedEmail);
        
        return decryptedEmail === email;
      } catch (error) {
        console.error('Error decrypting email:', error);
        return false;
      }
    });
    
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(400).json({ message: "משתמש לא נמצא" });
    }

    if (!user.oneTimePassword) {
      return res.status(400).json({ message: "סיסמה חד פעמית לא קיימת" });
    }

    const isMatch = await bcrypt.compare(oneTimePassword, user.oneTimePassword);

    if (!isMatch) {
      return res.status(400).json({ message: "סיסמה חד פעמית שגויה" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
      
    // Update the model and save the user
    user.newPassword = hashedNewPassword;
    user.phone = phone;
    user.oneTimePassword = ""; // Clear the OTP after use
    user.passwordChanged = true;

    await user.save();

    return res.status(200).json({ message: "הסיסמה שונתה בהצלחה" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "שגיאה פנימית בשרת" });
  }
};