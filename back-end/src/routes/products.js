const { Router } = require('express');
const ProductsController = require('../controllers/products')
// const tokenMiddleware = require('../middlewares/tokenMiddleware')

const products = Router();

products.route('/')
  .get(/*tokenMiddleware,*/ ProductsController.getAll);

module.exports = products;
