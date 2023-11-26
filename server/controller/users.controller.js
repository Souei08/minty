import Users from '../models/users.model.js';

export const getUsers = async (req, res) => {
  try {
    const getUsers = await Users.find();

    res.status(200).json(getUsers);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const registerUser = async (req, res) => {
  const productData = req.body;
  const newProduct = new Products(productData);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
