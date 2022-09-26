const models = require('../database/models');

class SaleService {
  static async create(objSale) {
    const result = await models.Sale.create(objSale);
    return result;
  }
}

module.exports = SaleService;