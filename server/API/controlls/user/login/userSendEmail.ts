import nodemailer from 'nodemailer';
import { Request, Response } from 'express';
import { randomPasswordGenerator } from '../../../utils/randomPassword';

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

    let subject:string, text:string;
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

    // יצירת סיסמה רנדומלית
    const password = randomPasswordGenerator();
    
    // עדכון הטקסט של המייל כדי לכלול את הסיסמה
    const mailText = `${text}\n\nהסיסמה שלך היא: ${password}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: mailText
    };

    await transporter.sendMail(mailOptions);
    
    console.log('מייל נשלח בהצלחה ל:', email);
    res.status(200).json({ message: 'מייל נשלח בהצלחה' });
  } catch (error) {
    console.error('שגיאה בשליחת המייל:', error);
    res.status(500).json({ error: 'שגיאה בשליחת המייל' });
  }
};
