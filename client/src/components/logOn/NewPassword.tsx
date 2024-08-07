import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styles from './newPassword.module.css';


const NewPassword = () => {
  const [oneTimePassword, setOneTimePassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setMessage("הסיסמאות החדשות אינן תואמות");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/user/userChangePassword', {
        oneTimePassword,
        newPassword,
        phone,
        email
      });

      if (response.status === 200) {
        setMessage("הסיסמה שונתה בהצלחה");
      }
      
      navigate("/mainApp")

    } catch (error: any) {
      setMessage(error.response?.data?.message || "שגיאה בתהליך שינוי הסיסמה");
    }
  };

  return (
    <div className={styles.formcontainer}>
      <div className={styles.wrapper}>
        <p>תהליך הרשמה מקוצר</p>
        <form onSubmit={handleSubmit} dir="rtl">
          <div className={styles.formgroup}>
            <label htmlFor="email" className={styles.labelNewPassword}>מייל</label>
            <input
              type="email"
              id="email"
              className={styles.inputNewPassword}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="receivedPassword" className={styles.labelNewPassword}>סיסמה שקיבלתי</label>
            <input
              type="text"
              id="receivedPassword"
              className={styles.inputNewPassword}
              value={oneTimePassword}
              onChange={(e) => setOneTimePassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="newPassword" className={styles.labelNewPassword}>הכנס סיסמא חדשה</label>
            <input
              type="password"
              id="newPassword"
              className={styles.inputNewPassword}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="confirmPassword" className={styles.labelNewPassword}>וודא סיסמה חדשה</label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.inputNewPassword}
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="phone" className={styles.labelNewPassword}>טלפון</label>
            <input
              type="text"
              id="phone"
              className={styles.inputNewPassword}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className={styles.formgroup}>
            <button type="submit" className={styles.buttonNewPassword}>שנה סיסמה</button>
          </div>
          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
