// api/auth.js
import headers from '../headers';
import storage from '../../utils/storage';

const authApi = {
  login: async (email, password) => {
    try {
      const response = await headers.post('/auth/login', {
        email,
        password,
      });
      const token = response.data.access_token;

      await storage.storeToken(token);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },

  // register: async () => {
  //   try {
  //     const response = await headers.post('/users', {
  //       email: 'renzle@gmail.com',
  //       username: 'rezle123',
  //       password: 'Test123',
  //       name: {
  //         firstname: 'John',
  //         lastname: 'Doe',
  //       },
  //       address: {
  //         city: 'Davao City',
  //         street: '123 Davao Street',
  //         number: 42,
  //         zipcode: '8000',
  //         geolocation: {
  //           lat: '7.0644',
  //           long: '125.6070',
  //         },
  //       },
  //       phone: '1-570-236-7033',
  //     });

  //     console.log(response.data);

  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // },

  logout: async () => {
    await storage.clearToken();
  },

  isAuthenticated: async () => {
    const token = await storage.getToken();

    return !!token;
  },

  getLoginUser: async () => {
    try {
      const response = await headers.get(`/auth/profile`);
      await storage.storeAuthUser(response.data);

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default authApi;
