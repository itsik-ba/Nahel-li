import React, { useState } from 'react';
import styles from "./forgotPassword.module.css";
import axios from 'axios';

 const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


 const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      
     const response = await axios.post("http://localhost:3000/user/forgotPassword" ,{
         email, 
         phone
    })

    console.log('Response status:', response.status);


    } catch (error:any) {
      const message = error.response?.data?.message || 'reset password failed. Please try again.';
      console.error('reset password failed:', message);
      setErrorMessage(message);
    }
   


  }








  return (
    <div dir="rtl" className={styles.mainContainer}>
      <div className={styles.formWrapper}>
        <h3>שחכת סיסמה ? אל דאגה אנחנו איתך...</h3>
        <form onSubmit={handleForgotPassword} className={styles.container}>
          <div>
            <label htmlFor="userEmail">מייל:</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="userPhone">טלפון:</label>
            <input
              type="phone"
              id="userPhone"
              name="userPhone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">שכחתי סיסמה</button>
          </div>
          <div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}


export default ForgotPassword