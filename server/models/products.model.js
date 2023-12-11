import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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

const Products = mongoose.model('Products', productSchema);

export default Products;
