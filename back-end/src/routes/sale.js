const { Router } = require('express');
const SaleController = require('../controllers/sale');

const sale = Router();

sale
  .route('/')
    .post(SaleController.create)
    .get(SaleController.getAll);

sale
  .route('/:id')
  .get(SaleController.getById);
module.exports = sale;