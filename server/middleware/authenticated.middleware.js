import jwt from 'jsonwebtoken';
import Users from '../models/users.model.js';

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
};

const checkSellerRole = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized. Token not provided.' });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    const user = await Users.findOne({ _id: userId });

    if (user.role === 'seller') {
      next();
    } else {
      res
        .status(403)
        .json({ error: 'Access forbidden. User is not a seller.' });
    }
  } catch (error) {
    // Token verification failed
    res.status(401).json({ error: 'Unauthorized. Invalid token.' });
  }
};

export default {
  verifyToken,
  checkSellerRole,
};
