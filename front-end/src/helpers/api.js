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

export const products = async () => {
  api.get('/products');
};

export const registerSales = async (sale) => {
  const response = await api
    .post('/sale', sale);
  return response;
};

export const registerSalesProducts = async (sale) => {
  const response = await api
    .post('/saleproducts', sale);
  return response;
};

export const getSallers = async () => {
  const response = await api
    .get('/getsellers');
  return response.data;
};
