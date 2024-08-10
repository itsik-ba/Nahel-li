import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  phone: {
    type: String,
    required: true,
  },

  oneTimePassword: {
    type: String,
   
  },

  encryptedEmail: {
    type: String,
   
  },

  newPassword: {
    type: String,
    default: "",
  },

  passwordChanged: {
    type: Boolean,
    default: false, 
  },

  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
  
  selectedPlan: {
    type: String,
    enum: ['pro', 'starting', 'try'],
    required: true
  }
}, {
  timestamps: true 
});

const UserModel = mongoose.model("Salon_Li", UserSchema);

export default UserModel;
