const SaleService = require('../services/sale');
const Validate = require('../services/validations');

class SaleController {
  static async create(req, res) {
    const sale = await Validate.saleBody(req.body);
    const saleId = await SaleService.create(sale.objSale);
    return res.status(201).json({ saleId });
  }
}

module.exports = SaleController;