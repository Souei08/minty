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
  const { name, description, images, totalQuantity, owner } = req.body;

  const newProduct = new Products({
    name,
    description,
    images,
    totalQuantity,
    owner,
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;

  try {
    const foundUser = await Products.findOne({ _id: id });

    if (foundUser || foundUser.length == 0) {
      const response = await foundUser.deleteOne({ _id: id });
      res.status(202).json(response);
    } else {
      res.status(404).json({ message: `User not found.` });
    }
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

export const updateProducts = async (req, res) => {
  const itemId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedItem = await Products.findByIdAndUpdate(itemId, updatedData, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getOneProducts = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Products.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export const getOwnerProducts = async (req, res) => {
  try {
    const ownerId = req.params.ownerId;

    const getProducts = await Products.find({ owner: ownerId });

    res.status(200).json(getProducts);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
