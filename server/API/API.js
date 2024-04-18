import axios from 'axios';

const API_BASE_URL = 'https://locahost:5000'; // Replace with your API base URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

const API = {
  login: async (username, password) => {
    try {
      const response = await axiosInstance.post('/login', { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  register: async (email, username, contactNumber, password) => {
    try {
      const response = await axiosInstance.post('/register', { email, username, contactNumber, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add more API methods as needed
};

export default API;
