import { useState } from "react"
import styles from "./login.module.css"
import Register from "./Register";


const Login = () => {
    
  const [loginOrRegister, setLoginOrRegister] = useState(true);

  const isLogin = () =>{
     setLoginOrRegister(true)
  }

  const isRegister = () => {
       setLoginOrRegister(false)
  }


  return (
    <>
    <div className={styles.mainForm}>
      <div className="swap">  
      <button className={styles.btnlogin} onClick={isLogin}>Login</button>
      <button className={styles.btnregister} onClick={isRegister}>Register</button>
     
     <div className={styles.card}>
   
    <form dir="rtl">

      {loginOrRegister ? 
          
          <><div className="userEmail">
                  <label htmlFor="userEmail">מייל:</label>
                  <input
                    type="email"
                    id="userEmail"
                    name="userEmail" />
                </div><div className="userPassword">
                    <label htmlFor="userPassword">סיסמא:</label>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword" />
                  </div>
                  <button type="submit">התחבר</button>
                  </>
     
        :
           <><Register /></>
          }

    </form>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login