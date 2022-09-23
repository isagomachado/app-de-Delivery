const { Router } = require('express');
const ProductsController = require('../controllers/products');
// const tokenMiddleware = require('../middlewares/tokenMiddleware')
// tokenMiddleware

const products = Router();

products.route('/')
  .get(ProductsController.getAll);

module.exports = products;
