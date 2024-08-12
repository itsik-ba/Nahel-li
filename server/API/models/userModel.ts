import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  phone: string;
  newPassword: string;
  passwordChanged: boolean;
  selectedPlan: "pro" | "starting" | "try";
  oneTimePassword?: string;
  customer?: mongoose.Types.ObjectId;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}



const UserSchema = new mongoose.Schema<IUser>({

  email: {type: String, required: true, unique: true, trim: true, lowercase: true,
  },
  phone: {type: String, required: true,},
  oneTimePassword: {type: String},
  newPassword: {type: String, default: ""},
  resetPasswordToken: {type: String},
  resetPasswordExpires: { type: Date },
  passwordChanged: {type: Boolean, default: false},
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

const UserModel = mongoose.model<IUser>("Salon_Li", UserSchema);

export default UserModel;
