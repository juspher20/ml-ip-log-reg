// API.js
import axios from 'axios';

const API_URL = 'http://localhost:8081/login'; // Replace with your API URL

export const LoginForm = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
// API.js (continued)
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error.response.data.message || 'An error occurred';
  }
};

// Add more API methods as needed
