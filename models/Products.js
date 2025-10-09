import mongoose from 'mongoose';

const ProductsSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
});

export default mongoose.models.Products ||
  mongoose.model('Products', ProductsSchema);
