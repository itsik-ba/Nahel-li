import { useState, FormEvent} from "react";
import styled from "./pricing.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Pricing = () => {
  const [trialVersion, setTrialVersion] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate()


  const handleButtonClick = (plan: "pro" | "starting" | "try") => {
    setTrialVersion(true);
    setSelectedPlan(plan);
  };

  const handleSubmitEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email.includes("@")) {
      setMessage("אנא הכנס מייל תקין.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:3000/user/UserSendEmail", {
        email,
        selectedPlan,
      });
      
      console.log(response);
      setMessage("המייל נשלח בהצלחה!");
      setEmail("");
      setTrialVersion(false);
      navigate("/newPassword")

    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error sending email:", error.response?.data);
        setMessage(error.response?.data?.error || "אירעה שגיאה בשליחת המייל. אנא נסה שוב.");
      } else {
        console.error("Unexpected error:", error);
        setMessage("שגיאה בלתי צפויה אירעה.");
      }

    } finally {
      setLoading(false);
    }
 }
 


  return (
    <>
    <div className={styled.mainTable}>
      <table>
        <thead>
          <tr>
            <th>מנוי מקצועי</th>
            <th>מנוי מתחיל</th>
            <th>גירסת ניסיון</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>גירסה חינמית</td>
          </tr>
          <tr>
            <td>בקרוב</td>
            <td>בקרוב</td>
            <td>תמיכה מוגבלת</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>אין עידכונים</td>
          </tr>
          <tr className={styled.buttonRow}>
            <td>
              <button disabled name="pro" className={styled.button} onClick={() => handleButtonClick("pro")}>מקצועי</button></td>
            <td>
              <button disabled name="starting" className={styled.button} onClick={() => handleButtonClick("starting")}>מתחיל</button></td>
            <td>
              <button name="try" className={styled.button} onClick={() => handleButtonClick("try")}>נסיון</button></td>
          </tr>
        </tbody>
      </table>
      <div>
        </div>
      </div>
      {trialVersion && ( <div className={styled.inputContainer}>
        <form onSubmit={handleSubmitEmail}>
        <input 
          type="email" 
          value={email} 
          placeholder="הכנס את המייל שלך כאן" 
          className={styled.inputContainer}
          onChange={(event)=> setEmail(event.target.value)}
          />
        <button 
        className={styled.button}
        type="submit"
        disabled={loading}
        >  {loading ? "שולח..." : "שלח"}</button>
        </form>
      </div> 
      )}
      {message && <div className={styled.message}>{message}</div>}
    </>
  )
}

export default Pricing