import mongoose from 'mongoose';


const transactionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  wallet: { type: mongoose.Schema.Types.ObjectId, ref: 'Wallet' },
  type: {
    type: String,
    enum: ['deposit', 'withdraw', 'trade', 'bonus', 'refund'],
    required: true
  },
  amount: { type: Number, required: true },
  balanceBefore: Number,
  balanceAfter: Number,
  refId: String, 
  createdAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
