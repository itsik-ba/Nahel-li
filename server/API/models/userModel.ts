import mongoose from 'mongoose';




const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  oneTimePassword: {
    type: String,
    required: true, 
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
  }

}, {
  timestamps: true 
});

const UserModel = mongoose.model("Nahel-Li", UserSchema);

export default UserModel;
