import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";




const Login:React.FC = ()  => {
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [newPassword, setNewPassword] = useState('')

   
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  try {
    const response = await axios.post("http://localhost:3000/user/userLogin" ,{
         email, 
         newPassword
    })

    console.log('Login successful:', response.data);
    
      // navigate("./mainApp")
    } catch (error:any) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  }



  return (
    <>
    <div className={styles.mainForm}>
      <div className="swap">  
     
      
     
     <div className={styles.card}>
       <> <form dir="rtl" onSubmit={handleLogin}>
               <div className="userEmail">
                  <label htmlFor="userEmail">מייל:</label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    value={email}
                    onChange={(event)=> setemail(event.target.value)}
                    required
                    />
                    
                </div><div className="userPassword">
                    <label htmlFor="userPassword">סיסמא:</label>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword"
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      required
                      />
                  </div>
                  <button type="submit">התחבר</button>
                  </form>
                  </>
     </div>
      </div>
    </div>
    </>
  )
}

export default Login