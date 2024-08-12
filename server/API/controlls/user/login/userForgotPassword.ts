import { Request, Response } from "express";
import { randomPasswordGenerator } from '../../../utils/randomPassword';
import UserModel from "../../../models/userModel";
import { decryptData } from '../../../utils/decryptutils';
import nodemailer from 'nodemailer';


const secret = process.env.ENCRYPTION_SECRET;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

if (!secret) {
  throw new Error('ENCRYPTION_SECRET is not defined');
}

export const forgotPassword = async (req: Request, res: Response) => {
  const { email, phone } = req.body;

  if (!email || !phone) {
    return res.status(400).json({ message: "אימייל או טלפון לא נמצאו" });
  }

  try {
   
  const users = await UserModel.find({})

    const user = users.find(u => {
      try {
        const decryptedEmail = decryptData(u.email, secret);
        const decryptedPhone = decryptData(u.phone, secret);
        return decryptedEmail === email && decryptedPhone === phone;
      } catch (error) {
        console.error('Error decrypting user data:', error);
        return false;
      }
    });

    if (!user) {
      return res.status(404).json({ message: "משתמש לא נמצא" });
    }

    const randomPassword = randomPasswordGenerator();
    const subject = 'מייל לשחזור סיסמה'
    const mailText = ''
    
  const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: mailText
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email sent to the user' });
  } catch (error: any) {
    console.error('Error in forgotPassword handler:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }


}
