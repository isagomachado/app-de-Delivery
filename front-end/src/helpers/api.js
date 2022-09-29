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
    .post('/register', { email, password, name }).catch((error) => error.response.data);
  return response;
};

export const getAllproducts = async () => {
  const response = await api.get('/customer/products')
    .catch((error) => error.response.data);
  return response.data;
};

export const registerSales = async (sale, token) => {
  const response = await api
    .post('/sale', sale, {
      headers: {
        Authorization: token,
      },
    }).catch((error) => error.response);
  return response.data;
};

export const getSallers = async () => {
  const response = await api
    .get('/getsellers');
  return response.data;
};

export const getSalesById = async (id) => {
  const response = await api.get(`/sale/${id}`).catch((error) => error.response);
  return response.data;
};

export const getAllSale = async () => {
  const response = await api
    .get('/sale');
  return response.data;
};
