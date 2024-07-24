

const NewPassword = () => {


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
               
                   <div>
                    <button
                     type="submit">הרשם</button>
                  </div>
                  </form>
               </>
   
  )
}

export default NewPassword