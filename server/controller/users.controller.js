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
  const { firstName, lastName, username, email, address, role, password } =
    req.body;

  try {
    const existingUser = await Users.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new Users({
      firstName,
      lastName,
      username,
      email,
      address,
      role,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
