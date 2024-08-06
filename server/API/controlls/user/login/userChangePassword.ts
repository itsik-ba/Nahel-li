import { Request, Response } from "express";
import dotenv from 'dotenv';
import UserModel from "../../../models/userModel";
import { decryptEmail } from '../../../utils/cryptoUtils';
import bcrypt from 'bcrypt';

dotenv.config();
const secret = process.env.ENCRYPTION_SECRET || 'default';

export const userChangePassword = async (req: Request, res: Response) => {
  try {
    const { oneTimePassword, newPassword, phone, email } = req.body;

    if (!oneTimePassword) { 
      return res.status(400).json({ message: "סיסמא זמנית אינה נכונה" });
    }

    if (!phone) { 
      return res.status(400).json({ message: "טלפון לא הוכנס" });
    }
   
    let decryptedEmail: string;
    try {
      decryptedEmail = decryptEmail(email, secret);
    } catch (decryptionError) {
      console.error('Error decrypting email:', decryptionError);
      return res.status(400).json({ message: "שגיאה בפענוח האימייל" });
    }

    const user = await UserModel.findOne({ email: decryptedEmail });
    
    if (!user) {
      return res.status(400).json({ message: "משתמש לא נמצא" });
    }

    const isMatch = await bcrypt.compare(oneTimePassword, user.oneTimePassword!);

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
