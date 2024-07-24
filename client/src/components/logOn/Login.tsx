import styles from "./login.module.css"






const Login:React.FC = ()  => {
  

   
  const handleLogin =  () => {
    try {
    
      
    } catch (error) {
      console.log(error);
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
     
       

   
      </div>
      </div>
    </div>
    </>
  )
}

export default Login