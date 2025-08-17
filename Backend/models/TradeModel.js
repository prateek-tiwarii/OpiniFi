import mongoose from 'mongoose';

const tradeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  market: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Opinion',
    required: true
  },
  side: {
    type: String,
    enum: ['YES', 'NO'],
    required: true
  },
  type: {
    type: String,
    enum: ['buy', 'sell'],
    default: 'buy'
  },
  shares: {
    type: Number,
    required: true
  },
  pricePerShare: {
    type: Number, 
    required: true
  },
  totalAmount: {
    type: Number, 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const Trade = mongoose.model('Trade', tradeSchema);
export default Trade;
