import Products from '../models/products.model.js';

export const getProducts = async (req, res) => {
  try {
    const getProducts = await Products.find();

    res.status(200).json(getProducts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createProducts = async (req, res) => {
  const productData = req.body;
  const newProduct = new Products(productData);

  try {
    await newProduct.delete();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
