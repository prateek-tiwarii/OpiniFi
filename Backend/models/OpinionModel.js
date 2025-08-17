import mongoose from 'mongoose';

const OpinionMarketSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  yesShares: {
    type: Number,
    default: 5000, // initial liquidity
  },
  noShares: {
    type: Number,
    default: 5000,
  },
  priceYes: {
    type: Number,
    default: 0.5,
  },
  priceNo: {
    type: Number,
    default: 0.5,
  },
  totalVolume: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["sports", "politics", "entertainment", "finance", "other"],
    default: "other",
  },
  status: {
    type: String,
    enum: ["open", "closed", "settled"],
    default: "open",
  },
  correctAnswer: {
    type: String, // "YES" | "NO"
    default: null,
  },
  closingTime: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const OpinionMarket = mongoose.model('OpinionMarket', OpinionMarketSchema);
export default OpinionMarket;
