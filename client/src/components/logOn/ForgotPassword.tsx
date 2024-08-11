import React, { useState } from 'react';
import styles from "./forgotPassword.module.css";

 const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Your forgot password logic here
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