const { Router } = require('express');
const SaleController = require('../controllers/sale');

const sale = Router();

sale.route('/sale').post(SaleController.create);

module.exports = sale;