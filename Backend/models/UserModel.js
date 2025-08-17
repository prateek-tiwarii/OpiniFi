import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
      email: 
      { type: String,
         required: true,
          unique: true,
           lowercase: true },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wallet',
  },
    
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;