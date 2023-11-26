import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model('Products', productSchema);

export default Products;
