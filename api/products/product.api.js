// api/auth.js
import headers from '../headers';
import storage from '../../utils/storage';

const productApi = {
  getAllProducts: async (offset, limit) => {
    try {
      const response = await headers.get(
        `/products?offset=${offset}&limit=${limit}`,
      );

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  getOneProduct: async (id) => {
    try {
      const response = await headers.get(`/products/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  searchProduct: async (searchVal) => {
    try {
      const response = await headers.get(`/products/
      ?title=${searchVal}&price_min=${searchVal}&price_max=${searchVal}`);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default productApi;
