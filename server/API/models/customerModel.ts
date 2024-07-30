import mongoose from "mongoose";



const CustomerSchema = new mongoose.Schema({
   
    customerName: {
       type: String,
       required: true,

    },

     customerPhone: {
       type: String,
       required: true,

    },

     customerEmail: {
       type: String,
       required: true,
       unique: true,
       trim: true,
       lowercase: true,

    },

     customerAge: {
       type: Number,
       required: true,

    },

     customerInfo: {
       type: String,
       trim: true,
   }

}, {
    timestamps: true 
  });


  const CustomerModel = mongoose.model('Customer', CustomerSchema);

  export default CustomerModel;