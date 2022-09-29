const { Router } = require('express');
const SaleController = require('../controllers/sale');

const sale = Router();

sale.route('/:id').get(SaleController.getOne);
sale.route('/')
  .post(SaleController.create)
  .get(SaleController.getAll);

module.exports = sale;