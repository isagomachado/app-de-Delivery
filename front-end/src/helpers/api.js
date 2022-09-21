import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const loginUser = async ({ email, password }) => {
  const response = await api
    .post('/login', { email, password }).catch((error) => {
      console.log(error.response.data);
      return error.response.data;
    });
  console.log(response.data);
  return response;
};
export const products = async () => {
  api.get('/products');
};
