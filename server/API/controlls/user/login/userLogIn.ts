import { Request, Response } from 'express';
import { decryptEmail } from '../../../utils/decryptutils';
import bcrypt from 'bcrypt';
import UserModel from "../../../models/userModel";

const secret = process.env.ENCRYPTION_SECRET;
if (!secret) {
  throw new Error('ENCRYPTION_SECRET is not defined');
}

export const userLogin = async (req: Request, res: Response) => {
    const { email, newPassword } = req.body;
   
    if (!email || !newPassword) {
        throw new Error('no email or password entered');
    }
   
    try {

      let userEmail = await email;
      if (email.includes(':')) {
        try {
          userEmail = decryptEmail(email, secret);
          console.log('המייל המפוענח:', userEmail);
        } catch (error) {
          console.error('פורמט מייל מוצפן לא תקין:', error);
          return res.status(400).json({ message: 'פורמט מייל לא תקין' });
        }
      }
          
         const user = await UserModel.findOne({ email: userEmail });

         

        if (!user) {
          return res.status(404).json({ message: 'User not found' });  
        }
         
        const isMatch = await bcrypt.compare(newPassword, user.newPassword);
        console.log(isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: " הסיסמה שלך שגויה  " });
          }

          return res.status(200).json({ message: 'Login successful', user: { email: user.email, plan: user.selectedPlan } });

    } catch (error) {
      console.error('Login error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
   


}