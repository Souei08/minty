import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import productRoutes from './routes/products.js';
import userRoutes from './routes/users.js';
import authMiddleware from './middleware/authenticated.middleware.js';

dotenv.config();

const mongoAtlasURI = process.env.MONGODB_ATLAS;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/products', authMiddleware.verifyToken, productRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL = mongoAtlasURI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)),
  )
  .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
