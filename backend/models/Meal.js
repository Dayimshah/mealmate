import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  imageUrl: String // 🖼 placeholder: replace with actual URL later
});

export default mongoose.model('Meal', mealSchema);