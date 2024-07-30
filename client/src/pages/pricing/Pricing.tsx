import { useState } from "react";
import styled from "./pricing.module.css";



const Pricing = () => {
  const [trialVersion, setTrialVersion] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleButtonClick = (plan: "pro" | "starting" | "try") => {
    setTrialVersion(true);
    setSelectedPlan(plan);
  };

 
  const handleEmailInput = async () => {
    console.log("Selected Plan:", selectedPlan)
    console.log("Entered Email:", email);
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
        <input 
          type="email" 
          placeholder="הכנס את המייל שלך כאן" 
          className={styled.inputContainer}
          onChange={(event)=> setEmail(event.target.value)}
          />
        <button 
        className={styled.button}
        onClick={handleEmailInput}
        >שלח</button>
      </div> 
      )}
    </>
  )
}

export default Pricing