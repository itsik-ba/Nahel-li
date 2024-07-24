import styled from "./customerCard.module.css";

const CustomerCard = () => {




  return (
   <main className={styled.card}>
     <div className={styled.mainCard}>
      <div className={styled.name}>
        <h2>שם לקוח</h2>
      </div>
      <div className={styled.customerInfo}>
        <div className={styled.lname}>
        <p>טלפון:</p>
        </div>
        <div>
        <p>מייל:</p>
        </div>
        <div>
        <p>תאריך לידה:</p>
        </div>

        <textarea 
        className={styled.textArea}
        placeholder="הוסף הערות"
        >
        
        </textarea>
        <button>add</button>
        </div>

      <div className={styled.panel}>
        <button>עידכון לקוח</button>
        <button>שליחת הודעה</button>
        <button>נתוני לקוח</button>
        <button>דיוור</button>
        <button>מחק לקוח</button>
      </div>
     
     </div>
   </main>
   
  )
}

export default CustomerCard