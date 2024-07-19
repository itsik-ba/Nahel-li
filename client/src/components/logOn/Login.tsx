import { useState } from "react"
import styles from "./login.module.css"
import Register from "./Register";
import { useNavigate } from "react-router-dom";


interface LoginProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}



const Login:React.FC<LoginProps> = ({ setIsLogin })  => {
   const [loginOrRegister, setLoginOrRegister] = useState(true);

   const navigate = useNavigate()

  const handleLogin =  () => {
    try {
      setIsLogin(true)
      navigate("../mainApp")
      
    } catch (error) {
      console.log(error);
    }
  }


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
   
   

      {loginOrRegister ? 
          <> <form dir="rtl" onSubmit={handleLogin}>
               <div className="userEmail">
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
                  </form>
                  </>
     
        :
           <><Register /></>
          }

   
      </div>
      </div>
    </div>
    </>
  )
}

export default Login