import mongoose from 'mongoose';

const positionSchema = new mongoose.Schema({
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

  yesShares: { type: Number, default: 0 },
  noShares: { type: Number, default: 0 },

  avgYesPrice: { type: Number, default: 0 },  
  avgNoPrice: { type: Number, default: 0 },

  lastUpdated: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Position = mongoose.model('Position', positionSchema);
export default Position;
