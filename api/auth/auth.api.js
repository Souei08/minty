// api/auth.js
import headers from '../headers';
import storage from '../../utils/storage';

const authApi = {
  login: async (email, password) => {
    try {
      const response = await headers.post('/users/login', { email, password });
      const token = response.data.token;

      await storage.storeToken(token);

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  logout: async () => {
    await storage.clearToken();
  },

  isAuthenticated: async () => {
    const token = await storage.getToken();
    return !!token;
  },
};

export default authApi;
