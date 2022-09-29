const { Router } = require('express');
const SaleController = require('../controllers/sale');

const sale = Router();

sale.route('/:id').get(SaleController.getOne);
sale.route('/')
  .post(SaleController.create)
  .get(SaleController.getAll);

sale
  .route('/:id')
  .get(SaleController.getById)
  .patch(SaleController.updateSaleStatus);
module.exports = sale;