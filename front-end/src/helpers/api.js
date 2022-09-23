import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const loginUser = async ({ email, password }) => {
  const response = await api
    .post('/login', { email, password }).catch((error) => error.response.data);
  return response;
};

export const registerUser = async ({ email, password, name }) => {
  const response = await api
    .post('/register', { email, password, name });
  return response;
};

export const getAllproducts = async () => {
  const response = await api.get('/customer/products')
    .catch((error) => error.response.data);
  return response.data;
};
