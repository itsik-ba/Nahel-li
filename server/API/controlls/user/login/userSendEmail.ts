import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import UserModel from "../../../models/userModel";
import { encryptEmail } from '../../../utils/cryptoUtils';
import bcrypt from 'bcrypt';
import { randomPasswordGenerator } from '../../../utils/randomPassword';

const secret = process.env.ENCRYPTION_SECRET || 'defaultSecret';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const UserSendEmail = async (req: Request, res: Response) => {
  try {
    const { email, selectedPlan } = req.body;

    if (!email || !selectedPlan) {
      return res.status(400).json({ error: 'חסרים פרטים נדרשים' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'פורמט מייל לא תקין' });
    }

    const existingUser = await UserModel.findOne({ email: encryptEmail(email, secret) });
    if (existingUser) {
      return res.status(400).json({ error: 'האימייל כבר קיים במערכת' });
    }

    const encryptedEmail = encryptEmail(email, secret);
    console.log('Encrypted Email:', encryptedEmail);

    let subject: string, text: string;
    switch (selectedPlan) {
      case 'pro':
        subject = 'ברוכים הבאים למנוי המקצועי';
        text = 'תודה שבחרת במנוי המקצועי שלנו. אנו מקווים שתיהנה מכל היתרונות!';
        break;
      case 'starting':
        subject = 'ברוכים הבאים למנוי המתחיל';
        text = 'תודה שבחרת במנוי המתחיל שלנו. זו התחלה מצוינת!';
        break;
      case 'try':
        subject = 'ברוכים הבאים לגרסת הניסיון';
        text = 'תודה שבחרת לנסות את השירות שלנו. אנו מקווים שתמצא אותו שימושי!';
        break;
      default:
        return res.status(400).json({ error: 'תוכנית לא חוקית' });
    }

    // Create a random password
    const randomPassword = randomPasswordGenerator();
    const hashedPassword = await bcrypt.hash(randomPassword, 10);

    const newUser = new UserModel({
      email: encryptedEmail,
      phone: "000000",
      oneTimePassword: hashedPassword,
      selectedPlan: selectedPlan,
      passwordChanged: false,
      customer: null, 
      newPassword: ""
    });

    await newUser.save();
    
    // Update the email text to include the password
    const mailText = `${text}\n\nהסיסמה שלך היא: ${randomPassword}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: mailText
    };

    await transporter.sendMail(mailOptions);
    
    console.log('מייל נשלח בהצלחה ל:', email);
    res.status(200).json({ message: 'מייל נשלח בהצלחה' });
  } catch (error: any) {
    console.error('שגיאה בשליחת המייל:', error);
    res.status(500).json({ error: 'שגיאה בשליחת המייל', details: error.message });
  }
};
