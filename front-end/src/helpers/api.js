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

export const adminRegisterUser = async (data, token) => {
  const response = await api
    .post('/admin/manage', data, {
      headers: {
        Authorization: token,
      },
    });
  console.log(response);
  return response;
};

export const registerSales = async (sale, token) => {
  const response = await api
    .post('/sale', sale, {
      headers: {
        Authorization: token,
      } });
  return response.data;
};

export const getSallers = async () => {
  const response = await api
    .get('/getsellers');
  return response.data;
};

export const getAllSale = async () => {
  const response = await api
    .get('/sale');
  return response.data;
};

export const getSaleById = async (id) => {
  const response = await api
    .get(`/sale/${id}`);
  return response.data;
};

export const updateSaleStatus = async (status, id) => {
  // console.log(status);
  const response = await api
    .patch(`/sale/${id}`, status);
  return response.data;
};
