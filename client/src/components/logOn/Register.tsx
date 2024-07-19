

const Register = () => {


const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  console.log('register');
}






  return (
    
        <> <form dir="rtl" onSubmit={handleSubmitForm}>
               <div className="fullName">
                  <label htmlFor="fullName">שם משתמש:</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName" />
                </div>
                   <div className="userEmail">
                    <label htmlFor="userEmail">מייל:</label>
                    <input
                      type="email"
                      id="userEmail"
                      name="userEmail" />
                  </div><div className="userPhone">
                    <label htmlFor="userPhone">טלפון:</label>
                    <input
                      type="phone"
                      id="userPhone"
                      name="userPhone" />
                  </div><div className="userPassword">
                    <label htmlFor="userPassword">סיסמא:</label>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword" />
                  </div><div>
                    <button
                     type="submit">הרשם</button>
                  </div>
                  </form>
               </>
   
  )
}

export default Register