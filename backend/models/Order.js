import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  meals: [
    {
      mealId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meal' },
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);