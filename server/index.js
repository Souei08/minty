import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/products.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

const CONNECTION_URL =
  'mongodb+srv://J08:j08123@cluster0.j4picfp.mongodb.net/?retryWrites=true&w=majority';
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
