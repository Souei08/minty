import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: String,
      required: true,
    },
    totalQuantity: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Products = mongoose.model('Products', orderSchema);

export default Products;
