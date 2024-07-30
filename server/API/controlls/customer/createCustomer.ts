
import CustomerModel from "../../models/customerModel";


export const createCustomer = async (req:any, res:any) => {

   const {
    customerName, 
    customerPhone,
    customerEmail,
    customerAge,
    customerInfo
      } = req.body;

      try {
        if (!customerName || !customerPhone || !customerEmail || !customerAge || !customerInfo) {
            return res.status(400).json({ message: "כל השדות צריכים להיות מלאים" });
          }

          const newCustomer = await CustomerModel.create({
            customerName,
            customerPhone,
            customerEmail,
            customerAge,
            customerInfo
          });
         
          res.status(201).json({ message: ' לקוח/ה חדש/ה נוצר/ה', customer: newCustomer });
         
      } catch (error:any) {
        console.error(error)
        res.status(500).json({ message: 'שגיאה ביצירת לקוח/ה', error: error.message });
      }

}